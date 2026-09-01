'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { aboutIntro, philosophy, buildShipIterate, developerCodeCard } from '@/data/about';

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="about" className="py-24 md:py-36">
      <Container>
        <motion.div
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            number="06"
            label="PROFILE"
            title="About"
          />
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ─── Left: Editorial text ─── */}
          <motion.div
            className="col-span-4 lg:col-span-6 space-y-8"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {/* Role */}
            <div>
              <span className="text-label text-accent">{aboutIntro.role}</span>
            </div>

            {/* Statement */}
            <p className="text-body-lg text-foreground leading-relaxed">
              {aboutIntro.statement}
            </p>

            {/* Body */}
            <p className="text-body text-muted-foreground leading-relaxed">
              {aboutIntro.body}
            </p>

            {/* Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {philosophy.map((item, i) => (
                <motion.div
                  key={item.number}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-colors duration-200 hover:border-border-strong"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: EASE }}
                >
                  <span className="text-label text-accent mt-0.5">{item.number}</span>
                  <div className="space-y-1">
                    <span className="text-body-sm font-medium text-foreground block">{item.title}</span>
                    <span className="text-caption text-muted-foreground">{item.body}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Build → Ship → Iterate */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {Object.values(buildShipIterate).map((item, i) => (
                <motion.div
                  key={item.title}
                  className="space-y-2"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08, ease: EASE }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-label text-accent">{item.title}</span>
                    {i < 2 && <span className="text-muted-foreground/30 hidden md:inline">→</span>}
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Code Card ─── */}
          <motion.div
            className="col-span-4 lg:col-span-5 lg:col-start-8"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          >
            <div className="code-card sticky top-24">
              <div className="code-card-header">
                <span className="code-card-dot" />
                <span className="code-card-dot" />
                <span className="code-card-dot" />
                <span className="text-caption text-muted-foreground ml-2 font-mono">shubham-dangi.ts</span>
              </div>
              <div className="code-card-body">
                <pre className="text-code whitespace-pre-wrap">
                  {developerCodeCard.split('\n').map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-muted-foreground/20 w-6 text-right mr-4 select-none shrink-0">
                        {i + 1}
                      </span>
                      <span>
                        {line.split(/(const |let |var |"|\}|:|;|\[|\]|{|\/\/.*$)/g).map((part, j) => {
                          if (part.match(/^(const|let|var)$/)) {
                            return <span key={j} className="code-keyword">{part}</span>;
                          }
                          if (part.match(/^"/)) {
                            return <span key={j} className="code-string">{part}</span>;
                          }
                          if (part.match(/^\/\//)) {
                            return <span key={j} className="code-comment">{part}</span>;
                          }
                          if (part.match(/^[\[\]{}]$/)) {
                            return <span key={j} className="code-punctuation">{part}</span>;
                          }
                          return <span key={j} className="code-property">{part}</span>;
                        })}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
