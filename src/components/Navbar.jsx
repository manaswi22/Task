// import React, { useState } from 'react';
// import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-white border-b-2 border-gray-200 mx-5">
//       <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
//         <div className="flex items-center">
//           <div className="text-2xl font-bold text-blue-600">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ7SQl-O5hPG3L0D2rK60vQKeGxC7HmJvkA&s"
//               alt="Company Logo"
//               className="h-20 mix-blend-multiply"
//               width="120px"
//             />
//           </div>
//         </div>
//         <div className="hidden md:flex items-center space-x-4">
//           <a href="#" className="text-gray-700 hover:text-gray-900">Find Suppliers</a>
//           <div className="relative">
//             <button
//               className="text-gray-700 flex items-center hover:text-gray-900 focus:outline-none"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               Find Service Tags <MdKeyboardArrowDown />
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg z-20">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
//               </div>
//             )}
//           </div>
//           <button className="hover:bg-green-500 hover:text-white border border-green-600 font-serif text-green-600 font-semibold px-4 py-2 rounded">
//             Login / Sign Up
//           </button>
//         </div>
//         <div className="md:hidden flex items-center">
//           {isMobileMenuOpen ? (
//             <button
//               className="text-gray-700 hover:text-gray-900 focus:outline-none"
//               onClick={toggleMobileMenu}
//             >
//               <MdClose className="w-6 h-6" />
//             </button>
//           ) : (
//             <button
//               className="text-gray-700 hover:text-gray-900 focus:outline-none"
//               onClick={toggleMobileMenu}
//             >
//               <MdMenu className="w-6 h-6" />
//             </button>
//           )}
//         </div>
//         {isMobileMenuOpen && (
//           <div className="md:hidden z-20 absolute top-16 right-0 left-0 bg-white shadow-lg border border-gray-200 py-2 px-4">
//             <div className="flex flex-col items-center space-y-2">
//               <a href="#" className="text-gray-700 hover:text-gray-900">Find Suppliers</a>
//               <div className="relative">
//                 <button
//                   className="text-gray-700 flex items-center hover:text-gray-900 focus:outline-none"
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                   Find Service Tags <MdKeyboardArrowDown />
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg z-20">
//                     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
//                     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
//                     <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
//                   </div>
//                 )}
//               </div>
//               <button className="hover:bg-green-500 hover:text-white border border-green-600 font-serif text-green-600 font-semibold px-4 py-2 rounded">
//                 Login / Sign Up
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-gray-200 mx-5">
      <div className="container mr-5 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ7SQl-O5hPG3L0D2rK60vQKeGxC7HmJvkA&s"
            alt="Company Logo"
            className="h-20 ml-5 mix-blend-multiply text-white"
            width="120px"
          />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">Find Suppliers</a>
          <div className="relative">
            <button
              className="text-gray-700 flex items-center hover:text-gray-900 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Find Service Tags <MdKeyboardArrowDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg z-20">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
              </div>
            )}
          </div>
          <div className="mr-5">
            <button className="hover:bg-green-500 hover:text-white border border-green-600 font-serif text-green-600 font-semibold px-4 py-2 rounded">Login / Sign Up</button>

          </div>        </div>
      </div>
    </nav>
  );
};

export default Navbar;
