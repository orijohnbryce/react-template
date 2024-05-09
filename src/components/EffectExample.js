import React, { useEffect, useState } from 'react'
import NewCounter from './NewCounter'


const EffectExample = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log("This will be run every rendering of the component!");
    })

    useEffect(() => {
        console.log("This will be run only when the component mounted for the first time! (on mount)");
    }, [])

    useEffect(() => {
        console.log("Only X has been changed");
    }, [x])
    
    return (
        <div> 
            <button onClick={() => { setX(x + 1) }}> Click Here for X </button>
            <br/>
            <button onClick={() => { setY(y + 1) }}> Click Here for Y </button>

            {x===5 && <NewCounter/>}
        </div>

    )
}

export default EffectExample