import { NotebookPen, Trash } from 'lucide-react'
import React from 'react'

function TaskList({filteredTodos,dispatch,toggleTodo,handleRemove,setEditTodo}) {
  return (
         <ul className="mt-6 space-y-4">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between text-gray-800 dark:text-gray-200"
              >
                <div className="flex items-center gap-3">
                  <button
                    className="dark:bg-black/10"
                    onClick={() => dispatch(toggleTodo(todo.id))}
                  >
                    <label className="text-white">
                      <input
                        className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 h-5 w-5"
                        type="checkbox"
                      />
                    </label>
                  </button>
                  <span className={todo.completed ? "line-through " : ""}>
                    {todo.text}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleRemove(todo.id)}>
                    <Trash className="text-red-500 hover:text-red-600 w-5 h-5" />
                  </button>
                  <button
              onClick={() => setEditTodo(todo)}
              className="text-sm  text-white px-2 py-1 rounded"
            >
                  <NotebookPen className="w-5 h-5 text-blue-500" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
  )
}

export default TaskList
