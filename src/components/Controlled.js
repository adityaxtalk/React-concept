import React, { useState } from 'react'

const Controlled = () => {
  const [email, setMail] = useState("");
  return (
    <>
    <input type='text' value={email} onChange={(e)=> {setMail(e.target.value)}}/>

{email}
    </>
  )
}

export default Controlled