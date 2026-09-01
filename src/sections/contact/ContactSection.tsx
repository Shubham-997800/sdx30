'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema, type ContactFormValues } from '@/schemas/contact';
import { contactContent } from '@/data/contact';
import { socialLinks } from '@/data/site';
import { submitContact } from '@/services/contact';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-label text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-caption text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, margin: '-60px' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitState('loading');
    try {
      await submitContact(data);
      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <Section id="contact" className="py-24 md:py-36">
      <Container>
        {/* ─── Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <SectionLabel>{contactContent.label}</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-section mt-6 text-foreground tracking-[-0.04em] leading-[1.05] whitespace-pre-line"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            {contactContent.heading}
          </motion.h2>
          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Content ─── */}
        <div ref={formRef} className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Message + Socials */}
          <motion.div
            className="col-span-4 space-y-10"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <p className="text-body text-muted-foreground leading-relaxed max-w-sm">
              {contactContent.message}
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <span className="text-label text-muted-foreground">
                SOCIALS
              </span>
              <div className="space-y-2">
                {socialLinks.map((link) => {
                  const isConfigured = !link.href.includes('[TODO');
                  return (
                    <a
                      key={link.label}
                      href={isConfigured ? link.href : '#'}
                      target={isConfigured ? '_blank' : undefined}
                      rel={isConfigured ? 'noopener noreferrer' : undefined}
                      className={cn(
                        'group flex items-center gap-3 py-2 text-body-sm',
                        isConfigured
                          ? 'text-foreground/70 hover:text-foreground transition-colors'
                          : 'text-muted-foreground/40 cursor-default',
                      )}
                    >
                      <span>{link.label}</span>
                      {isConfigured && (
                        <span className="text-[10px] text-accent transition-transform duration-200 group-hover:translate-x-0.5">
                          →
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="col-span-4 lg:col-span-7"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          >
            {submitState === 'success' ? (
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 md:p-12 text-center">
                <p className="text-label text-accent mb-3">
                  {contactContent.successTitle}
                </p>
                <p className="text-body text-muted-foreground">
                  {contactContent.successMessage}
                </p>
                <Button
                  variant="ghost"
                  className="mt-6"
                  onClick={() => setSubmitState('idle')}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <FormField label={contactContent.nameLabel} error={errors.name?.message}>
                  <Input
                    {...register('name')}
                    placeholder={contactContent.namePlaceholder}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    className="bg-transparent"
                  />
                </FormField>

                <FormField label={contactContent.emailLabel} error={errors.email?.message}>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder={contactContent.emailPlaceholder}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    className="bg-transparent"
                  />
                </FormField>

                <FormField label={contactContent.messageLabel} error={errors.message?.message}>
                  <Textarea
                    {...register('message')}
                    placeholder={contactContent.messagePlaceholder}
                    rows={5}
                    aria-invalid={!!errors.message}
                    className="bg-transparent resize-none"
                  />
                </FormField>

                {submitState === 'error' && (
                  <p className="text-caption text-red-500" role="alert">
                    {contactContent.errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitState === 'loading'}
                  className="w-full"
                >
                  {submitState === 'loading'
                    ? contactContent.submittingLabel
                    : contactContent.submitLabel}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
