// import React from 'react'

// export default function NextCard() {
//   return (
//     <div>
//         <div className="con">
//             <div className="text-center p-10">
//                 <h1 className='font-bold text-[30px] text-black'>Top Picks For You</h1>
//                 <p className='text-gray-500'>Find a Bright Ideal to suit your taste with our great selection  og suspensions, floor and table lights

//                 </p>
//             </div>


//         </div>
//     </div>
//   )
// }
'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

interface CardData {
  title: string;
  description: string;
}

export default function NextCard() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const query = `*[_type == "nextCard"] { title, description }`;
        const data = await client.fetch(query);
        console.log('Fetched Data:', data); // Debugging fetched data
        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <div className="con">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div key={index} className="text-center p-10">
              <h1 className="font-bold text-[30px] text-black">
                {card.title || 'No Title Available'}
              </h1>
              <p className="text-gray-500">
                {card.description || 'No Description Available'}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 p-10">No cards to display</p>
        )}
      </div>
    </div>
  );
}
