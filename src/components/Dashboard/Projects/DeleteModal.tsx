"use client";

import { useProjectStore } from "@/zustand/projectStore";
import { Modal } from "antd";

interface EditProjectModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectId: string;
}

const DeleteProjectModal: React.FC<EditProjectModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  projectId,
}) => {
  const deleteProject = useProjectStore((state) => state.deleteProject);

  const handleOk = () => {
    setIsModalOpen(false);
    deleteProject(projectId);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Delete Project"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelButtonProps={{
        style: {
          backgroundColor: "#18181B",
          color: "white",
        },
      }}
      okButtonProps={{
        style: { backgroundColor: "#DC2626", color: "white" },
      }}
      okText="Delete"
      cancelText="Cancel"
    >
      <p className="py-5 text-red-600 text-lg font-normal">
        Are you sure you want to delete the project?
      </p>
    </Modal>
  );
};

export default DeleteProjectModal;
