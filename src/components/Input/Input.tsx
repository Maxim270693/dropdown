import { ChangeEvent } from "react";

type InputPropsType = {
  type: string;
  placeholder?: string;
  className?: string;
  searchValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

export const Input = ({
  type,
  placeholder,
  className,
  searchValue,
  onChange,
  checked,
}: InputPropsType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={searchValue}
      onChange={onChange}
      checked={checked}
    />
  );
};
