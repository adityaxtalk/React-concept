import React, { useState } from 'react'

const EventHandling = () => {
    const handleClick = (event) => {

        event.preventDefault();
        
        console.log(event.nativeEvent.timeStamp);
    }
  return (
    <>
            <a href='https://www.example.com' onClick={handleClick}>Click Me </a>
            <MultipleEventHandling/>
    </>
    
  )
}

const MultipleEventHandling = () => {

     const [message, setMessage] = useState("")

     const eventHandler = (event) => {
        switch(event.type) {
            case "mouseenter":
                setMessage("On mouse enter");
                break;
            case "mouseleave":
                setMessage("On mouse Leave");
                break;
            default:
                setMessage("");
            break;
        }
     }

     return (
        <>

           <div style={{padding: "20px", color: "white", backgroundColor: "darkblue"}} onMouseEnter={eventHandler} onMouseLeave={eventHandler}>
           Multiple Event Handling: {message}
           </div>
           <EventDelegation/>
        </>
     )
}

const EventDelegation = () => {
   
    const handleClick = (event) => { 
        if (event.target.classList.value === "delegated-button") {
            alert(event.target.dataset.id + " clicked")
        }
       alert("Parent div clicked")

    }

    const handleEventBubbling = (event) => {
        alert("Child div clicked");
        event.stopPropagation();
    }
 
    const handleDoubleBubbling = (event) => {
        event.stopPropagation();
        alert("Child Button parent clicked");
    } 
    return (
        <div onClick={handleClick}>
            <button className='delegated-button' data-id="1">
                Click 1
            </button>
            <button className='delegated-button' data-id="2" >
                Click 2
            </button>
            <button className='delegated-button' data-id="3">Click 3</button>
            <div style={{padding: "40px", border: "1px" , cursor: "pointer"}} onClick={handleDoubleBubbling}>
            <button onClick={handleEventBubbling}>Event Bubbling</button>
            </div>
            
        </div>
    )
}
export default EventHandling