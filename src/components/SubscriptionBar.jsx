import React from 'react'
import MailIcon from './assets/images/Mail.png'

const SubscriptionBar = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:px-60 md:px-36 sm:px-20 px-10 py-10 bg-[#825540]'>
        <h1 className='text-xl text-white font-semibold'>Subscribe To Get Special Offers And Once-In-A-Lifetime Deals.</h1>
        <div className='flex  justify-around items-center space-x-3 mt-8 relative'>
        <input type="text" placeholder="Enter your email" className='text-[#ab735c] rounded-2xl w-64 px-3 py-1' />
        <img src={MailIcon} alt="Mail" className='h-6 absolute right-5'/>
        </div>
    </div>
  )
}

export default SubscriptionBar