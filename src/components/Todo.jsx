import React from "react";

export default ({ todo, toggleComplete, removeTodo, index }) => (
  <li
    style={{
      textDecoration: todo.completed === true ? "line-through" : "",
      display: todo.showText === false ? "none" : "block"
    }}
  >
    <input 
      type="checkbox" 
      onChange={() => toggleComplete(index)} 
      checked={todo.completed}/> 
    <span>{todo.text}</span>
    <button className="remove_btn" onClick={() => removeTodo(todo.text)}>
      Delete
    </button>
  </li>
);
