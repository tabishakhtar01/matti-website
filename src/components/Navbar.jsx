import React from 'react';
import NavbarLogo from './assets/images/NavbarLogo.png';
import Search from './assets/images/Search.png';
import User from './assets/images/User.png';
import Cart from './assets/images/Cart.png';

const Navbar = ({ onAboutClick, onProductsClick, onContactClick, onServicesClick }) => {
  return (
    <div>
      <nav className="bg-[#fcf8ed] shadow py-4 text-sm lg:text-base font-semibold flex flex-wrap justify-between items-center px-4 lg:px-24">
        <div className="flex items-center mb-2 lg:mb-0">
          <img src={NavbarLogo} alt="Maati Logo" className="h-10" />
        </div>
        <div className="flex flex-wrap justify-center space-x-4 lg:space-x-20 mb-2 lg:mb-0">
          <a href="#" className="text-[#876055] text-xs sm:text-sm lg:text-base">HOME</a>
          <a href="#" className="text-[#876055] text-xs sm:text-sm lg:text-base" onClick={onAboutClick}>ABOUT US</a>
          <a href="#" className="text-[#876055] text-xs sm:text-sm lg:text-base" onClick={onServicesClick}>SERVICES</a>
          <a href="#" className="text-[#876055] text-xs sm:text-sm lg:text-base" onClick={onProductsClick}>PRODUCTS</a>
          <a href="#" className="text-[#876055] text-xs sm:text-sm lg:text-base" onClick={onContactClick}>CONTACT</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-[#9E5D3F] w-5">
            <img src={Search} alt="search" />
          </a>
          <a href="#" className="text-[#9E5D3F] w-5">
            <img src={User} alt="user" />
          </a>
          <a href="#" className="text-[#9E5D3F] w-5">
            <img src={Cart} alt="cart" />
          </a>
        </div>
      </nav>
      <div className='bg-[#ab735c] font-thin tracking-wide text-white flex items-center justify-center py-1 text-xs sm:text-sm lg:text-base'>
        FREE DELIVERY ON ORDERS OVER ₹899
      </div>
    </div>
  );
};

export default Navbar;
