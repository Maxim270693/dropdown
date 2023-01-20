import style from "./Option.module.scss";
import { OptionType } from "../../types/types";

type OptionPropsType = OptionType & {
  onClick: (id: number) => void;
  isMultiselect: boolean;
};

export const Option = ({
  id,
  label,
  image,
  isChecked,
  onClick,
  isMultiselect,
}: OptionPropsType) => {
  return (
    <div className={isMultiselect ? style.option : style.optionHover}>
      <div className={style.optionItem}>
        <img src={image} alt="country" className={style.img} />
        <div className={style.optionTitle} onClick={() => onClick(id)}>
          {label}
        </div>
      </div>

      {isMultiselect && (
        <input
          type="checkbox"
          checked={isChecked}
          className={style.checkbox}
          onClick={() => onClick(id)}
          onChange={() => {}}
        />
      )}
    </div>
  );
};
