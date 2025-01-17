

// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';

// interface CardData {
//   img: {
//     asset: {
//       url: string;
//     };
//   };
//   name: string;
//   view: string;
// }

// export default function CardList() {
//   const [cards, setCards] = useState<CardData[]>([]);

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const query = `*[_type == "card"] {
//           img {
//             asset -> { url }
//           },
//           name,
//           view
//         }`; // Fetch all documents of type 'card'

//         const data = await client.fetch(query);
//         console.log('Fetched Card Data:', data); // Debugging fetched data
//         setCards(data);
//       } catch (error) {
//         console.error('Error fetching card data:', error); // Debugging errors
//       }
//     };

//     fetchCards();
//   }, []);

//   if (cards.length === 0) {
//     return <div>Loading...</div>; // Display a loading state
//   }

//   return (
//     <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
//       {cards.map((card, index) => (
//         <Card
//           key={index}
//           img={card.img?.asset?.url || '/default-image.png'} // Fallback to a default image
//           name={card.name || 'Default Name'}
//           view={card.view || 'Default View'}
//         />
//       ))}
//     </div>
//   );
// }

// interface CardProps {
//   img: string;
//   name: string;
//   view: string;
// }

// function Card({ img, name, view }: CardProps) {
//   return (
//     <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] px-4 py-6">
//       <div className="img">
//         <Image
//           src={img}
//           alt={name}
//           width={700}
//           height={500}
//           className="rounded-md"
//         />
//       </div>
//       <div className="text mb-11">
//         <h1 className="font-bold text-3xl">{name}</h1>
//         <Link className="underline" href={'#'}>
//           {view}
//         </Link>
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

interface CardData {
  image: {
    asset: {
      url: string;
    };
  };
  name: string;
  view: string;
}

export default function CardList() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const query = `*[_type == "card"] {
          image {
            asset -> { url }
          },
          name,
          view
        }`; // Fetch all documents of type 'card'

        const data = await client.fetch(query);
        console.log('Fetched Card Data:', data); // Debugging fetched data
        setCards(data);
      } catch (error) {
        console.error('Error fetching card data:', error); // Debugging errors
      }
    };

    fetchCards();
  }, []);

  if (cards.length === 0) {
    return <div>Loading...</div>; // Display a loading state
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image?.asset?.url || '/default-image.png'} // Fallback to a default image
          name={card.name || 'Default Name'}
          view={card.view || 'Default View'}
        />
      ))}
    </div>
  );
}

interface CardProps {
  image: string;
  name: string;
  view: string;
}

function Card({ image, name, view }: CardProps) {
  return (
    <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] px-4 py-6">
      <div className="img">
        <Image
          src={image}
          alt={name}
          width={700}
          height={500}
          className="rounded-md"
        />
      </div>
      <div className="text mb-11">
        <h1 className="font-bold text-3xl">{name}</h1>
        <Link className="underline" href={'#'}>
          {view}
        </Link>
      </div>
    </div>
  );
}
