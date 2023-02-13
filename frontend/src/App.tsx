import React, { useState } from "react";
import { Select } from "./lib/Select";

const App = () => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <div className="container">
      <button disabled className="btn primary">
        button
      </button>

      <div>
        <input type="text" className="input" />
      </div>

      <div>
        <label>Hello</label>
        <Select
          selectedItem={selectedItem}
          options={data.map((d, i) => (
            <div
              key={i}
              className="select-option-item"
              onClick={() => setSelectedItem(d.name)}
            >
              {d.name}
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default App;

const data = [
  { name: "Peter" },
  { name: "John" },
  { name: "Paul" },
  { name: "Emeka" },
  { name: "Grace" },
  { name: "Peter" },
];
