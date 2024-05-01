import { TaskType } from "@/types/types";
import { Modal, Form, Input } from "antd";
import React from "react";

interface EditTaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  task?: TaskType;
  onSubmit: (updatedTask: TaskType) => void;
}

const TaskEditModal: React.FC<EditTaskModalProps> = ({
  open,
  setOpen,
  task,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (task) {
      form.setFieldsValue({
        taskName: task.taskName, // Use 'taskName' here
        description: task.description,
      });
    }
  }, [task, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedTask = {
          ...task,
          ...values,
        };
        onSubmit(updatedTask);
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
      title="Edit Task"
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
      okText="Save"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Task Title"
          name="taskName"
          rules={[{ required: true, message: "Please enter a task title" }]}
        >
          <Input placeholder="Task Title" />
        </Form.Item>
        <Form.Item label="Task Description" name="description">
          <Input.TextArea placeholder="Task Description" rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskEditModal;
