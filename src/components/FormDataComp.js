import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MyFormData from '../models/formdata-model'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const FormDataComp = ({children}) => {
    
    const {register, handleSubmit, reset} = useForm()
    
    const nav = useNavigate();
    
    const myHandleSubmit = (data)=>{        
        const fd = new MyFormData(data);        
        reset();
        nav("/home");
    }

    return (
    <div>
        <form onSubmit={handleSubmit(myHandleSubmit)}>
            <br/>
            <input placeholder='Enter your first name' {...register("fname")}/> <br/>
            <input placeholder='Enter your last name' {...register("lname")}/> <br/>
            <input placeholder='Enter your tel' {...register("tel")}/> <br/>
            <input placeholder='Enter your email' {...register("email")}/> <br/>
            <input placeholder='Enter your address' {...register("address")}/> <br/>
            <input placeholder='Enter your password' type='password' {...register("password")}/> <br/>

            <button type='submit'> OK </button>
            <br/> 

            <br/>
            <div>
                {children}
            </div>           
        </form>

    </div>

  )
}


export default FormDataComp