import type { Metadata } from "next";
import { ExperiencePage } from "@/components/sections/experience/ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
};

export default function Experience() {
  return <ExperiencePage />;
}