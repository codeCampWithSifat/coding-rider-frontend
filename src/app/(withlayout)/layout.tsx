"use client";
import Contents from "@/components/ui/Contents";
import Siderbar from "@/components/ui/Siderbar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Row } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
      </Row>
    );
  }
  return (
    <Layout hasSider>
      <Siderbar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboradLayout;
