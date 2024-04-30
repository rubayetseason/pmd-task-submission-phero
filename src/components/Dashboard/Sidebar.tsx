"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { SidebarItems } from "@/constants/sidebarItems";
import Link from "next/link";
// import { SidebarItems } from "@/constants/sidebarItems";
// import { getUserInfo } from "@/services/auth.services";

const { Sider } = Layout;

const Sidebar = () => {
  //   const { role } = getUserInfo() as any;

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
      style={{
        backgroundColor: "#18181B",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <Link href="/dashboard">
        <div
          className="text-white"
          style={{
            fontSize: "1.35rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          Dashboard
        </div>
      </Link>
      <Menu
        theme="dark"
        style={{
          backgroundColor: "#18181B",
        }}
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={SidebarItems()}
      />
    </Sider>
  );
};

export default Sidebar;
