import React, { useEffect, useState } from 'react'

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [showPassword, setShowPassword] = useState(false)

    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        if (password !== password2) {
            setErrorMsg("Passwords must be equal!")
        } else {
            setErrorMsg("")
        }
    }, [password, password2])

    const handleSubmit = (e)=>{
        e.preventDefault();                  
        console.log("New user create");
    }

    function allowSend() {
        return password === password2 && firstName.length > 3;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> first name: </label>
                <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label> last name: </label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label> email: </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label> password: </label>
                <input value={password} type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
                <span className='hover-pointer' onClick={() => setShowPassword(!showPassword)}> 👀</span>
                <label> re-type password: </label>
                <input value={password2} type={showPassword ? "text" : "password"} onChange={(e) => setPassword2(e.target.value)} />
                <br />
                {errorMsg !== "" && <div style={{ color: 'red' }}> {errorMsg}</div>}

                <button disabled={!allowSend()} type='submit'> Register </button>
            </form>
        </div>
    )
}

export default Register