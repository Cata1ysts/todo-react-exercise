import { create } from "zustand";
import todoItems from "../todoItems.json";
import api from "../service/todoListAPI.jsx"
export const TodoStore = create((set, get) => ({
  todos: todoItems,
  isFilter: false,
  INDEX: todoItems.length,
  //切换事项完成状态
  setItemById: (id) => {
    set((state) => ({
      todos: state.todos.map((item) =>
        item.Id === id ? { ...item, completed: !item.completed } : item
      ),
    }));
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
  createItem: (title) => {
    get().increaseIndex();
    const newItem = { Id: get().INDEX, title: title, completed: false };
    set((state) => ({
      todos: [newItem, ...state.todos],
    }));
  },

  //删除已完成的事项
  deleteCompletedItems: () => {
    set((state) => ({
      todos: state.todos.filter((item) => !item.completed),
    }));
  },
  //分页获取数据
  getItemsByPage: (page,size) =>{
    
  }
}));
