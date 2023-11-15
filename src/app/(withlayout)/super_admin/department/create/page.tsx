"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

const CreateDepartment = () => {
  const [addDepartment] = useAddDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating............");
    try {
      // console.log(data);
      await addDepartment(data);
      message.success("Department Added Successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div style={{ margin: "5px 1.5rem" }}>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/department",
          },
        ]}
      />
      <h2 style={{ margin: "1rem 0" }}> Create department</h2>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="title"
              label="Title"
              placeholder="Create Department"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartment;
