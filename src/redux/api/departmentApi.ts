import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = `/management-departments`;

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create A Departments
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    // Get All The Departments
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),

    // Get A Single Department
    department: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),

    // update single department by id
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    // Delete A Department
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useAddDepartmentMutation, // Create A Department
  useDepartmentsQuery, // Get All The Deparment
  useDepartmentQuery, // Get A Single Department
  useUpdateDepartmentMutation, // Update A Single Department
  useDeleteDepartmentMutation, // Delete A Single Department
} = departmentApi;
