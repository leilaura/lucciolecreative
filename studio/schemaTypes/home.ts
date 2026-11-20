import { defineArrayMember, defineField, defineType } from 'sanity';
import { accentTitle, imageWithAlt } from './fields';

const text = (name: string, title: string, rows = 3) => defineField({ name, title, type: 'text', rows });
const str = (name: string, title: string) => defineField({ name, title, type: 'string' });

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    { name: 'apertura', title: 'Apertura', default: true },
    { name: 'bisogno', title: 'Il bisogno' },
    { name: 'approccio', title: 'Approccio' },
    { name: 'sezioni', title: 'Altre sezioni' },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Apertura',
      type: 'object',
      group: 'apertura',
      fields: [
        defineField({ name: 'title', title: 'Titolo', type: 'string', validation: (r) => r.required(), description: 'Metti tra *asterischi* le parole in corsivo. Il punto finale diventa la lucina gialla.' }),
        text('lead', 'Testo'),
        str('ctaPrimary', 'Bottone principale'),
        str('ctaSecondary', 'Bottone secondario'),
      ],
    }),

    defineField({
      name: 'need',
      title: 'Il bisogno',
      type: 'object',
      group: 'bisogno',
      fields: [
        str('eyebrow', 'Etichetta'),
        accentTitle('title', 'Titolo'),
        text('text', 'Testo'),
        imageWithAlt('image', 'Foto'),
        defineField({
          name: 'quotes',
          title: 'Frasi dei clienti',
          type: 'array',
          validation: (r) => r.max(4),
          of: [
            defineArrayMember({
              type: 'object',
              fields: [text('quote', 'Frase', 2), str('label', 'Titoletto'), text('text', 'Spiegazione', 2)],
              preview: { select: { title: 'quote', subtitle: 'label' } },
            }),
          ],
        }),
        accentTitle('answerTitle', 'Titolo della risposta'),
        text('answerText', 'Testo della risposta'),
      ],
    }),

    defineField({
      name: 'approach',
      title: 'Approccio',
      type: 'object',
      group: 'approccio',
      fields: [
        str('eyebrow', 'Etichetta'),
        accentTitle('title', 'Titolo'),
        text('text', 'Testo'),
        imageWithAlt('image', 'Foto'),
        defineField({
          name: 'pillars',
          title: 'Luce e Direzione',
          type: 'array',
          validation: (r) => r.max(2),
          of: [
            defineArrayMember({
              type: 'object',
              fields: [str('big', 'Parola grande'), str('title', 'Titolo'), text('text', 'Testo')],
              preview: { select: { title: 'big', subtitle: 'title' } },
            }),
          ],
        }),
        defineField({
          name: 'pairs',
          title: 'Ci racconti… → cerchiamo…',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [str('from', 'Ci racconti…'), str('to', '…cerchiamo')],
              preview: { select: { title: 'from', subtitle: 'to' } },
            }),
          ],
        }),
        accentTitle('beliefsQuote', 'Frase "In cosa crediamo"'),
        defineField({
          name: 'beliefs',
          title: 'Principi',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [str('title', 'Titolo'), text('text', 'Testo', 2)],
              preview: { select: { title: 'title' } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'services',
      title: 'Introduzione Servizi',
      type: 'object',
      group: 'sezioni',
      description: 'I servizi veri e propri si gestiscono nella sezione "Servizi".',
      fields: [accentTitle('title', 'Titolo'), text('text', 'Testo')],
    }),
    defineField({
      name: 'steps',
      title: 'Come lavoriamo',
      type: 'object',
      group: 'sezioni',
      fields: [
        accentTitle('title', 'Titolo'),
        text('text', 'Testo'),
        defineField({
          name: 'items',
          title: 'Passi',
          type: 'array',
          validation: (r) => r.max(4),
          of: [
            defineArrayMember({
              type: 'object',
              fields: [str('label', 'Etichetta (es. Passo 1 · gratuito)'), str('title', 'Titolo'), text('text', 'Testo', 2)],
              preview: { select: { title: 'title', subtitle: 'label' } },
            }),
          ],
        }),
        str('cta', 'Bottone'),
      ],
    }),
    defineField({
      name: 'projects',
      title: 'Introduzione Progetti',
      type: 'object',
      group: 'sezioni',
      description: 'La sezione compare solo quando c’è almeno un progetto pubblicato.',
      fields: [accentTitle('title', 'Titolo')],
    }),
    defineField({
      name: 'team',
      title: 'Introduzione Team',
      type: 'object',
      group: 'sezioni',
      fields: [accentTitle('title', 'Titolo'), text('text', 'Testo'), accentTitle('together', 'Frase finale (riquadro blu)')],
    }),
    defineField({
      name: 'faq',
      title: 'Introduzione FAQ',
      type: 'object',
      group: 'sezioni',
      fields: [accentTitle('title', 'Titolo')],
    }),
    defineField({
      name: 'contact',
      title: 'Contatti',
      type: 'object',
      group: 'sezioni',
      fields: [accentTitle('title', 'Titolo'), text('text', 'Testo', 2), str('writeTitle', 'Titolo "Preferisci scrivere?"'), text('writeText', 'Testo "Preferisci scrivere?"')],
    }),
    defineField({
      name: 'night',
      title: 'Chiusura notturna',
      type: 'object',
      group: 'sezioni',
      fields: [accentTitle('title', 'Titolo'), text('text', 'Testo', 2), str('cta', 'Bottone')],
    }),
  ],
  preview: { prepare: () => ({ title: 'Home' }) },
});
