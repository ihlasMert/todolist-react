import React, { useState, useEffect } from "react"; //reactin domu güncelleyebilmesi için reactın kendi değişkenini kullanmamız gerekiyor. ONU DA use state ile kullanırıs
import { v4 as uuidv4 } from "uuid";

import { InputBar, ToDoItem, Alert } from "./components";

import "./App.css";

const App = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setToDoList] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState();

  useEffect(() => {
    if (message.length > 0) {
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }, [message]);

  const addToDoHandler = () => {
    const labels = todoList.map((item) => item.label);
    if (todoValue.length < 1) {
      setMessage("You can not add null message");
      setMessageType("error");
      return;
    }
    if (labels.includes(todoValue)) {
      setMessage("This note has been already added!");
      setMessageType("error");

      return;
    }
    const todoListCopy = [...todoList];
    todoListCopy.push({ label: todoValue, id: uuidv4(), status: false });
    setToDoList(todoListCopy);
    setMessage("Your note has been added successfully");
    setMessageType("success");
  };

  const removeToDoHandler = (value) => {
    const todoListCopy = [...todoList];
    const newToDoList = todoListCopy.filter((item) => item.label !== value);
    setToDoList(newToDoList);
    setMessage("Your note has been removed successfully");
    setMessageType("success");
  };

  const switchToDoStatus = (id) => {
    const todoListCopy = [...todoList];
    const newToDoList = todoListCopy.map((item) =>
      id === item.id ? { ...item, status: !item.status } : item
    );
    setToDoList(newToDoList);    
  };

  return (
    <div className="App">
      {message ? <Alert message={message} type={messageType} /> : null}

      <InputBar
        value={todoValue}
        onChange={(value) => setTodoValue(value)}
        onClick={addToDoHandler}
      />
      {todoList.map((item) => (
        <ToDoItem
          item={item}
          key={item.id}
          onRemoveToDo={() => removeToDoHandler(item.label)}
          onSwitchStatus={() => switchToDoStatus(item.id)}
        />
      ))}
    </div>
  );
};

export default App;
