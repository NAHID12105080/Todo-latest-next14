import { getTodos } from "./actions/actions";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodoForm />
      <TodoList initialTodos={todos} />
    </main>
  );
}
