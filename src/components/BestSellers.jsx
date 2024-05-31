import React, { useState, useEffect, useRef } from 'react';
import BestSellersBg from './assets/images/BestSellersBg.jpg';
import BestCategory1 from './assets/images/BestCategory1.png';
import BestCategory2 from './assets/images/BestCategory2.png';
import BestCategory3 from './assets/images/BestCategory3.png';
import BestCategory4 from './assets/images/BestCategory4.png';

const Bestsellers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${BestSellersBg})` }}>
      <div className="mx-auto">
        <h2 className={`text-4xl sm:text-5xl md:text-6xl text-[#453327] font-bold text-center mb-16 ${isVisible ? 'motion-safe:animate-fadeInUp' : ''}`} style={{ fontFamily: "FontType1" }} ref={elementRef}>BEST SELLERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img src={BestCategory1} alt="Product 1" className="object-contain w-full h-full" />
            </div>
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
              <h3 className='text-xs sm:text-sm md:text-base'>Kitty Party Ceramic Tea Set</h3>
              <h3 className='text-xs sm:text-sm md:text-base'>4 pcs</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-[#876055] font-bold">₹ 2880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img src={BestCategory2} alt="Product 2" className="object-contain w-full h-full" />
            </div>
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
              <h3 className='text-xs sm:text-sm md:text-base'>Mauve Ceramic Planter Set</h3>
              <h3 className='text-xs sm:text-sm md:text-base'>3 pcs</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-[#876055] font-bold">₹ 1299</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img src={BestCategory3} alt="Product 3" className="object-contain w-full h-full" />
            </div>
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
              <h3 className='text-xs sm:text-sm md:text-base'>Floral Terracotta Vase</h3>
              <h3 className='text-xs sm:text-sm md:text-base'>1 pcs</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-[#876055] font-bold">₹ 2880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img src={BestCategory4} alt="Product 4" className="object-contain w-full h-full" />
            </div>
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
              <h3 className='text-xs sm:text-sm md:text-base'>Buddha Candle Holder</h3>
              <h3 className='text-xs sm:text-sm md:text-base'>1 pcs</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-[#876055] font-bold">₹ 4890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
