import type { Metadata } from "next";
import { AlgorithmsPage } from "@/components/sections/algorithms/AlgorithmsPage";

export const metadata: Metadata = {
  title: "Algorithms",
};

export default function Algorithms() {
  return <AlgorithmsPage />;
}