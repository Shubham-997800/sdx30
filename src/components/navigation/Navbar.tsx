'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { EASE } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { NavLinks } from './NavLinks';
import { MobileMenuTrigger, MobileMenu } from './MobileMenu';
import { CommandMenu } from './CommandMenu';
import { navigation } from '@/data/navigation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useCommandMenu } from '@/hooks/useCommandMenu';



export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const { isOpen: isCommandOpen, open: openCommand, close: closeCommand } = useCommandMenu();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = prevScrollY;
    const diff = latest - prev;

    // At top = always show
    if (latest < 40) {
      setAtTop(true);
      setVisible(true);
    } else {
      setAtTop(false);
      // Hide on scroll down (>8px), show on scroll up
      if (diff > 8) setVisible(false);
      else if (diff < -8) setVisible(true);
    }

    setPrevScrollY(latest);
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

  // Blur amount based on scroll (0 to 20px over 500px)
  const blurAmount = Math.min(prevScrollY / 500, 1) * 20;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -80,
        }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {/* Background — blur increases with scroll */}
        <div
          className="absolute inset-0 border-b border-border/50 transition-colors duration-500"
          style={{
            backgroundColor: atTop ? 'transparent' : 'color-mix(in srgb, var(--background) 70%, transparent)',
            backdropFilter: `blur(${blurAmount}px)`,
            WebkitBackdropFilter: `blur(${blurAmount}px)`,
          }}
        />

        {/* Content */}
        <div className="relative mx-auto flex h-14 w-full max-w-[1280px] items-center justify-between px-5 md:h-16 md:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className={cn(
              'relative z-10 text-h4 font-heading font-semibold tracking-tight transition-all duration-300',
              'text-foreground hover:text-accent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-lg px-1.5 -ml-1.5',
            )}
            aria-label="Go to top"
          >
            shubham<span className="text-accent">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <NavLinks links={navigation} />

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* GitHub */}
            <motion.a
              href="https://github.com/Shubham-997800"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group relative flex size-8 items-center justify-center rounded-full',
                'text-muted-foreground transition-colors duration-300',
                'hover:text-foreground hover:bg-accent/10',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/sdx30"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group relative flex size-8 items-center justify-center rounded-full',
                'text-muted-foreground transition-colors duration-300',
                'hover:text-foreground hover:bg-accent/10',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            {/* Divider */}
            <div className="hidden lg:block w-px h-4 bg-border/60 mx-1" />

            {/* Command Palette */}
            <motion.button
              onClick={openCommand}
              className={cn(
                'hidden lg:flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5',
                'text-[0.65rem] font-mono text-muted-foreground transition-colors duration-300',
                'hover:border-accent/40 hover:text-foreground hover:bg-accent/5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open command palette (Ctrl+K)"
            >
              <span className="opacity-50">⌘</span>
              <span>K</span>
            </motion.button>

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
