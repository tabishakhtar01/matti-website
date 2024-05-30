import React from 'react';
import video from './assets/videos/video.mp4'

const Video = () => {
  return (
    <div className="py-16 lg:px-60 md:px-36 sm:px-20 px-10 bg-[#453327] text-center">
      <div className="w-full">
      <video
            autoPlay
            loop
            muted
            controls={false}
            style={{ display: 'block', width: '100%', height: 'auto' }}
            className='rounded-t-xl '
          >
            <source src={video} type="video/mp4" />
          </video>
      </div>
    </div>
  );
};

export default Video;
