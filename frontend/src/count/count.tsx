import { useEffect, useReducer } from 'react'


type Action = | { type: 'plus' } | { type: 'minus' } | { type: 'reset' }

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
  }
}


const Count = () => {

  const [count, dispatch] = useReducer(numChenge, 0);

  useEffect(() => {
    if(count === 0) {
      localStorage.removeItem('count');
    } else {
      localStorage.setItem('count', String(count));
      //console.log('現在のカウント:', count);
    }
  }, [count])

  return (
    <>
      <p>{count}</p>
      <div className='count-containar'>
        <button className='count-button' onClick={() => dispatch({ type: 'plus' })}>+</button>
        <button className='count-button' onClick={() => dispatch({ type: 'minus' })}>-</button>
        <button className='count-button' onClick={() => dispatch({ type: 'reset' })}>r</button>
      </div>
    </>
  )
}

export default Count;
