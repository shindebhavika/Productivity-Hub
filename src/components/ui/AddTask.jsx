import { NotebookPen, Trash } from 'lucide-react'
import React from 'react'

function AddTask({input, setInput,handleAdd,}) {
  return (
       <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Enter  your task ...."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-6 py-3 text-gray-800 dark:text-white bg-transparent outline-none"
            />
            <button
              onClick={handleAdd}
              className="bg-gradient-to-br from-purple-300 to-pink-400 hover:bg-[#ff3d3d] text-white font-semibold px-8 py-4 rounded-full"
            >
      Save Task
            </button>
          </div>
  )
}

export default AddTask
