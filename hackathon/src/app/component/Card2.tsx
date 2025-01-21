
"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiFilter } from "react-icons/bi";
import Search from "./Search"; // Assuming Search component is in the same folder

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
  const [filteredData, setFilteredData] = useState<Product[]>([]); // Added filteredData state
  const [sortOption, setSortOption] = useState("default");

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
      setData(fetchedData);
      setFilteredData(fetchedData); // Initialize filtered data with all products
    };
    fetchData();
  }, []);

  // Search filter logic
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) || // Search by product name
      item.description.toLowerCase().includes(lowerCaseQuery) || // Search by description
      item.category.toLowerCase().includes(lowerCaseQuery) // Search by category
    );
    setFilteredData(filtered); // Update filtered data
  };

  // Sorting logic based on selected option
  const sortedData = [...filteredData];

  if (sortOption === "Low to High Prices") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOption === "High To Low Prices") {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (sortOption === "popularity") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name)); // Example sorting by name
  } else if (sortOption === "category") {
    sortedData.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      {/* Filter and Sort Options */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-500 rounded-md shadow hover:bg-gray-200">
              <BiFilter /> Filter
            </button>

            <p className="text-gray-600 text-sm">Showing {sortedData.length} results</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-gray-600">Sort by</p>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none"
              >
                <option value="default">Default</option>
                <option value="Low to High Prices">Low to High Prices</option>
                <option value="High To Low Prices">High To Low Prices</option>
                <option value="popularity">Popularity</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto px-6 py-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedData.map((item) => (
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
    </div>
  );
}
