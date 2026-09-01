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
        'group relative py-1 text-nav tracking-wide transition-colors duration-200',
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {label}
      <span
        className={cn(
          'absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isActive ? 'w-full' : 'w-0 group-hover:w-full',
        )}
      />
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
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { threshold: 0, rootMargin: '-80px 0px -60% 0px' },
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
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
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
