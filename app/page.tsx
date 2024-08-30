import { getTodos } from "./actions/actions";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import Video from "next-video";
import backgroundVideo from "@/videos/background-video.mp4";

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <main className="max-w-4xl mx-auto mt-4 relative z-40">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <AddTodoForm />
        <TodoList initialTodos={todos} />
      </main>
      <Video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-40"
      />
    </>
  );
}
