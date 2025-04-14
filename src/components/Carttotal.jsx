import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'
import { useNavigate } from 'react-router-dom';

const Carttotal = () => {
    const navigation=useNavigate()
    const {deliveryfee,getCartamount,navigate}=useContext(Shopcontext);
    const currency="$"
   
  return (
    <div className='w-full'>
        <div className="text-2xl">
            <Title text1={'Cart'} text2={"Total"}></Title>
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm"> 
            <div className="flex justify-between">
                <p>Currency</p>
                <p>{currency}{getCartamount()}.00</p>


            </div>
          
            <div className="flex justify-between">
                <p>Currency</p>
                <p>{currency}{deliveryfee}</p>


            </div>
            <div className="flex justify-between">
                <p>Currency</p>
                <p>{currency}{getCartamount()===0 ? 0:getCartamount(deliveryfee)}</p>


            </div>
            


        </div>
        <button onClick={()=>navigation('/Placeorders')} className='bg-black px-5 py-1.5 hover:bg-gray-600 rounded-sm text-sm text-white my-3 tex-center'  >PROCEED TO CHECKOUT</button>




    </div>
  )
}

export default Carttotal