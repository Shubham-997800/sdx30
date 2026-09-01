"use client";

import { useSyncExternalStore } from "react";

function useMediaQueryStore(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

export function useMediaQuery(query: string): boolean {
  return useMediaQueryStore(query);
}

export function useIsMobile(): boolean {
  return !useMediaQueryStore("(min-width: 768px)");
}

export function useIsDesktop(): boolean {
  return useMediaQueryStore("(min-width: 1024px)");
}

export function useIsLargeDesktop(): boolean {
  return useMediaQueryStore("(min-width: 1440px)");
}
