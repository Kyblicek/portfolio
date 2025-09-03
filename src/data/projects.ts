export type Project = {
    title: string;
    slug: string;
    year: string;
    stack: string[];
    summary: string;
    cover?: string;
    url?: string;
    };
    
    
    import rrCover from "../img/rr-cover.svg";

    export const projects: Project[] = [
    {
    title: "Investiční portál RRINVEST",
    slug: "rrinvest-portal",
    year: "2025",
    stack: ["Astro", "React", "Node", "Prisma", "WebRTC"],
    summary: "Soukromý klientský portál s chatem a videohovory.",
    cover: rrCover,
    url: "https://rrinvestments.eu",
    },
    {
    title: "AI Health Companion",
    slug: "ai-health",
    year: "2025",
    stack: ["Next.js", "OpenAI", "Tailwind"],
    summary: "Zdravotní deník s AI pomocníkem.",
    },
    ];
