import { Todo } from "../types/todo";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void; //function just does something (like printing a message), but it doesn't return anything that's what void means.
  onDeleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDeleteTodo,
}: TodoItemProps) {
  return (
    <div className="p-2 ">
      <label className="border border-gray-400 py-2 px-4  flex items-center  rounded-lg shadow-sm bg-white hover:bg-gray-50 transition duration-200 ease-in-out gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125 "
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {/* // This is a title */}
          {todo.title}
        </span>
        <div className="ml-auto text-gray-400 hover:text-red-500 transition duration-200 ease-in-out">
          <button onClick={() => onDeleteTodo(todo.id)}>
            <Trash2 size={20} className="" />
          </button>
        </div>
      </label>
    </div>
  );
}
