import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
