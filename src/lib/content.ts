// Carica i contenuti da Sanity al momento della build.
// Se Sanity non è configurato o un documento manca, usa i testi di riserva.
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { fallback } from '../data/fallback';
import type { ImageRef, SiteContent } from './types';

// Il Project ID non è segreto: finisce comunque nel sito pubblicato.
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '3hz4qhjl';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2026-11-01', useCdn: false })
  : null;

const builder = client ? createImageUrlBuilder(client) : null;

type SanityImage = { asset?: { _ref: string }; alt?: string } | null | undefined;

function img(source: SanityImage, width = 900): ImageRef | undefined {
  if (!builder || !source?.asset) return undefined;
  return {
    url: builder.image(source).width(width).auto('format').quality(80).url(),
    alt: source.alt ?? '',
  };
}

const QUERY = `{
  "settings": *[_id == "siteSettings"][0],
  "home": *[_id == "home"][0],
  "services": *[_type == "service"] | order(order asc),
  "projects": *[_type == "project"] | order(featured desc, year desc){
    ..., "services": services[]->title
  },
  "team": *[_type == "teamMember"] | order(order asc),
  "faqs": *[_type == "faq"] | order(order asc)
}`;

let cache: Promise<SiteContent> | undefined;

export function getContent(): Promise<SiteContent> {
  cache ??= load();
  return cache;
}

async function load(): Promise<SiteContent> {
  if (!client) return fallback;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let d: any;
  try {
    d = await client.fetch(QUERY);
  } catch (err) {
    console.warn('[sanity] contenuti non raggiungibili, uso i testi di riserva:', (err as Error).message);
    return fallback;
  }
  const home = d.home
    ? {
        ...fallback.home,
        ...d.home,
        need: {
          ...fallback.home.need,
          ...d.home.need,
          image: img(d.home.need?.image) ?? fallback.home.need.image,
        },
        approach: {
          ...fallback.home.approach,
          ...d.home.approach,
          image: img(d.home.approach?.image) ?? fallback.home.approach.image,
        },
      }
    : fallback.home;

  return {
    settings: { ...fallback.settings, ...(d.settings ?? {}) },
    home,
    services: d.services?.length
      ? d.services.map((s: any) => ({
          id: s.slug?.current ?? s._id,
          title: s.title,
          intro: s.intro ?? '',
          items: s.items ?? [],
          forWho: s.forWho ?? '',
          image: img(s.image, 800),
        }))
      : fallback.services,
    projects: (d.projects ?? []).map((p: any) => ({
      id: p.slug?.current ?? p._id,
      client: p.client,
      sector: p.sector ?? '',
      year: p.year ? String(p.year) : '',
      services: p.services ?? [],
      featured: Boolean(p.featured),
      summary: p.summary ?? '',
      cover: img(p.cover, 1200),
    })),
    team: d.team?.length
      ? d.team.map((m: any) => ({ ...m, skills: m.skills ?? [], photo: img(m.photo, 500) }))
      : fallback.team,
    faqs: d.faqs?.length ? d.faqs : fallback.faqs,
  };
}
