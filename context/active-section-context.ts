"use client";
import React, { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = typeof links[number]["name"];

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActivnSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({ children }: any) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return { children };
}
