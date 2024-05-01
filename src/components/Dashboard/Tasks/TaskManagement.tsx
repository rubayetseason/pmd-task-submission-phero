import { ProjectType } from "@/types/types";
import { KanbanBoard } from "./KanbanBoard";

interface ITaskProps {
  projectData: ProjectType;
}

const TaskManagement: React.FC<ITaskProps> = ({ projectData }) => {
  return (
    <div>
      <h1 className="pt-10 pb-5 text-2xl font-bold">Task Management</h1>
      <div className="flex items-center gap-5">
        <h1>Filters</h1>
        <h1>Filters</h1>
        <h1>Filters</h1>
        <h1>Filters</h1>
        <button className="px-5 py-2 text-white bg-[#18181B] hover:bg-black rounded-md text-base font-medium">
          Filters
        </button>
      </div>
      <div className="py-10">
        <KanbanBoard projectData={projectData} />
      </div>
    </div>
  );
};

export default TaskManagement;
