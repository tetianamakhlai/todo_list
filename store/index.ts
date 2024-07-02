import { create } from "zustand";
import { toDo } from "../types";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

interface ToDoStore {
  todos: ToDo[];
  addTodo: (description: string) => void;
  removeToDo: (id: string) => void;
}

export const todoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (description) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: uuidv4(), description, checked: false },
          ],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    { name: "toDoStore" }
  )
);
