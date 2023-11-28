"use client";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <div>
      <>
        {label ? label : null}
        {required && <span style={{ color: "red", margin: "5px" }}>*</span>}
        <Controller
          control={control}
          name={name}
          render={({ field }) =>
            type === "password" ? (
              <Input.Password
                type={type}
                size={size}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
            ) : (
              <Input
                type={type}
                size={size}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
            )
          }
        />
        <small style={{ color: "red" }}>{errorMessage}</small>
      </>
    </div>
  );
};

export default FormInput;
