import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center text-center md:text-left mb-4 md:mb-0 text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ7SQl-O5hPG3L0D2rK60vQKeGxC7HmJvkA&s"
            alt="Company Logo"
            className="h-20 mix-blend-multiply"
            width="120px"
          />
          <p className="-mt-2">© R Singhania</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold">Terms</h4>
            <ul>
              <li><a href="#" className="hover:underline">Data Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold">Related</h4>
            <ul>
              <li><a href="#" className="hover:underline">Find Buyer</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
