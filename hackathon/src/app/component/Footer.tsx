// 'use client';

// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'

// import { client } from '@/sanity/lib/client'; 


// const Footer = () => {
//   const [footerData, setFooterData] = useState<any>(null);

//   useEffect(() => {
//     const fetchFooterData = async () => {
//       try {
//         const query = `*[_type == "footer"][0] {
//           address,
//           links,
//           helpTopics,
//           newsletterPlaceholder,
//           subscribeButtonText,
//           footerBottomText
//         }`;

//         const data = await client.fetch(query);
//         setFooterData(data);
//         console.log('Fetched Footer Data:', data); // Debugging
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchFooterData();
//   }, []);

//   if (!footerData) {
//     return <p>Loading...</p>; 
//   }

//   return (
//     <footer className="bg-white border-t border-gray-200 py-8">
//       <div className="container mx-auto px-6 md:px-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Address Section */}
//           <div>
//             <p className="text-gray-500 mt-4 md:mt-10">
//               {footerData.address || '400 University Drive Suite 200 Coral Gables, FL 33134 USA'}
//             </p>
//           </div>

//           {/* Links Section */}
//           <div>
//             <h4 className="text-black font-semibold mb-3">Links</h4>
//             <ul className="space-y-1">
//               {footerData.links?.map((link: any, index: number) => (
//                 <li key={index} className="text-gray-600 cursor-pointer hover:text-black">
//                   <Link href={link.url}>{link.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Help Section */}
//           <div>
//             <h4 className="text-black font-semibold mb-3">Help</h4>
//             <ul className="space-y-1">
//               {footerData.helpTopics?.map((topic: string, index: number) => (
//                 <li key={index} className="text-gray-600 cursor-pointer hover:text-black">
//                   {topic}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter Section */}
//           <div>
//             <h4 className="text-black font-semibold mb-3">Newsletter</h4>
//             <form className="flex flex-wrap items-center gap-2">
//               <input
//                 type="email"
//                 placeholder={footerData.newsletterPlaceholder || 'Enter Your Email Address'}
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//               >
//                 {footerData.subscribeButtonText || 'SUBSCRIBE'}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-6 border-t border-gray-200 pt-4">
//           <p className="text-sm">
//             {footerData.footerBottomText || '2022 Meubel House. All rights reserved'}
//           </p>
//         </div>
//       </div>

      
//     </footer>
//   );
// };

// export default Footer;






'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { client } from '@/sanity/lib/client';

// Define the type for the fetched footer data
interface FooterData {
  address: string;
  links: { url: string; label: string }[];
  helpTopics: string[];
  newsletterPlaceholder: string;
  subscribeButtonText: string;
  footerBottomText: string;
}

const Footer = () => {
  // Use the FooterData type for the footerData state
  const [footerData, setFooterData] = useState<FooterData | null>(null);

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

        const data: FooterData = await client.fetch(query); // Type the fetched data
        setFooterData(data);
        console.log('Fetched Footer Data:', data); // Debugging
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <p>Loading...</p>;
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
              {footerData.links?.map((link, index) => (
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
              {footerData.helpTopics?.map((topic, index) => (
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
