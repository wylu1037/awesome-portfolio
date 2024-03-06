"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./ui/SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import useSectionInView from "@/lib/hooks";

export default function Projects() {
  // set animation
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

/* function Project({
  title,
  description,
  tags,
  imageUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}) {
  return <div>{title}</div>;
} */
