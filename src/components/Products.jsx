import React,{ useState, useEffect, useRef} from 'react';
import TeraCategory from './assets/images/TerraCategory.jpg'
import GlazeCategory from './assets/images/GlazeCategory.jpg'
import SculptureCategory from './assets/images/SculptureCategory.jpg'
import TerraCategory1 from './assets/images/TerraCategory1.png'
import TerraCategory2 from './assets/images/TerraCategory2.png'
import TerraCategory3 from './assets/images/TerraCategory3.png'
import TerraCategory4 from './assets/images/TerraCategory4.png'
import GlazeCategory1 from './assets/images/GlazeCategory1.png'
import GlazeCategory2 from './assets/images/GlazeCategory2.png'
import GlazeCategory3 from './assets/images/GlazeCategory3.png'
import GlazeCategory4 from './assets/images/GlazeCategory4.png'
import ArtCategory1 from './assets/images/ArtCategory1.png'
import ArtCategory2 from './assets/images/ArtCategory2.png'
import ArtCategory3 from './assets/images/ArtCategory3.png'
import ArtCategory4 from './assets/images/ArtCategory4.png'

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

  return (
    <div className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 bg-[#e9dbd0] border border-b-4">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-[#453327] text-center ${isVisible ? 'motion-safe:animate-fadeInUp' : ''}`} style={{fontFamily: "FontType1"}} ref={elementRef}>OUR PRODUCTS</h2>

{/* Category 1 */}
      <div className='mt-10'>
        <div  className='mb-8 shadow-lg'>
          <img src={TeraCategory} alt="Tera Category"/>
        </div>
        <div className='mb-8 py-5 px-12 text-center text-[#453327] bg-[#fcf8ed] shadow-lg'>
            <p>Embrace the rustic charm and warmth of our Terracotta pieces. from earthy planters to elegant tableware, our Terracotta collection brings the essence of indian soil into your home.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={TerraCategory1} alt="Product 1" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Tea Set</h3>
            <h3>3 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 1880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={TerraCategory2} alt="Product 2" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Spring Terra Planter Set</h3>
            <h3>2 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 3280</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={TerraCategory3} alt="Product 3" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Dinner Set</h3>
            <h3>8 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 2880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={TerraCategory4} alt="Product 4" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Glazzed Terra Serving Bowls</h3>
            <h3>5 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 4890</p>
            </div>
          </div>
        </div>
        </div>

        {/* Category 2 */}
        <div className='mt-10'>
        <div  className='mb-8 shadow-lg'>
          <img src={GlazeCategory} alt="Glaze Category"/>
        </div>
        <div className='mb-8 py-5 px-12 text-center text-[#453327] bg-[#fcf8ed] shadow-lg'>
            <p>Discover the vibrant hues and glossy finishes of our Glazed ceramics. Perfectly blending traditional techniques with modern designs, these pieces add a splash of color and elegance to any space.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={GlazeCategory1} alt="Product 1" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Tea Set</h3>
            <h3>3 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 1880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={GlazeCategory2} alt="Product 2" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Spring Terra Planter Set</h3>
            <h3>2 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 3280</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={GlazeCategory3} alt="Product 3" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Dinner Set</h3>
            <h3>8 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 2880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={GlazeCategory4} alt="Product 4" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Glazzed Terra Serving Bowls</h3>
            <h3>5 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 4890</p>
            </div>
          </div>
        </div>
        </div>

        {/* Category 3 */}
        <div className='mt-10'>
        <div  className='mb-8 shadow-lg'>
          <img src={SculptureCategory} alt="Suclpture Category"/>
        </div>
        <div className='mb-8 py-5 px-12 text-center text-[#453327] bg-[#fcf8ed] shadow-lg'>
            <p>Embrace the rustic charm and warmth of our Terracotta pieces. from earthy planters to elegant tableware, our Terracotta collection brings the essence of indian soil into your home.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={ArtCategory1} alt="Product 1" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Tea Set</h3>
            <h3>3 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 1880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={ArtCategory2} alt="Product 2" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Spring Terra Planter Set</h3>
            <h3>2 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 3280</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={ArtCategory3} alt="Product 3" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Dinner Set</h3>
            <h3>8 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 2880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={ArtCategory4} alt="Product 4" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Glazzed Terra Serving Bowls</h3>
            <h3>5 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 4890</p>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
