import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
  Tooltip,
  theme,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("antd_token");
    router.push("/");
  };


  return (
    <AntHeader style={{ padding: 0, background: colorBgContainer }}>
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
          paddingRight: "10px",
        }}
      >
        <Tooltip title="Signout" placement="bottom">
          <button
            onClick={logOut}
            className="bg-red-600 hover:bg-red-700 px-3 py-[0.4rem] text-base text-white rounded-md"
          >
            Sign Out
          </button>
        </Tooltip>
      </Row>
    </AntHeader>
  );
};

export default Header;
