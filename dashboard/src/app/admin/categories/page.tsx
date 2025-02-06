"use client";

import { FaSpinner, FaSearch, FaCouch } from "react-icons/fa";
import { useEffect, useState } from "react";

const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <Icon className={className || ''} />
);

interface Furniture {
  _id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  imageUrl: string;
}

export default function Furniture() {
  const [furnitures, setFurnitures] = useState<Furniture[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchFurnitures = async () => {
      try {
        const data: Furniture[] = [
            { _id: "1", name: "Wooden Sofa", category: "Sofa", price: "$500", stock: 5, imageUrl: "https://your_image_url.com/sofa.jpg" },
            { _id: "2", name: "Dining Table", category: "Table", price: "$300", stock: 10, imageUrl: "https://your_image_url.com/table.jpg" },
            { _id: "3", name: "Office Chair", category: "Chair", price: "$150", stock: 8, imageUrl: "https://your_image_url.com/chair.jpg" },
            { _id: "4", name: "Coffee Table", category: "Table", price: "$120", stock: 3, imageUrl: "https://your_image_url.com/coffee_table.jpg" },
            { _id: "5", name: "Luxury Armchair", category: "Chair", price: "$450", stock: 6, imageUrl: "https://your_image_url.com/armchair.jpg" },
            { _id: "6", name: "Modern Bookshelf", category: "Bookshelf", price: "$200", stock: 12, imageUrl: "https://your_image_url.com/bookshelf.jpg" },
            { _id: "7", name: "King Size Bed", category: "Bed", price: "$800", stock: 4, imageUrl: "https://your_image_url.com/bed.jpg" },
            { _id: "8", name: "Dining Chair Set", category: "Chair", price: "$250", stock: 10, imageUrl: "https://your_image_url.com/dining_chairs.jpg" },
            { _id: "9", name: "Nightstand", category: "Bed", price: "$100", stock: 15, imageUrl: "https://your_image_url.com/nightstand.jpg" },
            { _id: "10", name: "Storage Cabinet", category: "Storage", price: "$350", stock: 7, imageUrl: "https://your_image_url.com/storage_cabinet.jpg" },
            { _id: "11", name: "Recliner Chair", category: "Chair", price: "$400", stock: 3, imageUrl: "https://your_image_url.com/recliner.jpg" },
            { _id: "12", name: "Dining Buffet", category: "Table", price: "$450", stock: 5, imageUrl: "https://your_image_url.com/dining_buffet.jpg" },
            { _id: "13", name: "Wall Shelf", category: "Bookshelf", price: "$80", stock: 20, imageUrl: "https://your_image_url.com/wall_shelf.jpg" },
            { _id: "14", name: "Lounge Chair", category: "Chair", price: "$300", stock: 4, imageUrl: "https://your_image_url.com/lounge_chair.jpg" },
            { _id: "15", name: "Modern Desk", category: "Desk", price: "$500", stock: 6, imageUrl: "https://your_image_url.com/desk.jpg" },
            { _id: "16", name: "Glass Coffee Table", category: "Table", price: "$180", stock: 8, imageUrl: "https://your_image_url.com/glass_coffee_table.jpg" },
            { _id: "17", name: "Swivel Office Chair", category: "Chair", price: "$250", stock: 10, imageUrl: "https://your_image_url.com/swivel_chair.jpg" },
            { _id: "18", name: "Console Table", category: "Table", price: "$220", stock: 7, imageUrl: "https://your_image_url.com/console_table.jpg" },
            { _id: "19", name: "Patio Lounge Set", category: "Outdoor", price: "$600", stock: 5, imageUrl: "https://your_image_url.com/patio_lounge.jpg" },
            { _id: "20", name: "TV Stand", category: "Storage", price: "$300", stock: 9, imageUrl: "https://your_image_url.com/tv_stand.jpg" },
            { _id: "21", name: "Armchair with Ottoman", category: "Chair", price: "$350", stock: 6, imageUrl: "https://your_image_url.com/armchair_ottoman.jpg" }
          ];
          
        setFurnitures(data);
      } catch (error) {
        console.error("Error fetching furnitures:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFurnitures();
  }, []);

  const filteredFurnitures = furnitures.filter(
    (furniture) =>
      furniture.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      furniture.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6 ml-0 md:ml-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white bg-clip-text mb-2 pt-14">
            Furniture Inventory Directory
          </h1>
          <p className="text-gray-300">Manage and view all furniture information</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <div className="relative max-w-xl">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              placeholder="Search furniture..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ThemedIcon 
              icon={FaSearch} 
              className="absolute left-4 top-4 text-gray-400" 
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-96 rounded-2xl bg-gray-700/50 backdrop-blur-sm">
            <ThemedIcon 
              icon={FaSpinner} 
              className="animate-spin text-gray-400 mb-4 w-10 h-10" 
            />
            <p className="text-gray-300 font-medium">Loading Furniture</p>
            <p className="text-sm text-gray-500 mt-2">Fetching furniture records...</p>
          </div>
        ) : (
          <div className="bg-gray-800 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-600">
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead className="bg-gray-700 text-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-left">Furniture Name</th>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Price</th>
                    <th className="px-6 py-3 text-left">Stock</th>
                  </tr>
                </thead>
                <tbody className="divide-gray-600">
                  {filteredFurnitures.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-24 text-center">
                        <div className="flex flex-col items-center justify-center text-gray-400">
                          <ThemedIcon 
                            icon={FaCouch} 
                            className="w-16 h-16 mb-4" 
                          />
                          <p className="text-xl font-medium">No furniture found</p>
                          <p className="mt-1 text-sm">Try adjusting your search terms</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredFurnitures.map((furniture) => (
                      <tr key={furniture._id}>
                        <td className="px-6 py-4">{furniture.name}</td>
                        <td className="px-6 py-4">{furniture.category}</td>
                        <td className="px-6 py-4">{furniture.price}</td>
                        <td className="px-6 py-4">{furniture.stock}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
