import type { MenuProps } from "antd";
import { ProjectOutlined, HighlightOutlined } from "@ant-design/icons";
import Link from "next/link";

export const SidebarItems = () => {
  const projectManagementSidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link href={`/asdasdasd/admin`}>
          <h1 className="text-lg font-semibold text-white">Projects</h1>
        </Link>
      ),
      icon: (
        <ProjectOutlined
          style={{ color: "white", fontSize: "16pxs" }}
          className="text-xl"
        />
      ),
      key: `/asdasdasd/admin`,
    },
    {
      label: (
        <Link href={`/asdasdasd/user`}>
          {" "}
          <h1 className="text-lg text-white font-semibold my-4">Tasks</h1>
        </Link>
      ),
      icon: (
        <HighlightOutlined
          style={{ color: "white", fontSize: "16" }}
          className="text-xl"
        />
      ),
      key: `/asdasdasd/user`,
    },
  ];

  return projectManagementSidebarItems;
};
