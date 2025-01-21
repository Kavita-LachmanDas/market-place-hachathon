// 'use client'

// import { useEffect, useState } from 'react';
// // import Header from './Header';

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState<Product[]>([]);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//       setWishlist(savedWishlist);
//     }
//   }, []);

//   const deleteItem = (name: string) => {
//     const updatedWishlist = wishlist.filter(item => item.name !== name);
//     setWishlist(updatedWishlist);
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//   };

//   return (
//     <div>
//       {/* <Header /> */}
//       <div className="max-w-7xl mx-auto p-8">
//         <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>
//         {wishlist.length === 0 ? (
//           <p className="text-center text-gray-500">Your wishlist is empty.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {wishlist.map((item: Product) => (
//               <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
//                 <img 
//                   src={item.image.asset.url} 
//                   alt={item.name} 
//                   className="w-full h-48 object-cover rounded-lg mb-4" 
//                 />
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <span className="text-lg font-semibold text-gray-900">${item.price}</span>
//                 <button
//                   onClick={() => deleteItem(item.name)}
//                   className="mt-4 ml-6 text-red-500 hover:text-red-700 font-semibold"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// interface Product {
//   [x: string]: any;
//   id: string;
//   name: string;
//   img: string;
//   price: string;
//   description: string;
// }





'use client';

import { useEffect, useState } from 'react';
// import Header from './Header';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlist(savedWishlist);
    }
  }, []);

  const deleteItem = (name: string) => {
    const updatedWishlist = wishlist.filter(item => item.name !== name);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item: Product) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <img 
                  src={item.image.asset.url} 
                  alt={item.name} 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-lg font-semibold text-gray-900">${item.price}</span>
                <button
                  onClick={() => deleteItem(item.name)}
                  className="mt-4 ml-6 text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface Product {
  id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  price: string;
  description: string;
}
