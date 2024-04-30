import { ProjectType } from "@/types/types";
import { create } from "zustand";

type ProjectStoreType = {
  projects: ProjectType[];
  addProject: (newProjects: ProjectType[]) => void;
  updateProject: (updatedProject: ProjectType) => void;
  deleteProject: (projectId: string) => void;
};

export const useProjectStore = create<ProjectStoreType>((set) => ({
  projects: [],
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
}));
