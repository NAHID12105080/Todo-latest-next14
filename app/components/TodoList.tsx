"use client";

import { useOptimistic } from "react";
import { Todo } from "@prisma/client";
import { updateTodo, deleteTodo } from "../actions/actions";

export default function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    initialTodos,
    (state, newTodo: Todo) => {
      const todoIndex = state.findIndex((todo) => todo.id === newTodo.id);
      if (todoIndex === -1) {
        return [...state, newTodo];
      }
      const newState = [...state];
      newState[todoIndex] = newTodo;
      return newState;
    }
  );

  return (
    <ul>
      {optimisticTodos.map((todo) => (
        <li key={todo.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              addOptimisticTodo({ ...todo, completed: !todo.completed });
              updateTodo(todo.id, !todo.completed);
            }}
            className="mr-2"
          />
          <span className={todo.completed ? "line-through" : ""}>
            {todo.title}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="ml-auto bg-red-500 text-white px-2 py-1 rounded-lg"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
