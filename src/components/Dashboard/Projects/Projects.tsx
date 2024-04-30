"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "@/types/types";
import { useProjectStore } from "@/zustand/projectStore";
import LoadingCards from "./LoadingCards";

const Projects = () => {
  const addProject = useProjectStore((state) => state.addProject);
  const projectData = useProjectStore((state) => state.projects);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = fetch("projects.json");
      const data = await (await res).json();
      addProject(data);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <LoadingCards />
      </div>
    );

  return (
    <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projectData && projectData.length > 0 ? (
        projectData.map((project: ProjectType) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-red-600">
            Oops! No data avilable
          </h1>
        </div>
      )}
    </div>
  );
};

export default Projects;