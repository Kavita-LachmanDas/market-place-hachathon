// // import React from "react";
// // import { Products } from "./data/Products";

// // import Link from "next/link";
// // import Card2 from "./component/Card2";

// // export default function Home() {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center p-8">
// //       {Products.map((product) => (
// //         <Link key={product.id} href={`/product/${product.id}`} passHref>
// //           <div className="cursor-pointer">
// //             <Card2
// //              />
// //           </div>
// //         </Link>
// //       ))}
// //     </div>
// //   );
// // }


















// 'use client'

// import React, { useEffect, useState } from "react";
// import { client } from '@/sanity/lib/client'; // Import Sanity client
// import Link from "next/link";
// import Card2 from "./component/Card2";

// // Function to fetch card data from Sanity
// async function getSanityData() {
//   const query = `*[_type == "card2" ]{
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

//   const data = await client.fetch(query);
//   return data;
// }

// export default function Home() {
 
   
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center p-8">
     
     
//           <div className="cursor-pointer">
//             <Card2
          
//             />
//           </div>
      
    
//     </div>
//   );
// }

'use client'
import React from 'react'
import Card2 from './component/Card2'

export default function Home() {
  return (
  
       <div >
      <Card2/>
    </div>
    
  )
}
