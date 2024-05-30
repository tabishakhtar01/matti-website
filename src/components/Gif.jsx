import React from 'react';
import GifVideo from './assets/videos/Gif.mp4'
import GifBg from './assets/images/GifBg.jpg'


const Gif = () => {
  return (
    <div className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 text-center bg-cover bg-center"
    style={{backgroundImage: `url(${GifBg})`}}>
      <div className="w-full p-3 bg-[#825540]">
        {/* <img src={gif} alt="h-4/5" /> */}
        <video
            autoPlay
            loop
            muted
            controls={false}
            style={{ display: 'block', width: '100%' }}
            className='h-4/5'
          >
            <source src={GifVideo} type="video/mp4" />
          </video>
        <div className='text-white px-20 py-5 '>
            <p className='text-xl font-semibold mb-6'>Celebrate Heritage with Every Purchase!</p>
            <p className='text-sm'>At Maati, er are dedicated to providing exceptional services that enhances your experience with our handcrafted treasures. From personalized shopping assistance to bespoke creations, our range of services is designed to meet your unique needs and ensure your utmost satisfaction.</p>
        </div>
        <button className='rounded-3xl font-semibold bg-[#fcf8ed] text-[#825540] px-4 py-3 mb-6'>About Us</button>
      </div>
    </div>
  );
};

export default Gif;
