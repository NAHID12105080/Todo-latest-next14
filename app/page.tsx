import { getTodos } from "./actions/actions";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import VideoBackground from "./components/VideoBackground";

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <main className="max-w-2xl mx-auto mt-4 p-6 relative ">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo List</h1>

        <AddTodoForm />
        <TodoList initialTodos={todos} />
      </main>
    </>
  );
}
