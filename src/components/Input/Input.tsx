type InputPropsType = {
  type: string;
  placeholder: string;
  className: string;
};

export const Input = ({ type, placeholder, className }: InputPropsType) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};
