'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE } from '@/lib/animations';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { contactContent } from '@/data/contact';
import { personalInfo } from '@/data/site';
import { submitContact } from '@/services/contact';
import { contactSchema } from '@/schemas/contact';



export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setFormState('submitting');

    try {
      await submitContact(result.data);
      setFormState('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormState('error');
    }
  };

  return (
    <Section id="contact" className="py-24 md:py-40 editorial-border-top">
      <Container>
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          {/* Large editorial heading */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="text-label text-accent mb-6 block">{contactContent.label}</span>
            <h2 className="text-section md:text-[clamp(2.5rem,6vw,5rem)] text-foreground leading-[1.05] tracking-tight font-heading font-bold">
              {contactContent.heading}
            </h2>
          </motion.div>

          {/* Message */}
          <motion.p
            className="mt-6 text-body-lg text-muted-foreground max-w-lg mx-auto"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {contactContent.message}
          </motion.p>

          {/* Form */}
          <motion.form
            className="mt-10 md:mt-12 space-y-5 text-left max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <motion.div
              className="space-y-2"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
            >
              <label htmlFor="name" className="text-label text-muted-foreground block">
                {contactContent.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={contactContent.namePlaceholder}
                className="w-full rounded-lg border border-input bg-transparent px-4 py-3 text-body text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_16px_oklch(from_var(--accent)_l_c_h_/_0.12)] outline-none"
              />
              {errors.name && (
                <motion.span
                  className="text-caption text-destructive"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.name}
                </motion.span>
              )}
            </motion.div>

            {/* Email */}
            <motion.div
              className="space-y-2"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            >
              <label htmlFor="email" className="text-label text-muted-foreground block">
                {contactContent.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={contactContent.emailPlaceholder}
                className="w-full rounded-lg border border-input bg-transparent px-4 py-3 text-body text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_16px_oklch(from_var(--accent)_l_c_h_/_0.12)] outline-none"
              />
              {errors.email && (
                <motion.span
                  className="text-caption text-destructive"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.email}
                </motion.span>
              )}
            </motion.div>

            {/* Message */}
            <motion.div
              className="space-y-2"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
            >
              <label htmlFor="message" className="text-label text-muted-foreground block">
                {contactContent.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={contactContent.messagePlaceholder}
                className="w-full rounded-lg border border-input bg-transparent px-4 py-3 text-body text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_16px_oklch(from_var(--accent)_l_c_h_/_0.12)] outline-none resize-y"
              />
              {errors.message && (
                <motion.span
                  className="text-caption text-destructive"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.message}
                </motion.span>
              )}
            </motion.div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="shimmer"
                size="lg"
                disabled={formState === 'submitting'}
                className="group/btn w-full sm:w-auto"
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {contactContent.submittingLabel}
                  </>
                ) : formState === 'success' ? (
                  <>
                    <CheckCircle2 className="size-4" />
                    SENT
                  </>
                ) : (
                  <>
                    {contactContent.submitLabel}
                    <Send className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </>
                )}
              </Button>
            </div>

            {/* Error message */}
            <div aria-live="polite">
              {formState === 'error' && (
                <motion.div
                  className="flex items-center gap-2 mt-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="size-4 text-destructive shrink-0" />
                  <span className="text-body-sm text-destructive">
                    {contactContent.errorMessage}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.form>

          {/* Social links */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-6"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            <span className="text-caption text-muted-foreground">OR</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-label text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              EMAIL DIRECTLY
            </a>
            <span className="text-muted-foreground/30">·</span>
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              GITHUB
            </a>
            <span className="text-muted-foreground/30">·</span>
            <a
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              LINKEDIN
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
