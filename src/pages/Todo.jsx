import React, { useState } from "react";
import Button from "../components/common/buttons/Button";
import { NotebookPen, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
} from "../redux/todoSlice";
import EditModal from "../components/ui/EditModal ";
import AddTask from "../components/ui/AddTask";
import Tabs from "../components/ui/Tabs";
import TaskList from "../components/ui/TaskList";

function Todo() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState(null);
  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  const [filter, setFilter] = useState("all");

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.trim().toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 dark:from-gray-800  dark:to-gray-900 py-36 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-black dark:text-white">
        <p className="text-4xl sm:text-5xl font-bold mb-8 text-center transition-transform duration-300 hover:scale-105">
          Todo App
        </p>
        <div className=" bg-transparent bg-black">
          <input
            placeholder="Search..."
            className="shadow-xl  mb-6 focus:border-2 border-pink-200 px-5 py-2 rounded-xl w-56 transition-all focus:w-64 outline-none"
            name="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Tabs filter={filter} setFilter={setFilter} />

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 w-full">
          <AddTask input={input} setInput={setInput} handleAdd={handleAdd} />

          <TaskList
            input={input}
            setInput={setInput}
            handleAdd={handleAdd}
            filteredTodos={filteredTodos}
            dispatch={dispatch}
            toggleTodo={toggleTodo}
            handleRemove={handleRemove}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>

      <div></div>
      {editTodo && (
        <EditModal
          todo={editTodo}
          onClose={() => setEditTodo(null)}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
}

export default Todo;
