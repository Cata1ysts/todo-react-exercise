import { useState } from "react";
import todoItems from "../todoItems.json";
import styles from "../todoList.module.css";
import { TodoStore } from "../store/todoStore";
function TodoItem({ title, completed, onToggle }) {
  const itemClassName = `${styles.item} ${completed ? styles.checked : ""}`;
  return (
    <li className={itemClassName}>
      <label>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        {title} {completed && "✅"}
      </label>
    </li>
  );
}

export default function TodoList() {
  const {
    todos,
    setItemById,
    isFilter,
    setIsFilter,
    createItem,
    deleteCompletedItems,
    getItemsByPage
  } = TodoStore();
  // const [todos,setTodos] = useState(todoItems);
  // const  [isFilter, setIsFilter] = useState(false)
  const filteredList = isFilter
    ? todos.filter((item) => !item.completed)
    : todos;
  //切换事项完成状态
  const handleItemToggle = (id) => {
    setItemById(id);
  };

  //添加事项
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickAddItem = () => {
    if (inputValue.trim() === "") return;
    const newItem = {
      Id: todos.length + 1,
      title: inputValue,
      completed: false,
    };
    createItem(inputValue);
    setInputValue("");
  };


  //分页获取数据
  const [itemsPerPage, setItemsPerPage] = useState(5); // 每页条数
  const [pageNumber, setPageNumber] = useState(1); // 当前页码
  const handleItemsPerPageChange = (e) => {
        setItemsPerPage(e.target.value);
    };

    const handlePageNumberChange = (e) => {
        setPageNumber(e.target.value);
    };
  const handleClickPageSearch = () => {
    getItemsByPage(pageNumber, itemsPerPage);
  };

  return (
    <section>
      <h1>Sally Ride 的 Todo 清单</h1>
      <label>
        <input
          type="checkbox"
          checked={isFilter}
          onChange={() => setIsFilter(!isFilter)}
        />
        过滤已完成的任务
      </label>
      <br></br>
      <button
        onClick={deleteCompletedItems}
        style={{ backgroundColor: "red", color: "white" }}
      >
        删除已完成项
      </button>
      <br></br>
      <label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="添加TODO"
        />
        <button id="addItem" onClick={handleClickAddItem}>添加</button>
      </label>

      <ul>
        {filteredList.map((item) => (
          <TodoItem
            key={item.Id}
            {...item}
            onToggle={() => handleItemToggle(item.Id, !item.completed)}
          />
        ))}
      </ul>
      <label>每页条数:</label>
      <select id="itemsPerPage" onChange={handleItemsPerPageChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

      <label>页码:</label>
      <input type="number" id="pageNumber" min="1" placeholder="输入页码" onChange={handlePageNumberChange}/>

      <button id="pageSearch" onClick={handleClickPageSearch}>跳转</button>
    </section>
  );
}
