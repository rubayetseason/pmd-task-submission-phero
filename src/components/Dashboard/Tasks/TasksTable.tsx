"use client";

import { TaskType } from "@/types/types";
import { useProjectStore } from "@/zustand/projectStore";

const TasksTable = () => {
  const singleProject = useProjectStore((state) => state.singleProject);

  const taskData = singleProject?.tasks;
  console.log(taskData);

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
      <div className="pt-9">
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
                    <button className="py-1 px-5 rounded-md text-sm font-medium bg-[#18181B] hover:bg-black text-white">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksTable;
