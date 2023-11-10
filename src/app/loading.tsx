"use client";
import { Row } from "antd";
import { Spin } from "antd";

const Loading = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Spin size="large" />
    </Row>
  );
};

export default Loading;
