import React, { useEffect } from 'react'
import Counter from './Counter'

const NewCounter = () => {

    useEffect(()=>{
       return ()=>{console.log("NewCounter is unmount (מת)");} 
    }, [])

  return (
    <div>
        <Counter/>
    </div>
  )
}

export default NewCounter