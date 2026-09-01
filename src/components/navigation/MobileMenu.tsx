"use client";

import { useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuTrigger({ isOpen, onToggle }: MobileMenuTriggerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative z-50 flex size-11 items-center justify-center rounded-lg lg:hidden",
        "text-muted-foreground transition-colors hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <X className="size-5" strokeWidth={1.5} />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90 }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap + Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusable = menuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleClick = useCallback(
    (href: string) => {
      onClose();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/98 backdrop-blur-xl lg:hidden"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation links">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={cn(
                  "text-h2 text-foreground transition-colors hover:text-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-4 py-2"
                )}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Divider */}
            <motion.div
              className="my-2 h-px w-12 bg-border"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: links.length * 0.04 }}
            />

            {/* Theme toggle in mobile */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: (links.length + 1) * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
