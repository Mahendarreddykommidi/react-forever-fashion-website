import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Ourpolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs md:text-base text-gray-600'>
            <div>
                <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>easy exchange policy</p>
                <p className='text-gray-400'>we offer hassle free exhange poiicy</p>
            </div>
            <div>
                <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>7 days return policy</p>
                <p className='text-gray-400'>we provide 7 day refund policy</p>
            </div>
            <div>
                <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Best customer support</p>
                <p className='text-gray-400'>we provide 24/7 customer support</p>
            </div>
        </div>
    )
}

export default Ourpolicy