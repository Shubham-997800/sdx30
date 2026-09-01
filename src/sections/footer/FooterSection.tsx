'use client';

import { useCallback } from 'react';
import { Container } from '@/components/layout/Container';
import { socialLinks } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: MailIcon,
};

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [prefersReducedMotion]);

  return (
    <footer className="border-t border-border">
      <Container className="py-12 md:py-16">
        {/* ─── Top Row ─── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block"
            >
              <span className="text-body font-bold tracking-tight text-foreground">
                SHUBHAM<span className="text-accent">.DEV</span>
              </span>
            </a>
            <p className="text-[13px] text-muted-foreground">
              Frontend Developer · Product Builder
            </p>
          </div>

          {/* Social Icons */}
          <nav className="flex items-center gap-3" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const isConfigured = !link.href.includes('[TODO');
              return (
                <a
                  key={link.label}
                  href={isConfigured ? link.href : '#'}
                  target={isConfigured ? '_blank' : undefined}
                  rel={isConfigured ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'flex size-11 items-center justify-center rounded-lg transition-colors',
                    isConfigured
                      ? 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                      : 'text-muted-foreground/30 cursor-default',
                  )}
                  aria-label={link.label}
                >
                  {Icon && <Icon className="size-4" />}
                </a>
              );
            })}
          </nav>
        </div>

        {/* ─── Separator ─── */}
        <div className="mt-8 h-px w-full bg-border" />

        {/* ─── Bottom Row ─── */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="text-caption text-muted-foreground/60">
              © {currentYear} SHUBHAM.DEV
            </p>
            <span className="text-muted-foreground/30 hidden md:inline">·</span>
            <p className="text-caption text-muted-foreground/40">
              Built with React + TypeScript
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-caption font-medium text-muted-foreground/60 transition-colors hover:text-foreground"
            aria-label="Back to top"
          >
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">↑</span>
            BACK TO TOP
          </button>
        </div>
      </Container>
    </footer>
  );
}
