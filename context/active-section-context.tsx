"use client";

import React, { useState, createContext, useContext } from "react";
import { SectionName } from "@/lib/types";

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// 创建 context
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// 声明 context Provider
export default function ActiveSectionContextProvider({ children }: any) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// 使用 context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if(context==null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }

  return context;
}
