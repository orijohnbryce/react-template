import { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())    

    useEffect(()=>{  

        const iid = setInterval(()=>{  
            const temp = new Date().toLocaleTimeString()
            console.log(temp);        
            setTime(temp)
        }, 1000)

        return ()=>clearInterval(iid)
    }, [])

  return (
    <div>Clock: {time}</div>
  )
}

export default Clock