import { defineField } from 'sanity';

// Aiuti condivisi tra gli schemi.

export const ACCENT_HELP = 'Metti tra *asterischi* le parole da scrivere in corsivo (es. Non inventiamo chi sei. Lo *illuminiamo.*)';

/** Titolo con parole in corsivo tra asterischi */
export const accentTitle = (name: string, title: string) =>
  defineField({ name, title, type: 'string', description: ACCENT_HELP, validation: (r) => r.required() });

/** Immagine con testo alternativo obbligatorio (accessibilità) */
export const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    fields: [
      defineField({
        name: 'alt',
        title: 'Descrizione per chi non vede l’immagine',
        type: 'string',
        validation: (r) => r.required(),
      }),
    ],
  });

export const orderField = defineField({
  name: 'order',
  title: 'Ordine',
  type: 'number',
  description: 'Numero più basso = mostrato prima',
  initialValue: 10,
});
