'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal, RevealGroup } from '@/components/motion/RevealSystem';
import { aboutIntro, philosophy, buildShipIterate, developerCodeCard } from '@/data/about';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(developerCodeCard);
    setCopied(true);
    toast.success('shubham-dangi.ts copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Section id="about" className="py-16 sm:py-24 md:py-36">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            number="05"
            label="PROFILE"
            title="About"
          />
        </Reveal>

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ─── Left: Editorial text ─── */}
          <Reveal direction="up" delay={0.15} className="col-span-4 lg:col-span-6 space-y-8">
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
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {philosophy.map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-colors duration-200 hover:border-border-strong"
                >
                  <span className="text-label text-accent mt-0.5">{item.number}</span>
                  <div className="space-y-1">
                    <span className="text-body-sm font-medium text-foreground block">{item.title}</span>
                    <span className="text-caption text-muted-foreground">{item.body}</span>
                  </div>
                </div>
              ))}
            </RevealGroup>

            {/* Build → Ship → Iterate */}
            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {Object.values(buildShipIterate).map((item, i) => (
                <div key={item.title} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-label text-accent">{item.title}</span>
                    {i < 2 && <span className="text-muted-foreground/30 hidden md:inline">→</span>}
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </RevealGroup>
          </Reveal>

          {/* ─── Right: Code Card ─── */}
          <Reveal direction="up" delay={0.25} className="col-span-4 lg:col-span-5 lg:col-start-8">
            <div className="code-card lg:sticky lg:top-24">
              <div className="code-card-header flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="code-card-dot" />
                  <span className="code-card-dot" />
                  <span className="code-card-dot" />
                  <span className="text-caption text-muted-foreground ml-2 font-mono text-[0.72rem]">shubham-dangi.ts</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-0.5 rounded text-[0.68rem] font-mono text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-accent" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
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
                          if (part.match(/^[[\]{}]$/)) {
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
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
