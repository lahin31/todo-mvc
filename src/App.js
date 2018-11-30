import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [totalCompleted, setTotalCompleted] = useState(0);

  const checkTotalCompleted = () => {
    let x = 0;
    const _todos = [...todos];
    _todos.map(tC => {
      if (tC.completed === true) {
        return (x += 1);
      } else {
        return tC;
      }
    });
    setTotalCompleted(x);
  };

  const addTodo = text => {
    const _todos = [...todos];
    const obj = { text: text, completed: false, showText: true };
    _todos.push(obj);
    setTodos(_todos);
  };

  const toggleComplete = i => {
    const _todos = [...todos];
    _todos.map((_todo, index) => {
      if (index === i) {
        return (_todo.completed = !_todo.completed);
      } else {
        return _todo;
      }
    });
    setTodos(_todos);
    checkTotalCompleted();
  };

  const removeTodo = text => {
    const matchingIndex = todos.findIndex(todo => {
      return todo.text === text;
    });
    const _todos = [...todos];
    _todos.splice(matchingIndex, 1);
    setTodos(_todos);
    checkTotalCompleted();
  };

  const allTodos = () => {
    const _todos = [...todos];
    _todos.map(_todo => (_todo.showText = true));
    setTodos(_todos);
    checkTotalCompleted();
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
    checkTotalCompleted();
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
    checkTotalCompleted();
  };

  const clearCompleted = () => {
    const _todos = [...todos];
    const res = _todos.filter(_todo => {
      return _todo.completed === false;
    });
    setTodos(res);
    checkTotalCompleted();
  };

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
            <p>Total {totalCompleted} todo's completed</p>
            <button className="all_btn" onClick={allTodos}>
              All
            </button>
            <button className="active_btn" onClick={activeTodos}>
              Active
            </button>
            <button className="completed_btn" onClick={completedTodos}>
              Completed
            </button>
            <button className="completed_btn" onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
