import { useState } from 'react'
import './App.css'
import Count from './count/count'
import Todo from './todo/Todo'

const App = () => {

  const [ value, setValue] = useState('count')
  console.log(value);
  

  return (
    <>
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      <option value="count">Count</option>
      <option value="todo">Todo</option>
    </select>
    {value === 'count' && <Count/>}
    {value === 'todo' && <Todo/>}
    </>
  )
}

export default App
