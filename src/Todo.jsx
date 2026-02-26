import React, { useEffect, useRef, useState } from "react";
import { CiBoxList } from "react-icons/ci";
import Todolist from "./Todolist";

const Todo = () => {
  const [todolist, setTodolist] = useState(() => {
    const saved = localStorage.getItem("TodoList");
    return saved ? JSON.parse(saved) : [];
  });
  const inputRef = useRef();
  // -----List adding function------
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    console.log(inputText);
    inputRef.current.value = "";
  };
  // ----Delete function-----
  const delTodo = (id) => {
    setTodolist((prvTodos) => prvTodos.filter((Todo) => Todo.id !== id));
  };
  // ------MarkDown--------
  const mark = (id) => {
    setTodolist((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todolist));
  }, [todolist]);
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-137 rounded-xl">
      {/* -----title----- */}
      <div className="text-3xl font-semibold flex justify-between">
        <h2>Todo List</h2>
        <CiBoxList />
      </div>

      {/* -----input box----- */}
      <div className="flex items-center justify-between my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="border-0 outline-0 bg-transparent px-4"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-0 rounded-full bg-orange-500 px-4 p-2 text-lg font-medium text-white"
        >
          ADD +
        </button>
      </div>
      {/* -----Lists----- */}
      <div>
        <Todolist todolist={todolist} delTodo={delTodo} mark={mark} />
      </div>
    </div>
  );
};

export default Todo;
