import React, { useReducer } from 'react'


function reducer(state, action) {

    switch (action.type) {
        case "increment":
            return {count : state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset': return {count : 0}

        default: throw new Error()
    }
}



const Usereducer = () => {
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(prevCount=> prevCount+1);
    // }

    // const decrement = () => {
    //     setCount(prevCount=> prevCount-1);
    // }

    // const reset = () => {
    //     setCount(0);
    // }

    const [state, dispatch] = useReducer(reducer, {count : 0})
  return (
    <>
        <div>Use reducer example</div>
        <p>Count {state.count}</p>
        <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </>
    
  )
}

export default Usereducer