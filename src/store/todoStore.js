import { create } from "zustand";
import todoItems from '../todoItems.json';
export const TodoStore = create((set, get) =>({
    todos: todoItems,
    isFilter : false,
}));