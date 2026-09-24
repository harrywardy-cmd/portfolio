import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactPage />;
}