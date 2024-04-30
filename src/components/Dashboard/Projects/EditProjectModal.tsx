"use client";

import { Modal } from "antd";
import React from "react";

interface EditProjectModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({
  open,
  setOpen,
}) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <Modal
      title="Edit Project"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelButtonProps={{
        style: {
          backgroundColor: "#DC2626",
          color: "white",
        },
      }}
      okButtonProps={{
        style: { backgroundColor: "#18181B", color: "white" },
      }}
    >
      <form>
        <label htmlFor="title">Project Title</label>
        <input
          className="w-full py-2 px-5 border-[1px] border-gray-300 rounded-md focus:outline-none"
          type="text"
          placeholder="Project Title"
          name="title"
          id="title"
        />
        <div className="py-3">
          <label htmlFor="description">Project Description</label>
          <input
            className="w-full py-2 px-5 border-[1px] border-gray-300 rounded-md focus:outline-none"
            type="text"
            placeholder="Project Description"
            name="description"
            id="description"
          />
        </div>
      </form>
    </Modal>
  );
};

export default EditProjectModal;
