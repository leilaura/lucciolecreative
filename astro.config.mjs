// @ts-check
import { defineConfig } from 'astro/config';

// Sito statico: viene ricostruito a ogni push su main e a ogni pubblicazione su Sanity.
export default defineConfig({
  site: 'https://www.lucciolecreative.it',
  output: 'static',
});
