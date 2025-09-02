import { create } from "zustand";
import todoItems from "../todoItems.json";
import api from "../service/todoListAPI.jsx";
export const TodoStore = create((set, get) => ({
  todos: todoItems,
  isFilter: false,
  INDEX: todoItems.length,
  //切换事项完成状态
  changeItemStatus: async (id) => {
    try {
      const item = get().todos.find((item) => item.id === id);
      console.log(item);
      console.log(id);
      const response = await api.put(`/todos/${id}`, {
        id: id,
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

  //删除已完成的事项
  deleteCompletedItems: () => {
    set((state) => ({
      todos: state.todos.filter((item) => !item.completed),
    }));
  },
  //分页获取数据
  getItemsByPage: (page, size) => {},
}));
