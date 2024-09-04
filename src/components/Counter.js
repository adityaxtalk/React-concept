import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, decrementByValue, incrementByValue, toggleCounter } from './store/counter';
import { Button } from 'react-bootstrap';

const Counter = () => {
  const {count, showCounter} = useSelector(store=> store.counter);
  const [changeByValue, setChangeByValue] = useState(0);
  const dispatch = useDispatch()
  const ShowNHideCounter = () => {
    dispatch(toggleCounter())
  }

  const incrementCounter=()=> {
    dispatch(increment())
  };

  const decrementCounter=()=> {
    dispatch(decrement())
  };

  
  return (
    <>
      <h1 className='text-center'>Counter</h1>
      {showCounter && <>
        <Button type="secondary" onClick={incrementCounter}>+</Button> {count} <Button type="secondary" onClick={decrementCounter}>-</Button>
        <hr/>
        <Button onClick={()=> dispatch(incrementByValue(changeByValue))}>+</Button><input type="number" onChange={(e)=> setChangeByValue(e.target.value)} value={changeByValue}/> <Button onClick={()=> dispatch(decrementByValue(changeByValue))}>-</Button>
      </>  }
      <Button onClick={ShowNHideCounter}>Toggle Counter</Button>
    </>
    


  )
}

export default Counter