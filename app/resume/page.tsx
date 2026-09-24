import type { Metadata } from "next";
import { ResumePage } from "@/components/sections/resume/ResumePage";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return <ResumePage />;
}