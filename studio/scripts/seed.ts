// Carica in Sanity i testi attuali del sito (src/data/fallback.ts) e le foto (public/images).
// Uso, dalla cartella studio/:   npm run seed
// Si può rilanciare: i documenti hanno ID fissi e vengono sovrascritti, non duplicati.
// ATTENZIONE: rilanciarlo dopo che Federica ha modificato i testi in Sanity li riporta alla versione di partenza.
import { createReadStream } from 'node:fs';
import { basename, resolve } from 'node:path';
import { getCliClient } from 'sanity/cli';
import { fallback } from '../../src/data/fallback';
import type { ImageRef } from '../../src/lib/types';

const client = getCliClient({ apiVersion: '2026-11-01' });
const publicDir = resolve(process.cwd(), '../public');
const uploaded = new Map<string, string>();

/** Carica un'immagine locale (una sola volta) e restituisce il campo immagine di Sanity */
async function image(ref?: ImageRef) {
  if (!ref) return undefined;
  let assetId = uploaded.get(ref.url);
  if (!assetId) {
    const file = resolve(publicDir, ref.url.replace(/^\//, ''));
    const asset = await client.assets.upload('image', createReadStream(file), { filename: basename(file) });
    assetId = asset._id;
    uploaded.set(ref.url, assetId);
    console.log(`  immagine caricata: ${basename(file)}`);
  }
  return { _type: 'image', asset: { _type: 'reference', _ref: assetId }, alt: ref.alt };
}

/** Aggiunge _key a ogni elemento di un array (Sanity lo richiede) */
function keyed<T extends object>(items: T[], prefix: string) {
  return items.map((item, i) => ({ _key: `${prefix}${i}`, ...item }));
}

async function run() {
  const { settings, home, services, team, faqs } = fallback;
  const tx = client.transaction();

  console.log('Impostazioni e Home…');
  // I campi vuoti (WhatsApp, Cal.com, P.IVA…) restano da compilare nello Studio
  const filled = Object.fromEntries(Object.entries(settings).filter(([, v]) => v));
  tx.createOrReplace({ _id: 'siteSettings', _type: 'siteSettings', ...filled });
  tx.createOrReplace({
    _id: 'home',
    _type: 'home',
    hero: home.hero,
    need: {
      ...home.need,
      image: await image(home.need.image),
      quotes: keyed(home.need.quotes, 'q'),
    },
    approach: {
      ...home.approach,
      image: await image(home.approach.image),
      pillars: keyed(home.approach.pillars, 'p'),
      pairs: keyed(home.approach.pairs, 'c'),
      beliefs: keyed(home.approach.beliefs, 'b'),
    },
    services: home.services,
    steps: { ...home.steps, items: keyed(home.steps.items, 's') },
    projects: home.projects,
    team: home.team,
    faq: home.faq,
    contact: home.contact,
    night: home.night,
  });

  console.log('Servizi…');
  for (const [i, s] of services.entries()) {
    tx.createOrReplace({
      _id: `service-${s.id}`,
      _type: 'service',
      title: s.title,
      slug: { _type: 'slug', current: s.id },
      intro: s.intro,
      items: s.items,
      forWho: s.forWho,
      image: await image(s.image),
      order: (i + 1) * 10,
    });
  }

  console.log('Team…');
  team.forEach((m, i) => {
    const id = m.name.toLowerCase().split(' ')[0];
    tx.createOrReplace({ _id: `team-${id}`, _type: 'teamMember', ...m, order: (i + 1) * 10 });
  });

  console.log('Domande frequenti…');
  faqs.forEach((f, i) => tx.createOrReplace({ _id: `faq-${i + 1}`, _type: 'faq', ...f, order: (i + 1) * 10 }));

  await tx.commit();
  console.log('Fatto. Apri lo Studio e controlla i contenuti.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
