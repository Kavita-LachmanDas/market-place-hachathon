import React from 'react'
// import Header from './Header'


// import Footer from './Footer'
import Pagination from './Pagination'
import Turn from './Turn'
import Home from '../Home'
// import Search from './Search'

export default function Shop() {
  return (
    <div>
        {/* <Header/> */}
       
        
        {/* <div className=" mt-[80px]"> */}
        <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-56 flex items-center justify-center"
        style={{
          backgroundImage: "url('/img4.png')",
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
          <p className="text-gray-500 mt-2">
            <span className="text-gray-400">Home</span> &gt; Shop
          </p>
        </div>
      </div>
      </div>


    <Home/>


<Turn/>
<Pagination/>
{/* <Footer/> */}
    </div>
  )
}
