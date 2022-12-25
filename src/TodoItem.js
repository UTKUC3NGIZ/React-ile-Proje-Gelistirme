import { memo } from "react";

function TodoItem({ todo }) {
  console.log("todo item rendered", todo);
  return <li>{todo}</li>;
}

export default memo(TodoItem);
