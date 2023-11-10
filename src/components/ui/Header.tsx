import { Button, Layout, Row } from "antd";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;
const Header = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "",
      label: (
        <Button type="text" danger onClick={() => logOut()}>
          Log out
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{ background: "#ffff" }}>
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        {" "}
        <p
          style={{
            margin: "0px 5px",
            padding: "5px",
            fontWeight: "bold",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
