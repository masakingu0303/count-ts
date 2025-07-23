import { useState } from 'react'
import './App.css'
import Count from './count/count'
import Todo from './todo/Todo'
import Timer from './Timer/Timer'
import QuestionForm from './ questionForm/ QuestionForm'

const App = () => {

  const [value, setValue] = useState('count')


  return (
    <>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="count">Count</option>
        <option value="todo">Todo</option>
        <option value="counter">Timer</option>
        <option value="questionForm">QuestionForm</option>
      </select>
      {value === 'count' && <Count />}
      {value === 'todo' && <Todo />}
      {value === 'counter' && <Timer/>}
      {value === 'questionForm' && <QuestionForm/>}
    </>
  )
}

export default App
