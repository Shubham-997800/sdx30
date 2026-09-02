"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex size-8 items-center justify-center rounded-md",
        "text-muted-foreground transition-colors duration-150",
        "hover:text-foreground hover:bg-foreground/[0.04]",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50",
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun — visible in dark mode */}
      <svg
        className={cn(
          "size-3.5 transition-all duration-200",
          isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 scale-50",
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      {/* Moon — visible in light mode */}
      <svg
        className={cn(
          "absolute size-3.5 transition-all duration-200",
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0",
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
