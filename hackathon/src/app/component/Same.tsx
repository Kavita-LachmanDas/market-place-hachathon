// import Image from 'next/image'


// import React from 'react'

// export default function Same() {
//   return (
//     <div className="w-full flex bg-[#FBEBB5]">
//         <div className="w-[800px]">
//         <Image
//               src="/img3.png" // Place your image in the public folder
//               alt="Rocket single seater"
//               width={1600} // Set a larger width
//               height={1600} // Set a larger height
//               className="object-contain w-full h-auto" // Ensures image scales correctly
//             />
//         </div>
//         <div className="w-[400px] p-6 mt-[200px]">
//         <p className="font-semibold text-center">New Arrivals</p>
//           <h1 className="text-2xl text-center md:text-5xl font-bold text-black mb-1 leading-snug max-w-lg mx-auto lg:mx-0">
//            Asgaard Sofa
//           </h1>
//         <button  className="inline-block text-lg text-center justify-center p-3 w-[190px] ml-[100px] mt-10  text-black border-2 border-black hover:text-gray-700">Order Now</button>

//         </div>
//     </div>
//   )
// }
// import Image from 'next/image'
// import React from 'react'

// export default function Same() {
//   return (
//     <div className="w-full flex flex-col lg:flex-row bg-[#FBEBB5]">
//       {/* Image Section */}
//       <div className="w-full lg:w-[800px]">
//         <Image
//           src="/img3.png" // Place your image in the public folder
//           alt="Rocket single seater"
//           width={1600} // Set a larger width
//           height={1600} // Set a larger height
//           className="object-contain w-full h-auto" // Ensures image scales correctly
//         />
//       </div>

//       {/* Text and Button Section */}
//       <div className="w-full lg:w-[400px] p-6 mt-10 lg:mt-[200px] flex flex-col items-center lg:items-start">
//         <p className="font-semibold text-center">New Arrivals</p>
//         <h1 className="text-2xl text-center md:text-5xl font-bold text-black mb-1 leading-snug max-w-lg mx-auto lg:mx-0">
//           Asgaard Sofa
//         </h1>
        
//         {/* Button */}
//         <div className="flex justify-center lg:justify-start w-full mt-6">
//           <button className="inline-block text-lg text-center p-3 w-[190px] text-black border-2 border-black hover:text-gray-700">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }




'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; // Ensure this client is set up correctly

export default function Same() {
  const [sameSection, setSameSection] = useState<any>(null);

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

        const data = await client.fetch(query);
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
