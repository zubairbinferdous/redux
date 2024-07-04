import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TofoFrom = () => {
  const { todoTitle } = useContext(TodoContext);
  console.log(todoTitle);
  return (
    <div>
      <h1>this is a todo from component</h1>
    </div>
  );
};

export default TofoFrom;
