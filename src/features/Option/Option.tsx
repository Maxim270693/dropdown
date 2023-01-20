import style from "./Option.module.scss";

type OptionPropsType = {
  id: number;
  label: string;
  image: string;
  isChecked: boolean;
  onChange: (id: number) => void;
};

export const Option = ({
  id,
  label,
  image,
  isChecked,
  onChange,
}: OptionPropsType) => {
  return (
    <div className={style.option}>
      <div className={style.optionItem}>
        <img src={image} alt="country" className={style.img} />
        <div className={style.optionTitle}>{label}</div>
      </div>

      <input
        type="checkbox"
        checked={isChecked}
        className={style.checkbox}
        onClick={() => onChange(id)}
        onChange={() => {}}
      />
    </div>
  );
};
