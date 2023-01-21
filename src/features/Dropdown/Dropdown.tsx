import { ChangeEvent, useState } from "react";

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
import { OptionType } from "../../types/types";

type DropdownPropsType = {
  selected: string;
  setSelected: (selected: string) => void;
  isMultiselect: boolean;
  isShowImage: boolean;
};

export const Dropdown = ({
  selected,
  setSelected,
  isMultiselect,
  isShowImage,
}: DropdownPropsType) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState<OptionType[]>([
    {
      id: 1,
      label: "Русский",
      image: RU,
      isChecked: false,
    },
    {
      id: 2,
      label: "Английский",
      image: UK,
      isChecked: false,
    },
    {
      id: 3,
      label: "Испанский",
      image: ES,
      isChecked: false,
    },
    {
      id: 4,
      label: "Немецкий",
      image: DE,
      isChecked: false,
    },
    {
      id: 5,
      label: "Итальянский",
      image: IT,
      isChecked: false,
    },
    {
      id: 6,
      label: "Польский",
      image: PL,
      isChecked: false,
    },
  ]);

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const onClickCheckedHandler = (id: number) => {
    const checkedLanguage = searchOption.map((language) =>
      language.id === id
        ? { ...language, isChecked: !language.isChecked }
        : language
    );
    if (!isMultiselect) {
      setIsOpen(false);
      setSelected(searchOption.find((option) => option.id === id)?.label || "");
      return;
    }
    setOptions(checkedLanguage);
  };

  const searchOption = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const renderSearchOption = () => {
    if (searchOption.length) {
      return searchOption.map((option, index) => (
        <Option
          key={index}
          {...option}
          onClick={onClickCheckedHandler}
          isMultiselect={isMultiselect}
          isShowImage={isShowImage}
        />
      ));
    }

    return (
      <div className={style.empty}>К сожалению, не удалось найти Языки. 😕</div>
    );
  };

  return (
    <div className={style.wrapper}>
      <h5 className={style.title}>Язык</h5>

      <SelectedLanguage
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        options={options}
        onClickCheckedHandler={onClickCheckedHandler}
        isMultiselect={isMultiselect}
        selected={selected}
      />

      <div className={isOpen ? style.dropdownBlock : style.dropdownBlockHidden}>
        <div className={style.inputBlock}>
          <Input
            type="text"
            placeholder="Поиск"
            className={style.input}
            searchValue={searchValue}
            onChange={onChangeInputHandler}
          />
          <img src={search} alt="searchIcon" className={style.searchIcon} />
        </div>

        <div>{renderSearchOption()}</div>
      </div>
    </div>
  );
};
