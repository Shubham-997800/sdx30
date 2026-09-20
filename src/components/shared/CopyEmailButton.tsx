'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/data/site';

interface CopyEmailButtonProps {
  className?: string;
  variant?: 'chip' | 'button' | 'compact';
  label?: string;
}

export function CopyEmailButton({
  className,
  variant = 'chip',
  label,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      toast.success('Email copied to clipboard!', {
        description: personalInfo.email,
        duration: 3000,
      });

      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard API is blocked
      const textArea = document.createElement('textarea');
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      toast.success('Email copied to clipboard!', {
        description: personalInfo.email,
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2200);
    }
  }, []);

  if (variant === 'button') {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md border border-border/80 bg-card px-4 py-2.5',
          'text-label font-medium text-foreground transition-all duration-200',
          'hover:border-accent hover:bg-accent/5 hover:text-accent cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
          className,
        )}
        aria-label="Copy email address"
      >
        {copied ? (
          <>
            <Check className="size-4 text-accent animate-in zoom-in-50 duration-200" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="size-4 text-muted-foreground transition-transform duration-200 group-hover:scale-110" />
            <span>{label || 'Copy Email'}</span>
          </>
        )}
      </button>
    );
  }

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150',
          'hover:text-foreground hover:bg-foreground/[0.04] cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50',
          className,
        )}
        aria-label="Copy email to clipboard"
        title="Copy email to clipboard"
      >
        {copied ? (
          <Check className="size-3.5 text-accent animate-in zoom-in duration-150" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    );
  }

  // Default: 'chip' — Sleek mono badge
  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs px-3.5 py-1.5',
        'text-label font-mono text-muted-foreground transition-all duration-200',
        'hover:border-accent/60 hover:bg-accent/[0.06] hover:text-foreground cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50',
        copied && 'border-accent bg-accent/10 text-accent',
        className,
      )}
      aria-label={`Copy email: ${personalInfo.email}`}
      title="Click to copy email address"
    >
      <Mail className="size-3 text-muted-foreground/70 transition-colors group-hover:text-accent" />
      <span className="text-[0.75rem] tracking-tight">{personalInfo.email}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-[0.7rem] text-accent font-semibold ml-1">
          <Check className="size-3 stroke-[2.5]" />
          Copied
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-[0.65rem] text-muted-foreground/60 group-hover:text-accent ml-1 transition-colors">
          <Copy className="size-2.8" />
          copy
        </span>
      )}
    </button>
  );
}
