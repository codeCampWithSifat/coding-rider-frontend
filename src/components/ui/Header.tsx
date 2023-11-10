import { Button, Layout, Row } from "antd";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;
const Header = () => {
  const router = useRouter();
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
