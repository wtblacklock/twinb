export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export const articles: Article[] = [
  {
    slug: "ai-absent-to-ai-native",
    title: "From AI-Absent to AI-Native: The Only Strategy That Matters",
    excerpt: "As the cost of intelligence approaches zero, the companies that win won't be the ones with the best AI tools — they'll be the ones that restructured around them first.",
    date: "Jan 14, 2025",
    category: "AI Strategy",
  },
  {
    slug: "why-most-ai-projects-fail",
    title: "Why 80% of AI Projects Fail Before They Ship",
    excerpt: "Proof-of-concept is easy. Production is hard. Here's why most AI initiatives die in the demo phase — and what actually gets them to deployment.",
    date: "Dec 9, 2024",
    category: "AI Engineering",
  },
  {
    slug: "outcome-based-engineering",
    title: "The Case for Outcome-Based Engineering",
    excerpt: "Billing by the hour is a broken incentive. Here's why story-point pricing aligns your engineering partner's interests with yours — and how to make it work.",
    date: "Nov 21, 2024",
    category: "Engineering",
  },
];
