import { Row } from "antd";

const NotFoundPage = () => {
  return (
    <Row
      style={{
        height: "100vh",
      }}
      justify="center"
      align="middle"
    >
      <h1
        style={{
          color: "red",
        }}
      >
        404.......Page Not Found
      </h1>
    </Row>
  );
};

export default NotFoundPage;
