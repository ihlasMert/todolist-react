import React from "react";

import "./index.css";

const InputBar = (props) => {
  return (
    <div className="input-bar-container">
      <input
        value={props.value}
        className="input-bar-input"
        placeholder="Add To Do"
        onChange={(e) => props.onChange(e.target.value)}
      />
      <button className="input-bar-button" onClick={props.onClick}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
};

export default InputBar;
