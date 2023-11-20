"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

const CreateACFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating............");
    try {
      // console.log(data);
      const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Academic Faculty Created Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div style={{ margin: "5px 1.5rem" }}>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "academic-faculty",
            link: "/admin/academic/faculty",
          },
        ]}
      />
      <h2 style={{ margin: "1rem 0" }}> Create Academic Faculty</h2>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="title"
              label="Title"
              placeholder="Create Academic Faculty"
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

export default CreateACFaculty;
