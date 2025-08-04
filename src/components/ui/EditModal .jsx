// components/EditModal.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";


const EditModal = ({ todo, onClose,updateTodo }) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text: newText }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1C1C27] p-6 rounded shadow-xl w-80">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Edit Todo</h2>
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-full p-2 rounded border dark:bg-[#1C1E27] dark:text-white mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-black">
            Cancel
          </button>
          <button onClick={handleUpdate} className="px-3 py-1 bg-gradient-to-br from-purple-300 to-pink-400 text-white rounded hover:bg-purple-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
