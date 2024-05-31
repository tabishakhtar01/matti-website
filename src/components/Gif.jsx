import React from 'react';
import GifVideo from './assets/videos/Gif.mp4';
import GifBg from './assets/images/GifBg.jpg';

const Gif = () => {
  return (
    <div
      className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${GifBg})` }}
    >
      <div className="w-full p-3 bg-[#825540] flex flex-col items-center">
        <div className="w-full h-full">
          <video
            autoPlay
            loop
            muted
            controls={false}
            style={{ display: 'block', width: '100%' }}
          >
            <source src={GifVideo} type="video/mp4" />
          </video>
        </div>
        <div className="text-white px-5 sm:px-10 md:px-20 py-5">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
            Celebrate Heritage with Every Purchase!
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            At Maati, we are dedicated to providing exceptional services that enhance your experience with our handcrafted treasures. From personalized shopping assistance to bespoke creations, our range of services is designed to meet your unique needs and ensure your utmost satisfaction.
          </p>
        </div>
        <button className="rounded-3xl font-semibold bg-[#fcf8ed] text-[#825540] px-4 py-3 mb-6">
          About Us
        </button>
      </div>
    </div>
  );
};

export default Gif;
