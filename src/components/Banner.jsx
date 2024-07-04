import React from 'react';
import backgroundImage from '../assets/backgroundpic.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center pt-20 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Are You a Supplier?</h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white mt-4">Explore Matching Opportunities.</p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col lg:flex-row items-center shadow-lg rounded-lg w-full lg:w-auto">
            <div className="relative flex w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search your required service here"
                className="py-3 pl-10 pr-4 w-full lg:w-80 mr-2 outline-none rounded-lg lg:rounded-none lg:rounded-l-lg"
              />
              <IoBagSharp className='text-orange-400 text-xl absolute left-3 top-1/2 transform -translate-y-1/2' />
            </div>
            <div className="relative flex w-full lg:w-auto mt-4 lg:mt-0">
              <input
                type="text"
                placeholder="Search your desired location here"
                className="py-3 pl-10 pr-4 w-full lg:w-80 outline-none border-l border-gray-300 rounded-lg lg:rounded-none lg:rounded-l-lg"
              />
              <FaLocationDot className='text-orange-400 text-xl absolute left-3 top-1/2 transform -translate-y-1/2' />
            </div>
            <button className="bg-green-500 text-white px-6 py-3  lg:rounded-r-lg lg:ml-2 w-full lg:w-auto mt-4 lg:mt-0">Search</button>
          </div>
        </div>
        <div className="mt-6 text-white">
          <p className="text-md">Are you a buyer? <a href="#" className="underline">Click here if you are looking to post a requirements</a></p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
