import React,{ useState, useEffect, useRef} from 'react';
import AboutImage from './assets/images/AboutImage.png'

const About = () => {

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
    <div className='bg-[#fcf8ed] '>
    <div className='bg-[#ab735c] flex items-center text-white font-thin tracking-wide justify-center py-1'>
      ALL PRODUCTS ARE INSURED DURING TRANSIT
    </div>
    <div className="pt-16 pb-8 text-2xl text-[#453327] text-center lg:px-60 md:px-36 sm:px-20 px-10">
      <h2 className={`text-5xl font-bold mb-10 ${isVisible ? 'motion-safe:animate-fadeInUp' : ''}`} style={{fontFamily: "FontType1"}} ref={elementRef}>ABOUT US</h2>
      <div>
        <p className='mb-6 text-justify'>

      Welcome to Maati, where age-old tradition meets contemporary elegance. At Maati, we specialize in crafting exquisite clay and glazed products that bring a touch of artisanal charm 
      to your everyday life.
        </p>
      <p className='text-justify'>

    Rooted in the rich heritage of craftsmanship, Maati was born out of a passion for preserving rich heritage of Indian craftsmanship and bringing its beauty to the world. Inspired by th age-old techniques passed down through generations, we work closely with skilled artisan who pour their heart and soul into every creation. Each piece from Maati is a testament to the dedication, skill, and artistry of these master craftsmen.     
      </p>
     </div>
    </div>
    <div className='lg:px-56 md:px-32 sm:px-16 px-6 pb-16'>

    <img src={AboutImage} alt="about image" />
    </div>
    </div>
  );
};

export default About;
