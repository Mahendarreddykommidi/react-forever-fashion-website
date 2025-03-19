import React from 'react'

const Newsletter = () => {
    return (
        <div>
        <div className='text-center '>
            <p className='text-2xl font-medium text-gray-600'>subscribe now&get 20% off</p>
            <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus?</p>
                </div>
                <div>     
            <form action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto '>
                <input type="email" placeholder='enter your email' className='w-full sm:flex-1 PY-3 ' />
                <button type='submit' className='bg-black text-white px-4 py-2'>subscribe</button>
            </form>
            </div>
</div>

    )
}

export default Newsletter