"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import { useDebounced } from "@/redux/hooks";

const ManagementDepartmentPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(2);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteDepartment] = useDeleteDepartmentMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  // console.log(data);

  const departments = data?.departments;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.......");
    try {
      // console.log()
      message.success("Deleting Successfully");
      deleteDepartment(id);
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY h:mm A");
      },
    },
    {
      title: "Action",
      // dataIndex: "address",
      render: function (data: any) {
        return (
          <div>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button type="primary" onClick={() => console.log(data)}>
                <EditOutlined />
              </Button>
            </Link>
            <Button
              danger
              type="primary"
              style={{ margin: "0 10px" }}
              onClick={(id) => deleteHandler(data?.id)}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  // const tableData = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //   },
  // ];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("page", page, "pageSize", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { field, order } = sorter;
    // console.log("order", order, "field", field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFileters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div style={{ margin: "1rem 1.5rem" }}>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBar title="Department List">
        <Input
          type="text"
          placeholder="Search Department"
          size="large"
          style={{ width: "20%", height: "40px" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/super_admin/department/create">
            <Button type="primary" style={{ margin: "1rem 10px" }}>
              Create
            </Button>
          </Link>
          {!!sortBy ||
            !!sortOrder ||
            (!!searchTerm && (
              <Button type="primary" onClick={resetFileters}>
                <ReloadOutlined />
              </Button>
            ))}
        </div>
      </ActionBar>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManagementDepartmentPage;
