import { create } from "zustand";
import todoItems from '../todoItems.json';
export const TodoStore = create((set, get) => ({
    todos: todoItems,
    isFilter: false,
    setItemById: (id) => {
        set((state) => ({
            todos: state.todos.map(item =>
                item.Id === id ? { ...item, completed: !item.completed } : item
            )
        }));
    },
    setIsFilter: (newStatus) => {
        set(() => ({
            isFilter: newStatus
        }));
    }
}));
