import React from 'react'
import EasyReturn from './assets/images/EasyReturn.png'
import EcoFriendly from './assets/images/EcoFriendly.png'
import MicrowaveSafe from './assets/images/MicrowaveSafe.png'
import DishwasherSafe from './assets/images/DishwasherSafe.png'
import HandMade from './assets/images/HandMade.png'

const Features = () => {
  return (
    <div className='lg:px-60 md:px-36 sm:px-20 px-10 text-center bg-[#bfa294]'>
        <div className="container">
        <div className="flex space-x-3 justify-between py-12">
          <div className="flex py-5 flex-col items-center justify-center bg-[#fcf8ed] w-44 shadow-xl rounded-lg">
        <img src={EasyReturn} alt="Easy Return" className='w-24 h-24 mb-2'/>
        <p className='text-sm'>EASY RETURN</p>
          </div>
          <div className="flex py-5 flex-col items-center justify-center bg-[#fcf8ed] w-44 shadow-xl rounded-lg">
        <img src={EcoFriendly} alt="Ecofriendly" className='w-24 h-24 mb-2'/>
        <p className='text-sm'>ECO-FRIENDLY</p>
          </div>
          <div className="flex py-5 flex-col items-center justify-center bg-[#fcf8ed] w-44 shadow-xl rounded-lg">
        <img src={MicrowaveSafe} alt="MicrowaveSafe" className='w-24 h-24 mb-2'/>
        <p className='text-sm'>MICROWAVE SAFE</p>
          </div>
          <div className="flex py-5 flex-col items-center justify-center bg-[#fcf8ed] w-44 shadow-xl rounded-lg">
        <img src={DishwasherSafe} alt="Dishwasher" className='w-24 h-24 mb-2'/>
        <p className='text-sm'>DISHWASHER SAFE</p>
          </div>
          <div className="flex py-5 flex-col items-center justify-center bg-[#fcf8ed] w-44 shadow-xl rounded-lg">
        <img src={HandMade} alt="HandMade" className='w-24 h-24 mb-2'/>
        <p className='text-sm'>HAND-MADE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features