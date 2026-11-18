import { defineArrayMember, defineField, defineType } from 'sanity';
import { imageWithAlt, orderField } from './fields';

export const service = defineType({
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Identificativo', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'intro', title: 'Introduzione', type: 'text', rows: 2 }),
    defineField({ name: 'items', title: 'Cosa comprende', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
    defineField({ name: 'forWho', title: 'Per chi è', type: 'string', description: 'Completa la frase "Per chi è: …"' }),
    imageWithAlt('image', 'Foto'),
    orderField,
  ],
  orderings: [{ title: 'Ordine', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
});

export const project = defineType({
  name: 'project',
  title: 'Progetto',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Cliente', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Identificativo', type: 'slug', options: { source: 'client' }, validation: (r) => r.required() }),
    defineField({ name: 'sector', title: 'Settore', type: 'string' }),
    defineField({ name: 'year', title: 'Anno', type: 'number' }),
    defineField({
      name: 'services',
      title: 'Servizi',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'service' }] })],
    }),
    defineField({ name: 'featured', title: 'In evidenza', type: 'boolean', initialValue: false }),
    defineField({ name: 'summary', title: 'Riassunto', type: 'text', rows: 3, description: 'Da dove partiva, cosa abbiamo fatto, risultato.' }),
    imageWithAlt('cover', 'Copertina'),
    defineField({ name: 'gallery', title: 'Galleria', type: 'array', of: [imageWithAlt('image', 'Immagine')] }),
    defineField({ name: 'credits', title: 'Crediti', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'client', subtitle: 'sector', media: 'cover' } },
});

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Persona',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Ruolo', type: 'string' }),
    defineField({ name: 'bio', title: 'Presentazione', type: 'text', rows: 4 }),
    defineField({ name: 'skills', title: 'Competenze', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
    defineField({ name: 'quote', title: 'Frase personale', type: 'text', rows: 2 }),
    imageWithAlt('photo', 'Foto'),
    orderField,
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
});

export const faq = defineType({
  name: 'faq',
  title: 'Domanda',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Domanda', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', title: 'Risposta', type: 'text', rows: 3, validation: (r) => r.required() }),
    orderField,
  ],
  preview: { select: { title: 'question' } },
});
