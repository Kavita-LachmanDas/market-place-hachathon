import Footer from '@/app/component/Footer'
import Header from '@/app/component/Header'
import MyAccount from '@/app/component/MyAccount'
import Pagination from '@/app/component/Pagination'
import React from 'react'

export default function page() {
  return (
    <div>
        <Header/>
        <div className=" mt-[80px]">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-56 flex items-center justify-center"
        style={{
          backgroundImage: "url('/img4.png')",
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">My Account</h1>
          <p className="text-gray-500 mt-2">
            <span className="text-gray-400">Home</span> &gt; My Account
          </p>
        </div>
      </div>
      </div>
        <MyAccount/>

        <Pagination/>
<Footer/>
    </div>
  )
}
