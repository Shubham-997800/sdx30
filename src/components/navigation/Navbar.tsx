'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { NavLinks } from './NavLinks';
import { MobileMenuTrigger, MobileMenu } from './MobileMenu';
import { CommandMenu } from './CommandMenu';
import { navigation } from '@/data/navigation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useCommandMenu } from '@/hooks/useCommandMenu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { isOpen: isCommandOpen, open: openCommand, close: closeCommand } = useCommandMenu();
  const headerRef = useRef<HTMLElement>(null);

  // Scroll detection
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
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
      <motion.header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent',
        )}
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 md:h-[72px] md:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className={cn(
              'relative z-10 text-body font-bold tracking-tight text-foreground transition-colors duration-200 font-heading',
              'hover:text-accent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-1 -ml-1',
            )}
            aria-label="Go to top"
          >
            SHUBHAM
            <span className="text-accent">.DEV</span>
          </a>

          {/* Desktop Navigation */}
          <NavLinks links={navigation} />

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Command Palette Trigger */}
            <button
              onClick={openCommand}
              className={cn(
                'hidden lg:flex items-center gap-1.5 rounded-xl border border-border px-3 py-2',
                'text-caption text-muted-foreground transition-all duration-300',
                'hover:border-accent hover:text-foreground hover:bg-muted hover:-translate-y-0.5',
                'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
              )}
              aria-label="Open command palette (Ctrl+K)"
            >
              <span className="font-mono text-label">⌘K</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Trigger */}
            <MobileMenuTrigger
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navigation}
      />

      {/* Command Menu */}
      <CommandMenu isOpen={isCommandOpen} onClose={closeCommand} />
    </>
  );
}
