// 'use client'

// import { useState } from 'react';

// export default function OrderTracking() {
//   const [orderId, setOrderId] = useState<string>('');

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Track Your Order</h1>
      
//       <div className="mb-6">
//         <label htmlFor="orderId" className="block text-lg font-medium text-gray-700 mb-2">
//           Enter Your Tracking ID
//         </label>
//         <input
//           id="orderId"
//           type="text"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           placeholder="E.g., 12345ABCDE"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//       </div>

//       <button
//         disabled={!orderId}
//         className={`w-full py-3 mt-4 text-white font-semibold rounded-lg 
//           ${!orderId ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
//       >
//         Track My Order
//       </button>

//       <div className="mt-6 space-y-4">
//         {/* Dummy stages for illustration */}
//         <div className="flex items-center space-x-4">
//           <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center text-white bg-blue-500">
//             <span className="text-xs font-bold">1</span>
//           </div>
//           <div className="flex-grow border-t-2 border-gray-300"></div>
//           <div className="text-sm font-medium text-gray-600">Order Placed</div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center text-white bg-yellow-500">
//             <span className="text-xs font-bold">2</span>
//           </div>
//           <div className="flex-grow border-t-2 border-gray-300"></div>
//           <div className="text-sm font-medium text-gray-600">Shipped</div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center text-white bg-green-500">
//             <span className="text-xs font-bold">3</span>
//           </div>
//           <div className="flex-grow border-t-2 border-gray-300"></div>
//           <div className="text-sm font-medium text-gray-600">Delivered</div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'

import { useState } from 'react';
import { MdCheckCircle } from 'react-icons/md'; // For Order Placed
import { FaTruck } from 'react-icons/fa'; // For Shipped
import { AiOutlineCheckCircle } from 'react-icons/ai'; // For Delivered
// import Header from './Header';
// import Footer from './Footer';

export default function OrderTracking() {
  const [orderId, setOrderId] = useState<string>('');

  return (
    <div>
        {/* <Header/> */}
    <div className="max-w-md mx-auto p-6  rounded-lg shadow-lg my-10 ">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Track Your Order</h1>
      
      <div className="mb-6">
        <label htmlFor="orderId" className="block text-lg font-medium text-gray-700 mb-2">
          Enter Your Tracking ID
        </label>
        <input
          id="orderId"
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="E.g., 12345ABCDE"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        disabled={!orderId}
        className={`w-full py-3 mt-4 text-white font-semibold rounded-lg 
          ${!orderId ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
      >
        Track My Order
      </button>

      <div className="mt-6 space-y-4">
        {/* Order Placed Stage */}
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center text-white bg-blue-500">
            <MdCheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="flex-grow border-t-2 border-gray-300"></div>
          <div className="text-sm font-medium text-gray-600">Order Placed</div>
        </div>

        {/* Shipped Stage */}
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center text-white bg-yellow-500">
            <FaTruck className="w-4 h-4 text-white" />
          </div>
          <div className="flex-grow border-t-2 border-gray-300"></div>
          <div className="text-sm font-medium text-gray-600">Shipped</div>
        </div>

        {/* Delivered Stage */}
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center text-white bg-green-500">
            <AiOutlineCheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="flex-grow border-t-2 border-gray-300"></div>
          <div className="text-sm font-medium text-gray-600">Delivered</div>
        </div>
      </div>
    </div>

    {/* <Footer/> */}
    </div>
  );
}
