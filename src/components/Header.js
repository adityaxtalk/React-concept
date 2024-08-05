import React from 'react'

const Header = (props) => {

    const changeWelcome=()=>{
       
       console.log("clicked button") 
    }
    return (
    <>
    <div>Header</div>
    <h1>{props.data.welcome}</h1>
    <h2>{props.data.title}</h2>
    <h3>{props.data.author.firstName} {props.data.author.lastName}</h3>
    <button onClick={props.changeWelcomeText}>Change</button>
    </>
    
  )
}

export default Header;