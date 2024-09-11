import React, { useEffect, useState } from "react";
import "../Css/TodoApp.css";
import { toast } from "react-toastify";

const TodoApp = () => {
  const [text, setText] = useState(null);
  const [list, setList] = useState([]);

  useEffect(()=> {
    toast.success("Welcome to To-Do App");
  },[]);

  const handleinputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setText(e.target.value);
  };

  const addtodo = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      toast.error("Text Is Not Valid !!");
      return;
    } else {
      const newTodo = { text, isChecked: false };
      setList([...list, newTodo]);
      setText("");
      toast.success("Wooh, Task Is Added !");
      console.log(list);
    }
  };

  const togglechecked = (item, index) => {
    setList(
      list.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
    toast.success("Toggled Todo Task Sucessfully !");
  };

  const removealltodo = () => {
    setList(null);
    setList([]);
    toast.success("Todo-List Empty !");
  };

  return (
    <div className="todo-app">
      <div className="top">
        <h2>
          To-Do List
          <div className="img"></div>
        </h2>
        <button
          onClick={() => {
            removealltodo();
          }}
          className="button"
        >
          Remove All Todo's
        </button>
      </div>
      <div className="row">
        <input
          onChange={(e) => {
            handleinputchange(e);
          }}
          value={text}
          type="text"
          name="text"
          placeholder="Enter To-Do Task Here"
          id="input-box"
          contentEditable
          required
        />
        <button
          onClick={(e) => {
            addtodo(e);
          }}
        >
          Add
        </button>
      </div>

      {list &&
        list.map((item, index) => {
          return (
            <>
              <ul id="list-container">
                <li
                  onClick={() => {
                    togglechecked(item, index);
                  }}
                  className={item.isChecked ? "checked" : ""}
                  key={index}
                >
                  {item.text}
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default TodoApp;
