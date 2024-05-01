"use client";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold">Page not found!</h2>
      <button
        onClick={() => {
          router.push("/dashboard");
        }}
        className="bg-[#18181B] text-white hover:bg-black px-4 py-2 rounded-md text-base font-medium"
      >
        Return to dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;
