import React from "react";
import { FiTrash } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

import "./index.css";

const ToDoItem = (props) => {
  return (
    <div
      className="todo-item-container"
      style={{ backgroundColor: "#261C2C", borderColor: props.item.status? "#999": "#fff" }}
    >
      <p className="todo-item-label" style={{color:props.item.status ? "#999" : "white", textDecorationLine: props.item.status?"line-through": "none"}}>{props.item.label}</p>
      <div className="todo-item-buttons-container">
        <button onClick={props.onSwitchStatus} className="todo-item-button" style={{ backgroundColor: !props.item.status? "#ccc" :"#4E9F3D" }}>
          <TiTick color={props.item.status? "white": "black"}  size={19}/>
        </button>
        <button onClick={props.onRemoveToDo} className="todo-item-button" style={{backgroundColor:"red"}}>
          <FiTrash color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
