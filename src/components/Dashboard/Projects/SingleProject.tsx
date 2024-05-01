"use client";

import { ProjectType } from "@/types/types";
import { useProjectStore } from "@/zustand/projectStore";
import { useQuery } from "@tanstack/react-query";
import TaskManagement from "../Tasks/TaskManagement";
import { Skeleton } from "antd";

const SingleProject = ({ projectId }: { projectId: string }) => {
  const setSingleProjectToStore = useProjectStore(
    (state) => state.setSingleProject
  );

  const pr = useProjectStore((state) => state.singleProject);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = fetch("https://mockserver-ten.vercel.app/projects");
      const data = await (await res).json();

      const project = data?.find((project: ProjectType) => {
        return project.id === projectId;
      });
      setSingleProjectToStore(project);

      return data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <div className="py-5">
          <Skeleton active />
        </div>
        <div className="py-5">
          <Skeleton active />
        </div>
        <div className="py-5">
          <Skeleton active />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="pb-1 text-xl font-bold">Project ID: {pr?.id}</h1>
        <h1 className="text-3xl font-bold">Project Name: {pr?.name}</h1>
        <h1 className="pt-4 text-lg font-normal text-gray-400">
          {pr?.description}
        </h1>
        <h1 className="pt-3 text-lg font-normal">
          <span className="font-medium"> Project Members:</span>{" "}
          {pr?.teamMembers?.map((member) => member).join(", ")}
        </h1>
        <h1 className="pt-4 text-lg font-normal">
          <span className="font-medium pb-1"> Recent Activities:</span>
          {pr?.recentActivities?.map((activity, index) => (
            <div className="pt-1" key={index}>
              {index + 1}. {activity}
            </div>
          ))}
        </h1>
      </div>
      <div>{pr && <TaskManagement projectData={pr} />}</div>
    </div>
  );
};

export default SingleProject;
