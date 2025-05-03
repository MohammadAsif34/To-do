import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, removeTodo } from "../statemanagement/actions";
import { addTodo, removeTodo, toggleTodo } from "../statemanagement/todoSlice";

const TaskInputContainer = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="my-5 px-20">
      <form
        className="mx-auto w-fit border border-gray-300 rounded-md overflow-hidden "
        onSubmit={handleAdd}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task here"
          className="w-[500px] h-10 px-5 outline-none "
        />
        <button
          type="submit"
          className="px-3 h-10 cursor-pointer bg-gray-100 hover:bg-green-100"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInputContainer;
