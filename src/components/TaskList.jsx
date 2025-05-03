import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../statemanagement/todoSlice";

const TaskList = () => {
  const { user, isAuthenticated } = useAuth0();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="px-20 flex flex-col justify-center items-center">
      <h1 className="my-3 text-3xl capitalize font-semibold">
        <span className="text-[#06d6a0]">T</span>ask List
      </h1>
      {/* {JSON.stringify(todos)}
      <br />
      {typeof todos} */}
      {todos.length == 0 ? (
        <div className="w-68 h-48 my-12 opacity-30 transition-transform duration-500 ease-in-out">
          <img src="/noTaskImg.png" alt="" />
        </div>
      ) : (
        <div className="w-4/5 my-4 px-4 py-2 border border-[#06d6a0] rounded-md  transition-transform duration-500 ease-in-out">
          {todos.map((todo, idx) => (
            <Task todo={todo} idx={idx} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;

const Task = ({ todo, idx }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleRemove = (_id) => {
    const cnf = confirm("Are you sure ? ");
    if (cnf) dispatch(removeTodo(_id));
  };

  const handleDone = (_id) => {
    const cnf = confirm("Is this task done?");
    if (cnf) dispatch(toggleTodo(_id));
  };

  return (
    <div
      className={`py-3 ${
        todos.length == idx + 1 ? "" : "border-b"
      }  border-gray-300 flex text-gray-500`}
      title={todo._id}
    >
      <div className="min-w-8 px-2">
        <span>{idx + 1}</span>
      </div>
      <div className="flex-1">
        <p>
          {todo?.text ||
            `this is my first task to be done very soon. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ducimus, pariatur
          molestiae, blanditiis hic eligendi dignissimos iusto libero corrupti
          officia, incidunt placeat veritatis quasi quo natus. Blanditiis beatae
          repudiandae delectus laborum.`}
        </p>
      </div>
      <div className="min-w-32  flex justify-around text-xl">
        <button
          className=" cursor-pointer"
          onClick={() => handleDone(todo._id)}
        >
          {todo.status == "done" ? (
            <i className="bi bi-check2-circle text-green-500"></i>
          ) : (
            <i className="bi bi-circle"></i>
          )}
        </button>
        <button
          className=" cursor-pointer"
          onClick={() => handleRemove(todo._id)}
        >
          <i className="bi bi-x-circle hover:text-red-500"></i>
        </button>
      </div>
    </div>
  );
};
