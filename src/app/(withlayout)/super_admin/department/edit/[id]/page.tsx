"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

interface IParams {
  params: any;
}

const EditDepartmentPage = ({ params }: IParams) => {
  //   console.log(params);
  const { id } = params;
  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();
  // console.log(data);

  const defaultValues = {
    title: data?.title || "",
  };

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.......");
    try {
      message.success("Update Department Successsfully");
      await updateDepartment({ id, body: values });
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };
  return (
    <div style={{ margin: "1rem 1.5rem" }}>
      <div style={{ margin: "1rem 0" }}>
        <UMBreadCrumb
          items={[
            {
              label: "super_admin",
              link: "/super_admin",
            },
            {
              label: "department",
              link: "/super_admin/department",
            },
          ]}
        />
      </div>
      <ActionBar title="Update Department">
        <h4 style={{ margin: "1rem 0", color: "#3B07DC" }}>{data?.title}</h4>
      </ActionBar>

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
