import type { ContactFormValues } from '@/schemas/contact';

/**
 * Contact submission service.
 *
 * Currently configured to use mailto: as fallback.
 * Replace with actual API endpoint when backend is ready.
 *
 * Architecture:
 *   ContactForm → submitContact() → API/Service
 */
export async function submitContact(data: ContactFormValues): Promise<{ success: boolean }> {
  // TODO: Replace with actual API endpoint
  // Example: POST /api/contact
  //
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) throw new Error('Failed to send');
  // return { success: true };

  // Fallback: open mailto link
  const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  );
  window.open(`mailto:[TODO: REQUIRED INPUT — your email]?subject=${subject}&body=${body}`, '_blank');

  return { success: true };
}
