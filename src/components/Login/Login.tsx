"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/Images/loginImge.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schemas/login";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  // console.log(isLoggedIn());
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("Login Successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={12} lg={12}>
        <Image src={loginImage} width={500} alt="login-image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{ color: "#4b1b94", marginBottom: "1rem" }}>
          First Login Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                placeholder="Your Id"
                required
                label="Your Id"
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                placeholder="Your Password"
                required
                label="Your Password"
              />
            </div>

            <Button
              style={{
                background: "#4b1b94",
              }}
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
