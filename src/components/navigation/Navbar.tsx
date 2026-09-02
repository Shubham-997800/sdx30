'use client';

import { useState, useEffect, useCallback } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { NavLinks } from './NavLinks';
import { MobileMenuTrigger, MobileMenu } from './MobileMenu';
import { CommandMenu } from './CommandMenu';
import { navigation } from '@/data/navigation';
import { useCommandMenu } from '@/hooks/useCommandMenu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: isCommandOpen, open: openCommand, close: closeCommand } = useCommandMenu();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Surface */}
        <div
          className={cn(
            'absolute inset-0 transition-all duration-200',
            scrolled
              ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
              : 'bg-transparent border-b border-transparent',
          )}
        />

        {/* Content */}
        <nav className="relative mx-auto flex h-12 w-full max-w-[1280px] items-center justify-between px-4 sm:px-5 md:h-14 md:px-8 lg:px-10" aria-label="Main navigation">
          {/* ── Logo ── */}
          <a
            href="#"
            onClick={handleLogoClick}
            className={cn(
              'relative z-10 flex items-baseline gap-0 text-[0.85rem] font-heading font-semibold tracking-tight',
              'text-foreground transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50 focus-visible:rounded-sm px-0.5 -ml-0.5',
              'hover:text-accent',
            )}
            aria-label="Go to top"
          >
            <span className="text-foreground">shubham</span>
            <span className="text-accent">.dev</span>
          </a>

          {/* ── Desktop Nav ── */}
          <NavLinks links={navigation} />

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-0.5">
            {/* GitHub */}
            <a
              href="https://github.com/Shubham-997800"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex size-8 items-center justify-center rounded-md',
                'text-muted-foreground transition-colors duration-150',
                'hover:text-foreground hover:bg-foreground/[0.04]',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50',
              )}
              aria-label="GitHub"
            >
              <svg className="size-[15px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sdx30"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex size-8 items-center justify-center rounded-md',
                'text-muted-foreground transition-colors duration-150',
                'hover:text-foreground hover:bg-foreground/[0.04]',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50',
              )}
              aria-label="LinkedIn"
            >
              <svg className="size-[15px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Divider */}
            <div className="hidden lg:block w-px h-3.5 bg-border/60 mx-1" />

            {/* Command Palette */}
            <button
              onClick={openCommand}
              className={cn(
                'hidden lg:flex items-center gap-1 rounded-md border border-border/50 px-2 py-1',
                'text-[0.6rem] font-mono text-muted-foreground tracking-wider transition-colors duration-150',
                'hover:border-border hover:text-foreground hover:bg-foreground/[0.03]',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50',
              )}
              aria-label="Open command palette (Ctrl+K)"
            >
              <span className="opacity-40">⌘</span>
              <span>K</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <MobileMenuTrigger
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navigation}
      />

      <CommandMenu isOpen={isCommandOpen} onClose={closeCommand} />
    </>
  );
}
