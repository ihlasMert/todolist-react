import React from "react";

import "./index.css";

const Alert=({message, type})=> {

  return (
    <div className="alert-container" style={{borderColor:type === "error"? "red": "green"}}>
      <p className="alert-message"  style={{color: type === "error" ? "red": "green"}}> {message}</p>
    </div>
  );
}

export default Alert;


//deploy etmek ve full silmek kaldı