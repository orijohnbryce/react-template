import React from 'react'
import FormDataComp from '../FormDataComp'
import { useNavigate } from 'react-router'

const ChildrenExample = () => {

    const nav = useNavigate()
    
  return (
    <div>

        <FormDataComp>
            <button onClick={()=>{nav("/home")}} style={{backgroundColor: 'var(--color2)'}}> Home </button>
        </FormDataComp>

    </div>
  )
}

export default ChildrenExample