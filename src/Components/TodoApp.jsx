import React, { useEffect, useState } from "react";
import "../Css/TodoApp.css";
import { toast } from "react-toastify";

const TodoApp = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    toast.success("Welcome to To-Do App");
    let data = JSON.parse(localStorage.getItem('todos'));

    if (data != null) {
      setList(data);
    }

  }, []);

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
      setList([newTodo,...list]);
      setText("");
      toast.success("Wooh, Task Is Added !");
      console.log(list);
      localStorage.setItem('todos',JSON.stringify(list))
    }
  };

  const togglechecked = (item, index) => {
    setList(
      list.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
    localStorage.setItem('todos',JSON.stringify(list));
    toast.success("Toggled Todo Task Sucessfully !");
  };

  const removealltodo = () => {
    setList(null);
    setList([]);
    toast.success("Todo-List Empty !");
    localStorage.setItem('todos',null)
  };

  return (
    <div className="todo-app">
      <div className="top">
        <h2>
          To-Do List
          <div className="img"></div>
        </h2>
        <button
          className="button"
          onClick={() => {
            removealltodo();
          }}
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
