import React, { useState } from "react";
import { Select, SelectOption } from "./lib/Select";

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
        <Select selectedItem={selectedItem}>
          {data.map((d, i) => (
            <SelectOption key={i}>{d.name}</SelectOption>
          ))}
        </Select>
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
