import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Impostazioni',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome dello studio', type: 'string', initialValue: 'Lucciole Creative' }),
    defineField({ name: 'payoff', title: 'Payoff', type: 'string', description: 'Compare nel menu e nel footer' }),
    defineField({ name: 'email', title: 'Email', type: 'string', validation: (r) => r.required().email() }),
    defineField({ name: 'whatsapp', title: 'Numero WhatsApp', type: 'string', description: 'Con prefisso, es. +39 333 123 4567' }),
    defineField({ name: 'instagram', title: 'Instagram (senza @)', type: 'string', initialValue: 'lucciolecreative' }),
    defineField({ name: 'bookingUrl', title: 'Link prenotazione call (Cal.com)', type: 'url' }),
    defineField({ name: 'legalName', title: 'Ragione sociale', type: 'string' }),
    defineField({ name: 'vatNumber', title: 'Partita IVA', type: 'string', description: 'Obbligatoria nel footer quando lo studio fattura' }),
  ],
  preview: { prepare: () => ({ title: 'Impostazioni del sito' }) },
});
