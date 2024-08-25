import React, {useRef} from 'react'

const UnControlled = () => {
    const inputRef= useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }

    const handleChange = () => {
        console.log(inputRef.current.value);
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input type="email" ref={inputRef} onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
    </>
    
  )
}

export default UnControlled