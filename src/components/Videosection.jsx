import React from 'react';

const VideoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-blue-900 text-white py-14 px-6 lg:px-20">
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
        <div className="relative">
          <img 
            src='https://wallpapers.com/images/featured/youtube-thumbnail-hbdvjnvk0u0butf6.jpg'
            alt="Video Thumbnail" 
            className="w-96 h-auto rounded-md"
          />
          <a 
            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" 
            className="absolute inset-0 flex justify-center items-center"
          >
            <svg 
              className="w-16 h-16 text-red-600" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M21.6 12L3 1.2v21.6L21.6 12zM0 0v24L24 12 0 0z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="flex justify-around">
          <div className="text-xl font-semibold mb-4 text-orange-400 underline">Buyer</div>
          <div className="text-xl font-semibold mb-4 text-white">Supplier</div>
        </div>
        <ul className="list-none">
          <li className="flex items-center mb-2">
            <span className="text-green-400 mr-2">✔️</span> Post your requirements.
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-400 mr-2">✔️</span> Sit back for multiple suppliers to contact you.
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-400 mr-2">✔️</span> Choose among the suppliers based on the ratings and reviews.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoSection;
