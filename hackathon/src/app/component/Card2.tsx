
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";


// export default async function Card2() {
//   // Sanity query to fetch product data
//   const query = `*[_type == "card2"]{
//     _id,
//     name,
//     description,
   
//     price,
//     image{
//       asset->{
//         url
//       }
//     }
//   }`;

//   // Fetching data from Sanity
//   const data = await client.fetch(query);
//   console.log(data); // Check fetched data

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {data.map(
//         (item: {
//           _id: string;
//           name: string;
//           description: string;
          
//           price: number;
//           image: { asset: { url: string } };
//         }) => {
//           return (
//             <Link href={`/product/${item._id}`} key={item._id}>
//               <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 ease-in-out flex flex-col">
//                 {/* Image container with a consistent size */}
//                 <div className="w-full h-[250px] overflow-hidden mb-4 relative">
//                   <Image
//                     src={item.image.asset.url}
//                     width={250}
//                     height={250}
//                     alt={item.name}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 {/* Product Information */}
//                 <div className="text-center flex flex-col justify-between h-full">
               
//                   <h2 className="text-gray-800 text-lg font-semibold mb-2">{item.name}</h2>
//                   <p className="text-gray-500 text-sm my-2">{item.description}</p>
//                   <h3 className="font-bold text-xl text-black mt-2">${item.price}</h3>
//                 </div>
//               </div>
//             </Link>
//           );
//         }
//       )}
//     </div>
//   );
// }

"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiFilter } from "react-icons/bi";

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

export default function Card2() {
  const [data, setData] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // Sanity query to fetch product data
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
      setData(fetchedData);
    };
    fetchData();
  }, []);

  // Sorting logic based on selected option
  let sortedData = [...data];

  if (sortOption === "Low to High Prices") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOption === "High To Low Prices") {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (sortOption === "popularity") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name)); // Example sorting by name (for popularity)
  } else if (sortOption === "category") {
    sortedData.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      

      
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-500 rounded-md shadow hover:bg-gray-200">
                    <span className="material-icons-outlined mr-2"></span>
                    <BiFilter/> Filter
                  </button>
      
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200">
                      <span className="material-icons-outlined">apps</span>
                    </button>
                    <button className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200">
                      <span className="material-icons-outlined">Veiw List</span>
                    </button>
                  </div>
      
                  <p className="text-gray-600 text-sm">
                    Showing 1–16 of 32 results
                  </p>
                </div>
      
                {/* Right Section */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600">Show</p>
                    <input
                      type="number"
                      className="w-12 p-2 border border-gray-300 rounded text-center focus:ring-2 focus:ring-gray-400 focus:outline-none"
                      value="16"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600">Short by</p>
                    <select  value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
                    className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none">
                      <option value="default">Default</option>
                      <option value="price">Price</option>
                      <option value="category">category</option>
                      <option value="Low to High Prices">Low to High Prices</option>
                      <option value="High To Low Prices">High To Low Prices</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
      
      
      

      {/* Cards Display based on sorted data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedData.map((item) => {
          return (
            <Link href={`/product/${item._id}`} key={item._id}>
              <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 ease-in-out flex flex-col">
                {/* Image container */}
                <div className="w-full h-[250px] overflow-hidden mb-4 relative">
                  <Image
                    src={item.image.asset.url}
                    width={250}
                    height={250}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Product Information */}
                <div className="text-center flex flex-col justify-between h-full">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-500 text-sm my-2">{item.description}</p>
                  <h3 className="font-bold text-xl text-black mt-2">${item.price}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

