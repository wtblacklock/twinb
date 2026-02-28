import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "TwinB | Product & Growth Engineering",
  description: "We turn fast built products into scalable systems. Product & Growth Engineering for teams that shipped fast and now need durability, adoption, and scale.",
};

export default function Home() {
  return <HomeClient />;
}
