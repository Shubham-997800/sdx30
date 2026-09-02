"use client";

import { useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuTrigger({ isOpen, onToggle }: MobileMenuTriggerProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative z-50 flex size-8 items-center justify-center rounded-md lg:hidden",
        "text-muted-foreground transition-colors duration-150 hover:text-foreground hover:bg-foreground/[0.04]",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50",
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {/* Hamburger / Close */}
      <span className="relative flex size-4 flex-col items-center justify-center gap-[5px]">
        <span
          className={cn(
            "block h-px w-4 bg-foreground transition-all duration-200 origin-center",
            isOpen && "rotate-45 translate-y-[0px]",
          )}
        />
        <span
          className={cn(
            "block h-px w-4 bg-foreground transition-all duration-200",
            isOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block h-px w-4 bg-foreground transition-all duration-200 origin-center",
            isOpen && "-rotate-45 -translate-y-[6px]",
          )}
        />
      </span>
    </button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
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
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed top-12 right-0 z-40 w-full max-w-sm lg:hidden",
          "bg-background border-b border-border/50 shadow-sm",
          "transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-start gap-1 p-5" aria-label="Mobile navigation links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={cn(
                "w-full text-left text-[0.9rem] font-medium tracking-wide py-2.5 px-3 rounded-md",
                "text-muted-foreground transition-colors duration-150",
                "hover:text-foreground hover:bg-foreground/[0.04]",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50",
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Divider */}
          <div className="my-2 h-px w-full bg-border/50" />

          {/* Theme toggle */}
          <div className="flex w-full items-center gap-3 px-3">
            <ThemeToggle />
            <span className="text-xs text-muted-foreground">
              Toggle theme
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
