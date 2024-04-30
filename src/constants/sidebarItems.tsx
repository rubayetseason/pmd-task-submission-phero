import type { MenuProps } from "antd";
import { ProjectOutlined, HighlightOutlined } from "@ant-design/icons";
import Link from "next/link";

export const SidebarItems = () => {
  const projectManagementSidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link href={`/dashboard`}>
          <h1 className="text-lg font-semibold text-white">Projects</h1>
        </Link>
      ),
      icon: (
        <ProjectOutlined
          style={{ color: "white", fontSize: "16pxs" }}
          className="text-xl"
        />
      ),
      key: `/dashboard`,
    },
  ];

  return projectManagementSidebarItems;
};
