"use client";

import ProjectCard from "@/components/Dashboard/Projects/ProjectCard";
import Projects from "@/components/Dashboard/Projects/Projects";

const DashboardHomepage = () => {
  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Projects />
    </div>
  );
};

export default DashboardHomepage;
