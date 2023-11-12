import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const UserPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <h2>this is only user page</h2>
    </div>
  );
};

export default UserPage;
