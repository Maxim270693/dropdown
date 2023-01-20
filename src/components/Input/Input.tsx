type InputPropsType = {
  type: string;
  placeholder?: string;
  className: string;
  checked?: boolean;
};

export const Input = ({
  type,
  placeholder,
  className,
  checked,
}: InputPropsType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      checked={checked}
    />
  );
};
