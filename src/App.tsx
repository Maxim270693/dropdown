import { useState } from "react";

import { Input } from "./components/Input";
import { Dropdown } from "./features/Dropdown";

import "./App.scss";

function App() {
  const [isMultiselect, setIsMultiselect] = useState(false);
  const [isShowImage, setIsShowImage] = useState(true);
  const [selected, setSelected] = useState("");

  const onChangeMultiSelectHandler = () => {
    setIsMultiselect(!isMultiselect);
    setSelected("");
  };

  return (
    <div className="App">
      <Dropdown
        selected={selected}
        setSelected={setSelected}
        isMultiselect={isMultiselect}
        isShowImage={isShowImage}
      />

      <label>
        <Input
          type="checkbox"
          checked={isMultiselect}
          onChange={onChangeMultiSelectHandler}
        />
        <span>Multi select</span>
      </label>

      <label>
        <Input
          type="checkbox"
          checked={isShowImage}
          onChange={() => setIsShowImage(!isShowImage)}
        />
        <span>Show image</span>
      </label>
    </div>
  );
}

export default App;
