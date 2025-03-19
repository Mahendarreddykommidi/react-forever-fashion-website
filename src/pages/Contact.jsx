import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
    return (
        <div>

        <div className=' my-10 text-2xl text-center pt-8 border-t'>
        <Title text1={"CONTACT"} text2={"US"}></Title>
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">

<img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />

<div className="flex flex-col justify-center items-start gap-6">
<p className='font-semibold text-gray-600 text-xl'>Our Store</p>
<p className='text-xl font-light'>54709 Willms Station
Suite 350, Washington, USA</p>
<p className='text-xl font-light'>Tel: (415) 555-0132</p>
<p className='text-xl font-light'>Email: admin@forever.com</p>
<p className='text-2xl text-gray-600'>Careers at Forever</p>
<p className='text-xl font-light'>Learn more about our teams and job openings.</p>

<button className='px-4 py-3 border-gray-300 border-2 hover:bg-black text-black '>Explore Jobs</button>
</div>   




    </div>
    <Newsletter/>
    


    </div>

    )
}

export default Contact