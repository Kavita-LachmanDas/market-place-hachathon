'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useEffect, useState } from 'react';

// Sample Data for Furniture Sales
const initialData = [
  { month: 'Jan', sales: 120, revenue: 5000, orders: 30 },
  { month: 'Feb', sales: 150, revenue: 7500, orders: 40 },
  { month: 'Mar', sales: 180, revenue: 9000, orders: 50 },
  { month: 'Apr', sales: 220, revenue: 11000, orders: 60 },
  { month: 'May', sales: 250, revenue: 12500, orders: 70 },
  { month: 'Jun', sales: 300, revenue: 15000, orders: 85 },
];

export default function FurnitureSalesGraph() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        return currentData.map(item => ({
          ...item,
          sales: item.sales + Math.floor(Math.random() * 20 - 10),
          revenue: item.revenue + Math.floor(Math.random() * 500 - 250),
          orders: item.orders + Math.floor(Math.random() * 5 - 2),
        }));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-8 bg-gradient-to-r from-[#f8e1c1] to-[#d1b495] shadow-lg rounded-xl border border-[#b08968] text-[#5a3e2b]">
      <h2 className="text-2xl font-bold mb-6 text-center">Furniture Sales Analytics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#b08968" />
          <XAxis 
            dataKey="month" 
            stroke="#5a3e2b"
            tick={{ fill: '#5a3e2b', fontSize: 14 }}
          />
          <YAxis 
            stroke="#5a3e2b"
            tick={{ fill: '#5a3e2b', fontSize: 14 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff8e7',
              border: '1px solid #b08968',
              borderRadius: '8px',
              color: '#5a3e2b',
            }}
          />
          <Legend verticalAlign="top" height={36} iconType="circle" />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="#b87333" 
            strokeWidth={3}
            dot={{ fill: '#b87333', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#f59e0b" 
            strokeWidth={3}
            dot={{ fill: '#f59e0b', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="orders" 
            stroke="#34d399" 
            strokeWidth={3}
            dot={{ fill: '#34d399', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
