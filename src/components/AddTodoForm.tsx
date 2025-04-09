import { useState } from "react";

interface AddTodoFormProps {
  //title is a string
  onAddTodo: (title: string) => void;
}

export default function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const [title, setTitle] = useState("");

  //   React.FormEvent tells TypeScript that this event is specifically a form submission event
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //If the trimmed title is an empty string
    if (!title.trim()) return;

    onAddTodo(title);
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center space-x-2 mb-4"
    >
      <input
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)} //we can type in the input field
        className="px-2 p-1 rounded-lg "
      />
      <button
        type="submit"
        className="bg-pink-600 text-white px-4 py-1 rounded-lg hover:bg-gray-700 transition duration-200 ease-in-out"
      >
        Add
      </button>
    </form>
  );
}

//React.FormEvent tells TypeScript that this event is specifically a form submission event.
//If we typed something like e.target.value, TypeScript would say "wait, that might not be valid on a FormEvent" — it helps catch mistakes early!
//React.FormEvent<HTMLFormElement> = A form submission event that came from a real <form> element.
//React.FormEvent	It's a special type of event in React that happens when a form is submitted
