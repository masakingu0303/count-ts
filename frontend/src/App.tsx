import { useReducer } from 'react'
import './App.css'

type Action = | {type: 'plus'} | {type: 'minus'} | {type: 'reset'}

const numChenge = (state: number, action: Action) => {
  switch (action.type) {
    case 'plus':
      return state + 1;
    case 'minus':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state
      break;
  }
}

function App() {

  const [count, dispatch] = useReducer(numChenge, 0);

  return (
    <>
      <p>{count}</p>
      <div className='containar'>
        <button onClick={() => dispatch({ type: 'plus' })}>+</button>
        <button onClick={() => dispatch({ type: 'minus' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>r</button>
      </div>
    </>
  )
}

export default App
