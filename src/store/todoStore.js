import { create } from "zustand";
import todoItems from "../todoItems.json";
import api from "../service/todoListAPI.jsx";
export const TodoStore = create((set, get) => ({
  todos: [],
  isFilter: false,
  INDEX: todoItems.length,
  //切换事项完成状态
  changeItemStatus: async (id) => {
    try {
      const item = get().todos.find((item) => item.id === id);
      console.log(item);
      console.log(id);
      await api.put(`/todos/${id}`, {
        id: id,
        title: item.title,
        completed: !item.completed,
      });
      set((state) => ({
        todos: state.todos.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        ),
      }));
    } catch (error) {
      console.error("添加待办事项失败:", error);
    }
  },
  setIsFilter: (newStatus) => {
    set(() => ({
      isFilter: newStatus,
    }));
  },
  increaseIndex: () => {
    set((state) => ({
      INDEX: state.INDEX + 1,
    }));
  },

  //添加新事项
  createItem: async (title) => {
    try {
      const response = await api.post("/todos", {
        title: title,
        completed: false,
      });
      //console(response.data);
      set((state) => ({
        todos: [response.data, ...state.todos],
      }));
    } catch (error) {
      console.error("添加待办事项失败:", error);
    }
  },

//获取事项
  getItems: async () => {
    try {
      await api.get("/todos");
      set({ todos: response.data })
      console.log(get().Todos);
    } catch (error) {
      console.error("获取事项失败:", error);
    }
  },

    //根据id删除事项
  deleteItem: async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      //console(response.data);
    } catch (error) {
      console.error("添加待办事项失败:", error);
    }
  },

  //删除已完成的事项
  deleteCompletedItems: async () => {
    const needToDelete =get().todos.filter(item => item.completed);
    needToDelete.forEach(item => get().deleteItem(item.id));
    set((state) => ({
      todos: state.todos.filter((item) => !item.completed),
    }));
  },
  //分页获取数据
  getItemsByPage: async (page, size) => {
    try {
      const response = await api.get("/todos?page=" + page + "&size=" + size);
      //console(response.data);
      set({ todos: response.data });
      console.log(get().todos);
    } catch (error) {
      console.error("分页获取事项失败:", error);
    }
  },
}));
