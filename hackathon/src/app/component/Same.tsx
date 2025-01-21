


// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client'; // Ensure this client is set up correctly

// export default function Same() {
//   const [sameSection, setSameSection] = useState<any>(null);

//   useEffect(() => {
//     const fetchSameSection = async () => {
//       try {
//         const query = `*[_type == "same"][0] { 
//           image { asset -> { url } }, 
//           sectionTitle, 
//           productTitle, 
//           buttonText, 
//           buttonLink 
//         }`;

//         const data = await client.fetch(query);
//         setSameSection(data);
//         console.log('Fetched Data:', data); // Debugging the fetched data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchSameSection();
//   }, []);

//   if (!sameSection) {
//     return <p>Loading...</p>; // Display a loading message while the data is fetched
//   }

//   return (
//     <div className="w-full flex flex-col lg:flex-row bg-[#FBEBB5]">
//       {/* Image Section */}
//       <div className="w-full lg:w-[800px]">
//         <Image
//           src={sameSection.image?.asset?.url || '/img3.png'} // Fallback to a placeholder image if not available
//           alt={sameSection.productTitle || 'Product Image'} // Fallback to a default alt text
//           width={1600} // Set a larger width
//           height={1600} // Set a larger height
//           className="object-contain w-full h-auto" // Ensures image scales correctly
//         />
//       </div>

//       {/* Text and Button Section */}
//       <div className="w-full lg:w-[400px] p-6 mt-10 lg:mt-[200px] flex flex-col items-center lg:items-start">
//         <p className="font-semibold text-center">{sameSection.sectionTitle}</p>
//         <h1 className="text-2xl text-center md:text-5xl font-bold text-black mb-1 leading-snug max-w-lg mx-auto lg:mx-0">
//           {sameSection.productTitle}
//         </h1>
        
//         {/* Button */}
//         <div className="flex justify-center lg:justify-start w-full mt-6">
//           <a
//             href={sameSection.buttonLink || '#'} // Fallback link if buttonLink is not provided
//             className="inline-block text-lg text-center p-3 w-[190px] text-black border-2 border-black hover:text-gray-700"
//           >
//             {sameSection.buttonText || 'Order Now'}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

// Define the type for the fetched same section data
interface SameSectionData {
  image: { asset: { url: string } };
  sectionTitle: string;
  productTitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function Same() {
  // Use the SameSectionData type for the sameSection state
  const [sameSection, setSameSection] = useState<SameSectionData | null>(null);

  useEffect(() => {
    const fetchSameSection = async () => {
      try {
        const query = `*[_type == "same"][0] { 
          image { asset -> { url } }, 
          sectionTitle, 
          productTitle, 
          buttonText, 
          buttonLink 
        }`;

        const data: SameSectionData = await client.fetch(query); // Type the fetched data
        setSameSection(data);
        console.log('Fetched Data:', data); // Debugging the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSameSection();
  }, []);

  if (!sameSection) {
    return <p>Loading...</p>; // Display a loading message while the data is fetched
  }

  return (
    <div className="w-full flex flex-col lg:flex-row bg-[#FBEBB5]">
      {/* Image Section */}
      <div className="w-full lg:w-[800px]">
        <Image
          src={sameSection.image?.asset?.url || '/img3.png'} // Fallback to a placeholder image if not available
          alt={sameSection.productTitle || 'Product Image'} // Fallback to a default alt text
          width={1600} // Set a larger width
          height={1600} // Set a larger height
          className="object-contain w-full h-auto" // Ensures image scales correctly
        />
      </div>

      {/* Text and Button Section */}
      <div className="w-full lg:w-[400px] p-6 mt-10 lg:mt-[200px] flex flex-col items-center lg:items-start">
        <p className="font-semibold text-center">{sameSection.sectionTitle}</p>
        <h1 className="text-2xl text-center md:text-5xl font-bold text-black mb-1 leading-snug max-w-lg mx-auto lg:mx-0">
          {sameSection.productTitle}
        </h1>
        
        {/* Button */}
        <div className="flex justify-center lg:justify-start w-full mt-6">
          <a
            href={sameSection.buttonLink || '#'} // Fallback link if buttonLink is not provided
            className="inline-block text-lg text-center p-3 w-[190px] text-black border-2 border-black hover:text-gray-700"
          >
            {sameSection.buttonText || 'Order Now'}
          </a>
        </div>
      </div>
    </div>
  );
}
