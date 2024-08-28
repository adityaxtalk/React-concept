import React from 'react'
import useCounter from './use-counter'

const ForwardCounter = () => {
    const counter = useCounter(true);
    return (
        <div>
           Forward Counter: {counter}
        </div>
    )
}

const BackWardCounter = () => {
   const counter = useCounter(false);
  return (
    <div>
        Backward Counter: {counter}
    </div>
  ) 
}


const CustomHook = () => {
  return (
    <div>
        <h1>Custom Hook</h1> 
        <ForwardCounter/>
        <br/>
        <hr/>
        <BackWardCounter/>
    </div>
  )
}

export default CustomHook