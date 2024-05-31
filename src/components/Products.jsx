import React, { useState, useEffect, useRef } from 'react';
import TeraCategory from './assets/images/TerraCategory.jpg';
import GlazeCategory from './assets/images/GlazeCategory.jpg';
import SculptureCategory from './assets/images/SculptureCategory.jpg';
import TerraCategory1 from './assets/images/TerraCategory1.png';
import TerraCategory2 from './assets/images/TerraCategory2.png';
import TerraCategory3 from './assets/images/TerraCategory3.png';
import TerraCategory4 from './assets/images/TerraCategory4.png';
import GlazeCategory1 from './assets/images/GlazeCategory1.png';
import GlazeCategory2 from './assets/images/GlazeCategory2.png';
import GlazeCategory3 from './assets/images/GlazeCategory3.png';
import GlazeCategory4 from './assets/images/GlazeCategory4.png';
import ArtCategory1 from './assets/images/ArtCategory1.png';
import ArtCategory2 from './assets/images/ArtCategory2.png';
import ArtCategory3 from './assets/images/ArtCategory3.png';
import ArtCategory4 from './assets/images/ArtCategory4.png';

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it comes into view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
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
    <div className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 bg-[#e9dbd0] border border-b-4">
      <div className="mx-auto">
        <h2 className={`text-5xl font-bold text-[#453327] text-center ${isVisible ? 'motion-safe:animate-fadeInUp' : ''}`} style={{ fontFamily: 'FontType1' }} ref={elementRef}>OUR PRODUCTS</h2>

        {/* Category 1 */}
        <div className="mt-10">
          <div className="mb-8 shadow-lg mx-auto w-full transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={TeraCategory} alt="Tera Category" className="w-full object-cover" />
          </div>
          <div className="mb-8 py-5 px-12 text-center text-[#453327] bg-[#fcf8ed] shadow-lg">
            <p>Embrace the rustic charm and warmth of our Terracotta pieces. From earthy planters to elegant tableware, our Terracotta collection brings the essence of Indian soil into your home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProductTile
            imgSrc={TerraCategory1}
            alt={TerraCategory1}
            title={"Traditional Terra Tea Set"}
            piece={"3 pcs"}
            price={"₹ 1880"}
            />
          <ProductTile
            imgSrc={TerraCategory2}
            alt={TerraCategory2}
            title={"Spring Terra Planter Set"}
            piece={"2 pcs"}
            price={"₹ 3280"}
            />
          <ProductTile
            imgSrc={TerraCategory3}
            alt={TerraCategory3}
            title={"Traditional Terra Dinner Set"}
            piece={"8 pcs"}
            price={"₹ 2880"}
            />
          <ProductTile
            imgSrc={TerraCategory4}
            alt={TerraCategory4}
            title={"Glazzed Terra Bowls"}
            piece={"5 pcs"}
            price={"₹ 4890"}
            />
        </div>
        </div>

        {/* Category 2 */}
        <div className="mt-10">
          <div className="mb-8 shadow-lg mx-auto w-full transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={GlazeCategory} alt="Glaze Category" className="w-full object-cover" />
          </div>
          <div className="mb-8 py-5 px-12 text-center text-[#453327] bg-[#fcf8ed] shadow-lg">
            <p>Discover the vibrant hues and glossy finishes of our Glazed ceramics. Perfectly blending traditional techniques with modern designs, these pieces add a splash of color and elegance to any space.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <ProductTile
            imgSrc={GlazeCategory1}
            alt={GlazeCategory1}
            title={"Minimal Line Vase Set"}
            piece={"4 pcs"}
            price={"₹ 4680"}
            />
          <ProductTile
            imgSrc={GlazeCategory2}
            alt={GlazeCategory2}
            title={"Leafy Segue Dinner Set"}
            piece={"10 pcs"}
            price={"₹ 6590"}
            />
          <ProductTile
            imgSrc={GlazeCategory3}
            alt={GlazeCategory3}
            title={"Japanese Tea Set"}
            piece={"5 pcs"}
            price={"₹ 3580"}
            />
          <ProductTile
            imgSrc={GlazeCategory4}
            alt={GlazeCategory4}
            title={"Peach Wonder Bowl Set"}
            piece={"5 pcs"}
            price={"₹ 3270"}
            />
        </div>
        </div>

        {/* Category 3 */}
        <div className="mt-10">
          <div className="mb-8 shadow-lg mx-auto w-full transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={SculptureCategory} alt="Sculpture Category" className="w-full object-cover" />
          </div>
          <div className="mb-8 py-5 px-12 text-center text-[#453327] bg-[#fcf8ed] shadow-lg">
            <p>Unleash your imagination with our Sculpture collection. Each piece is a work of an art, meticulously crafted to inspire and captivate, making a bold statement in any setting.</p>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <ProductTile
            imgSrc={ArtCategory1}
            alt={ArtCategory1}
            title={"Vaishrava Sculpture"}
            piece={"1 pcs"}
            price={"₹ 1299"}
            />
          <ProductTile
            imgSrc={ArtCategory2}
            alt={ArtCategory2}
            title={"Maa Saraswati Sculpture"}
            piece={"1 pcs"}
            price={"₹ 1399"}
            />
          <ProductTile
            imgSrc={ArtCategory3}
            alt={ArtCategory3}
            title={"Laughing Buddha Sculpture"}
            piece={"1 pcs"}
            price={"₹ 1299"}
            />
          <ProductTile
            imgSrc={ArtCategory4}
            alt={ArtCategory4}
            title={"Lord Ganesha Sculpture"}
            piece={"1 pcs"}
            price={"₹ 1409"}
            />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
