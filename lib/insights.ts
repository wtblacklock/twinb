export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export const articles: Article[] = [
  {
    slug: "technical-debt-is-growth-debt",
    title: "Technical Debt is Growth Debt",
    excerpt: "Why ignoring your codebase health is the single biggest blocker to scaling revenue.",
    date: "Oct 12, 2024",
    category: "Engineering",
  },
  {
    slug: "metrics-that-matter",
    title: "The Only 3 Metrics That Matter for Early Scale",
    excerpt: "Forget vanity metrics. Here is what you need to track to know if your product is actually working.",
    date: "Sep 28, 2024",
    category: "Growth",
  },
  {
    slug: "monolith-to-microservices",
    title: "You Probably Don't Need Microservices Yet",
    excerpt: "The case for the majestic monolith and when it actually makes sense to break it apart.",
    date: "Sep 15, 2024",
    category: "Architecture",
  },
];
