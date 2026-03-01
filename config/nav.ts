export type NavAnchor = { id: string; label: string };

export type NavItem =
  | { title: string; href: string; type: "link" }
  | {
      title: string;
      href: string;
      type: "mega";
      anchors: NavAnchor[];
      megaLabel: string;
      megaDescription: string;
    };

const engineeringAnchors: NavAnchor[] = [
  { id: "fullstack", label: "Application Development" },
  { id: "finetuning", label: "Fine-Tuning & Model Work" },
  { id: "migration", label: "Code Migration & Refactors" },
  { id: "data", label: "Data Engineering & Analysis" },
  { id: "agentic", label: "Custom Agentic Solutions" },
  { id: "delivery", label: "Delivery Model" },
];

const transformationAnchors: NavAnchor[] = [
  { id: "strategy", label: "AI Strategy" },
  { id: "product-tx", label: "Product Transformation" },
  { id: "process-tx", label: "Process Transformation" },
  { id: "people", label: "People & Training" },
  { id: "tooling", label: "AI Tooling" },
  { id: "roadmap", label: "Implementation Roadmap" },
];

export const navConfig = {
  mainNav: [
    {
      title: "AI Engineering",
      href: "/ai-engineering",
      type: "mega",
      anchors: engineeringAnchors,
      megaLabel: "Engineering Excellence",
      megaDescription: "Outcome-based squads that ship AI features faster. You pay for features delivered, not hours logged.",
    },
    {
      title: "AI Transformation",
      href: "/ai-transformation",
      type: "mega",
      anchors: transformationAnchors,
      megaLabel: "Transformation Systems",
      megaDescription: "From AI-absent to AI-native. Strategy, process, and people transformation at startup speed.",
    },
    { title: "Work", href: "/work", type: "link" },
    { title: "Process", href: "/process", type: "link" },
    { title: "Insights", href: "/insights", type: "link" },
    { title: "About", href: "/about", type: "link" },
    { title: "Contact", href: "/contact", type: "link" },
  ] as NavItem[],
  // kept for any pages still referencing these directly
  engineeringAnchors,
  transformationAnchors,
};
