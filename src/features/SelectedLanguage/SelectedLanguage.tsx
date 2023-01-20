import removeIcon from "../../images/removeIcon.png";
import arrowUp from "../../images/arrowUp.png";
import arrowBottom from "../../images/arrowBottom.png";

import style from "./SelectedLanguage.module.scss";
import { OptionType } from "../../types/types";

type SelectedLanguagePropsType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  options: OptionType[];
};

export const SelectedLanguage = ({
  isOpen,
  setIsOpen,
  options,
}: SelectedLanguagePropsType) => {
  const selectedLanguage = options.filter((item) => {
    if (item.isChecked) {
      return item;
    }
  });

  return (
    <div className={style.selectedLanguage}>
      {selectedLanguage.map((item) => (
        <div className={style.languageBlock}>
          <div className={style.language}>{item.label}</div>
          <img
            src={removeIcon}
            alt="removeLanguage"
            className={style.removeIcon}
          />
        </div>
      ))}
      <img
        src={isOpen ? arrowUp : arrowBottom}
        alt="arrow"
        className={style.arrow}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};
