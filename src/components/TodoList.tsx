import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";
import AddTodoForm from "./AddTodoForm";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onAddTodo: (title: string) => void;
  onDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompletedChange,
  onAddTodo,
  onDeleteTodo,
}: TodoListProps) {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id; // Sort by ID in descending order  (3, 2, 1) --> Highlight new tasks on top
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        {/* call the AddTodoForm component here  */}
        <AddTodoForm onAddTodo={onAddTodo} />
        <div className=" mx-auto space-y-4">
          {todoSorted.map((todo) => (
            //call the TodoItem component here
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={onCompletedChange}
              onDeleteTodo={onDeleteTodo} // Pass the onDeleteTodo prop
            />
          ))}
        </div>
      </div>

      {todos.length === 0 && (
        <p className="text-center text-md mt-4 ">
          {/* // when there are no todos */}
          There are no todos yet.Add a new todo
        </p>
      )}
    </>
  );
}
