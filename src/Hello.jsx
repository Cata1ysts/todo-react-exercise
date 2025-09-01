import { useState } from 'react'
import HeartLogo from './assets/react.svg'
import styles from './Hello.module.css'
import './App.css'
import TodoList from './TodoList'

function Hello({name}) {

  return (
    <>
      <TodoList></TodoList>
    </>
  )
}

export default Hello
