import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'DA_COMPILARE',
    dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
  },
  // Lo Studio sarà online su https://lucciolecreative.sanity.studio
  studioHost: 'lucciolecreative',
});
