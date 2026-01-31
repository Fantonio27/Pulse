import { Tool, CategoryColors } from "@/types/allTools";

export const toolsData: Tool[] = [
  {
    id: 1,
    name: "Figma",
    description: "Collaborative design and prototyping tool.",
    category: "Design",
    categoryColor: "purple",
    tags: ["#UI", "#Prototype"],
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCS4hqV_ns5SbGm_f1qujYagEUZ_BJzWtNyly0DvV_2eBYbhMjGP14Ay1P9z3BbUOjhp2CM7fkUKzYdntO4mdjQD7MLgxVEd4h7LrrjFoMvUsG29j6wdMtPyiDOH9oihFEA7_4eu1eZUNSu2Ey2BYME9UkWW2_hLRdUaw5kqsBaNX7bK9vifry1GuGxhbEKAYLQwjDS-HNaZLseXFOYIGSjOYwUA6VwqQNiHhP2UJrZnKmRKl2g8fMYoHa-KPsGbW0qUjuQUyO24AM",
    starred: false,
    url: "https://figma.com",
  },
  {
    id: 2,
    name: "Notion",
    description: "The all-in-one workspace for notes & docs.",
    category: "Productivity",
    categoryColor: "blue",
    tags: ["#Notes", "#Wiki"],
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOp8m3GjP-C-Viwh5rpM7anNmLLQOE9x9lleLOMnBeN250MBeir35wD9Xl-ed-jD_IHF_OXTIPRCDTUd1JH_kq5UE0zWNcylT2FFXuPxncUYTi64ftrzHd-lEvPKFmCiLZCNM3H56nvwRh9K0o2J22Nah46tudtOzUTrdTWMOL5dKcLygDKFFoGL5x5vWoUOImnuux6UivYuco6CjWLfsHTjS7ldA2TS7qnMJzTLPM70WP7oMnhT3z_9r3i5m7wP4mgaS1an0jVX8",
    starred: true,
    url: "https://notion.so",
  },
  {
    id: 3,
    name: "GitHub",
    description: "Version control and source code hosting.",
    category: "Development",
    categoryColor: "slate",
    tags: ["#Git", "#Code"],
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9uvkSd-3fI09u0lGB6jKuLLlyscLSFh2YuLSkHP74uCVly9gK5vHzsrFGffPdIxKIJtBFtYEAv0RhHEMSyX4txaz3RW0viwG7GRhhPLOHqLj7vK2iqh9jVg4dZ5hGmVu-HMSByPM40ft-sd90DT6pqVdKF_d2uMwzTgDHOttLABEa6r9WGCmggc5MuU1Zy75TzY8Ihsvy_Bjc14s6byP2ssKr2WYo_hBY2fUmRA0DTIKTOxBa-WckRNmNEMiyHN2tLdnmg2LUQVc",
    starred: false,
    url: "https://github.com",
  },
  {
    id: 4,
    name: "Substack",
    description: "Email newsletters and publishing platform.",
    category: "Writing",
    categoryColor: "orange",
    tags: ["#Journalism"],
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFzhCgS2B8dNj2vtS5d4i36SgeWE41jvoAgajYGL-17XgRta8D5OFasEXuLIQWrBVY5ER9MBhrVgfWHC39ix_C9wmMZqxuJvQrRuLJGBB92Ny4ExPtRZLilmBXHegdzTPbrDtJaWsjuPMAtl71XIfxPD-XJ7Ieh-OnBXSJpwxuDeobSNTGyjHLEDKHdkboluxyAl9PWRuuD7UeN-q28V0c7mTl8i5iKbjZHex-rlMTlYUh0Jow-vTPCVS55q8VjqW-ksOR4GBnoM",
    starred: true,
    url: "https://substack.com",
  },
  {
    id: 5,
    name: "Mailchimp",
    description: "Email marketing and automation platform.",
    category: "Marketing",
    categoryColor: "emerald",
    tags: ["#Email", "#Automation"],
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFXtTSiOpJHzxeUit0u7DyRzbNXCAATrVk0XKb8CG0YgvzjjpwiVrp4w5Ba0Qvn5cZYFrzdlRyyHz1Ni_OjKensBxCGBqv53xlW37Q4NfckjyOL7_cM-eFutCxRCmTKAZmK4UNpEJXbMYxzaBdZT4rEv9tl1x0OOw_H7hA9AewAKxd3VKrt1rp-JHCcXQS1b3uto2SSra21bmAVX__m71iWYj4-5RtwlQjMHdj3wLvLVUkjjhmPWy_FtA7kmjiseGawDpkFlXr_hk",
    starred: false,
    url: "https://mailchimp.com",
  },
];

export const categories = ["All", "Design", "Productivity", "Development", "Marketing", "Writing"];

export const categoryColors: CategoryColors = {
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-100 dark:border-purple-800",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-100 dark:border-blue-800",
  },
  slate: {
    bg: "bg-slate-100 dark:bg-slate-800/50",
    text: "text-slate-700 dark:text-slate-300",
    border: "border-slate-100 dark:border-slate-700",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-100 dark:border-orange-800",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-100 dark:border-emerald-800",
  },
};
