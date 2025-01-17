'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

interface Card4Data {
  img: { asset: { url: string } };
  para: string;
  para2?: string;
  price: string;
}

export default function Card4() {
  const [cards, setCards] = useState<Card4Data[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const query = `*[_type == "card4"] {
          img { asset -> { url } }, 
          para, 
          para2, 
          price
        }`;
        const data = await client.fetch(query);
        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center p-8">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <div key={index} className="p-8">
            <div className="w-[250px]">
              <Image
                src={card.img.asset.url}
                width={300}
                height={300}
                alt={card.para}
              />
            </div>
            <div className="text">
              <p className="text-gray-700">
                {card.para} <br /> {card.para2 || ''}
              </p>
              <h1 className="font-bold text-black text-3xl">{card.price}</h1>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 p-10">No cards to display</p>
      )}
    </div>
  );
}
// 'use client'


// import React, { useEffect, useState } from 'react';
// import { createClient } from '@sanity/client';
// import Image from 'next/image';

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: true,
//   apiVersion: '2021-08-31',
// });

// async function getSanityData() {
//   // Query to fetch the card data from Sanity
//   const query = `*[_type == "card2"]{
//     _id,
//     para,
//     para2,
//     price,
//     image {
//       asset -> {
//         url
//       }
//     }
//   }`;

//   // Fetch the data from Sanity
//   const data = await client.fetch(query);
//   return data;
// }

// function Card2({
//   img,
//   para,
//   para2,
//   price,
// }: {
//   img: string;
//   para: string;
//   para2?: string; // Optional field
//   price: string;
// }) {
//   return (
    
//     <div className="p-8">
      
//       <div className="w-[250px]">
//         <Image src={img} width={300} height={300} alt={para} />
//       </div>
//       <div className="text">
//         <p className="text-gray-700">
//           {para} <br /> {para2 || ''}
//         </p>
//         <h1 className="font-bold text-black text-3xl">{price}</h1>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const [cards, setCards] = useState<any[]>([]); // State to store the fetched cards

//   useEffect(() => {
//     // Function to fetch data on component mount
//     async function fetchData() {
//       const data = await getSanityData(); // Fetch data from Sanity
//       setCards(data); // Update state with the fetched data
//     }
//     fetchData(); // Call the fetch function
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-8 justify-center">
//       {cards.map((card) => (
//         <Card2
//           key={card._id}
//           img={card.image?.asset?.url || ''} // Image URL from Sanity
//           para={card.para} // Paragraph text from Sanity
//           para2={card.para2} // Second paragraph (optional)
//           price={card.price} // Price from Sanity
//         />
//       ))}
//     </div>
//   );
// }