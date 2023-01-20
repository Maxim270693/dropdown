import { Input } from "../../components/Input";

import style from "./Option.module.scss";

type OptionPropsType = {
  label: string;
  image: string;
  isChecked: boolean;
};

export const Option = ({ label, image, isChecked }: OptionPropsType) => {
  return (
    <div className={style.option}>
      <div className={style.optionItem}>
        <img src={image} alt="country" className={style.img} />
        <div className={style.optionTitle}>{label}</div>
      </div>

      <Input type="checkbox" checked={isChecked} className={style.checkbox} />
    </div>
  );
};
