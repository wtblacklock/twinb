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
  { id: "finetuning", label: "From SDLC to AI DLC" },
  { id: "migration", label: "Code Migration + Refactors" },
  { id: "data", label: "Data Engineering + Analysis" },
  { id: "agentic", label: "Custom Agentic Solutions" },
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
      megaLabel: "AI Engineering",
      megaDescription: "Elite squads who use AI to build AI. You pay for features in production, not hours in Zoom.",
    },
    {
      title: "AI Transformation",
      href: "/ai-transformation",
      type: "mega",
      anchors: transformationAnchors,
      megaLabel: "AI Transformation",
      megaDescription: "From AI-absent to AI-native. People, processes, and products — all three, or none of it sticks.",
    },
    { title: "About", href: "/about", type: "link" },
    { title: "Contact", href: "/contact", type: "link" },
  ] as NavItem[],
  // kept for any pages still referencing these directly
  engineeringAnchors,
  transformationAnchors,
};
