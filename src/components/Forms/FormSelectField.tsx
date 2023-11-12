"use client";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label?: string;
  value?: string;
};

type SelectFieldsProps = {
  name: string;
  options: SelectOptions[];
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  defaultValue?: SelectOptions;
  label?: string;
};

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  options,
  defaultValue,
  label,
}: SelectFieldsProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <>
        {label ? label : null}
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => (
            <Select
              onChange={onChange}
              size={size}
              placeholder={placeholder}
              style={{ width: "100%" }}
              value={value}
              options={options}
            />
          )}
        />
      </>
    </div>
  );
};

export default FormSelectField;
