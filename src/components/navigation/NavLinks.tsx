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
        'group relative py-1 text-[13px] font-medium tracking-wide transition-colors duration-200',
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
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((link) => {
      const id = link.href.replace('#', '');
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.href);
          }
        },
        {
          threshold: 0,
          rootMargin: '-80px 0px -60% 0px',
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    observersRef.current = observers;

    return () => {
      observers.forEach((o) => o.disconnect());
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
