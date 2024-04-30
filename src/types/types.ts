export interface TaskType {
  id: string;
  taskName: string;
  status: "incomplete" | "in progress" | "done";
  description: string;
  deadline: string;
  assignedMembers: string[];
}

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  tasks: TaskType[];
  teamMembers: string[];
  recentActivities: string[];
}
