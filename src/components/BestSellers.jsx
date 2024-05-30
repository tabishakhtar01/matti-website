import React,{ useState, useEffect, useRef} from 'react';
import BestSellersBg from './assets/images/BestSellersBg.jpg'
import BestCategory1 from './assets/images/BestCategory1.png'
import BestCategory2 from './assets/images/BestCategory2.png'
import BestCategory3 from './assets/images/BestCategory3.png'
import BestCategory4 from './assets/images/BestCategory4.png'




const BestSellers = () => {

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
    <div className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 bg-cover bg-center"
    style={{ backgroundImage: `url(${BestSellersBg})` }}>
      <div className="container mx-auto">
        <h2 className={`text-5xl text-[#453327] font-bold text-center mb-16 ${isVisible ? 'motion-safe:animate-fadeInUp' : ''}`} style={{fontFamily: "FontType1"}} ref={elementRef}>BEST SELLERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={BestCategory1} alt="Product 1" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Tea Set</h3>
            <h3>3 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 1880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={BestCategory2} alt="Product 2" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Spring Terra Planter Set</h3>
            <h3>2 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 3280</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={BestCategory3} alt="Product 3" className={`object-cover w-full h-64`}
            />
            <div className='bg-[#fcf8ed] px-4 py-3 text-center border border-t-0 border-[#876055]'>
            <h3 className='text-sm'>Traditional Terra Dinner Set</h3>
            <h3>8 pcs</h3>
            <p className="text-xl text-[#876055] font-bold">₹ 2880</p>
            </div>
          </div>
          <div className="shadow-lg rounded-t-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={BestCategory4} alt="Product 4" className={`object-cover w-full h-64`}
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
  );
};

export default BestSellers;
