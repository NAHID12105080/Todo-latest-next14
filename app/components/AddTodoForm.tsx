"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { addTodo } from "../actions/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      disabled={pending}
    >
      {pending ? "Adding..." : "Add Todo"}
    </button>
  );
}

export default function AddTodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(formData: FormData) {
    console.log(formData);
    const title = formData.get("title") as string;
    await addTodo(title);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action} className="mb-4">
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo"
        className="border p-2 mr-2 rounded-lg text-black"
        required
      />
      <SubmitButton />
    </form>
  );
}
