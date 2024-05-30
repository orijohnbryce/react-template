import React, { useState } from 'react'

const chars = "abcdefghijklmnopqrstuvwxyz ";

const FastTyping = () => {
    const [char, setChar] = useState("")
    const [needed, setNeeded] = useState("f")
    const [color, setColor] = useState("green")

    const handleType = (e) => {
        // console.log(`needed: ${needed}. typed: ${e.target.value}`);
        if (needed === e.target.value) {
            setColor("green")
            let newChar = Math.floor(Math.random() * chars.length);
            newChar = chars[newChar];
            setNeeded(newChar);

        } else {
            setColor("red")
        }
    }
    return (
        <div>
            <h1> Wellcome to FastTyping.com </h1>
            <h3> press: {needed} </h3>

            <input autoFocus style={{ backgroundColor: color }}
                value={char} onChange={handleType} />
        </div>
    )
}

export default FastTyping