import React, { useState } from 'react'
import ImageSwapper from './ImageSwapper';

const Counter = () => {

    const [counter, setCounter] = useState(0)

    function updateCounter(num) {
        setCounter(counter + num);
    }

    return (
        <div>
            <button onClick={() => updateCounter(1)}> +1 </button>
            <br />
            <p> You clicked {counter} times! </p>

            {counter % 2 === 1 ? <p> Is Not Even! </p> : <p> It Is Even!!</p>}

            <button onClick={() => updateCounter(-1)}> -1 </button>
            <ImageSwapper num={counter} setNum={setCounter} />
        </div>
    )
}

export default Counter