// import React from 'react'

// export default function Follow() {
//   return (
//     <div className="hi flex items-center justify-center  h-[400px] mt-7">
//       <div className="text-center px-4">
//         <h1 className="font-bold text-[40px] sm:text-3xl md:text-4xl mb-2">Our Instagram</h1>
//         <p className="text-black text-lg mb-6">Follow our store on Instagram</p>
//         <button className="bg-[#FAF4F4] w-[140px] text-black rounded-full shadow-lg hover:shadow-xl transition-all p-4 text-lg sm:p-3 sm:text-base">
//           Follow Us
//         </button>
//       </div>
//     </div>
//   )
// }
'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Ensure this client is set up correctly

const Follow = () => {
  const [followData, setFollowData] = useState<any>(null);

  useEffect(() => {
    const fetchFollowData = async () => {
      try {
        const query = `*[_type == "follow"][0] {
          title,
          description,
          buttonText,
          backgroundColor
        }`;

        const data = await client.fetch(query);
        setFollowData(data);
        console.log('Fetched Follow Data:', data); // Debugging
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFollowData();
  }, []);

  if (!followData) {
    return <p>Loading...</p>; // Show loading text while data is being fetched
  }

  return (
    <div className="hi flex items-center justify-center h-[400px] mt-7">
      <div className="text-center px-4">
        <h1 className="font-bold text-[40px] sm:text-3xl md:text-4xl mb-2">
          {followData.title || 'Our Instagram'}
        </h1>
        <p className="text-black text-lg mb-6">
          {followData.description || 'Follow our store on Instagram'}
        </p>
        <button
          style={{ backgroundColor: followData.backgroundColor || '#FAF4F4' }}
          className="w-[140px] text-black rounded-full shadow-lg hover:shadow-xl transition-all p-4 text-lg sm:p-3 sm:text-base"
        >
          {followData.buttonText || 'Follow Us'}
        </button>
      </div>
    </div>
  );
};

export default Follow;
