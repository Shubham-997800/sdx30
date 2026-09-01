import { Navbar } from "@/components/navigation/Navbar";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[600] -translate-y-full rounded-lg bg-accent px-4 py-2 text-accent-foreground opacity-0 transition-all focus:translate-y-0 focus:opacity-100"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
    </div>
  );
}
