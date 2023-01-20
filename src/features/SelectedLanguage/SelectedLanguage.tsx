import removeIcon from "../../images/removeIcon.png";
import arrowUp from "../../images/arrowUp.png";
import arrowBottom from "../../images/arrowBottom.png";

import style from "./SelectedLanguage.module.scss";
import { OptionType } from "../../types/types";

type SelectedLanguagePropsType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  options: OptionType[];
  onClickCheckedHandler: (id: number) => void;
  selected: string;
  isMultiselect: boolean;
};

export const SelectedLanguage = ({
  isOpen,
  setIsOpen,
  options,
  onClickCheckedHandler,
  selected,
  isMultiselect,
}: SelectedLanguagePropsType) => {
  const selectedLanguage = options.filter((item) => item.isChecked);

  return (
    <div className={style.selectedLanguage}>
      {isMultiselect
        ? selectedLanguage.map((item) => {
            return (
              <div key={item.id} className={style.languageBlock}>
                <div className={style.language}>{item.label}</div>
                <img
                  src={removeIcon}
                  alt="removeLanguage"
                  className={style.removeIcon}
                  onClick={() => onClickCheckedHandler(item.id)}
                />
              </div>
            );
          })
        : selected}
      <img
        src={isOpen ? arrowUp : arrowBottom}
        alt="arrow"
        className={style.arrow}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};
