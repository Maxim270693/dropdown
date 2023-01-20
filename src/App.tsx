import { Dropdown } from "./features/Dropdown";

import "./App.scss";
import { useState } from "react";

function App() {
  const [isMultiselect, setIsMultiselect] = useState(false);

  return (
    <div className="App">
      <Dropdown isMultiselect={isMultiselect} />

      <label>
        <input
          type="checkbox"
          checked={isMultiselect}
          onChange={() => setIsMultiselect(!isMultiselect)}
        />
        <span>Multi select</span>
      </label>
    </div>
  );
}

export default App;
