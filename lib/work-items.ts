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
    client: "Binthere",
    title: "Scaling a logistics platform from MVP to Enterprise",
    category: "Product Engineering",
    scope: "MVP stabilization, platform architecture, and enterprise scaling",
    website: "binthere.ai",
    outcomeStats: [
      { label: "Load", value: "3x" },
      { label: "Uptime", value: "99.99%" },
      { label: "P95", value: "-42%" },
      { label: "Cost", value: "-28%" },
    ],
    href: "/work/binthere",
    visualClassName: "bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600",
  },
  {
    client: "Keep22",
    title: "Retention systems for a subscription fintech app",
    category: "Growth Engineering",
    scope: "Retention loops, lifecycle messaging, and churn prevention",
    website: "keep22.com",
    outcomeStats: [
      { label: "Ret", value: "+15%" },
      { label: "Conv", value: "+9%" },
      { label: "CAC", value: "-12%" },
      { label: "LTV", value: "+18%" },
    ],
    href: "/work/keep22",
    visualClassName: "bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500",
  },
  {
    client: "Beast Putty",
    title: "E-commerce conversion optimization & headless migration",
    category: "Growth & Brand",
    scope: "Headless commerce migration and conversion optimization",
    website: "beastputty.com",
    outcomeStats: [
      { label: "Conv", value: "+40%" },
      { label: "AOV", value: "+14%" },
      { label: "Speed", value: "+31%" },
      { label: "Bounce", value: "-22%" },
    ],
    href: "/work/beast-putty",
    visualClassName: "bg-gradient-to-br from-orange-900 via-amber-700 to-yellow-500",
  },
  {
    client: "FinStack",
    title: "Reducing API latency for high-frequency trading",
    category: "Product Engineering",
    scope: "Low-latency API optimization and infrastructure hardening",
    website: "finstack.io",
    outcomeStats: [
      { label: "P95", value: "-60%" },
      { label: "Err", value: "-48%" },
      { label: "TPS", value: "+33%" },
      { label: "MTTR", value: "-41%" },
    ],
    href: "/work/finstack",
    visualClassName: "bg-gradient-to-br from-sky-900 via-indigo-700 to-violet-600",
  },
  {
    client: "HealthCore",
    title: "Infrastructure hardening for SOC2 compliance",
    category: "Product Engineering",
    scope: "Security controls, observability, and compliance workflows",
    website: "healthcore.app",
    outcomeStats: [
      { label: "Audit", value: "Pass" },
      { label: "Incidents", value: "-52%" },
      { label: "Uptime", value: "99.97%" },
      { label: "Alert", value: "-36%" },
    ],
    href: "/work/healthcore",
    visualClassName: "bg-gradient-to-br from-teal-900 via-cyan-700 to-blue-500",
  },
  {
    client: "SaaS Flow",
    title: "Automating sales operations with n8n",
    category: "Growth Engineering",
    scope: "Automation architecture for CRM, sales ops, and handoffs",
    website: "saasflow.dev",
    outcomeStats: [
      { label: "Manual", value: "-80%" },
      { label: "SLA", value: "+24%" },
      { label: "Ops", value: "2.4x" },
      { label: "Errors", value: "-58%" },
    ],
    href: "/work/saas-flow",
    visualClassName: "bg-gradient-to-br from-fuchsia-900 via-purple-700 to-pink-600",
  },
];
