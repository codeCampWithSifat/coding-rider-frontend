import { useAcademicFacultiesQuery } from "@/redux/facultyApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type ACFacultyFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
};

const ACFacultyField = ({ name, label, placeholder }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.academicFaculties;
  const acFacultyOptions = academicFaculties?.map((acFaculty: any) => {
    return {
      label: acFaculty?.title,
      value: acFaculty?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={acFacultyOptions as SelectOptions[]}
      placeholder={placeholder}
    />
  );
};

export default ACFacultyField;
