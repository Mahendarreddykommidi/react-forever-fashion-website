import React, { useState } from 'react'
import Title from '../components/Title'
import Carttotal from '../components/Carttotal'
import { assets } from '../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'

const Placeorders = () => {
    const navigation=useNavigate()
    const [method,Setmethod]=useState('')
   
    return (
        <div className='flex flex-col justify-between gap-4 sm:pt-14 min-h-[80vh]'>
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
                    </div>
                    <div className="flex gap-3">
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Firstname' />
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Lastname' />

</div>
                

<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
<div className="flex gap-3">
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
   

</div>
<div className="flex gap-3">
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
   

</div>  
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number' />
</div>
<div className="mt-12 flex-1">
                <div className="mt-8 min-w-80">
                <Carttotal/>
                </div>
                <div className="mt-12">
                <Title text1={"PAYMENT"} text2={"METHOD"}></Title>
                <div className="flex gap-3 flex-col lg:flex-row">
                    <div onClick={()=>Setmethod('stripe')} className="flex items-center ap-3 border-p-2 px-3 cursor-pointer">
                        <p className={`min w-3.5 h-3.5 border rounded-full ${method==="stripe" ? "bg-green-400":""}`}></p>
                        <img className="h-5 mx-4" alt="" src={assets.stripe_logo} />
                    </div>
                    <div onClick={()=>Setmethod("razorpay")}className="flex items-center ap-3 border-p-2 px-3 cursor-pointer">
                    <p className={`min w-3.5 h-3.5 border rounded-full ${method==="razorpay" ? "bg-green-400":""}`}></p>
                        <img className="h-5 mx-4" alt="" src={assets.razorpay_logo} />
                    </div>
                    <div onClick={()=>Setmethod("Cod")} className="flex items-center ap-3 border-p-2 px-3 cursor-pointer">
                    <p className={`min w-3.5 h-3.5 border rounded-full ${method==="Cod" ? "bg-green-400":""}`}></p>
                        <p className='text-gray-500 text-sm font-medium mx-4'>Cash on delivery</p>
                    </div>
                 


                </div>

                </div>
                <button onClick={()=>navigation('/Orders')} className='bg-black px-5 py-1.5 hover:bg-gray-600 rounded-sm text-sm text-white my-3 tex-center'  >Placeorder</button>
               
            </div>


            </div>



            
  

            




    
    )
}

export default Placeorders