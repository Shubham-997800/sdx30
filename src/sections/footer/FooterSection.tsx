'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE } from '@/lib/animations';
import { Container } from '@/components/layout/Container';
import { personalInfo, socialLinks } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';



export function FooterSection() {
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="py-12 md:py-16 editorial-border-top">
      <Container>
        <div ref={ref} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Left — Brand */}
          <motion.div
            className="space-y-3"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-h3 font-heading font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
            >
              shubham<span className="text-accent">.dev</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="text-label text-muted-foreground">{personalInfo.shortRole}</span>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-label text-muted-foreground/60">Product Builder</span>
            </div>
          </motion.div>

          {/* Right — Meta + Social */}
          <motion.div
            className="space-y-4 md:text-right"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            {/* Social links */}
            <div className="flex items-center gap-4 md:justify-end">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-label text-muted-foreground transition-colors duration-200 hover:text-foreground group"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: EASE }}
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
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
