import React, { useState } from 'react'

// Counter implementation
const Usestate = () => {
    const [count, setCount] = useState(0); 
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=> setCount(prevState => prevState + 1)}>
            Increment
        </button>
    </div>
  )
}

export default Usestate;