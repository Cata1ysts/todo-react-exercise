import { useState } from 'react';
import todoItems from './todoItems.json';
import styles from './TodoList.module.css';
import { TodoStore } from './store/todoStore';
function TodoItem({ title, completed,onToggle}) {
  const itemClassName = `${styles.item} ${completed ? styles.checked : ''}`;
  return <li className={itemClassName}>
      <label>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        {title} {completed && '✅'}
      </label>
      </li>;
}

export default function TodoList() {
  const { todos, setItemById,isFilter,setIsFilter } = TodoStore();
  // const [todos,setTodos] = useState(todoItems);
  // const  [isFilter, setIsFilter] = useState(false)
	const filteredList = isFilter?todos.filter(item => !item.completed):todos;
  const handleItemToggle = (id) => {
    setItemById(id);
  } 
  const addItem = () => {
    const newtitle = document.getElementById("new").value;
    document.getElementById("new").value = "";
    console.log(newtitle);
  } 
  return (
    <section>
      <h1>Sally Ride 的 Todo 清单</h1>
      <label>
        <input type="checkbox" checked={isFilter} onChange={() => setIsFilter(!isFilter)} />
        过滤已完成的任务
      </label>
      <br></br>
      <label>
        <input id="new" type="text" placeholder="新增Todo"/>
        <button onClick={addItem}>添加</button>
      </label>
      <ul>
        {filteredList.map(item => (
			<TodoItem key={item.Id} {...item}
      onToggle={() => handleItemToggle(item.Id, !item.completed)} 
      />
		))}
      </ul>
    </section>
  );
}