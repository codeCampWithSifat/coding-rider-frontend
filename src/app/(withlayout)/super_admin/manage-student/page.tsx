"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentsPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>this page is for manage student</h1>
      <Link href="/super_admin/manage-student/create">
        <Button type="primary" style={{ margin: "1rem 0" }}>
          Create Student
        </Button>
      </Link>
    </div>
  );
};

export default ManageStudentsPage;
