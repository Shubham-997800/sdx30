'use client';

import { useState, useEffect } from 'react';

// Maps all page section IDs to their corresponding navbar item href
const SECTION_MAP: { sectionId: string; navHref: string }[] = [
  { sectionId: 'hero', navHref: '#hero' },
  { sectionId: 'work', navHref: '#work' },
  { sectionId: 'engineering', navHref: '#engineering' },
  { sectionId: 'stack', navHref: '#engineering' }, // Ecosystem maps to Skills
  { sectionId: 'journey', navHref: '#journey' },
  { sectionId: 'about', navHref: '#about' },
  { sectionId: 'learning', navHref: '#about' }, // Learning maps to About
  { sectionId: 'github', navHref: '#about' }, // GitHub Activity maps to About
  { sectionId: 'contact', navHref: '#contact' },
];

export function useActiveSection(defaultHref: string = '#hero') {
  const [activeSection, setActiveSection] = useState<string>(defaultHref);

  useEffect(() => {
    let ticking = false;

    const computeActive = () => {
      // 1. Top of page
      if (window.scrollY < 120) {
        setActiveSection('#hero');
        return;
      }

      // 2. Near bottom of page
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isBottom) {
        setActiveSection('#contact');
        return;
      }

      // 3. Scan sections from bottom to top against a focal line (30% down viewport)
      const threshold = Math.min(260, Math.max(120, window.innerHeight * 0.3));

      for (let i = SECTION_MAP.length - 1; i >= 0; i--) {
        const { sectionId, navHref } = SECTION_MAP[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > 0) {
            setActiveSection(navHref);
            return;
          }
        }
      }

      setActiveSection('#hero');
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    computeActive();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Re-check as lazy-loaded sections mount into the DOM
    const t1 = setTimeout(computeActive, 150);
    const t2 = setTimeout(computeActive, 600);
    const t3 = setTimeout(computeActive, 1500);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return [activeSection, setActiveSection] as const;
}
