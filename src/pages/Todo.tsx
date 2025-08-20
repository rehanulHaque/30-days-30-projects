import { useState, type FormEvent } from "react";
import { Plus, Trash } from "lucide-react";

interface TodoTypes {
  id: number;
  title: string;
  completed: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoTypes[]>([
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: false },
  ]);
  const [title, setTitle] = useState("");

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
    setTitle("");
  };
  const handelDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex items-center justify-center">
      <div className="min-w-[400px] p-4 rounded-md border border-gray-600">
        <h1 className="text-2xl font-bold mb-4">Todo Management</h1>
        <form onSubmit={handelSubmit} className="flex gap-2">
          <input
            placeholder="Enter Todo Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="outline-none border border-gray-300 rounded-md p-2 w-full"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex gap-2 items-center text-sm">
            <Plus className="h-4 w-4 font-bold" /> Add
          </button>
        </form>
        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between border border-gray-300 p-2 rounded-md mt-2"
            >
              <span>{todo.title}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handelDelete(todo.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex gap-2 items-center text-sm"
                >
                  <Trash className="h-4 w-4" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
