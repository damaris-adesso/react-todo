import React, { useState } from "react";
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

  function handleRemove(index: number) {
    const newList = list.filter((item, key) => key !== index);
    setList(newList);
  }

  return (
    <div className="ToDo">
      <div className="ToDo-Container">
        <header>
          <img src={logo} className="Logo" alt="logo" />
          <h2 className="Headline">React To Do</h2>
        </header>
        {list.map((listItem, key) => {
          return (
            <ToDoItem
              key={key}
              item={listItem.todo}
              removeItem={handleRemove}
              index={key}
            />
          );
        })}
        <div>
          <input type="text" value={todo} onChange={handleChange} />
          <button className="ToDo-Add" onClick={addItemToList}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
