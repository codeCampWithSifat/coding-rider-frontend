"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

import { useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";

import { Button, Col, Row, message } from "antd";

const CreateACDepartmentPage = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.academicFaculties.map((faculty) => {
    return {
      label: faculty?.title,
      value: faculty?.id,
    };
  });
  // const acFacultiesOptions = academicFaculties?.map((faculty) => {
  //   return {
  //     label: faculty?.title,
  //     value: faculty?.id,
  //   };
  // });

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      // console.log(data);
      const res = await addAcademicDepartment(data);
      if (!!res) {
        message.success("Academic Department added successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div style={{ margin: "1rem 1.5rem" }}>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic", link: `/${base}/academic` },
          { label: "department", link: `/${base}/academic/department` },
        ]}
      />
      <h1>Create Academic Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Academic Department Title" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectField
              size="large"
              name="academicFacultyId"
              // options={acFacultiesOptions as SelectOptions[]}
              options={academicFaculties as SelectOptions[]}
              label="Academic Faculty"
              placeholder="Select"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit" style={{ margin: "10px 0" }}>
          Create Department
        </Button>
      </Form>
    </div>
  );
};

export default CreateACDepartmentPage;
