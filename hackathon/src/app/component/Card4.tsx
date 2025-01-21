// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';

// interface Card4Data {
//   img: { asset: { url: string } };
//   para: string;
//   para2?: string;
//   price: string;
// }

// export default function Card4() {
//   const [cards, setCards] = useState<Card4Data[]>([]);

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const query = `*[_type == "card4"] {
//           img { asset -> { url } }, 
//           para, 
//           para2, 
//           price
//         }`;
//         const data = await client.fetch(query);
//         setCards(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchCards();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center p-8">
//       {cards.length > 0 ? (
//         cards.map((card, index) => (
//           <div key={index} className="p-8">
//             <div className="w-[250px]">
//               <Image
//                 src={card.img.asset.url}
//                 width={300}
//                 height={300}
//                 alt={card.para}
//               />
//             </div>
//             <div className="text">
//               <p className="text-gray-700">
//                 {card.para} <br /> {card.para2 || ''}
//               </p>
//               <h1 className="font-bold text-black text-3xl">{card.price}</h1>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500 p-10">No cards to display</p>
//       )}
//     </div>
//   );
// }
 










"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
}

export default function Card4() {
  const [data, setData] = useState<Product[]>([]);

  // Query to fetch product data from Sanity
  const query = `*[_type == "card2"]{
    _id,
    name,
    description,
    price,
    category,
    image{
      asset->{
        url
      }
    }
  }`;

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await client.fetch(query);
      setData(fetchedData.slice(0, 4)); // Limit to 4 items
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <Link href={`/product/${item._id}`} key={item._id}>
          <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 ease-in-out flex flex-col">
            <div className="w-full h-[250px] overflow-hidden mb-4 relative">
              <Image
                src={item.image.asset.url}
                width={250}
                height={250}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center flex flex-col justify-between h-full">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-500 text-sm my-2">{item.description}</p>
              <h3 className="font-bold text-xl text-black mt-2">${item.price}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
