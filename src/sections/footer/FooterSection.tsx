'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/RevealSystem';
import { personalInfo, socialLinks } from '@/data/site';



export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 editorial-border-top">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Left — Brand */}
          <Reveal direction="up" className="space-y-3">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-h3 font-heading font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              shubham<span className="text-accent">.dev</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-label text-muted-foreground">{personalInfo.shortRole}</span>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-label text-muted-foreground/60">Product Builder</span>
            </div>
          </Reveal>

          {/* Right — Meta + Social */}
          <Reveal direction="up" delay={0.1} className="space-y-4 md:text-right">
            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-label text-muted-foreground transition-colors duration-200 hover:text-foreground group"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-caption text-muted-foreground/60">
              © {currentYear} {personalInfo.fullName}. Built with React + TypeScript.
            </p>
          </Reveal>
        </div>
      </Container>
    </footer>
  );
}
