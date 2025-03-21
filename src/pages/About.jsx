import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
    return (
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={"ABOUT"} text2={"US"}></Title>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
                <p className='text-sm '>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. 
                Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, 
                and purchase a wide range of products from the comfort of their homes. </p>
            
                    <p className='text-sm'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.
                         From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
              
              
                 <b className='text-left ml-6'>Our mission</b>
              <p className='text-sm'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
              

            </div>

          



</div>
<div className="flex flex-col md:flex-row text-sm mb-20">
<div className="text-xl py-4">
            <Title text1={"WHY"} text2={"CHOOSEUS"}></Title>
            </div>
<div className="flex flex-col md:flex-row text-sm mb-20 my-32 sm:my-20 gap-4">
<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
    <b>Quality Assurance:</b>
    <p className='text-sm'>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>

</div>
<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Convenience:</b>
    <p className='text-sm'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>

</div>
<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Exceptional Customer Service:</b>
    <p className='text-sm'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>

</div>







</div>

</div>


        </div>
    )
}

export default About