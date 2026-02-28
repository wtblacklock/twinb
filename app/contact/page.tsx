import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TwinB for general inquiries, partnerships, or to discuss your product.",
};

export default function ContactPage() {
  return <ContactClient />;
}
