// Forma dei contenuti: uguale agli schemi in studio/schemaTypes.
// Nei testi, le parole tra *asterischi* diventano il corsivo IvyBodoni.

export interface ImageRef {
  /** URL già pronto (fallback locale) oppure generato da Sanity */
  url: string;
  alt: string;
}

export interface SiteSettings {
  name: string;
  payoff: string;
  email: string;
  whatsapp?: string;
  instagram: string;
  bookingUrl?: string;
  legalName?: string;
  vatNumber?: string;
}

export interface Home {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sectors: string[];
  need: {
    eyebrow: string;
    title: string;
    text: string;
    image: ImageRef;
    quotes: { quote: string; label: string; text: string }[];
    answerTitle: string;
    answerText: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    text: string;
    image: ImageRef;
    pillars: { big: string; title: string; text: string }[];
    pairs: { from: string; to: string }[];
    beliefsQuote: string;
    beliefs: { title: string; text: string }[];
  };
  services: { title: string; text: string };
  steps: {
    title: string;
    text: string;
    items: { label: string; title: string; text: string }[];
    cta: string;
  };
  projects: { title: string };
  team: { title: string; text: string; together: string };
  faq: { title: string };
  contact: { title: string; text: string; writeTitle: string; writeText: string };
  night: { title: string; text: string; cta: string };
}

export interface Service {
  id: string;
  title: string;
  intro: string;
  items: string[];
  forWho: string;
  image?: ImageRef;
}

export interface Project {
  id: string;
  client: string;
  sector: string;
  year: string;
  services: string[];
  featured: boolean;
  summary: string;
  cover?: ImageRef;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  quote?: string;
  photo?: ImageRef;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SiteContent {
  settings: SiteSettings;
  home: Home;
  services: Service[];
  projects: Project[];
  team: TeamMember[];
  faqs: Faq[];
}
