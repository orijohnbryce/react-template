import React, { useState } from 'react'

const ContactMe = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

  return (
    <div>
        <label> Name</label>        
        <input placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>        
        <br/>
        <label> Message </label>
        <textarea rows={3} onChange={(e)=>setMessage(e.target.value)} value={message}/>
        <br/>
        <button> Send </button>
    </div>
  )
}

export default ContactMe