'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative px-3 py-1.5 text-nav font-medium tracking-wide transition-colors duration-150',
        'rounded-sm',
        isActive
          ? 'text-foreground font-semibold'
          : 'text-muted-foreground hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50',
      )}
    >
      <span className="relative z-10">{label}</span>
      {/* Active indicator — crisp animated underline */}
      {isActive && (
        <motion.span
          layoutId="activeDesktopNav"
          className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-accent rounded-full"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  );
}

interface NavLinksProps {
  links: { label: string; href: string }[];
  activeSection: string;
  onSelectSection: (href: string) => void;
}

export function NavLinks({ links, activeSection, onSelectSection }: NavLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onSelectSection(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          onClick={(e) => handleClick(e, link.href)}
        />
      ))}
    </nav>
  );
}
