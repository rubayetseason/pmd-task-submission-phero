"use client";

import { ProjectType } from "@/types/types";
import { useProjectStore } from "@/zustand/projectStore";
import { useQuery } from "@tanstack/react-query";

const SingleProject = ({ projectId }: { projectId: string }) => {
  const setSingleProjectToStore = useProjectStore(
    (state) => state.setSingleProject
  );

  const pr = useProjectStore((state) => state.singleProject);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["sample"],
    queryFn: async () => {
      const res = fetch(
        "https://run.mocky.io/v3/29d1866c-ffed-4f11-bed8-5f16f5c2af98"
      );
      const data = await (await res).json();
      return data;
    },
  });

  console.log(projects);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const project = projects?.find((project: ProjectType) => {
    return project.id === projectId;
  });
  setSingleProjectToStore(project);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Project Name: {pr?.name}</h1>
        <h1 className="text-lg font-normal text-gray-400">{pr?.description}</h1>
      </div>
    </div>
  );
};

export default SingleProject;
