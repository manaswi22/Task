import React from 'react';

const HabotSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to dive into <span className="text-purple-700">HABOT?</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 text-sm rounded-md flex items-center justify-center mx-auto md:mx-0 hover:bg-green-700 transition duration-300">
          Sign up Today!
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
            ></path>
          </svg>
        </button>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8 md:mt-0 lg:ml-10">
        {["Abu Dhabi", "Dubai", "Sharjah & Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"].map((location) => (
          <button
            key={location}
            className="border border-orange-500 px-2 py-2 text-sm rounded-md text-gray-800 hover:bg-orange-100 transition duration-300"
            style={{ width: '100%' }}
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HabotSection;
