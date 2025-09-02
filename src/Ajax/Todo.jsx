import React, { useEffect } from "react";
import { useTodoLists } from "./useTodoLists";

const TodoList = () => {
  const { todos, fetchTodos } = useTodoLists();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]); // 添加 fetchTodos 作为依赖项
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

