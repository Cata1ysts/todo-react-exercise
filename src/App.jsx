import { useState } from 'react'
import './styles/App.css'
import TodoList from './page/TodoList.jsx'
//import TodoList from './Ajax/Todo.jsx'
import Ajax from './Ajax/api'
import { Routes, Route} from 'react-router';
function App() {
  return (
    <>
      <Routes>
        <Route path='/todos' element={<TodoList/>}></Route>
      </Routes>

    </>
  )
}

export default App
