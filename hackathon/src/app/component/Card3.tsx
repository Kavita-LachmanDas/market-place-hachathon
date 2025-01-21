
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client'; // Ensure this client is set up correctly
// import Image from 'next/image';
// import Link from 'next/link';
// import { BiCalendar, BiTime } from 'react-icons/bi';

// interface CardProps {
//   img: string;  // URL as string
//   description: string;
//   link: string;
//   time: string;
//   date: string;
// }

// const Card3 = ({
//   img,
//   description,
//   link,
//   time,
//   date,
// }: CardProps) => {
//   return (
//     <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[350px] p-4 overflow-x-hidden">
//       <div className="img">
//         <Image
//           width={300}
//           height={300}
//           src={img} // Dynamic image URL
//           alt={description}
//           className="w-full max-w-xs md:max-w-md lg:max-w-full object-contain"
//         />
//       </div>
//       <div className="text mt-4">
//         <p className="text-center">{description}</p>
//         <Link className="underline block text-center" href={link}>Read More</Link>
//         <div className="flex items-center justify-center mt-2 text-sm">
//           <h1 className="flex items-center space-x-2">
//             <BiTime /> <span>{time}</span>
//             <BiCalendar /> <span>{date}</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card3List = () => {
//   const [cards, setCards] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const query = `*[_type == "card3"] {
//           image { asset -> { url } },
//           description,
//           link,
//           time,
//           date
//         }`;
        
//         const data = await client.fetch(query);
//         setCards(data);
//         console.log('Fetched Card Data:', data); // Debugging
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchCards();
//   }, []);

//   if (cards.length === 0) {
//     return <p>Loading...</p>; // Show loading text while data is being fetched
//   }

//   return (
//     <div className="flex flex-wrap justify-center gap-6">
//       {cards.slice(0, 4).map((card: any, index: number) => (
//         <Card3
//           key={index}
//           img={card.image?.asset?.url || '/placeholder.png'} // Make sure the image URL is valid
//           description={card.description || 'No Description Available'}
//           link={card.link || '#'}
//           time={card.time || 'No Time Provided'}
//           date={new Date(card.date).toLocaleDateString() || 'No Date Provided'}
//         />
//       ))}
//     </div>
//   );
// };

// export default Card3List;




'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Ensure this client is set up correctly
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar, BiTime } from 'react-icons/bi';

interface CardProps {
  img: string;  // URL as string
  description: string;
  link: string;
  time: string;
  date: string;
}

interface CardData {
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
  link: string;
  time: string;
  date: string;
}

const Card3 = ({
  img,
  description,
  link,
  time,
  date,
}: CardProps) => {
  return (
    <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[350px] p-4 overflow-x-hidden">
      <div className="img">
        <Image
          width={300}
          height={300}
          src={img} // Dynamic image URL
          alt={description}
          className="w-full max-w-xs md:max-w-md lg:max-w-full object-contain"
        />
      </div>
      <div className="text mt-4">
        <p className="text-center">{description}</p>
        <Link className="underline block text-center" href={link}>Read More</Link>
        <div className="flex items-center justify-center mt-2 text-sm">
          <h1 className="flex items-center space-x-2">
            <BiTime /> <span>{time}</span>
            <BiCalendar /> <span>{date}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

const Card3List = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const query = `*[_type == "card3"] {
          image { asset -> { url } },
          description,
          link,
          time,
          date
        }`;
        
        const data = await client.fetch(query);
        setCards(data);
        console.log('Fetched Card Data:', data); // Debugging
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCards();
  }, []);

  if (cards.length === 0) {
    return <p>Loading...</p>; // Show loading text while data is being fetched
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.slice(0, 4).map((card, index) => (
        <Card3
          key={index}
          img={card.image?.asset?.url || '/placeholder.png'} // Make sure the image URL is valid
          description={card.description || 'No Description Available'}
          link={card.link || '#'}
          time={card.time || 'No Time Provided'}
          date={new Date(card.date).toLocaleDateString() || 'No Date Provided'}
        />
      ))}
    </div>
  );
};

export default Card3List;
