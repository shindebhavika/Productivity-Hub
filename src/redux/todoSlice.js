// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { text: 'Hello', id: 1, completed: false },
    { text: 'Learn Redux Toolkit', id: 2, completed: true },
    { text: 'Build Todo App', id: 3, completed: false },
  ],
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, id: Date.now(), completed: false });
    },
       updateTodo: (state, action) => {
  const { id, text } = action.payload;
  const todo = state.todos.find((t) => t.id === id);
  if (todo) {
    todo.text = text;
  }
},
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      console.log(  todo.completed )
    },


  },

});

export const { addTodo, removeTodo, toggleTodo ,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
