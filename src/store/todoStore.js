import { create } from "zustand";
import todoItems from '../todoItems.json';
export const TodoStore = create((set, get) => ({
    todos: todoItems,
    isFilter: false,
    INDEX: todoItems.length,
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
    },
    increaseIndex: () => {
        set((state) => ({
            INDEX: state.INDEX + 1
        }));
    },
    createItem: (title) => {
        get().increaseIndex();
        const newItem = { Id: get().INDEX, title: title, completed: false};
        set((state) => ({
            todos:[newItem,...state.todos,]
        }))
    }
}));
