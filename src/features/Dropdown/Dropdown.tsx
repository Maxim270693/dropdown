import search from "../../images/search.png";

import { SelectedLanguage } from "../SelectedLanguage";
import { Input } from "../../components/Input";

import style from "./Dropdown.module.scss";

export const Dropdown = () => {
  return (
    <div className={style.wrapper}>
      <h5 className={style.title}>Язык</h5>

      <SelectedLanguage />

      <div className={style.dropdownBlock}>
        <div className={style.inputBlock}>
          <Input type="text" placeholder="Поиск" className={style.input} />
          <img src={search} alt="searchIcon" className={style.searchIcon} />
        </div>
      </div>
    </div>
  );
};
