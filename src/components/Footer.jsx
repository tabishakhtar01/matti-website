import React from 'react';
import FooterLogo from './assets/images/FooterLogo.png'
import Facebook from './assets/images/Facebook.png'
import Twitter from './assets/images/Twitter.png'
import Youtube from './assets/images/Youtube.png'
import Instagram from './assets/images/Instagram.png'
import Location from './assets/images/Location.png'
import Whatsapp from './assets/images/Whatsapp.png'
import India from './assets/images/India.png'
import Email from './assets/images/Email.png'

const Footer = () => {
  return (
    <footer className="bg-[#fcf8ed] text-brown-700 py-8 px-6 text-sm text-[#876055]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex items-center md:items-start">
          <img src={FooterLogo} alt="Maati Ceramics Logo" className="h-32 mb-2 md:mb-4" />
        </div>
        <div className="flex flex-wrap md:justify-start space-x-6 md:space-x-8">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:mr-8">
              <ul className="flex space-x-4 md:space-x-0 md:flex-col md:space-y-1">
                <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
              </ul>
              <div className='flex space-x-3 mt-2'>
                <img src={Instagram} alt="instagram" className='h-6' />
                <img src={Facebook} alt="facebook" className='h-6' />
                <img src={Twitter} alt="twitter" className='h-6' />
                <img src={Youtube} alt="youtube" className='h-6' />
              </div>
            </div>
            <div className="flex flex-col md:mr-8">
              <ul className="flex space-x-4 md:space-x-0 md:flex-col md:space-y-1">
                <li><a href="/our-story" className="hover:underline">Our Story</a></li>
                <li><a href="/blogs" className="hover:underline">Blogs</a></li>
                <li><a href="/products" className="hover:underline">Products</a></li>
                <li><a href="/meet-our-artisans" className="hover:underline">Meet Our Artisans</a></li>
              </ul>
            </div>
            <div className="flex flex-col md:mr-8">
              <ul className="flex space-x-4 md:space-x-0 md:flex-col md:space-y-1">
                <li><a href="/terracotta" className="hover:underline">Terracotta</a></li>
                <li><a href="/tin-glazed" className="hover:underline">Tin-Glazed</a></li>
                <li><a href="/sculpture" className="hover:underline">Sculpture</a></li>
              </ul>
            </div>
            <div className="flex flex-col md:mr-8">
              <ul className="flex space-x-4 md:space-x-0 md:flex-col md:space-y-1">
                <li><a href="/gifting" className="hover:underline">Gifting</a></li>
                <li><a href="/return-form" className="hover:underline">Return Form</a></li>
                <li><a href="/track-order" className="hover:underline">Track Order</a></li>
                <li><a href="/refunds-replacements" className="hover:underline">Refunds & Replacements</a></li>
                <li><a href="/bulk-order" className="hover:underline">Bulk Order</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2 md:mb-0">Maati Ceramics</h3>
              <ul className="flex space-x-4 md:space-x-0 mt-1 md:flex-col md:space-y-1">
                <li className='flex space-x-2 items-start'>
                  <img src={Location} alt="location" className='mt-1 h-4'/>
                  <span>F-48, Second Floor, Mahatma Gandhi Rd, <br/>South Extension I, New Delhi- 110049</span>
                </li>
                <li className='flex space-x-2 items-start'>
                  <img src={Whatsapp} alt="whatsapp" className='h-4 mt-1' />
                  <a href="tel:+918853782375" className="hover:underline">Whatsapp On: +91 8853782375</a>
                  </li>
                <li className='flex space-x-2 items-start'>
                  <img src={Email} alt="email" className='mt-1 h-4' />
                  <a href="mailto:maaticeramics@gmail.com" className="hover:underline mt-1 h-4">maaticeramics@gmail.com</a></li>
                <li className='flex space-x-2 items-start'>
                  <img src={India} alt="india"  className='mt-1 h-4'/>
                  <a href="#" className="hover:underline">Call Us +91 8853782375</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
