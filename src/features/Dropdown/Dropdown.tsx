import { Option } from "../Option";
import { Input } from "../../components/Input";
import { SelectedLanguage } from "../SelectedLanguage";

import RU from "../../images/ru.png";
import UK from "../../images/UK.png";
import ES from "../../images/ES.png";
import DE from "../../images/DE.png";
import IT from "../../images/IT.png";
import PL from "../../images/PL.png";
import search from "../../images/search.png";

import style from "./Dropdown.module.scss";

export const Dropdown = () => {
  const options = [
    {
      id: new Date().getTime(),
      label: "Русский",
      image: RU,
      isChecked: false,
    },
    {
      id: new Date().getTime(),
      label: "Английский",
      image: UK,
      isChecked: false,
    },
    {
      id: new Date().getTime(),
      label: "Испанский",
      image: ES,
      isChecked: false,
    },
    {
      id: new Date().getTime(),
      label: "Немецкий",
      image: DE,
      isChecked: false,
    },
    {
      id: new Date().getTime(),
      label: "Итальянский",
      image: IT,
      isChecked: false,
    },
    {
      id: new Date().getTime(),
      label: "Польский",
      image: PL,
      isChecked: false,
    },
  ];

  return (
    <div className={style.wrapper}>
      <h5 className={style.title}>Язык</h5>

      <SelectedLanguage />

      <div className={style.dropdownBlock}>
        <div className={style.inputBlock}>
          <Input type="text" placeholder="Поиск" className={style.input} />
          <img src={search} alt="searchIcon" className={style.searchIcon} />
        </div>

        <div>
          {options.map((option) => (
            <Option key={option.id} {...option} />
          ))}
        </div>
      </div>
    </div>
  );
};
