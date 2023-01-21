import style from "./Option.module.scss";
import { OptionType } from "../../types/types";

type OptionPropsType = OptionType & {
  onClick: (id: number) => void;
  isMultiselect: boolean;
  isShowImage?: boolean;
};

export const Option = ({
  id,
  label,
  image,
  isChecked,
  onClick,
  isMultiselect,
  isShowImage,
}: OptionPropsType) => {
  return (
    <div
      className={isMultiselect ? style.option : style.optionHover}
      onClick={() => onClick(id)}
    >
      <div className={style.optionItem}>
        {isShowImage && <img src={image} alt="country" className={style.img} />}
        <div className={style.optionTitle}>{label}</div>
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
