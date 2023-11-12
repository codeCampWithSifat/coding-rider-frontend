import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
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
      <h2>this is only Super Admin Department</h2>
      <Link href="/super_admin/department/create">
        <Button type="primary" style={{ margin: "1rem 0" }}>
          Create
        </Button>
      </Link>
    </div>
  );
};

export default DepartmentPage;
