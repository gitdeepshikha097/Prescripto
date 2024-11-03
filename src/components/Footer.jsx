import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*-----Left Section-----*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
          At Prescripto, we are dedicated to connecting patients with trusted healthcare professionals, making it easier than ever to book doctor appointments online. Our platform provides access to experienced doctors across various specialties, ensuring personalized care at your convenience. Prescripto is here to simplify your healthcare journey with just a few clicks. Your health, our priority.</p>
        </div>
          {/*-----Center Section-----*/}
          <div>
          <p className='text-xl font-medium mb-5 '>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
           </ul>
        </div>
          {/*-----Right Section-----*/}
          <div>
          <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>d.shikha.singh.2001@gmail.com</li>
          </ul>
        </div>
        
      </div>
     {/*-----Company Text-----*/}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>&copy; 2024 Prescripto. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  )
}

export default Footer