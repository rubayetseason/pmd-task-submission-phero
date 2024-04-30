"use client";

import { ProjectType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SingleProject = ({ projectId }: { projectId: string }) => {
  const [projectData, setProjectData] = useState<ProjectType[] | null>(null);
  const [singleProject, setSingleProject] = useState<ProjectType | null>(null);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("projects.json");
      const data = await res.json();
      setProjectData(data);
      return data;
    },
  });

  console.log(projectData);
  console.log(projects);
  console.log(projectId);

  const project = projects?.find((project: ProjectType) => {
    return project.id === projectId;
  });
  console.log(project);

  return <div>Hellooooo</div>;
};

export default SingleProject;
