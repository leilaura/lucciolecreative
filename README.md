# Lucciole Creative — lucciolecreative.it

Sito dello studio creativo Lucciole Creative ([@lucciolecreative](https://www.instagram.com/lucciolecreative)).

- **`main`**: pagina "in arrivo" online su GitHub Pages (www.lucciolecreative.it, DNS su Aruba).
- **`website`**: il sito vero, in lavorazione: Astro + Sanity.

## Il sito (Astro)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

- I contenuti arrivano da Sanity (progetto `3hz4qhjl`, dataset `production`) al momento della build.
  Se Sanity non risponde o un documento manca, il sito usa i testi di riserva in `src/data/fallback.ts`.
- Nei testi, le parole tra `*asterischi*` diventano il corsivo IvyBodoni.
- Font: IvyBodoni, IvyBodoni Condensed e Acumin Pro da Adobe Fonts (web project "Le Lucciole");
  Montserrat (SIL OFL, licenza in `public/fonts/`).
- Le lucciole (canvas) e il logo animato rispettano `prefers-reduced-motion`.

## Lo Studio (Sanity)

```bash
cd studio
npm install
npm run dev      # http://localhost:3333
npm run seed     # carica in Sanity i testi di src/data/fallback.ts e le foto (solo la prima volta!)
npm run deploy   # pubblica lo Studio su https://lucciolecreative.sanity.studio
```

## Pubblicazione

GitHub Actions (`.github/workflows/deploy.yml`) costruisce e pubblica su GitHub Pages a ogni push su `main`
e quando arriva un webhook di Sanity (`repository_dispatch` di tipo `sanity-publish`).
Prima di unire `website` in `main`: Settings → Pages → Source = **GitHub Actions**.
