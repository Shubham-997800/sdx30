'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/RevealSystem';
import { contactContent } from '@/data/contact';
import { personalInfo } from '@/data/site';
import { submitContact } from '@/services/contact';
import { contactSchema } from '@/schemas/contact';

const inputClass = "w-full rounded-lg border border-input bg-muted/30 px-4 py-3 text-body text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_16px_oklch(from_var(--accent)_l_c_h_/_0.12)] outline-none";

export function ContactSection() {
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
    <Section id="contact" className="py-16 sm:py-24 md:py-40 editorial-border-top">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Large editorial heading */}
          <Reveal direction="up">
            <span className="text-label text-accent mb-6 block">{contactContent.label}</span>
            <h2 className="text-section text-foreground leading-[1.05] tracking-tight font-heading font-bold">
              {contactContent.heading}
            </h2>
          </Reveal>

          {/* Message */}
          <Reveal direction="up" delay={0.15}>
            <p className="mt-6 text-body-lg text-muted-foreground max-w-lg mx-auto">
              {contactContent.message}
            </p>
          </Reveal>

          {/* Form */}
          <form
            className="mt-10 md:mt-12 space-y-5 text-left max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <Reveal direction="up" delay={0.1} className="space-y-2">
              <label htmlFor="name" className="text-label text-muted-foreground block">
                {contactContent.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={contactContent.namePlaceholder}
                className={inputClass}
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
            </Reveal>

            {/* Email */}
            <Reveal direction="up" delay={0.15} className="space-y-2">
              <label htmlFor="email" className="text-label text-muted-foreground block">
                {contactContent.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={contactContent.emailPlaceholder}
                className={inputClass}
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
            </Reveal>

            {/* Message */}
            <Reveal direction="up" delay={0.2} className="space-y-2">
              <label htmlFor="message" className="text-label text-muted-foreground block">
                {contactContent.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={contactContent.messagePlaceholder}
                className={`${inputClass} resize-y`}
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
            </Reveal>

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
          </form>

          {/* Social links */}
          <Reveal direction="up" delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="text-caption text-muted-foreground">OR</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-label text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              EMAIL DIRECTLY
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline">·</span>
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              GITHUB
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline">·</span>
            <a
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              LINKEDIN
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
