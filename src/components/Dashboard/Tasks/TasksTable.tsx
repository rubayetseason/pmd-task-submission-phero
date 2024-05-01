"use client";

import { TaskType } from "@/types/types";
import { useProjectStore } from "@/zustand/projectStore";
import TaskEditModal from "./TaskEditModal";
import { useState } from "react";
import { toast } from "sonner";
import { DatePicker, DatePickerProps } from "antd";
import { useDebounced } from "@/hooks/useDebounced";

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

  // Date and search logic
  const [date, setDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounced({ searchQuery, delay: 300 });

  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    // @ts-ignore
    setDate(dateString);
  };

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  // Status filter logic
  const [status, setStatus] = useState("");

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  // Filter tasks based on status and search query
  const filteredTasks = taskData
    ?.filter((task) => status === "" || task.status === status)
    .filter((task) =>
      task.taskName.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    )
    .filter((task) => date === "" || task.deadline === date);

  return (
    <div>
      <div className="flex items-center gap-5">
        <div>
          <input
            id="taskName"
            name="taskName"
            className="px-5 py-2 text-[#18181B] bg-white placeholder-gray-400 hover:bg-white rounded-md text-base font-medium outline-none border-[1px] border-gray-300"
            type="text"
            placeholder="Search Task Name"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div>
          <select
            className="px-5 py-2 text-[#18181B] bg-white placeholder-gray-400 hover:bg-white rounded-md text-base font-medium outline-none border-[1px] border-gray-300"
            name="status"
            id="status"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="" defaultChecked>
              Select Status
            </option>
            <option value="incomplete">Incomplete</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <DatePicker
          className="px-5 py-2 text-[#18181B] bg-white placeholder-gray-400 hover:bg-white rounded-md text-base font-medium outline-none border-[1px] border-gray-300"
          onChange={handleDateChange}
        />
      </div>

      <div className="pt-9 overflow-x-auto sm:overflow-x-visible">
        {filteredTasks && filteredTasks.length > 0 ? (
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
                    Status
                  </th>
                  <th className="px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks &&
                  filteredTasks.map((task: TaskType) => (
                    <tr
                      key={task.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="px-4 py-4 text-lg">{task.taskName}</td>
                      <td className="px-4 py-4 text-lg">{task.description}</td>
                      <td className="px-4 py-4 text-lg">{task.deadline}</td>
                      <td className="px-4 py-4 text-lg">{task.status}</td>
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
