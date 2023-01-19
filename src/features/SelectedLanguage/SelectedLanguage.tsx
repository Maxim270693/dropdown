import removeIcon from "../../images/removeIcon.png";
import arrowUp from "../../images/arrowUp.png";

import style from "./SelectedLanguage.module.scss";

export const SelectedLanguage = () => {
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

      <img src={arrowUp} alt="removeLanguage" className={style.arrowUp} />
    </div>
  );
};
