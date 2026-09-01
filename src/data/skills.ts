import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frameworks",
    title: "Frameworks",
    description: "Modern React ecosystem and build tools",
    icon: "layers",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "ui",
    title: "UI & Design",
    description: "Component systems and visual design",
    icon: "palette",
    skills: [
      { name: "shadcn/ui" },
      { name: "Radix UI" },
      { name: "Framer Motion" },
      { name: "CSS Architecture" },
      { name: "Design Systems" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    description: "Workflow, testing, and deployment",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub" },
      { name: "ESLint" },
      { name: "Jest" },
      { name: "Playwright" },
      { name: "CI/CD" },
    ],
  },
  {
    id: "backend",
    title: "Backend Basics",
    description: "Server-side fundamentals",
    icon: "server",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
    ],
  },
];
