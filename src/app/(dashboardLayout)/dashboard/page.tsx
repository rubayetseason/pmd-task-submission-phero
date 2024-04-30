import ProjectCard from "@/components/Dashboard/Projects/ProjectCard";

const DashboardHomepage = () => {
  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default DashboardHomepage;
