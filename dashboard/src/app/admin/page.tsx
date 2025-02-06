
"use client";

import { useEffect, useState } from "react";
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import CarAnalyticsGraph from "../components/FurnitureAnalytics";

const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <Icon className={className || ""} />
);

// Function to format large numbers
const formatNumber = (num: number): string => {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`; // Billion
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`; // Million
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`; // Thousand
  return `$${num.toLocaleString()}`; // Default with commas
};

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalStock, setTotalStock] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalOrders] = useState<number>(9);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productQuery = `*[_type == "card2"]{
          _id,
          name,
          description,
          price,
          category,
          stockLevel,
          image{
            asset->{ url }
          }
        }`;

        const productsData = await client.fetch(productQuery);
        setTotalProducts(productsData.length);
        setTotalStock(
          productsData.reduce((acc: number, product: { stockLevel: number }) => acc + product.stockLevel, 0)
        );
        setTotalAmount(
          productsData.reduce((acc: number, product: { price: number }) => acc + product.price, 0)
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const roundToSignificantFigures = (num: number, significantFigures: number) => {
    if (num === 0) return 0;
    const multiplier = Math.pow(10, significantFigures - Math.floor(Math.log10(Math.abs(num))) - 1);
    return Math.round(num * multiplier) / multiplier;
  };
  

  const stats = [
    { title: "Total Products", value: totalProducts, icon: FaBox, bg: "from-purple-700 to-indigo-600" },
    { title: "Total Stock", value: totalStock, icon: FaShoppingCart, bg: "from-blue-600 to-blue-400" },
    { 
        title: "Total Revenue", 
        value: formatNumber(roundToSignificantFigures(totalAmount, 1)), 
        icon: FaMoneyBillWave, 
        bg: "from-green-600 to-green-400" 
      },
    { title: "Total Orders", value: totalOrders, icon: FaUsers, bg: "from-red-600 to-red-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-6 md:ml-64">
      <h1 className="text-4xl font-bold text-white mb-8 font-[Poppins]">Business Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-gradient-to-br ${stat.bg} rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/90 font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-white break-words">{stat.value}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-full">
                <ThemedIcon icon={stat.icon} className="text-3xl text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /><br />
      <CarAnalyticsGraph />
    </div>
  );
}
