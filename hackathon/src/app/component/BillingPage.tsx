
// 'use client'
// import { useState, useEffect } from 'react';
// import Footer from "./Footer";
// import Header from "./Header";
// import Pagination from "./Pagination";

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

// export default function BillingPage() {
//   const [cart, setCart] = useState<Product[]>([]); // Cart items state
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     companyName: '',
//     country: 'Sri Lanka',
//     streetAddress: '',
//     city: '',
//     province: 'Western Province',
//     zipCode: '',
//     phone: '',
//     email: '',
//     additionalInfo: '',
//     paymentMethod: 'bank-transfer'
//   });

//   // Load cart items and form data from localStorage
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(savedCart);

//     // Load saved form data from localStorage
//     const savedFormData = JSON.parse(localStorage.getItem('billingFormData') || '{}');
//     if (savedFormData) {
//       setFormData(savedFormData);
//     }
//   }, []);

//   // Function to handle form input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     const updatedFormData = { ...formData, [name]: value };
//     setFormData(updatedFormData);

//     // Save the updated form data to localStorage
//     localStorage.setItem('billingFormData', JSON.stringify(updatedFormData));
//   };

//   // Calculate subtotal and total
//   const calculateTotal = () => {
//     return cart.reduce((acc, product) => acc + parseFloat(product.price.replace(/,/g, '')), 0);
//   };

//   // Function to handle order placement
//   const handlePlaceOrder = () => {
//     console.log('Order placed:', formData);
//     console.log('Cart Items:', cart);
//     // You can now send this data to an API or save it as required
//     alert('Order placed successfully!');
//   };

//   return (
//     <div>
//       <Header />

//       <div className="mt-[80px]">
//         {/* Hero Section */}
//         <div
//           className="bg-cover bg-center h-56 flex items-center justify-center"
//           style={{
//             backgroundImage: "url('/img4.png')",
//           }}
//         >
//           <div className="text-center">
//             <h1 className="text-3xl font-bold text-gray-800">CheckOut</h1>
//             <p className="text-gray-500 mt-2">
//               <span className="text-gray-400">Home</span> &gt; CheckOut
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="min-h-screen bg-gray-50 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-2xl font-bold mb-6">Billing details</h1>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Billing Form */}
//             <form className="space-y-6">
//               {/* Form Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>

//               {/* Other Billing Details (Address, Email, etc.) */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Company Name (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               {/* Country/Region */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Country / Region
//                 </label>
//                 <select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="Sri Lanka">Sri Lanka</option>
//                   <option value="Pakistan">Pakistan</option>
//                   <option value="India">India</option>
//                   <option value="Dubai">Dubai</option>
//                 </select>
//               </div>

//               {/* Street Address */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Street Address
//                 </label>
//                 <input
//                   type="text"
//                   name="streetAddress"
//                   value={formData.streetAddress}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               {/* Town / City */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Town / City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               {/* Additional Information */}
//               <div>
//                 <textarea
//                   name="additionalInfo"
//                   value={formData.additionalInfo}
//                   onChange={handleInputChange}
//                   placeholder="Additional Information"
//                   className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </form>

//             {/* Order Summary */}
//             <div className="space-y-6">
//               <div className="p-6 rounded-lg bg-white shadow">
//                 <h2 className="text-lg font-bold mb-4">Your Order</h2>
//                 {cart.map((product, index) => (
//                   <div key={index} className="flex justify-between text-sm font-medium mt-2">
//                     <p>{product.name} x 1</p>
//                     <p>{product.price}</p>
//                   </div>
//                 ))}
//                 <div className="flex justify-between text-sm mt-4">
//                   <p>Subtotal</p>
//                   <p>Rs. {calculateTotal().toLocaleString()}</p>
//                 </div>
//                 <div className="flex justify-between text-sm font-bold mt-2">
//                   <p>Total</p>
//                   <p>Rs. {calculateTotal().toLocaleString()}</p>
//                 </div>
//               </div>

//               {/* Payment Method */}
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     id="bank-transfer"
//                     value="bank-transfer"
//                     checked={formData.paymentMethod === 'bank-transfer'}
//                     onChange={handleInputChange}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="bank-transfer" className="ml-2 text-sm text-black font-bold">
//                     Direct Bank Transfer
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     id="cod"
//                     value="cod"
//                     checked={formData.paymentMethod === 'cod'}
//                     onChange={handleInputChange}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="cod" className="ml-2 text-sm text-black font-bold">
//                     Cash on Delivery
//                   </label>
//                 </div>
//               </div>

//               {/* Place Order Button */}
//               <button
//                 type="button"
//                 onClick={handlePlaceOrder}
//                 className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               >
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>

//         <Pagination />
//         <Footer />
//       </div>
//     </div>
//   );
// }

























'use client'
import { useState, useEffect } from 'react';
// import Footer from "./Footer";
// import Header from "./Header";
import Pagination from "./Pagination";

interface Product {
  id: string; // or number, depending on your data
  name: string;
  price: string; // Assuming price is a string, e.g., "1,000"
  quantity: number; // Add quantity to reflect multiple items
  image: {
    asset: {
      url: string;
    };
  };
}

export default function BillingPage() {
  const [cart, setCart] = useState<Product[]>([]); // Cart items state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
    paymentMethod: 'bank-transfer'
  });

  // Load cart items and form data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);

    // Load saved form data from localStorage
    const savedFormData = JSON.parse(localStorage.getItem('billingFormData') || '{}');
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Save the updated form data to localStorage
    localStorage.setItem('billingFormData', JSON.stringify(updatedFormData));
  };

  // Calculate subtotal and total
  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.quantity * parseFloat(product.price.replace(/,/g, '')), 0);
  };

  // Function to handle order placement
  const handlePlaceOrder = () => {
    console.log('Order placed:', formData);
    console.log('Cart Items:', cart);
    // You can now send this data to an API or save it as required
    alert('Order placed successfully!');
  };

  return (
    <div>
      {/* <Header /> */}

      <div >
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-56 flex items-center justify-center"
          style={{
            backgroundImage: "url('/img4.png')",
          }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">CheckOut</h1>
            <p className="text-gray-500 mt-2">
              <span className="text-gray-400">Home</span> &gt; CheckOut
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-6">Billing details</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing Form */}
            <form className="space-y-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
                            <div>
                 <label className="block text-sm font-medium text-gray-700">
                   {/* Company Name (Optional) */}  Company Name
                </label>
                 <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Country/Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country / Region
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Dubai">Dubai</option>
                </select>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Town / City */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Town / City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Additional Information */} 
              <div>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Additional Information"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </form>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-white shadow">
                <h2 className="text-lg font-bold mb-4">Your Order</h2>
                {cart.map((product, index) => (
                  <div key={index} className="flex justify-between text-sm font-medium mt-2">
                    <p>
                      {product.name} x {product.quantity}
                    </p>
                    <p>
                      Rs. {(product.quantity * parseFloat(product.price.replace(/,/g, ''))).toLocaleString()}
                    </p>
                  </div>
                ))}
                <div className="flex justify-between text-sm mt-4">
                  <p>Subtotal</p>
                  <p>Rs. {calculateTotal().toLocaleString()}</p>
                </div>
                <div className="flex justify-between text-sm font-bold mt-2">
                  <p>Total</p>
                  <p>Rs. {calculateTotal().toLocaleString()}</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="bank-transfer"
                    value="bank-transfer"
                    checked={formData.paymentMethod === 'bank-transfer'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="bank-transfer" className="ml-2 text-sm text-black font-bold">
                    Direct Bank Transfer
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="cod" className="ml-2 text-sm text-black font-bold">
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>

        <Pagination />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
