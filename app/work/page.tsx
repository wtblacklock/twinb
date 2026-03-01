import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in fixing, stabilizing, and scaling products. See how TwinB has helped teams turn fragile builds into durable systems.",
};

export default function WorkPage() {
  return <WorkClient />;
}
