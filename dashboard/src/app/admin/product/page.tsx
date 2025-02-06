
///////////////////////////////////
'use client'

import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

export default function AdminPanel() {
  const [data, setData] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();

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
      setFilteredProducts(fetchedData); // Set the fetched data as initial filtered data
    };
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = data.filter(
      (product) =>
        product.category.toLowerCase().includes(query.toLowerCase()) // Filter by category only
    );
    setFilteredProducts(filtered);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  // Handle Product Deletion
  const handleDelete = async (id: string) => {
    // Remove product from the filtered list immediately
    const updatedProducts = filteredProducts.filter((product) => product._id !== id);
    setFilteredProducts(updatedProducts);
    setData(updatedProducts);  // Make sure it's also removed from the full data array
    
    // Delete product from Sanity in the background
    try {
      await client.delete(id);
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
     
    }
  };

  return (
    <div className="relative flex min-h-screen bg-gray-900 text-white overflow-hidden">
      <main className="flex-1 p-6 md:p-8 md:ml-64 z-10 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 pt-14">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-100 font-[Poppins] tracking-tight">
              Product Management
            </h1>
            <div className="flex flex-col md:flex-row items-stretch gap-3 w-full md:w-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search products by category..."
                  className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-gray-800 border border-gray-600 rounded-lg md:rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="absolute left-3 md:left-4 top-2.5 md:top-3.5 h-4 w-4 md:h-5 md:w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-1.5 "
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>

          {/* Product Cards */}
          <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    className="p-6 bg-gray-800 shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 ease-in-out flex flex-col"
                    key={item._id}
                  >
                    <div className="w-full h-[200px] overflow-hidden mb-4 relative">
                      <img
                        src={item.image.asset.url}
                        width={250}
                        height={200}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center flex flex-col justify-between h-full">
                      <h2 className="text-gray-100 text-lg font-semibold mb-2">{item.name}</h2>
                      <p className="text-gray-400 text-sm my-2">{item.description}</p>
                      <h3 className="font-bold text-xl text-white mt-2">${item.price}</h3>
                      <div className="flex justify-center gap-4 mt-4">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500">
                  <p>No products found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
