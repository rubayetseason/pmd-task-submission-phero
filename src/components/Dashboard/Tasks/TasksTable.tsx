"use client";

import { TaskType } from "@/types/types";
import { useProjectStore } from "@/zustand/projectStore";
import TaskEditModal from "./TaskEditModal";
import { useState } from "react";
import { toast } from "sonner";

const TasksTable = () => {
  const editTask = useProjectStore((state) => state.editTask);
  const singleProject = useProjectStore((state) => state.singleProject);

  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  const taskData = singleProject?.tasks;

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleEditClick = (task: TaskType) => {
    showModal();
    setSelectedTask(task);
  };

  const handleProjectSubmit = (updatedProject: TaskType) => {
    editTask(updatedProject);
    toast.success("Task updated successfully");
  };

  return (
    <div>
      <div className="flex items-center gap-5">
        <h1>Filters</h1>
        <h1>Filters</h1>
        <h1>Filters</h1>
        <h1>Filters</h1>
        <button className="px-5 py-2 text-white bg-[#18181B] hover:bg-black rounded-md text-base font-medium">
          Filters
        </button>
      </div>
      <div className="pt-9 overflow-x-auto sm:overflow-x-visible">
        {taskData && taskData.length > 0 ? (
          <div>
            {" "}
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider">
                    Task Name
                  </th>
                  <th className="px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {taskData &&
                  taskData.map((task: TaskType) => (
                    <tr
                      key={task.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="px-4 py-4 text-lg">{task.taskName}</td>
                      <td className="px-4 py-4 text-lg">{task.description}</td>
                      <td className="px-4 py-4 text-lg">{task.deadline}</td>
                      <td className="px-4 py-4 text-lg">
                        <button
                          onClick={handleEditClick.bind(this, task)}
                          className="py-1 px-5 rounded-md text-sm font-medium bg-[#18181B] hover:bg-black text-white"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold">No tasks found</h1>
          </div>
        )}
      </div>
      {selectedTask && (
        <TaskEditModal
          open={open}
          setOpen={setOpen}
          task={selectedTask}
          onSubmit={handleProjectSubmit}
        />
      )}
    </div>
  );
};

export default TasksTable;
