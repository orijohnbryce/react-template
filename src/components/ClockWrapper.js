import React, { useState } from 'react'
import Clock from './Clock'

const ClockWrapper = () => {
    const [show, setShow] = useState(false)
    
    function handleClick() {
        // setShow(!show)
        // setShow((prevShow)=>{return !prevShow})
        setShow((prevShow)=>!prevShow)
    }

  return (
    <div>        
        {show && <Clock/>}

        <br/>
        <button onClick={handleClick}> לחץ כאן </button>
    </div>
  )
}

export default ClockWrapper