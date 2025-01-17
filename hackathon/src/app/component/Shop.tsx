import React from 'react'
import Header from './Header'


import Footer from './Footer'
import Pagination from './Pagination'
import Turn from './Turn'
import Home from '../Home'

export default function Shop() {
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
          <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
          <p className="text-gray-500 mt-2">
            <span className="text-gray-400">Home</span> &gt; Shop
          </p>
        </div>
      </div>
      </div>


      

     

{/* <div className="flex flex-wrap sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center ">
<Card2 para='Grain Coffee Table ' price='15,000.00' img='/img13.png' />
      <Card2 para='Kent Cffee Table  '  price='225,000.00' img='/img14.png' />
      <Card2 para='round coffee table color' para2='2'price='251,000.00' img='/img20.png' />
      <Card2 para='Reclaimed  teak coffee' para2='Table' price='25,200.00' img='/img18.png' />
    </div>

<div className="flex flex-wrap sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center ">
<Card2 para='Plain-console' price='258,200.00' img='/img17.png' />
      <Card2 para='Asgaard Sofa '  price='20,000.00' img='/img19.png' />
      <Card2 para='SJP_0825 'price='200,000.00' img='/img21.png' />
      <Card2 para='Bella chair and table'  price='100,000.00' img='/img12.png' />
    </div>

<div className="flex flex-wrap sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center ">
<Card2 para='Granite square side table' price='258,200.00' img='/img1.png' />
      <Card2 para='Granite Dining Table with ' para2='dining Chair' price='250,000.00' img='/img3.png' />
      <Card2 para='Maya sofa three seater ' price='115,000.00' img='/img16.png' />
      <Card2 para='outdoor safe seat'  price='244,000.00' img='/img15.png' />
    </div> */}

    <Home/>
{/* 
<div className="flex flex-wrap sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center ">
      <Card2 para='Trenton Modular sofa-3' price='25,000.00' img='/img2.png' para2={''} />
      <Card2 para='Granite Dining Table with ' para2='dining Chair' price='25,000.00' img='/img6.png' />
      <Card2 para='Outdoor bar Table and ' para2='stool'price='25,000.00' img='/img7.png' />
      <Card2 para='Plain console and teek' para2='mirror' price='25,000.00' img='/img8.png' />
    </div>



    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
  <Card2 para="Grain Coffee Table" price="15,000.00" img="/img13.png" para2={''} />
  <Card2 para="Kent Coffee Table" price="225,000.00" img="/img14.png" para2={''} />
  <Card2 para="Round Coffee Table Color" para2="2" price="251,000.00" img="/img20.png" />
  <Card2 para="Reclaimed Teak Coffee" para2="Table" price="25,200.00" img="/img18.png" />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-6">
  <Card2 para="Plain Console" price="258,200.00" img="/img17.png" para2={''} />
  <Card2 para="Asgaard Sofa" price="20,000.00" img="/img19.png" para2={''} />
  <Card2 para="SJP_0825" price="200,000.00" img="/img21.png" para2={''} />
  <Card2 para="Bella Chair and Table" price="100,000.00" img="/img12.png" para2={''} />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-6">
  <Card2 para="Granite Square Side Table" price="258,200.00" img="/img1.png" para2={''} />
  <Card2 para="Granite Dining Table with" para2="Dining Chair" price="250,000.00" img="/img3.png" />
  <Card2 para="Maya Sofa Three Seater" price="115,000.00" img="/img16.png" para2={''} />
  <Card2 para="Outdoor Safe Seat" price="244,000.00" img="/img15.png" para2={''} />
</div> */}






<Turn/>
<Pagination/>
<Footer/>
    </div>
  )
}
