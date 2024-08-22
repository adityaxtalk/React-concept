import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {

        
    });

    useEffect(()=> {
        
    }, []);

    useEffect(()=> {
        
       const interval = setInterval(()=> {
        setCount(count + 1);
        console.log(count);
       }, 3000);

       return () =>{ 
        // console.log("Interval cleared");
        clearInterval(interval)
       }
    }, [count]);
  return (
    <div>
        <p> Timer {count}</p>

    </div>
  )
}

export default Useeffect