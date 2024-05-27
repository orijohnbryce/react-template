import React, { useState } from 'react'
import { login } from '../client/auth'
import { parseJwt } from '../utils/helpers'

const Login = ({setUserData}) => {    
  const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")

    const handleClick = async () => {
        const res = await login({password: pw, email })
        if (res) {
            alert("Logged in successfully")
            setUserData(parseJwt(res).user)
        }
    }
  return (
      <div>
          <p> Login: </p>
            <label> Email: </label>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br />            
            <label> Password: </label>
          <input value={pw} onChange={(e)=>{setPw(e.target.value)}}/>
            <br/>
            <br/>
          <button onClick={handleClick}> Login </button>
    </div>
  )
}

export default Login