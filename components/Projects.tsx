import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section className="">
      <SectionHeading>My Projects</SectionHeading>

      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

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

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return <article>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>{tags.map((tag:string, index:number)=>(
        <li key={index}>{tag}</li>
    ))}</ul>

  </article>;
}
