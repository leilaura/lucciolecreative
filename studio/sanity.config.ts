import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

// Documenti unici: c'è una sola Home e una sola pagina Impostazioni.
const singletons = new Set(['home', 'siteSettings']);

export default defineConfig({
  name: 'lucciolecreative',
  title: 'Lucciole Creative',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '3hz4qhjl',
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenuti')
          .items([
            S.listItem().title('Home').id('home').child(S.document().schemaType('home').documentId('home')),
            S.listItem().title('Impostazioni').id('siteSettings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('service').title('Servizi'),
            S.documentTypeListItem('project').title('Progetti'),
            S.documentTypeListItem('teamMember').title('Team'),
            S.documentTypeListItem('faq').title('Domande frequenti'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },

  document: {
    actions: (actions, { schemaType }) =>
      singletons.has(schemaType)
        ? actions.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : actions,
  },
});
