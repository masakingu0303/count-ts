import { useState } from 'react'
import './App.css'
import Count from './count/count'
import Todo from './todo/Todo'
import Timer from './Timer/Timer'
import QuestionForm from './ questionForm/ QuestionForm'
import ChatForm from './chatForm/ChatForm'

const App = () => {

  const [value, setValue] = useState('chatForm')


  return (
    <>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="count">Count(カウンター)</option>
        <option value="todo">Todo(やる事リスト)</option>
        <option value="counter">Timer(タイマー)</option>
        <option value="questionForm">QuestionForm(アンケートフォーム)</option>
        <option value="chatForm">ChatForm(掲示板)</option>
      </select>
      {value === 'count' && <Count />}
      {value === 'todo' && <Todo />}
      {value === 'counter' && <Timer/>}
      {value === 'questionForm' && <QuestionForm/>}
      {value === 'chatForm' && <ChatForm/>}
    </>
  )
}

export default App
