'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'relative px-3 py-1.5 text-[0.78rem] font-medium tracking-wide rounded-full transition-colors duration-300',
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20"
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </a>
  );
}

interface NavLinksProps {
  links: { label: string; href: string }[];
}

export function NavLinks({ links }: NavLinksProps) {
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveSection(`#${top.target.id}`);
        }
      },
      { threshold: 0, rootMargin: '-20% 0px -70% 0px' },
    );

    for (const link of links) {
      const el = document.getElementById(link.href.replace('#', ''));
      if (el) observerRef.current.observe(el);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [links]);

  return (
    <nav
      className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-border/40 bg-muted/30 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          isActive={activeSection === link.href}
        />
      ))}
    </nav>
  );
}
