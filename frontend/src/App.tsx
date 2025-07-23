import { useState } from 'react'
import './App.css'
import Count from './count/count'
import Todo from './todo/Todo'
import Counter from './Counter/Counter'

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
      {value === 'counter' && <Counter />}
    </>
  )
}

export default App
