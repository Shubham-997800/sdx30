'use client';

import { motion } from 'motion/react';
import { EASE } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProjectThumbnailProps {
  projectId: string;
  projectName: string;
}



function FlowSyncThumbnail() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fs-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#fs-bg)" />
      {/* Sidebar */}
      <rect x="16" y="16" width="50" height="168" rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <circle cx="41" cy="36" r="8" fill="var(--color-accent)" fillOpacity="0.2" />
      <rect x="28" y="56" width="26" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.15" />
      <rect x="28" y="68" width="20" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.1" />
      <rect x="28" y="80" width="24" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.1" />
      <rect x="28" y="92" width="18" height="3" rx="1" fill="var(--color-accent)" fillOpacity="0.3" />
      {/* Main area - Chart */}
      <rect x="80" y="16" width="224" height="100" rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="96" y="38" fontSize="8" fill="var(--color-foreground)" fillOpacity="0.4" fontFamily="sans-serif">AI Schedule</text>
      {/* Chart bars */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={100 + i * 26} y={80 - (i % 3) * 18 - 10} width="16" height={(i % 3) * 18 + 10} rx="3" fill="var(--color-accent)" fillOpacity={0.15 + (i % 3) * 0.1} />
      ))}
      {/* Bottom cards */}
      <rect x="80" y="130" width="106" height="54" rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="96" y="150" fontSize="7" fill="var(--color-foreground)" fillOpacity="0.3" fontFamily="sans-serif">Tasks Today</text>
      <rect x="96" y="158" width="40" height="8" rx="2" fill="var(--color-accent)" fillOpacity="0.2" />
      <rect x="96" y="170" width="60" height="4" rx="1" fill="var(--color-foreground)" fillOpacity="0.06" />
      <rect x="198" y="130" width="106" height="54" rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="214" y="150" fontSize="7" fill="var(--color-foreground)" fillOpacity="0.3" fontFamily="sans-serif">Risk Alerts</text>
      <rect x="214" y="158" width="30" height="8" rx="2" fill="var(--color-warning)" fillOpacity="0.2" />
      <rect x="214" y="170" width="50" height="4" rx="1" fill="var(--color-foreground)" fillOpacity="0.06" />
      {/* AI badge */}
      <circle cx="280" cy="44" r="12" fill="var(--color-accent)" fillOpacity="0.1" stroke="var(--color-accent)" strokeWidth="1" strokeOpacity="0.3" />
      <text x="276" y="48" fontSize="10" fill="var(--color-accent)" fillOpacity="0.5" fontFamily="sans-serif">AI</text>
    </svg>
  );
}

function WorkOSThumbnail() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#wo-bg)" />
      {/* Top bar */}
      <rect x="16" y="16" width="288" height="28" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <circle cx="32" cy="30" r="5" fill="var(--color-foreground)" fillOpacity="0.1" />
      <rect x="44" y="27" width="60" height="6" rx="2" fill="var(--color-foreground)" fillOpacity="0.08" />
      <rect x="240" y="24" width="48" height="12" rx="4" fill="var(--color-accent)" fillOpacity="0.2" />
      {/* Kanban columns */}
      {[0,1,2].map(col => (
        <g key={col}>
          <rect x={16 + col * 102} y="56" width="92" height="128" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
          <rect x={24 + col * 102} y="64" width="40" height="5" rx="2" fill="var(--color-foreground)" fillOpacity="0.15" />
          {[0,1,2].map(card => (
            <rect key={card} x={24 + col * 102} y={78 + card * 38} width="76" height="30" rx="4" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="0.5" />
          ))}
          <circle cx={88 + col * 102} cy={88} r="2" fill={col === 0 ? 'var(--color-accent)' : col === 1 ? 'var(--color-warning)' : 'var(--color-success)'} fillOpacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

function AssetrixThumbnail() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="var(--color-background)" fillOpacity="0.5" />
      {/* Header */}
      <rect x="16" y="16" width="120" height="8" rx="3" fill="var(--color-foreground)" fillOpacity="0.08" />
      {/* Grid of assets */}
      {[0,1,2,3].map(row =>
        [0,1,2,3].map(col => (
          <g key={`${row}-${col}`}>
            <rect x={16 + col * 76} y={36 + row * 40} width="68" height="34" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
            <rect x={24 + col * 76} y={44 + row * 40} width="16" height="16" rx="4" fill="var(--color-accent)" fillOpacity={0.1 + (row + col) % 3 * 0.08} />
            <rect x={46 + col * 76} y={46 + row * 40} width="28" height="4" rx="1" fill="var(--color-foreground)" fillOpacity="0.12" />
            <rect x={46 + col * 76} y={54 + row * 40} width="18" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.08" />
            {(row + col) % 3 === 0 && (
              <circle cx={84 + col * 76} cy={40 + row * 40} r="5" fill="var(--color-success)" fillOpacity="0.3" />
            )}
          </g>
        ))
      )}
    </svg>
  );
}

function Campus360Thumbnail() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="var(--color-background)" fillOpacity="0.5" />
      {/* Building */}
      <rect x="100" y="50" width="120" height="110" rx="4" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <rect x="108" y="58" width="104" height="20" rx="3" fill="var(--color-accent)" fillOpacity="0.15" />
      {/* Windows */}
      {[0,1,2].map(row =>
        [0,1,2,3].map(col => (
          <rect key={`${row}-${col}`} x={112 + col * 24} y={86 + row * 20} width="16" height="12" rx="2" fill="var(--color-accent)" fillOpacity={0.08 + (row * 4 + col) % 3 * 0.06} />
        ))
      )}
      {/* Door */}
      <rect x="148" y="130" width="24" height="20" rx="2" fill="var(--color-accent)" fillOpacity="0.2" />
      {/* Flag */}
      <line x1="160" y1="30" x2="160" y2="50" stroke="var(--color-foreground)" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="160" y="30" width="16" height="10" rx="1" fill="var(--color-accent)" fillOpacity="0.3" />
      {/* Students */}
      {[0,1,2].map(i => (
        <g key={i}>
          <circle cx={60 + i * 30} cy={140 - i * 5} r="6" fill="var(--color-foreground)" fillOpacity="0.1" />
          <rect x={55 + i * 30} y={148 - i * 5} width="10" height="14" rx="3" fill="var(--color-foreground)" fillOpacity="0.08" />
        </g>
      ))}
      {/* Event card */}
      <rect x="240" y="70" width="64" height="40" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <rect x="248" y="78" width="40" height="4" rx="1" fill="var(--color-accent)" fillOpacity="0.3" />
      <rect x="248" y="86" width="30" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.1" />
      <rect x="248" y="94" width="48" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.08" />
    </svg>
  );
}

function StartupLaunchThumbnail() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="var(--color-background)" fillOpacity="0.5" />
      {/* Rocket */}
      <g transform="translate(150, 20)">
        <path d="M10 0 L20 30 L0 30 Z" fill="var(--color-accent)" fillOpacity="0.2" stroke="var(--color-accent)" strokeWidth="1" strokeOpacity="0.3" />
        <rect x="4" y="30" width="12" height="8" rx="2" fill="var(--color-foreground)" fillOpacity="0.1" />
        <path d="M6 38 Q10 50 14 38" fill="var(--color-warning)" fillOpacity="0.3" />
      </g>
      {/* Charts */}
      <rect x="24" y="90" width="120" height="94" rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="40" y="110" fontSize="7" fill="var(--color-foreground)" fillOpacity="0.3" fontFamily="sans-serif">Market Analysis</text>
      <polyline points="40,150 60,135 80,145 100,120 120,115 140,100" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Insights panel */}
      <rect x="176" y="90" width="120" height="94" rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="192" y="110" fontSize="7" fill="var(--color-foreground)" fillOpacity="0.3" fontFamily="sans-serif">AI Insights</text>
      {[0,1,2].map(i => (
        <rect key={i} x="192" y={120 + i * 18} width={60 - i * 10} height="8" rx="3" fill="var(--color-accent)" fillOpacity={0.15 + i * 0.08} />
      ))}
      {/* Stars */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={40 + i * 55} cy={30 + (i % 2) * 15} r="1.5" fill="var(--color-foreground)" fillOpacity={0.1 + i * 0.03} />
      ))}
    </svg>
  );
}

function SofaWalaThumbnail() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="var(--color-background)" fillOpacity="0.5" />
      {/* Nav bar */}
      <rect x="16" y="16" width="288" height="28" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="32" y="34" fontSize="8" fill="var(--color-accent)" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="bold">SofaWala</text>
      <rect x="240" y="24" width="50" height="12" rx="4" fill="var(--color-foreground)" fillOpacity="0.08" />
      {/* Product grid */}
      {[0,1,2].map(col => (
        <g key={col}>
          <rect x={16 + col * 100} y="56" width="90" height="100" rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
          {/* Sofa shape */}
          <rect x={28 + col * 100} y={70} width="66" height="30" rx="8" fill="var(--color-accent)" fillOpacity={0.08 + col * 0.05} />
          <rect x={24 + col * 100} y={80} width="10" height="20" rx="4" fill="var(--color-accent)" fillOpacity={0.12 + col * 0.04} />
          <rect x={86 + col * 100} y={80} width="10" height="20" rx="4" fill="var(--color-accent)" fillOpacity={0.12 + col * 0.04} />
          {/* Price tag */}
          <rect x={28 + col * 100} y={110} width="30" height="6" rx="2" fill="var(--color-foreground)" fillOpacity="0.1" />
          <rect x={28 + col * 100} y={120} width="40" height="4" rx="1" fill="var(--color-foreground)" fillOpacity="0.06" />
          <rect x={28 + col * 100} y={128} width="24" height="4" rx="1" fill="var(--color-accent)" fillOpacity="0.25" />
        </g>
      ))}
      {/* Cart */}
      <circle cx="280" cy="180" r="14" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
      <text x="274" y="184" fontSize="10" fill="var(--color-accent)" fillOpacity="0.4" fontFamily="sans-serif">Cart</text>
    </svg>
  );
}

const THUMBNAIL_MAP: Record<string, React.FC> = {
  'flowsync-ai': FlowSyncThumbnail,
  'workos': WorkOSThumbnail,
  'assetrix': AssetrixThumbnail,
  'campus360': Campus360Thumbnail,
  'startuplaunchai': StartupLaunchThumbnail,
  'sofawala': SofaWalaThumbnail,
};

export function ProjectThumbnail({ projectId, projectName }: ProjectThumbnailProps) {
  const prefersReducedMotion = useReducedMotion();
  const Thumbnail = THUMBNAIL_MAP[projectId];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card group-hover:border-accent/30 transition-colors duration-500">
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        viewport={{ once: true }}
      >
        {Thumbnail ? <Thumbnail /> : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/5 via-transparent to-accent/10">
            <span className="text-h3 text-foreground/10 dark:text-foreground/15 font-heading select-none">{projectName}</span>
          </div>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-500" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card/60 to-transparent" />
    </div>
  );
}
