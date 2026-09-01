import type { ContactFormValues } from '@/schemas/contact';
import { personalInfo } from '@/data/site';

/**
 * Contact submission service.
 *
 * Architecture:
 *   ContactForm → submitContact() → mailto (fallback)
 */
export async function submitContact(data: ContactFormValues): Promise<{ success: boolean }> {
  const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  );
  window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');

  return { success: true };
}
