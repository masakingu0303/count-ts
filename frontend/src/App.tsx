import { useState } from 'react'
import './App.css'
import Count from './count/count'
import Todo from './todo/Todo'
import Timer from './Timer/Timer'

const App = () => {

  const [value, setValue] = useState('count')


  return (
    <>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="count">Count</option>
        <option value="todo">Todo</option>
        <option value="counter">Counter</option>
      </select>
      {value === 'count' && <Count />}
      {value === 'todo' && <Todo />}
      {value === 'counter' && <Timer/>}
    </>
  )
}

export default App
