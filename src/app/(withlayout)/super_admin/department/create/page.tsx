import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateDepartment = () => {
  return (
    <div>
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
      <h2>this is create department</h2>
    </div>
  );
};

export default CreateDepartment;
