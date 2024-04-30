"use client";
const ProjectCard = () => {
  return (
    <div className="p-5 border-[1px] border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold">Project Name</h1>
      <p className="pt-1 text-gray-500 text-base font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
        quaerat?
      </p>
      <div className="pt-3 flex items-center gap-2">
        <button className="px-4 py-2 text-white bg-[#18181B] hover:bg-black rounded-md text-base font-medium">
          View
        </button>
        <button className="px-4 py-2 text-white bg-[#18181B] hover:bg-black rounded-md text-base font-medium">
          Edit
        </button>
        <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md text-base font-medium">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
