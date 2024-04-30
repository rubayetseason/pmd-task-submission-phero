"use client";

import { ProjectType } from "@/types/types";
import { Modal, Form, Input } from "antd";
import React from "react";

interface EditProjectModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project?: ProjectType;
  onSubmit: (updatedProject: ProjectType) => void;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({
  open,
  setOpen,
  project,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (project) {
      form.setFieldsValue({
        name: project.name,
        description: project.description,
      });
    }
  }, [project, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedProject = {
          ...project,
          ...values,
        };
        onSubmit(updatedProject);
        setOpen(false);
      })
      .catch(() => {
        console.error("Failed form validation");
      });
  };

  const handleCancel = () => {
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
      <Form form={form} layout="vertical">
        <Form.Item
          label="Project Title"
          name="name"
          rules={[{ required: true, message: "Please enter a project title" }]}
        >
          <Input placeholder="Project Title" />
        </Form.Item>
        <Form.Item label="Project Description" name="description">
          <Input.TextArea placeholder="Project Description" rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProjectModal;
