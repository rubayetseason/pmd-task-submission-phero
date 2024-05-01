import SingleProject from "@/components/Dashboard/Projects/SingleProject";

type IdProps = {
  params: { projectId: string };
};

const ProjectSinglePage: React.FC<IdProps> = ({ params: { projectId } }) => {
  return (
    <div>
      <div>
        <SingleProject projectId={projectId} />
      </div>
    </div>
  );
};

export default ProjectSinglePage;
