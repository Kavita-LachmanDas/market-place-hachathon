
// 'use client';
// import { useState, useEffect } from 'react'; // For state and lifecycle methods
// import Header from './Header'; // Assuming Header Component
// import Footer from './Footer'; // Assuming Footer Component
// import Image from 'next/image';
// import Link from 'next/link';

// interface Product {
//   id: string; // or number, depending on your data
//   name: string;
//   price: string; // Assuming price is a string, e.g., "1,000"
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// export default function CartPage() {
//   const [cart, setCart] = useState<Product[]>([]); // State for cart items

//   // Load cart data from localStorage on component mount
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(savedCart); // Set cart state with loaded items
//   }, []);

//   // Function to handle product removal
//   const handleRemove = (productToRemove: Product) => {
//     const updatedCart = cart.filter((product) => product.id !== productToRemove.id);
//     setCart(updatedCart); // Update the state
//     localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
//   };

//   return (
//     <div>
//       <Header />
      
//       {/* Hero Section */}
//       <div
//         className="bg-cover bg-center h-56 flex items-center justify-center"
//         style={{ backgroundImage: "url('/img4.png')" }}
//       >
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
//           <p className="text-gray-500 mt-2">
//             <span className="text-gray-400">Home</span> &gt; Cart
//           </p>
//         </div>
//       </div>

//       {/* Cart Items Section */}
//       <div className="min-h-screen flex justify-center items-center">
//         <div className="w-11/12 max-w-5xl rounded-lg p-5 flex flex-col lg:flex-row gap-5">
//           <div className="flex-1 overflow-x-auto">
//             {cart.length === 0 ? (
//               <p>Your cart is empty.</p>
//             ) : (
//               <div className="grid gap-4">
//                 {cart.map((product, index) => (
//                   <div key={index} className="flex items-center justify-between border-b pb-4">
//                     <Image src={product.image.asset.url} alt={product.name} className="w-16 h-16 object-cover" width={300} height={300}/>
//                     <div>
//                       <h2 className="text-lg font-semibold">{product.name}</h2>
//                       <p className="text-gray-500">{product.price}</p>
//                     </div>
//                     <button
//                       onClick={() => handleRemove(product)} // Call handleRemove to delete the product
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Cart Totals Section */}
          // <div className="bg-yellow-100 p-5 rounded-lg w-full lg:w-1/3">
          //   <h2 className="text-xl font-bold mb-4 text-center">Cart Totals</h2>
          //   {/* Assuming cart total calculation logic here */}
          //   <div className="flex justify-between mb-2">
          //     <span>Subtotal</span>
          //     <span>Rs. {cart.reduce((acc, product) => acc + parseFloat(product.price.replace(/,/g, '')), 0).toLocaleString()}</span>
          //   </div>
          //   <div className="flex justify-between mb-4">
          //     <span>Total</span>
          //     <span className="font-bold text-lg">Rs. {cart.reduce((acc, product) => acc + parseFloat(product.price.replace(/,/g, '')), 0).toLocaleString()}</span>
          //   </div>
          // <Link href={'/routes/billing'}>  <button className="w-full bg-yellow-500 text-white py-2 rounded shadow hover:bg-yellow-600">
          //     Check Out
          //   </button></Link>
          // </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }









/////////////////////////////////////////////////////////////////////////////

'use client';
import { useState, useEffect } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string; // Assuming prices are strings with commas, e.g., "1,000"
  image: {
    asset: {
      url: string;
    };
  };
  quantity: number; // Quantity of the product
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]').map((product: Product) => ({
      ...product,
      quantity: product.quantity || 1, // Default quantity to 1 if undefined
    }));
    setCart(savedCart);
  }, []);

  // Function to handle product removal
  const handleRemove = (productToRemove: Product) => {
    const updatedCart = cart.filter((product) => product.name !== productToRemove.name);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to handle quantity increase
  const increaseQuantity = (productToUpdate: Product) => {
    const updatedCart = cart.map((product) =>
      product.name === productToUpdate.name
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to handle quantity decrease
  const decreaseQuantity = (productToUpdate: Product) => {
    const updatedCart = cart.map((product) =>
      product.name === productToUpdate.name && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate the total price based on quantities
  const calculateTotal = () => {
    return cart
      .reduce((acc, product) => {
        const price = parseFloat(product.price.replace(/,/g, '')) || 0;
        return acc + price * (product.quantity || 0);
      }, 0)
      .toLocaleString();
  };

  return (
    <div>
      {/* <Header /> */}

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-56 flex items-center justify-center"
        style={{ backgroundImage: "url('/img4.png')" }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-500 mt-2">
            <span className="text-gray-400">Home</span> &gt; Cart
          </p>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="min-h-screen flex justify-center items-center relative top-[-90px]">
        <div className="w-11/12 max-w-5xl rounded-lg p-5 flex flex-col lg:flex-row gap-5">
          <div className="flex-1 overflow-x-auto">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="grid gap-4">
                {cart.map((product, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <Image
                      src={product.image.asset.url}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                      width={300}
                      height={300}
                    />
                    <div>
                      <h2 className="text-lg font-semibold ml-5">{product.name}</h2>
                      <p className="text-gray-500 ml-5">Price: Rs. {product.price}</p>
                      <p className="text-gray-500 ml-5">Quantity: {product.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(product)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseQuantity(product)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemove(product)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Totals Section */}
          <div className="bg-yellow-100 p-5 rounded-lg w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-4 text-center">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold text-lg">Rs. {calculateTotal()}</span>
            </div>
            <Link href={'/routes/billing'}>
              <button className="w-full bg-yellow-500 text-white py-2 rounded shadow hover:bg-yellow-600">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
