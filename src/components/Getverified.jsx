// import React from 'react';

// const GetVerifiedSection = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-between py-14 bg-blue-100 p-6">
//       <div className="w-full lg:w-auto text-3xl font-semibold text-center lg:text-left mb-4 lg:mb-0">
//         Let Suppliers <span className="underline decoration-red-400">Find You</span>
//       </div>
//       <div className="w-full lg:w-auto flex justify-center lg:justify-end">
//         <button className="bg-orange-500 text-white py-2 px-6 rounded-md">
//           Get Verified
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GetVerifiedSection;
import React from 'react';

const GetVerifiedSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around py-14 bg-blue-100 p-6">
      <div className="w-full lg:w-auto text-3xl font-semibold text-center lg:text-left mb-4 lg:mb-0 lg:ml-8">
        Let Suppliers <span className="underline decoration-red-400">Find You</span>
      </div>
      <div className="w-full lg:w-auto flex justify-center lg:justify-end">
        <button className="bg-orange-500 text-white py-2 px-6 rounded-md">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default GetVerifiedSection;
