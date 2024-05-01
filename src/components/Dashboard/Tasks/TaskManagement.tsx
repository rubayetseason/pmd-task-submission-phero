import { ProjectType } from "@/types/types";

interface ITaskProps {
  projectData: ProjectType;
}

const TaskManagement: React.FC<ITaskProps> = ({ projectData }) => {
  console.log(projectData);

  return (
    <div>
      <h1 className="pt-10 pb-5 text-2xl font-bold">Task Management</h1>
    </div>
  );
};

export default TaskManagement;
