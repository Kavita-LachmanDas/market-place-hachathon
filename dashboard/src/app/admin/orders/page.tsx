'use client'

import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

type Order = {
  _id: string;
  customer: {
    fullName: string;
  };
  totalAmount: number;
  shippingAddress: string;
  status: string;
  orderDate: string;
  orderId: string;
  items: { quantity: number }[]; 
};
const mockOrders: Order[] = [
    {
      _id: "1",
      customer: {
        fullName: "John Doe",
      },
      totalAmount: 100.5,
      shippingAddress: "123 Main St, Springfield",
      status: "pending",
      orderDate: "2025-02-05T14:48:00.000Z",
      orderId: "ORD123",
      items: [
        { quantity: 2 },
      ],
    },
    {
      _id: "2",
      customer: {
        fullName: "Jane Smith",
      },
      totalAmount: 250.75,
      shippingAddress: "456 Elm St, Shelbyville",
      status: "completed",
      orderDate: "2025-02-04T11:30:00.000Z",
      orderId: "ORD124",
      items: [
        { quantity: 1 },
        { quantity: 3 },
      ],
    },
    {
      _id: "3",
      customer: {
        fullName: "Alice Cooper",
      },
      totalAmount: 300.5,
      shippingAddress: "789 Oak St, Capital City",
      status: "pending",
      orderDate: "2025-02-03T13:20:00.000Z",
      orderId: "ORD125",
      items: [
        { quantity: 1 },
      ],
    },
    {
      _id: "4",
      customer: {
        fullName: "Bob Brown",
      },
      totalAmount: 150.0,
      shippingAddress: "101 Pine St, Rivertown",
      status: "completed",
      orderDate: "2025-02-02T12:10:00.000Z",
      orderId: "ORD126",
      items: [
        { quantity: 5 },
      ],
    },
    {
      _id: "5",
      customer: {
        fullName: "Charlie White",
      },
      totalAmount: 500.0,
      shippingAddress: "202 Birch St, Hill Valley",
      status: "pending",
      orderDate: "2025-02-01T09:05:00.000Z",
      orderId: "ORD127",
      items: [
        { quantity: 2 },
      ],
    },
    {
      _id: "6",
      customer: {
        fullName: "Eve Black",
      },
      totalAmount: 120.75,
      shippingAddress: "303 Cedar St, Downtown",
      status: "completed",
      orderDate: "2025-01-30T15:30:00.000Z",
      orderId: "ORD128",
      items: [
        { quantity: 1 },
      ],
    },
    {
      _id: "7",
      customer: {
        fullName: "Frank Green",
      },
      totalAmount: 230.0,
      shippingAddress: "404 Maple St, Beachside",
      status: "pending",
      orderDate: "2025-01-29T10:45:00.000Z",
      orderId: "ORD129",
      items: [
        { quantity: 3 },
      ],
    },
    {
      _id: "8",
      customer: {
        fullName: "Grace Blue",
      },
      totalAmount: 410.25,
      shippingAddress: "505 Birchwood St, Uptown",
      status: "completed",
      orderDate: "2025-01-28T12:00:00.000Z",
      orderId: "ORD130",
      items: [
        { quantity: 2 },
        { quantity: 2 },
      ],
    },
    {
      _id: "9",
      customer: {
        fullName: "Hank Yellow",
      },
      totalAmount: 85.0,
      shippingAddress: "606 Oakwood St, Suburbs",
      status: "pending",
      orderDate: "2025-01-27T14:00:00.000Z",
      orderId: "ORD131",
      items: [
        { quantity: 1 },
      ],
    },
  ];
  
const Orders = () => {
  const [orders] = useState<Order[]>(mockOrders);
  const [loading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("orderDate");

  const sortedOrders = [...orders].sort((a, b) => {
    const aValue = a[sortBy as keyof Order];
    const bValue = b[sortBy as keyof Order];
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });

  const filteredOrders = sortedOrders.filter(
    (order) =>
      (order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.fullName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "" || order.status === statusFilter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-blue-900 p-6 md:p-8 ml-0 md:ml-64 transition duration-300">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-white mb-2 pt-14">Order Management</h1>
        <p className="text-lg text-gray-300">Track, manage, and filter your orders efficiently.</p>
      </div>

      {/* Control Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 md:mb-8">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 md:pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base text-white"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative">
          <select
            className="w-full pl-10 md:pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none text-sm md:text-base text-white"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <select
            className="w-full px-4 py-3 md:py-4 bg-gray-700 border border-gray-600 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base text-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="orderDate">Sort by Date</option>
            <option value="totalAmount">Sort by Amount</option>
            <option value="orderId">Sort by Order ID</option>
            <option value="customer">Sort by Customer</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64 rounded-xl bg-white/50">
          <FaSpinner className="animate-spin text-teal-600 mb-3 w-8 h-8" />
          <p className="text-lg text-gray-600 font-medium">Loading Orders...</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 gap-6">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <div key={order._id} className="bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-200 p-4">
                  <h3 className="text-xl font-bold text-teal-500">{order.orderId}</h3>
                  <p className="text-sm text-gray-300">{order.customer.fullName}</p>
                  <p className="text-sm text-gray-400">{new Date(order.orderDate).toLocaleDateString('en-GB')}</p>
                  <div className="flex justify-between mt-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "pending"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {order.status.toUpperCase()}
                    </span>
                    <span className="font-semibold text-lg">${order.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400">No orders found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
