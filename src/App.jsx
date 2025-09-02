import { useState } from 'react'
import './styles/App.css'
import TodoList from './TodoList'
import Ajax from './Ajax/api'
import { Routes, Route} from 'react-router';
function App() {
  return (
    <>
      <div>
      <TodoList />
      </div>

    </>
  )
}

export default App
