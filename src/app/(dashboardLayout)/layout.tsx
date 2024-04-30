"use client";
import React, { useEffect, useState } from "react";

import { Layout } from "antd";
// import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import Sidebar from "@/components/Dashboard/Sidebar";
import Contents from "@/components/Dashboard/Contents";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const userLoggedIn = isLoggedIn();

  // useEffect(() => {
  //   if (!userLoggedIn) {
  //     router.push("/");
  //   }
  //   setIsLoading(true);
  // }, [router, userLoggedIn]);

  // if (!isLoading) {
  //   return <Loading></Loading>;
  // }

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
