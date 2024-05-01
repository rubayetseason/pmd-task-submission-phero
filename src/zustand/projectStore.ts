import { ProjectType, TaskType } from "@/types/types";
import { create } from "zustand";

type ProjectStoreType = {
  projects: ProjectType[];
  singleProject: ProjectType | null;
  addProject: (newProjects: ProjectType[]) => void;
  updateProject: (updatedProject: ProjectType) => void;
  deleteProject: (projectId: string) => void;
  setSingleProject: (project: ProjectType | null) => void;
  addTask: (task: TaskType) => void;
  deleteTask: (taskId: string) => void;
  assignTaskMembers: (taskId: string, members: string[]) => void;
  editTask: (updatedTask: TaskType) => void;
};

export const useProjectStore = create<ProjectStoreType>((set) => ({
  projects: [],
  singleProject: null,
  addProject(newProjects: ProjectType[]) {
    set({ projects: newProjects });
  },
  updateProject(updatedProject: ProjectType) {
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      ),
    }));
  },
  deleteProject(projectId: string) {
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== projectId),
    }));
  },
  setSingleProject: (project: ProjectType | null) =>
    set({ singleProject: project }),

  addTask: (task: TaskType) =>
    set((state) => {
      if (state.singleProject) {
        return {
          singleProject: {
            ...state.singleProject,
            tasks: [...state.singleProject.tasks, task],
          },
        };
      }
      return {};
    }),
  deleteTask: (taskId: string) =>
    set((state) => {
      if (state.singleProject) {
        return {
          singleProject: {
            ...state.singleProject,
            tasks: state.singleProject.tasks.filter(
              (task) => task.id !== taskId
            ),
          },
        };
      }
      return {};
    }),

  editTask: (updatedTask: TaskType) =>
    set((state) => {
      if (state.singleProject) {
        const updatedTasks = state.singleProject.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
        return {
          singleProject: {
            ...state.singleProject,
            tasks: updatedTasks,
          },
        };
      }
      return {};
    }),

  assignTaskMembers: (taskId: string, members: string[]) =>
    set((state) => {
      if (state.singleProject) {
        const updatedTasks = state.singleProject.tasks.map((task) =>
          task.id === taskId ? { ...task, assignedMembers: members } : task
        );
        return {
          singleProject: {
            ...state.singleProject,
            tasks: updatedTasks,
          },
        };
      }
      return {}; // No action if no project selected
    }),
}));
