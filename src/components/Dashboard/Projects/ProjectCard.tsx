"use client";

import { useState } from "react";
import EditProjectModal from "./EditProjectModal";
import DeleteProjectModal from "./DeleteModal";
import { ProjectType } from "@/types/types";
import Link from "next/link";
import { useProjectStore } from "@/zustand/projectStore";
import { Tooltip } from "antd";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const updateProject = useProjectStore((state) => state.updateProject);

  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const showDeleleModal = () => {
    setIsModalOpen(true);
  };

  const handleProjectSubmit = (updatedProject: ProjectType) => {
    updateProject(updatedProject);
  };

  return (
    <div className="p-7 border-[1px] border-gray-300 rounded-md">
      <Tooltip title={project.name}>
        <h1 className="text-2xl font-bold">{project?.name}</h1>
      </Tooltip>
      <p className="pt-2 text-gray-400 text-lg font-normal">
        {project?.description}
      </p>
      <div className="pt-10 flex items-center gap-2">
        <Link href={`/dashboard/project/${project?.id}`}>
          <button className="px-4 py-2 text-white bg-[#18181B] hover:bg-black rounded-md text-base font-medium">
            View
          </button>
        </Link>
        <button
          onClick={showModal}
          className="px-4 py-2 text-white bg-[#18181B] hover:bg-black rounded-md text-base font-medium"
        >
          Edit
        </button>
        <button
          onClick={showDeleleModal}
          className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md text-base font-medium"
        >
          Delete
        </button>
      </div>
      <EditProjectModal
        open={open}
        setOpen={setOpen}
        project={project}
        onSubmit={handleProjectSubmit}
      />
      <DeleteProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        projectId={project?.id}
      />
    </div>
  );
};

export default ProjectCard;
