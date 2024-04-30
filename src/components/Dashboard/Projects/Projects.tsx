"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "@/types/types";
import { useState } from "react";

const Projects = () => {
  const [projectData, setProjectData] = useState<ProjectType[] | null>([]);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = fetch("projects.json");
      const data = await (await res).json();
      setProjectData(data.projects);
      return data;
    },
  });

  return (
    <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects &&
        projectData?.map((project: ProjectType) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
    </div>
  );
};

export default Projects;
