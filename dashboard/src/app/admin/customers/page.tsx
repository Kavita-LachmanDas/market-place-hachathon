"use client";

import { FaCouch, FaChair, FaBed, FaDumbbell } from "react-icons/fa";
import { useState, useEffect } from "react";

// Define the category themes for furniture types
type CategoryTheme = {
  icon: JSX.Element;
  bg: string;
  progress: string;
};

// Define valid category keys
type CategoryKey = "sofa" | "chair" | "bed" | "default";

// Themed Icon Component
const ThemedIcon = ({ Icon, className }: { Icon: React.ElementType; className?: string }) => (
  <Icon className={className || ""} />
);

// Furniture inventory data (Replace with API if needed)
const furnitureProducts = [
  { id: 1, name: "Leather Sofa", stock: 5, price: 1200, categoryName: "sofa" },
  { id: 2, name: "Wooden Chair", stock: 8, price: 200, categoryName: "chair" },
  { id: 3, name: "King Bed", stock: 2, price: 2500, categoryName: "bed" },
  { id: 4, name: "Modern Sofa", stock: 1, price: 3000, categoryName: "sofa" },
  { id: 5, name: "Dining Table", stock: 4, price: 1500, categoryName: "chair" },
];

// Category themes with corresponding styles
const categoryThemes: Record<CategoryKey, CategoryTheme> = {
  sofa: {
    icon: <ThemedIcon Icon={FaCouch} className="w-8 h-8 text-teal-600" />,
    bg: "bg-teal-100", // Lighter teal background
    progress: "bg-gradient-to-r from-teal-600 to-teal-300",
  },
  chair: {
    icon: <ThemedIcon Icon={FaChair} className="w-8 h-8 text-orange-600" />,
    bg: "bg-orange-100", // Lighter orange background
    progress: "bg-gradient-to-r from-orange-600 to-orange-300",
  },
  bed: {
    icon: <ThemedIcon Icon={FaBed} className="w-8 h-8 text-indigo-600" />,
    bg: "bg-indigo-100", // Lighter indigo background
    progress: "bg-gradient-to-r from-indigo-600 to-indigo-300",
  },
  default: {
    icon: <ThemedIcon Icon={FaDumbbell} className="w-8 h-8 text-gray-600" />,
    bg: "bg-gray-100", // Lighter gray background
    progress: "bg-gradient-to-r from-gray-600 to-gray-300",
  },
};

const Categories = () => {
  const [products] = useState(furnitureProducts);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [categoryWiseAmount, setCategoryWiseAmount] = useState<Record<string, number>>({});

  useEffect(() => {
    let total = 0;
    let totalQuantity = 0;
    const categoryAmounts: Record<string, number> = {}; // Changed from 'let' to 'const'

    products.forEach((product) => {
      total += product.stock * product.price;
      totalQuantity += product.stock;

      categoryAmounts[product.categoryName] = (categoryAmounts[product.categoryName] || 0) + product.stock * product.price;
    });

    setTotalAmount(total);
    setTotalStock(totalQuantity);
    setCategoryWiseAmount(categoryAmounts);
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-7xl space-y-8 py-12 flex flex-row gap-6">
        <div className="w-1/4 bg-gray-700 p-6 rounded-xl hidden sm:block shadow-lg">
          {/* Sidebar Content */}
          <h2 className="text-xl font-semibold text-white mb-4">Furniture Categories</h2>
          <ul>
            <li className="text-lg text-black mb-2">Sofas</li>
            <li className="text-lg text-black mb-2">Chairs</li>
            <li className="text-lg text-black mb-2">Beds</li>
          </ul>
        </div>

        <div className="flex-1 bg-gray-900 border-2 border-gray-950 rounded-xl p-6 shadow-lg">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Furniture Inventory Analytics 🛋️</h1>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  {/* <ThemedIcon Icon={FaDollarSign} className="w-8 h-8 text-white" /> */}
                </div>
                <div>
                  <p className="text-sm text-white/80">Total Inventory Value</p>
                  <p className="text-2xl font-bold text-white">${totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  {/* <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-white" /> */}
                </div>
                <div>
                  <p className="text-sm text-white/80">Total Furniture in Inventory</p>
                  <p className="text-2xl font-bold text-white">{totalStock}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(categoryWiseAmount).map(([category, amount]) => {
              const categoryKey = category.toLowerCase() as CategoryKey;
              const theme = categoryThemes[categoryKey] || categoryThemes.default;
              const percentage = totalAmount > 0 ? (((amount as number) / totalAmount) * 100).toFixed(1) : "0";

              return (
                <div key={category} className={`${theme.bg} rounded-2xl shadow-lg p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-white/20 border-black">{theme.icon}</div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30">
                      <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mt-4 mb-1">{category.toUpperCase()}</h3>
                  <p className="text-2xl font-bold text-black mb-4">${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                  <div className="relative">
                    <div className="w-full bg-white/30 rounded-full h-3">
                      <div className={`${theme.progress} h-3 rounded-full`} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
