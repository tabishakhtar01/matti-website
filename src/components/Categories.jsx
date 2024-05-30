import React from 'react';
import Sale from './assets/images/Sale.png'
import NewLaunch from './assets/images/New.png'
import Terracotta from './assets/images/Terracotta.jpg'
import TinGlazed from './assets/images/TinGlazed.jpg'
import Sculpture from './assets/images/Sculpture.jpg'
import GiftSets from './assets/images/GiftSets.jpg'

const Categories = () => {
  return (
    <div className="py-6 bg-[#fcf8ed]">
      <div className="container flex justify-center space-x-6">

        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className="bg-red-200 rounded-full h-24 w-24 overflow-hidden">
          <img src={Sale} alt="Sale"/>
        </div>
        <span className=''>Sale</span>
        </div>       
        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className="bg-red-200 rounded-full h-24 w-24 overflow-hidden">
        <img src={NewLaunch} alt="New Launch"/>        
        </div>
        <span className=''>New Launch</span>
        </div> 
        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className="bg-red-200 rounded-full h-24 w-24 overflow-hidden">
        <img src={Terracotta} alt="Terracotta"/>
        </div>
        <span className=''>Terracotta</span>
        </div> 
        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className="bg-red-200 rounded-full h-24 w-24 overflow-hidden">
        <img src={TinGlazed} alt="Tin Glazed"/>
        </div>
        <span className=''>Tin-Glazed</span>
        </div> 
        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className="bg-red-200 rounded-full h-24 w-24 overflow-hidden">
        <img src={Sculpture} alt="Sculpture"/>
        </div>
        <span className=''>Sculpture</span>
        </div> 
        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className="bg-red-200 rounded-full h-24 w-24 overflow-hidden ">
        <img src={GiftSets} alt="Gift Sets"/>
        </div>
        <span className=''>Gift Sets</span>
        </div> 
      </div>
    </div>
  );
};

export default Categories;