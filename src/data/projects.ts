export type Project = {
  title: string;
  slug: string;
  year: string;
  stack: string[];
  summary: string;
  cover?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Investiční portál RRINVEST",
    slug: "rrinvest-portal",
    year: "2025",
    stack: ["TypeScript", "PostgreSQL", "Prisma", "WebRTC"],
    summary:
      "Veřejné stránky pro realitního specialistu a investora s vlastním portálem pro klienty.",
    cover: "/img/rr-cover.png",
    url: "https://rrinvestments.eu",
  },
  {
    title: "MedAI - Zdravotní aplikace s AI",
    slug: "medai-health",
    year: "2025",
    stack: ["React", "OpenAI", "DaisyUI", "TypeScript", "PostgreSQL", "Node.js"],
    summary: "Zdravotní deník s AI pomocníkem.",
    cover: "/img/MedAI-docasne.png",
  },
  {
    title: "Realitní B2B platforma",
    slug: "b2b-real-estate",
    year: "2025",
    stack: ["Astro", "TypeScript", "PostgreSQL", "DaisyUI", "Prisma", "Node.js", "Cloudflare"],
    summary: "B2B marketplace pro realitní kanceláře.",
    cover: "/img/Reality.png",
  },
];
