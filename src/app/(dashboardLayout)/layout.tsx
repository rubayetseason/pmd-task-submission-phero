"use client";
import React, { useEffect, useState } from "react";

import { Layout } from "antd";
import { useRouter } from "next/navigation";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   const userLoggedIn = isLoggedIn();

  //   useEffect(() => {
  //     if (!userLoggedIn) {
  //       router.push("/");
  //     }
  //     setIsLoading(true);
  //   }, [router, userLoggedIn]);

  //   if (!isLoading) {
  //     return <Loading></Loading>;
  //   }

  return (
    <div>
      <h1>Hello from dashboard</h1>
    </div>
    // <Layout style={{ minHeight: "100vh" }} hasSider>
    //   <Sidebar />
    //   <Contents>{children}</Contents>
    // </Layout>
  );
};

export default DashboardLayout;
