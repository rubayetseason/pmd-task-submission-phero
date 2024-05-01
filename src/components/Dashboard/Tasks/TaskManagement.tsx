import { ProjectType } from "@/types/types";
import { KanbanBoard } from "./KanbanBoard";
import TasksTable from "./TasksTable";

interface ITaskProps {
  projectData: ProjectType;
}

const TaskManagement: React.FC<ITaskProps> = ({ projectData }) => {
  return (
    <div>
      <h1 className="pt-10 pb-5 text-2xl font-bold">Task Management</h1>
      <div>
        <TasksTable />
      </div>

      <div className="py-10">
        <KanbanBoard projectData={projectData} />
      </div>
    </div>
  );
};

export default TaskManagement;
