import React, { KeyboardEvent, useState } from "react";
import "./ToDo.css";
import logo from "./logo.svg";
import ToDoItem from "./components/ToDoItem";

function ToDo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([
    { todo: "clean the house", id: 1 },
    { todo: "buy milk", id: 2 },
  ]);

  const generateId = () => {
    if (list && list.length) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const addItemToList = () => {
    const newId = generateId();
    setList([...list, { todo: todo, id: newId }]);
    setTodo("");
  };

  function handleRemove(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItemToList();
    }
  };

  return (
    <div className="ToDo">
      <div className="ToDo-Container">
        <header>
          <img src={logo} className="Logo" alt="logo" />
          <h2 className="Headline">React To Do</h2>
        </header>
        {list.map((listItem) => {
          return (
            <ToDoItem
              key={listItem.id}
              item={listItem}
              removeItem={handleRemove}
            />
          );
        })}
        <div>
          <input
            type="text"
            value={todo}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="I need to ..."
          />
          <button className="ToDo-Add" onClick={addItemToList}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
