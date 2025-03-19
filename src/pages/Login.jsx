import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [currentstate,Setcurrentstate]=useState("Sign up");
    const onSubmithandler=async(e)=>{
        e.preventDefault()
    }
    return (
        <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700' onSubmit={onSubmithandler}>
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className='prata-regular text-3xl'>{currentstate}</p>
                <hr className='border none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentstate === 'Login' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required/>}
            <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
            <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
            <div className="w-full flex justify-between text-sm mt-[-8px]">
                <p className="cursor-pointer">Forgot ur Password</p>
                {
                    currentstate==="Login" 
                    ? <p className='cursor-pointer' onClick={()=>Setcurrentstate("Sign up")}>Create your account</p>
                    :<p className="cursor-pointer" onClick={()=>Setcurrentstate('Login')}>Login here</p>
                }
            </div>
        </form>
    )
}

export default Login