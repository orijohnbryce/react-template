import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(100)

    useEffect(()=>{
        console.log(counter);
    }, [counter])

    async function handleClick() {        
        setCounter((prevCounter)=>prevCounter+1)                
    }

  return (
    <div>
        <p> counter: {counter} </p>
        <button onClick={handleClick}> + </button>
    </div>
  )
}

export default Counter