// Testi di riserva, presi dall'artifact di Federica.
// Il sito li usa finché Sanity non è collegato (o se un documento manca).
// Stessa forma dei documenti Sanity: vedi src/lib/types.ts e studio/schemaTypes.
import type { SiteContent } from '../lib/types';

export const fallback: SiteContent = {
  settings: {
    name: 'Lucciole Creative',
    payoff: 'Piccole, ma ci vediamo da lontano.',
    email: 'ciao@lucciolecreative.it',
    whatsapp: '',
    instagram: 'lucciolecreative',
    bookingUrl: '',
    legalName: '',
    vatNumber: '',
  },

  home: {
    hero: {
      eyebrow: 'Federica, Jessica e Laura · comunicazione su misura',
      title: 'Tu sai quanto vale quello che fai. Noi lo facciamo vedere *anche da lontano*.',
      lead:
        'Siamo un piccolo team: troviamo parole, immagini e siti per raccontare ciò che rende unico il tuo lavoro. Per le PMI e per chi non ha ancora nessuno che segua la sua comunicazione.',
      ctaPrimary: 'Raccontaci il tuo progetto',
      ctaSecondary: 'Come lavoriamo',
    },

    need: {
      eyebrow: 'Il bisogno',
      title: "Quando il valore c'è, *ma non si vede.*",
      text: 'Il lavoro è solido. Il problema è che, da fuori, non si capisce. Ti riconosci in una di queste frasi?',
      image: {
        url: '/images/bisogno-occhio.webp',
        alt: 'Un occhio che spia da una fessura stretta in una parete color mattone',
      },
      quotes: [
        {
          quote: 'Non abbiamo nessuno che segua la comunicazione. Da dove si parte?',
          label: 'Nessun riferimento.',
          text: 'Si fa quello che si può, quando c’è tempo. E il tempo non c’è mai.',
        },
        {
          quote: 'Ogni volta dobbiamo ricominciare da capo e rispiegare tutto.',
          label: 'Fornitori che cambiano.',
          text: 'Un grafico qui, un’agenzia là, e nessuno che tenga il filo.',
        },
        {
          quote: 'Siamo cambiati, ma nella comunicazione sembriamo ancora quelli di prima.',
          label: 'Un’immagine rimasta indietro.',
          text: 'L’azienda è cresciuta, logo e sito raccontano un’altra storia.',
        },
        {
          quote: 'Se devo sempre dare io le idee, tanto vale che lo faccia da solo.',
          label: 'Una delega che non alleggerisce.',
          text: 'Hai affidato la comunicazione, ma pensi ancora a tutto.',
        },
      ],
      answerTitle: 'Non serve comunicare di più. Serve una *direzione.*',
      answerText:
        'Puoi avere un sito, i social, un grafico e un’agenzia, e avere comunque una comunicazione a pezzi. Manca qualcuno che tenga insieme identità, messaggi, immagine e contenuti. Quel qualcuno possiamo essere noi.',
    },

    approach: {
      eyebrow: 'Il nostro approccio',
      title: 'Non inventiamo chi sei. Lo *illuminiamo.*',
      text: 'Prima di disegnare o scrivere, entriamo nel tuo lavoro. Cerchiamo la storia dentro le cose: così la comunicazione sembra naturale, perché resta tua.',
      image: {
        url: '/images/approccio-serratura.webp',
        alt: 'Un volto disegnato a puntini visto attraverso il buco di una serratura',
      },
      pillars: [
        {
          big: 'Luce',
          title: 'Mettiamo a fuoco ciò che vale.',
          text: 'Ascoltiamo, facciamo domande, guardiamo il tuo lavoro da fuori. Cerchiamo quello che ti rende interessante e diverso, anche se tu lo dai per scontato.',
        },
        {
          big: 'Direzione',
          title: 'Lo trasformiamo in comunicazione coerente.',
          text: 'Posizionamento, messaggi, immagine, contenuti e sito parlano la stessa lingua. E restano coerenti nel tempo, anche quando cambiano i canali.',
        },
      ],
      pairs: [
        { from: 'Ci racconti un servizio', to: 'cerchiamo il significato' },
        { from: 'Ci racconti come lavori', to: 'cerchiamo ciò che ti differenzia' },
        { from: 'Ci presenti un prodotto', to: 'cerchiamo l’esperienza che rappresenta' },
        { from: 'Ci dai dieci informazioni', to: 'cerchiamo quella che vale la pena raccontare' },
      ],
      beliefsQuote: 'Il cliente non deve riconoscere la nostra comunicazione. *Deve riconoscere se stesso.*',
      beliefs: [
        {
          title: 'Prima il business, poi i canali',
          text: 'Prima vogliamo capire chi sei, cosa fai, perché qualcuno dovrebbe sceglierti e dove vuoi andare. Logo, sito e social vengono dopo.',
        },
        {
          title: 'Su misura, mai fotocopia',
          text: 'Se tutti usano gli stessi codici, nessuno è riconoscibile. Ogni progetto nasce dall’identità reale di chi abbiamo davanti.',
        },
        {
          title: 'Tutto in un posto solo',
          text: 'Strategia, grafica e sito parlano la stessa lingua perché nascono allo stesso tavolo.',
        },
        {
          title: 'Una collaborazione con memoria',
          text: 'Il lavoro cresce nel tempo: non serve ripartire ogni volta da zero e rispiegare tutto.',
        },
        {
          title: 'Chiarezza prima di tutto',
          text: 'Sai cosa facciamo, quanto costa e quando è pronto. Il sito è tuo, i file sono tuoi.',
        },
      ],
    },

    services: {
      title: 'Di cosa *ci occupiamo.*',
      text: 'Puoi partire da un servizio e aggiungerne altri quando vuoi. Tu continui a fare il tuo lavoro, senza perdere il controllo sulla tua voce.',
    },

    steps: {
      title: 'Un percorso costruito *intorno a te.*',
      text: 'Niente sorprese: sai sempre cosa facciamo, quanto costa e quando è pronto.',
      items: [
        {
          label: 'Passo 1 · gratuito',
          title: 'Ci conosciamo',
          text: 'Una call di 30 minuti per capire la tua attività e cosa ti serve davvero.',
        },
        {
          label: 'Passo 2 · entro [X] giorni',
          title: 'Facciamo luce',
          text: 'Ascoltiamo, facciamo domande e ti mandiamo una proposta chiara: cosa vale la pena dire, cosa facciamo, quanto costa.',
        },
        {
          label: 'Passo 3 · [X] revisioni',
          title: 'Lavoriamo insieme',
          text: 'Strategia, grafica, siti e contenuti vanno nella stessa direzione. Un unico referente ti aggiorna a ogni passaggio.',
        },
        {
          label: 'Passo 4 · dopo',
          title: 'Consegniamo, e restiamo',
          text: 'Ti lasciamo autonomo con strumenti chiari, oppure continuiamo a seguirti mese dopo mese.',
        },
      ],
      cta: 'Inizia dalla call gratuita',
    },

    projects: { title: 'Cosa abbiamo *acceso*.' },

    team: {
      title: 'Tre professioniste, *una sola luce* sul tuo progetto.',
      text: 'Lavoravamo già con le piccole imprese, ognuna nel suo mestiere. Ora lo facciamo insieme: tre punti di vista sullo stesso progetto, con la stessa cura.',
      together:
        'Un team piccolo per scelta: *chi ti ascolta è chi lavora davvero al tuo progetto.* Nessun passaggio di mano, nessuna ripartenza da zero.',
    },

    faq: { title: 'Domande *frequenti.*' },

    contact: {
      title: 'Prenota la tua call *gratuita.*',
      text: '30 minuti online, in un giorno e un orario che scegli tu.',
      writeTitle: 'Preferisci scrivere?',
      writeText:
        'Due righe sul tuo progetto: cosa fai, dove vuoi arrivare e cosa oggi non funziona nella tua comunicazione. Ti rispondiamo personalmente.',
    },

    night: {
      title: 'Piccole, ma ci vediamo *da lontano*.',
      text: 'La tua idea merita una direzione, e la luce giusta per farsi riconoscere. Accendiamola insieme.',
      cta: 'Accendiamo il tuo progetto',
    },
  },

  services: [
    {
      id: 'direzione',
      title: 'Strategia e direzione',
      intro: 'Capire dove andare, prima di parlare. Una figura che tiene insieme tutto, senza doverla assumere.',
      items: ['Analisi e posizionamento', 'Messaggi chiave e tono di voce', 'Regia dei fornitori che hai già', 'Incontri periodici e piano condiviso'],
      forWho: 'chi ha già grafici, social o agenzie, ma una comunicazione che va in tante direzioni.',
      image: { url: '/images/servizio-direzione.webp', alt: 'Una donna in piedi tra grandi sfere gialle, con lo sguardo in alto' },
    },
    {
      id: 'grafica',
      title: 'Grafica e brand',
      intro: 'Un’identità che ti somiglia e che si riconosce ovunque, dal biglietto da visita al sito.',
      items: ['Logo e identità visiva', 'Linee guida semplici da usare', 'Materiali stampati e packaging', 'Template per i social'],
      forWho: 'chi è cresciuto e sente che l’immagine è rimasta indietro.',
      image: { url: '/images/servizio-grafica.webp', alt: 'Una ragazza in un campo di fiori gialli tiene un enorme tubetto di colore giallo' },
    },
    {
      id: 'siti',
      title: 'Siti web',
      intro: 'Un sito chiaro, veloce, intestato a te e facile da aggiornare.',
      items: ['Struttura e testi', 'Design su misura', 'Sviluppo e messa online', 'Formazione per aggiornarlo da solo'],
      forWho: 'chi ha un sito vecchio, o non ce l’ha e ne ha bisogno.',
      image: { url: '/images/servizio-siti.webp', alt: 'Una ragazza su una scala dipinge di cielo azzurro una parete bianca' },
    },
    {
      id: 'social',
      title: 'Social e contenuti',
      intro: 'Parole e immagini che ti somigliano, con costanza, senza che tu debba pensarci ogni giorno.',
      items: ['Piano editoriale mensile', 'Grafiche e testi dei post', 'Gestione e risposte', 'Report semplice a fine mese'],
      forWho: 'chi sa che dovrebbe postare, ma non ha mai tempo.',
      image: { url: '/images/servizio-social.webp', alt: 'Una persona tiene un grande mazzo di palloncini sorridenti davanti al viso' },
    },
    {
      id: 'advertising',
      title: 'Advertising',
      intro: 'Farti trovare da chi ti sta cercando, con un budget che decidi tu.',
      items: ['Obiettivo e pubblico', 'Creatività e testi', 'Gestione delle campagne', 'Risultati spiegati in parole semplici'],
      forWho: 'chi vuole farsi trovare da nuovi clienti, nella sua zona o online.',
      image: { url: '/images/servizio-direzione.webp', alt: 'Una donna in piedi tra grandi sfere gialle, con lo sguardo in alto' },
    },
  ],

  // Nessun progetto pubblicato: la sezione Progetti resta nascosta finché non ce n'è almeno uno.
  projects: [],

  team: [
    {
      name: 'Federica Sacchi',
      role: 'Fondatrice · Strategia, copy e direzione creativa',
      bio: 'Milanese di nascita, bolognese d’adozione. Per quasi vent’anni ha fatto l’assistente di volo, poi ha scelto di ripartire da una passione: si è laureata in Scienze della Comunicazione e ha costruito questo mestiere un progetto alla volta. È il tuo referente e tiene insieme il lavoro di tutte.',
      skills: ['Strategia', 'Copy', 'Direzione creativa', 'Relazione col cliente'],
      quote: 'Non voglio inventare un’identità per un brand. Voglio trovare quella che esiste già e renderla visibile.',
    },
    {
      name: 'Jessica Caliendo',
      role: 'Brand designer',
      bio: 'Dà una forma riconoscibile a quello che sei: logo, identità visiva, grafiche per la stampa e per i social, sempre coerenti tra loro.',
      skills: ['Identità visiva', 'Logo', 'Grafica', 'Packaging'],
    },
    {
      name: 'Laura Lei',
      role: 'Engineering designer · Siti web',
      bio: 'Progetta e costruisce siti chiari, veloci e facili da aggiornare, in cui il cliente trova subito quello che cerca.',
      skills: ['Siti web', 'UX', 'Sviluppo', 'Manutenzione'],
    },
  ],

  faqs: [
    {
      question: 'Non abbiamo nessuno che segua la comunicazione. Da dove partiamo?',
      answer: 'Dalla call gratuita. Ci racconti cosa fai e a chi ti rivolgi, noi ti diciamo da cosa ha senso iniziare. A volte è un logo, a volte un sito, a volte solo mettere in fila le idee.',
    },
    {
      question: 'Abbiamo già un grafico o un’agenzia. Ha senso lavorare con voi?',
      answer: 'Sì. Possiamo tenere noi la direzione e lavorare con chi hai già, così tutto va nello stesso verso e tu non fai da tramite.',
    },
    {
      question: 'Quanto costa lavorare con voi?',
      answer: 'Dipende da cosa ti serve. Dopo la call ricevi un preventivo dettagliato, senza costi nascosti.',
    },
    {
      question: 'Quanto tempo serve per un sito?',
      answer: 'In media [X settimane] dalla conferma, se i contenuti sono pronti. Se non lo sono, li scriviamo noi.',
    },
    {
      question: 'Il sito sarà mio? Chi paga l’hosting?',
      answer: 'Sì, il sito è intestato a te. L’hosting è un abbonamento a tuo nome: ti spieghiamo costi e alternative prima di iniziare.',
    },
    {
      question: 'Posso affidarvi solo i social?',
      answer: 'Certo. Puoi partire da un servizio e aggiungerne altri quando vuoi.',
    },
  ],
};
