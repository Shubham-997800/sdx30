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

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { isOpen: isCommandOpen, open: openCommand, close: closeCommand } = useCommandMenu();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="fixed top-0 left-0 right-0 z-50"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      >
        {/* ── Background + Border ── */}
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            isScrolled
              ? 'bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
              : 'bg-transparent',
          )}
        />

        {/* ── Content ── */}
        <div className="relative mx-auto flex h-14 w-full max-w-[1280px] items-center justify-between px-5 md:h-16 md:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className={cn(
              'relative z-10 text-h4 text-foreground transition-colors duration-200 font-heading font-semibold tracking-tight',
              'hover:text-accent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1 -ml-1',
            )}
            aria-label="Go to top"
          >
            shubham<span className="text-accent">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <NavLinks links={navigation} />

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            {/* Command Palette */}
            <button
              onClick={openCommand}
              className={cn(
                'hidden lg:flex items-center gap-1.5 rounded-[4px] border border-border/60 px-2.5 py-1.5',
                'text-[0.65rem] font-mono text-muted-foreground transition-all duration-200',
                'hover:border-foreground/20 hover:text-foreground hover:bg-foreground/[0.03]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
              )}
              aria-label="Open command palette (Ctrl+K)"
            >
              <span className="opacity-50">⌘</span>
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
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navigation}
      />

      <CommandMenu isOpen={isCommandOpen} onClose={closeCommand} />
    </>
  );
}
