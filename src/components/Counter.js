import {useEffect, useState} from 'react';

function Counter() {

    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            console.log(counter);
            // setCounter(counter+1)
            setCounter((prevCounter)=>{return prevCounter+1})
        }, 1000)
    }, [])

    return <div> Counter: {counter} </div>
}

export default Counter