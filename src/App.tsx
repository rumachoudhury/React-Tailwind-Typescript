import { useState } from "react";
import { dummyData } from "./data/todos";
// import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyData);

  //id is a number completed is a boolean
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  //title is a string
  function handleAddTodo(title: string) {
    const newTodo = {
      id: todos.length + 1, //+ 1 means Iam adding 1 more to that number to create the ID for the new todo.
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <main className=" bg-gray-100 py-6 overflow-y-auto">
      <div className="w-[500px] min-h-screen   bg-gradient-to-r from-purple-400 to-pink-400 shadow-md rounded-lg p-5 mx-auto">
        <h1 className="text-5xl text-white font-bold text-center py-6">
          Todo App
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          {/* <AddTodoForm onAddTodo={handleAddTodo} /> */}
          <TodoList
            todos={todos}
            onAddTodo={handleAddTodo}
            onCompletedChange={setTodoCompleted}
            onDeleteTodo={deleteTodo}
          />
        </div>
      </div>
    </main>
  );
}

export default App;

// ternary operator — a short way of writing if-else.
// min-h-screen means minimum height of the screen
