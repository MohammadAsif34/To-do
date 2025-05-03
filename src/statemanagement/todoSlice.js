import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoslice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        _id: nanoid(),
        text: action.payload,
        status: "pending",
        createdAt: new Date().toISOString(),
        doneAt: null,
      });
    },
    toggleTodo: (state, action) => {
      const idx = state.findIndex((todo) => todo._id == action.payload);
      const todo = state[idx];
      // console.log("chal");
      if (todo) {
        const wasPending = todo.status === "pending";
        todo.status = wasPending ? "done" : "pending";
        todo.doneAt = wasPending ? new Date().toISOString() : null;
      }
    },
    removeTodo: (state, action) => {
      const idx = state.findIndex((todo) => todo._id === action.payload);
      if (idx != -1) state.splice(idx, 1);
    },
  },
});
export const { addTodo, removeTodo, toggleTodo } = todoslice.actions;
export default todoslice.reducer;
