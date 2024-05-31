import React from 'react';
import EasyReturn from './assets/images/EasyReturn.png';
import EcoFriendly from './assets/images/EcoFriendly.png';
import MicrowaveSafe from './assets/images/MicrowaveSafe.png';
import DishwasherSafe from './assets/images/DishwasherSafe.png';
import HandMade from './assets/images/HandMade.png';

const Features = () => {
  return (
    <div className='lg:px-60 md:px-36 sm:px-20 px-10 text-center bg-[#bfa294] flex items-center justify-center'>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-12">
        <div className="flex flex-col items-center justify-center bg-[#fcf8ed] shadow-xl rounded-lg p-5">
          <img src={EasyReturn} alt="Easy Return" className='w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 mb-2'/>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg'>EASY RETURN</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#fcf8ed] shadow-xl rounded-lg p-5">
          <img src={EcoFriendly} alt="Ecofriendly" className='w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 mb-2'/>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg'>ECO-FRIENDLY</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#fcf8ed] shadow-xl rounded-lg p-5">
          <img src={MicrowaveSafe} alt="MicrowaveSafe" className='w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 mb-2'/>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg'>MICROWAVE SAFE</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#fcf8ed] shadow-xl rounded-lg p-5">
          <img src={DishwasherSafe} alt="Dishwasher" className='w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 mb-2'/>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg'>DISHWASHER SAFE</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#fcf8ed] shadow-xl rounded-lg p-5">
          <img src={HandMade} alt="HandMade" className='w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 mb-2'/>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg'>HAND-MADE</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
