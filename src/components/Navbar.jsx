import React from 'react';
import NavbarLogo from './assets/images/NavbarLogo.png'
import Seacrh from './assets/images/Search.png'
import User from './assets/images/User.png'
import Cart from './assets/images/Cart.png'

const Navbar = () => {
  return (
    <div>
    <nav className="bg-[#fcf8ed] shadow py-4 text-sm font-semibold flex justify-center space-x-24 items-center">
      <div className="flex items-center">
        <img src={NavbarLogo} alt="Maati Logo" className="h-10 mr-2" />
      </div>
      <div className="flex justify-center space-x-20">
        <a href="#" className="text-[#876055]">HOME</a>
        <a href="#" className="text-[#876055]">ABOUT US</a>
        <a href="#" className="text-[#876055]">SERVICES</a>
        <a href="#" className="text-[#876055]">PRODUCTS</a>
        <a href="#" className="text-[#876055]">CONTACT</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-[#9E5D3F] w-5">
          <img src={Seacrh} alt="search"/>
        </a>
        <a href="#" className="text-[#9E5D3F] w-5">
        <img src={User} alt="user" />
        </a>
        <a href="#" className="text-[#9E5D3F] w-5">
        <img src={Cart} alt="cart" />
        </a>
      </div>
    </nav>
    <div className='bg-[#ab735c] font-thin tracking-wide text-white flex items-center justify-center py-1'>
      FREE DELIVERY ON ORDERS OVER ₹899
    </div>
    </div>
  );
};

export default Navbar;
