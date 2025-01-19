'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

// // export default function Footer() {
// //   return (
// //     <div className=" py-8">
// //       <div className="flex flex-col sm:flex-row gap-8 sm:gap-[90px] p-6 sm:p-10 w-full max-w-screen-xl mx-auto">

// //         {/* Address Section */}
// //         <div className="w-full sm:w-[300px] mt-9"> 
// //           <p className="text-base sm:text-lg text-gray-500">
// //             400 University Drive Suite 200 Coral <br />
// //             Glabes, <br />
// //             FL33134 USA
// //           </p>
// //         </div>

// //         {/* Links Section */}
// //         <div className="w-full sm:w-[130px] space-y-4">
// //           <p className="font-semibold text-center sm:text-left text-gray-500">Links</p> <br />
// //           <div className="space-y-6 text-center sm:text-left">
// //             <Link href={'#'} className="text-black hover:text-gray-700">Home</Link> <br /><br />
// //             <Link href={'#'} className="text-black hover:text-gray-700">Shop</Link><br /> <br />
// //             <Link href={'#'} className="text-black hover:text-gray-700">About</Link><br /> <br />
// //             <Link href={'#'} className="text-black hover:text-gray-700">Contact</Link>
// //           </div>
// //         </div>

// //         {/* Help Section */}
// //         <div className="w-full sm:w-[200px] space-y-4">
// //           <p className="font-semibold text-center sm:text-left text-gray-500">Help</p><br />
// //           <div className="space-y-6 text-center sm:text-left">
// //             <p>Payment Options</p>
// //             <p>Returns</p>
// //             <p>Privacy Policies</p>
// //           </div>
// //         </div>

// //         {/* Subscribe Section */}
// //         <div className="w-full sm:w-[250px]">
// //           <p className="font-semibold text-center sm:text-left text-gray-500">News Letter</p> <br />
// //           <div className="flex  justify-center sm:justify-start">
// //             <input
// //               type="text"
// //               placeholder="Enter your Email address"
// //               className="border-b-2 border-black  p-2  sm:text-lg"
// //             />
// //             <Link href={'#'} className="underline relative top-5 text-black hover:text-gray-700 text-base sm:text-lg text-[20px]">
// //               Subscribe
// //             </Link>
// //           </div>
// //         </div>

// //       </div>

// //       <hr className='bg-gray-500 h-1 w-full'/>
// // <div className="p-5 flex content-center">
// //     <p>2022 Meubel House. All rights reverved</p>
// // </div>
// //     </div>
// //   )
// // }
// import Link from 'next/link'
// import React from 'react'

// export default function Footer() {
//   return (
//     <div className="py-8">
//       <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 p-6 sm:p-10 w-full max-w-screen-xl mx-auto">

//         {/* Address Section */}
//         <div className="w-full sm:w-[300px] mt-9">
//           <p className="text-base sm:text-lg text-gray-500">
//             400 University Drive Suite 200 Coral <br />
//             Glabes, <br />
//             FL33134 USA
//           </p>
//         </div>

//         {/* Links Section */}
//         <div className="w-full sm:w-[150px] space-y-4">
//           <p className="font-semibold text-center sm:text-left text-gray-500">Links</p>
//           <div className="space-y-4 text-center sm:text-left">
//             <Link href={'#'} className="text-black hover:text-gray-700">Home</Link>
//             <Link href={'#'} className="text-black hover:text-gray-700">Shop</Link>
//             <Link href={'#'} className="text-black hover:text-gray-700">About</Link>
//             <Link href={'#'} className="text-black hover:text-gray-700">Contact</Link>
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="w-full sm:w-[200px] space-y-4">
//           <p className="font-semibold text-center sm:text-left text-gray-500">Help</p>
//           <div className="space-y-4 text-center sm:text-left">
//             <p>Payment Options</p>
//             <p>Returns</p>
//             <p>Privacy Policies</p>
//           </div>
//         </div>

//         {/* Subscribe Section */}
//         <div className="w-full sm:w-[250px]">
//           <p className="font-semibold text-center sm:text-left text-gray-500">News Letter</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mt-4 sm:mt-0">
//             <input
//               type="text"
//               placeholder="Enter your Email address"
//               className="border-b-2 border-black p-2 sm:text-lg w-full sm:w-auto"
//             />
//             <Link href={'#'} className="underline text-black hover:text-gray-700 text-base sm:text-lg text-[20px] sm:ml-4 mt-2 sm:mt-0">
//               Subscribe
//             </Link>
//           </div>
//         </div>

//       </div>

//       <hr className="bg-gray-500 h-1 w-full" />
//       <div className="p-5 flex justify-center sm:justify-start">
//         <p className="text-center sm:text-left">2022 Meubel House. All rights reserved</p>
//       </div>
//     </div>
//   )
// }
// components/Footer.js

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200 py-8">
//       <div className="container mx-auto px-6 md:px-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Address Section */}
//           <div>
//             <p className="text-gray-500 mt-4 md:mt-10">
//               400 University Drive Suite 200 Coral Gables,
//               <br /> FL 33134 USA
//             </p>
//           </div>

//           {/* Links Section */}
//           <div>
//             <h4 className="text-black font-semibold mb-3">Links</h4>
//             <ul className="space-y-1">
//               <li className="text-gray-600 cursor-pointer hover:text-black">
//              <Link href={'/'}>  Home </Link> 
//               </li>
//               <li className="text-gray-600 cursor-pointer hover:text-black">
//               <Link href={'/routes/shop'}>  Shop </Link> 
//               </li>
//               <li className="text-gray-600 cursor-pointer hover:text-black">
//               <Link href={'/routes/blog'}>  About </Link> 
//               </li>
//               <li className="text-gray-600 cursor-pointer hover:text-black">
//               <Link href={'/routes/contact'}>  Contact </Link> 
//               </li>
              
//             </ul>
//           </div>

//           {/* Help Section */}
//           <div>
//             <h4 className="text-black font-semibold mb-3">Help</h4>
//             <ul className="space-y-1">
//               <li className="text-gray-600 cursor-pointer hover:text-black">
//                 Payment Options
//               </li>
//               <li className="text-gray-600 cursor-pointer hover:text-black">
//                 Returns
//               </li>
//               <li className="text-gray-600 cursor-pointer hover:text-black">
//                 Privacy Policies
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter Section */}
//           <div>
//             <h4 className="text-black font-semibold mb-3">Newsletter</h4>
//             <form className="flex flex-wrap items-center gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-6 border-t border-gray-200 pt-4 ">
//           <p className="text-sm ">
//             2022 Meubel House. All rights reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



// import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Ensure this client is set up correctly
// import Link from 'next/link';

const Footer = () => {
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const query = `*[_type == "footer"][0] {
          address,
          links,
          helpTopics,
          newsletterPlaceholder,
          subscribeButtonText,
          footerBottomText
        }`;

        const data = await client.fetch(query);
        setFooterData(data);
        console.log('Fetched Footer Data:', data); // Debugging
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <p>Loading...</p>; // Show loading text while data is being fetched
  }

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Address Section */}
          <div>
            <p className="text-gray-500 mt-4 md:mt-10">
              {footerData.address || '400 University Drive Suite 200 Coral Gables, FL 33134 USA'}
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-black font-semibold mb-3">Links</h4>
            <ul className="space-y-1">
              {footerData.links?.map((link: any, index: number) => (
                <li key={index} className="text-gray-600 cursor-pointer hover:text-black">
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-black font-semibold mb-3">Help</h4>
            <ul className="space-y-1">
              {footerData.helpTopics?.map((topic: string, index: number) => (
                <li key={index} className="text-gray-600 cursor-pointer hover:text-black">
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-black font-semibold mb-3">Newsletter</h4>
            <form className="flex flex-wrap items-center gap-2">
              <input
                type="email"
                placeholder={footerData.newsletterPlaceholder || 'Enter Your Email Address'}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                {footerData.subscribeButtonText || 'SUBSCRIBE'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-sm">
            {footerData.footerBottomText || '2022 Meubel House. All rights reserved'}
          </p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
