import { create } from "zustand";
import api from "./api";
export const useTodoLists = create((set, get) => ({
    todos: [],
    loading: false,
    error: null,
    fetchTodos: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(
                "/todos"
            );
            console.log(response.data);
            set({ todos: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));
export default useTodoLists;