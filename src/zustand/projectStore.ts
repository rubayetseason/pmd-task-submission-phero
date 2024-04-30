// import { ProjectType } from "@/types/types";
// import { create } from "zustand";

// import { devtools, persist } from "zustand/middleware";

// const projectStore = (set: any) => ({
//   allProjects: [],
//   deleteProject: (projectId: string) => {
//     set((state: any) => ({
//       projects: state.projects.filter(
//         (project: ProjectType) => project.id !== projectId
//       ),
//     }));
//   },
// });

// const useProjectStore = create(
//   devtools(
//     persist(projectStore, {
//       name: "projectStore",
//     })
//   )
// );

// export default useProjectStore;
