"use client";

import { useState } from "react";
import EditProjectModal from "./EditProjectModal";
import DeleteProjectModal from "./DeleteModal";

const ProjectCard = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const showDeleleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-5 border-[1px] border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold">Project Name</h1>
      <p className="pt-1 text-gray-500 text-base font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
        quaerat?
      </p>
      <div className="pt-3 flex items-center gap-2">
        <button className="px-4 py-2 text-white bg-[#18181B] hover:bg-black rounded-md text-base font-medium">
          View
        </button>
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
      <EditProjectModal open={open} setOpen={setOpen} />
      <DeleteProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default ProjectCard;
