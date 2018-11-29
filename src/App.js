import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default () => {
  const [todos, setTodos] = useState([]);
  const [totalCompleted, setTotalCompleted] = useState(0);

  const addTodo = text => {
    const _todos = [...todos];
    const obj = { text: text, completed: false, showText: true };
    _todos.push(obj);
    setTodos(_todos);
    setTotalCompleted(totalCompleted + 1);
  };

  const toggleComplete = i => {
    setTodos(
      todos.map((todo, index) =>
        index === i
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
    if (totalCompleted <= 0) {
      setTotalCompleted(totalCompleted + 1);
    } else {
      setTotalCompleted(totalCompleted - 1);
    }
  };

  const removeTodo = text => {
    const matchingIndex = todos.findIndex(todo => {
      return todo.text === text;
    });
    const _todos = [...todos];
    _todos.splice(matchingIndex, 1);
    setTodos(_todos);
    setTotalCompleted(totalCompleted - 1);
  };

  const allTodos = () => {
    const _todos = [...todos];
    _todos.map(_todo => (_todo.showText = true));
    setTodos(_todos);
  };

  const activeTodos = () => {
    const _todos = [...todos];
    _todos.map(_todo => {
      if (_todo.completed === true) {
        return (_todo.showText = false);
      } else {
        return (_todo.showText = true);
      }
    });
    setTodos(_todos);
  };

  const completedTodos = () => {
    const _todos = [...todos];
    _todos.map(_todo => {
      if (_todo.completed === true) {
        return (_todo.showText = true);
      } else {
        return (_todo.showText = false);
      }
    });
    setTodos(_todos);
  };

  const clearCompleted = () => {
    const _todos = [...todos];
    const res = _todos.filter(_todo => {
      return _todo.completed === false
    });
    setTodos(res)
  }

  return (
    <div className="container">
      <h1>Todo MVC</h1>
      <Form onSubmit={addTodo} />
      <div className="all_todos">
        <ul>
          {todos.map((todo, i) => {
            return (
              <Todo
                key={i}
                todo={todo}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                index={i}
              />
            );
          })}
        </ul>
      </div>
      <div className="todo_actions">
        {todos.length > 0 && (
          <div className="btns">
            <button className="all_btn" onClick={allTodos}>
              All
            </button>
            <button className="active_btn" onClick={activeTodos}>
              Active
            </button>
            <button className="completed_btn" onClick={completedTodos}>
              Completed
            </button>
            <button className="completed_btn" onClick={clearCompleted}>Clear Completed</button>
          </div>
        )}
      </div>
    </div>
  );
};
