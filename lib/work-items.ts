export type WorkItem = {
  client: string;
  title: string;
  category: string;
  scope: string;
  website: string;
  outcomeStats: Array<{ label: string; value: string }>;
  href: string;
  visualClassName: string;
};

export const workItems: WorkItem[] = [
  {
    client: "Axiom Logistics",
    title: "AI agent network for autonomous logistics dispatch",
    category: "AI Engineering",
    scope: "Custom multi-agent system for dispatch automation and route optimization",
    website: "axiomlogistics.io",
    outcomeStats: [
      { label: "Dispatch", value: "-80%" },
      { label: "Cost", value: "-35%" },
      { label: "Throughput", value: "4x" },
      { label: "Errors", value: "-62%" },
    ],
    href: "/work/axiom-logistics",
    visualClassName: "bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600",
  },
  {
    client: "LexCore",
    title: "LLM fine-tuning for legal document review",
    category: "AI Engineering",
    scope: "Domain-specific model fine-tuning and production deployment for legal AI",
    website: "lexcore.ai",
    outcomeStats: [
      { label: "Review", value: "-70%" },
      { label: "Accuracy", value: "+18%" },
      { label: "Time", value: "-55%" },
      { label: "Cost", value: "-40%" },
    ],
    href: "/work/lexcore",
    visualClassName: "bg-gradient-to-br from-sky-900 via-indigo-700 to-violet-600",
  },
  {
    client: "Meridian Homes",
    title: "AI transformation of a regional homebuilder",
    category: "AI Transformation",
    scope: "Full AI transformation across sales, operations, and design workflows",
    website: "meridianhomes.co",
    outcomeStats: [
      { label: "Manual", value: "-60%" },
      { label: "Sales", value: "+22%" },
      { label: "Speed", value: "+31%" },
      { label: "NPS", value: "+18%" },
    ],
    href: "/work/meridian-homes",
    visualClassName: "bg-gradient-to-br from-orange-900 via-amber-700 to-yellow-500",
  },
  {
    client: "PulseData",
    title: "Data engineering platform with AI-driven analytics",
    category: "AI Engineering",
    scope: "Data pipeline rebuild and AI analytics layer for enterprise reporting",
    website: "pulsedata.io",
    outcomeStats: [
      { label: "Query", value: "-75%" },
      { label: "Pipeline", value: "10x" },
      { label: "Reports", value: "-90%" },
      { label: "Latency", value: "-65%" },
    ],
    href: "/work/pulsedata",
    visualClassName: "bg-gradient-to-br from-teal-900 via-cyan-700 to-blue-500",
  },
  {
    client: "CareLink Health",
    title: "AI workflow automation for healthcare operations",
    category: "AI Transformation",
    scope: "Process automation and AI tooling for clinical and administrative workflows",
    website: "carelink.health",
    outcomeStats: [
      { label: "Admin", value: "-52%" },
      { label: "Wait", value: "-34%" },
      { label: "Audit", value: "Pass" },
      { label: "Staff", value: "2.1x" },
    ],
    href: "/work/carelink-health",
    visualClassName: "bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500",
  },
  {
    client: "Capsule",
    title: "Embedded AI engineering pod for a high-growth SaaS startup",
    category: "AI Engineering",
    scope: "Outcome-based AI engineering team delivering features on story-point pricing",
    website: "capsule.so",
    outcomeStats: [
      { label: "Velocity", value: "3x" },
      { label: "Features", value: "+40%" },
      { label: "Time", value: "-20%" },
      { label: "Cost", value: "-30%" },
    ],
    href: "/work/capsule",
    visualClassName: "bg-gradient-to-br from-fuchsia-900 via-purple-700 to-pink-600",
  },
];
