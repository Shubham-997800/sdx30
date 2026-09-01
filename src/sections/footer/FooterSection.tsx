'use client';

import { Container } from '@/components/layout/Container';
import { SITE } from '@/lib/constants';
import { personalInfo, socialLinks } from '@/data/site';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 editorial-border-top">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Left — Brand */}
          <div className="space-y-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-h3 text-foreground font-heading hover:text-accent transition-colors duration-200"
            >
              {SITE.name}
            </a>
            <div className="flex items-center gap-2">
              <span className="text-label text-muted-foreground">{personalInfo.shortRole}</span>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-label text-muted-foreground/60">Product Builder</span>
            </div>
          </div>

          {/* Right — Meta + Social */}
          <div className="space-y-4 md:text-right">
            {/* Social links */}
            <div className="flex items-center gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-caption text-muted-foreground/60">
              © {currentYear} {personalInfo.fullName}. Built with React + TypeScript.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
