import React, { useEffect, useState } from "react";

import { TodoForm } from "./TodoForm";
import {Todo} from "./Todo"
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);
  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, idEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log(newTodos);
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <Todo/>
    </div>
  );
};
