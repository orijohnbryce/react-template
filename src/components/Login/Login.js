import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")


  return (
    <div>
        <h1> Login </h1>

        <input placeholder='enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input placeholder='enter password' type='password' value={pwd} onChange={(e)=>{setPwd(e.target.value)}} />

        <button> Login </button>
    </div>
  )
}

export default Login