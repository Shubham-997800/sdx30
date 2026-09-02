'use client';

import { useState, useEffect, useRef } from 'react';
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
        'relative px-3 py-1.5 text-nav font-medium tracking-wide transition-colors duration-150',
        'rounded-sm',
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50',
      )}
    >
      <span className="relative z-10">{label}</span>
      {/* Active indicator — thin editorial underline */}
      {isActive && (
        <span className="absolute bottom-1 left-3 right-3 h-px bg-foreground/70" />
      )}
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
      className="hidden lg:flex items-center gap-0.5"
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
