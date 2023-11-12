import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateFacultyPage = () => {
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
            link: "/super_admin/manage-faculty",
          },
        ]}
      />
      <h1>Create Faculty</h1>
    </div>
  );
};

export default CreateFacultyPage;
