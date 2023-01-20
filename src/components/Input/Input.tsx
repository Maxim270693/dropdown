import { ChangeEvent } from "react";

type InputPropsType = {
  type: string;
  placeholder?: string;
  className: string;
  searchValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  placeholder,
  className,
  searchValue,
  onChange,
}: InputPropsType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={searchValue}
      onChange={onChange}
    />
  );
};
