// Converte il testo di Sanity in HTML sicuro.
// *parole* → <em class="it">parole</em> (corsivo IvyBodoni). Tutto il resto viene escapato.

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function rich(text: string): string {
  return escapeHtml(text).replace(/\*([^*]+)\*/g, '<em class="it">$1</em>');
}

/** Toglie gli asterischi: per alt, title e meta description. */
export function plain(text: string): string {
  return text.replace(/\*/g, '');
}
