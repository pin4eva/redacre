import React from "react";
import { Select } from "./lib/Select";

const App = () => {
  return (
    <div className="container">
      <button disabled className="btn primary">
        button
      </button>

      <div>
        <input type="text" className="input" />
      </div>

      <div>
        <Select />
      </div>
    </div>
  );
};

export default App;
