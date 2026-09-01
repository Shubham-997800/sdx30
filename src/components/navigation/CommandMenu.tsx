"use client";

import { useEffect, useCallback, useRef } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { navigation } from "@/data/navigation";
import { socialLinks } from "@/data/site";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const { setTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus input after mount
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelect = useCallback(
    (action: () => void) => {
      action();
      onClose();
    },
    [onClose]
  );

  const scrollToSection = useCallback(
    (href: string) => {
      handleSelect(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    [handleSelect]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[500]"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          />

          {/* Command Dialog */}
          <motion.div
            className="absolute top-[15%] left-1/2 w-full max-w-lg -translate-x-1/2 px-4"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Command
              className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
              loop
            >
              {/* Input */}
              <div className="flex items-center border-b border-border px-4">
                <Search className="size-4 shrink-0 text-muted-foreground" />
                <Command.Input
                  ref={inputRef}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent px-3 py-3.5 text-body outline-none placeholder:text-muted-foreground"
                />
                <kbd className="hidden rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
                  ESC
                </kbd>
              </div>

              {/* List */}
              <Command.List className="max-h-[320px] overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-body-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                {/* Navigation */}
                <Command.Group heading="Navigation" className="text-label text-muted-foreground">
                  {navigation.map((link) => (
                    <Command.Item
                      key={link.href}
                      value={link.label}
                      onSelect={() => scrollToSection(link.href)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm text-foreground transition-colors hover:bg-accent/10 data-[selected=true]:bg-accent/10"
                    >
                      <span className="text-muted-foreground">→</span>
                      Go to {link.label}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Separator className="my-2 h-px bg-border" />

                {/* Theme */}
                <Command.Group heading="Theme" className="text-label text-muted-foreground">
                  <Command.Item
                    value="dark mode"
                    onSelect={() => handleSelect(() => setTheme("dark"))}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm text-foreground transition-colors hover:bg-accent/10 data-[selected=true]:bg-accent/10"
                  >
                    <span className="text-muted-foreground">◐</span>
                    Dark Mode
                  </Command.Item>
                  <Command.Item
                    value="light mode"
                    onSelect={() => handleSelect(() => setTheme("light"))}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm text-foreground transition-colors hover:bg-accent/10 data-[selected=true]:bg-accent/10"
                  >
                    <span className="text-muted-foreground">○</span>
                    Light Mode
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="my-2 h-px bg-border" />

                {/* External Links */}
                <Command.Group heading="Links" className="text-label text-muted-foreground">
                  {socialLinks.map((link) => (
                    <Command.Item
                      key={link.label}
                      value={link.label}
                      onSelect={() =>
                        handleSelect(() => {
                          window.open(link.href, "_blank", "noopener,noreferrer");
                        })
                      }
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm text-foreground transition-colors hover:bg-accent/10 data-[selected=true]:bg-accent/10"
                    >
                      <span className="text-muted-foreground">↗</span>
                      {link.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>

              {/* Footer */}
              <div className="border-t border-border px-4 py-2.5">
                <p className="text-caption text-muted-foreground">
                  <kbd className="mr-1 rounded bg-muted px-1 py-0.5 font-mono text-[10px]">↵</kbd>
                  to select{" "}
                  <kbd className="mx-1 rounded bg-muted px-1 py-0.5 font-mono text-[10px]">↑↓</kbd>
                  to navigate{" "}
                  <kbd className="mx-1 rounded bg-muted px-1 py-0.5 font-mono text-[10px]">esc</kbd>
                  to close
                </p>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
