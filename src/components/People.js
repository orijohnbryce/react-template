import React, { useState } from 'react'


function myFunction(p) {
    return <div key={p.id}> {p.fname} - {p.lname} - {p.age} </div>
}

const People = ({ people }) => {
    const [ps, setPs] = useState(people)

    function deleteFirstPerson() {
        const temp = [...ps];        
        temp.shift()
        setPs(temp)
        console.log(temp);
    }    

    return (
        <div>
            {ps.length === 0 && <div>  No People! </div>}            
            {ps.length > 0 && <div> {            
                ps.map(myFunction)                
            } </div>}            
            <br/>
            <br/>
            <button onClick={deleteFirstPerson}> Delete first person </button>
        </div>
    )
}

export default People