"use client";

import { ProjectType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type IdProps = {
  params: { projectId: string };
};

const ProjectSinglePage: React.FC<IdProps> = ({ params: { projectId } }) => {
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

  console.log(projects)

  return <div>hi {projectId}</div>;
};

export default ProjectSinglePage;
