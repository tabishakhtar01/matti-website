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

  const ProductTile = ({imgSrc, title, piece, price}) => {
    return (
      <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img src={imgSrc} alt={imgSrc} className="object-contain w-full h-full" />
            </div>
            <div className="relative group">
            <div className='bg-[#fcf8ed] px-4 py-3 text-center rounded rounded-b-lg border border-t-0 border-[#876055] group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300 ease-in-out'>
              <h3 className='text-xs sm:text-sm md:text-base'>{title}</h3>
              <h3 className='text-xs sm:text-sm md:text-base'>{piece}</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-[#876055] font-bold">{price}</p>
          </div>
          <div className="bg-[#fcf8ed] absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <button className="bg-white text-[#876055] px-6 py-2 rounded-3xl transition-colors duration-300 ease-in-out hover:bg-[#876055] hover:text-white border-2 border-[#876055]">
              Add to Cart
            </button>
          </div>
        </div>
          </div>
    )
  }

  return (
    <div className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${BestSellersBg})` }}>
      <div className="mx-auto">
        <h2 className={`text-4xl sm:text-5xl md:text-6xl text-[#453327] font-bold text-center mb-16 ${isVisible ? 'motion-safe:animate-fadeInUp' : ''}`} style={{ fontFamily: "FontType1" }} ref={elementRef}>BEST SELLERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <ProductTile
            imgSrc={BestCategory1}
            alt={BestCategory1}
            title={"Kitty Party Ceramic Tea Set"}
            piece={"4 pcs"}
            price={"₹ 2880"}
            />
          <ProductTile
            imgSrc={BestCategory2}
            alt={BestCategory2}
            title={"Mauve Ceramic Planter Set"}
            piece={"3 pcs"}
            price={"₹ 1299"}
            />
          <ProductTile
            imgSrc={BestCategory3}
            alt={BestCategory3}
            title={"Floral Terracotta Vase"}
            piece={"1 pcs"}
            price={"₹ 2880"}
            />
          <ProductTile
            imgSrc={BestCategory4}
            alt={BestCategory4}
            title={"Buddha Candle Holder"}
            piece={"1 pcs"}
            price={"₹ 4890"}
            />
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
