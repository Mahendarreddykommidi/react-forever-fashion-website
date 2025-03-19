import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => { 
    const {search,setSearch,showSearch,Showsetsearch}=useContext(Shopcontext);
    const [visible,Setvisible]=useState(false)
    const location =useLocation()

    useEffect(()=>{
      if(location.pathname.includes('Collections') && showSearch){
        Setvisible(true)
        
      }
      else{
        Setvisible(false)
      }
    },[location,showSearch])
  return showSearch && visible ? (
    <div className="flex justify-center items-center">
    
  
    <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-2 rounded-full w-3/4 sm:1/2">
    <input className='flex-1 border-t border-b text-gray-50 outline-none text-sm' type="text" placeholder='search' />
    <img onClick={()=>Showsetsearch(true)} src={assets.search_icon} alt="" className='w-3 inline cursor-pointer' />
    
    </div>
    <img onClick={()=>Showsetsearch(false)} src={assets.cross_icon} alt="" className='w-3 inline cursor-pointer'/>
    </div>




  ) :null
}

export default Searchbar