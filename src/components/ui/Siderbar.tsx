"use client";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";

const { Sider } = Layout;

const Siderbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;
  // console.log(role);
  return (
    <>
      <Sider
        width={280}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
            padding: "1rem",
          }}
        >
          PH UM
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      </Sider>
    </>
  );
};

export default Siderbar;
