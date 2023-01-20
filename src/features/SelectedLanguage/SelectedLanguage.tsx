import removeIcon from "../../images/removeIcon.png";
import arrowUp from "../../images/arrowUp.png";
import arrowBottom from "../../images/arrowBottom.png";

import style from "./SelectedLanguage.module.scss";

type SelectedLanguagePropsType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const SelectedLanguage = ({
  isOpen,
  setIsOpen,
}: SelectedLanguagePropsType) => {
  return (
    <div className={style.selectedLanguage}>
      <div className={style.languageBlock}>
        <div className={style.language}>Английский</div>
        <img
          src={removeIcon}
          alt="removeLanguage"
          className={style.removeIcon}
        />
      </div>

      <div className={style.languageBlock}>
        <div className={style.language}>Немецкий</div>
        <img
          src={removeIcon}
          alt="removeLanguage"
          className={style.removeIcon}
        />
      </div>

      <img
        src={isOpen ? arrowUp : arrowBottom}
        alt="arrow"
        className={style.arrow}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};
