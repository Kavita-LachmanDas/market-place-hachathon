import React from 'react'
import Hero from './component/Hero'
// import Header from './component/Header'
import Card from './Card'
import NextCard from './component/NextCard'

import Same from './component/Same'
import Card3 from './component/Card3'
// import Link from 'next/link'
import Follow from './component/Follow'
// import Footer from './component/Footer'
import ViewAllPostsLink from './component/Veiwallpost'
// import Home from './Home'
import Card4 from './component/Card4'
// import ShippingRatesPage from './component/Shipping'
// import Card2 from './component/Card2'


export default  function page() {
 
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <div className="flex flex-col sm:flex-row justify-center gap-6  bg-[#FAF4F4]">
      {/* <Card img='/img1.png' name='Side Table' veiw='View More'/>
      <Card img='/img5.png' name='Side Table' veiw='View More'/> */}
      <Card/>
      </div>
      <NextCard/>
      {/* <div className="flex flex-wrap sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center ">
      <Card2 para='Trenton Modular sofa-3' price='25,000.00' img='/img2.png' />
      <Card2 para='Granite Dining Table with ' para2='dining Chair' price='25,000.00' img='/img6.png' />
      <Card2 para='Outdoor bar Table and ' para2='stool'price='25,000.00' img='/img7.png' />
      <Card2 para='Plain console and teek' para2='mirror' price='25,000.00' img='/img8.png' />
    </div> */}

{/* <div className="flex flex-wrap sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center "> */}
  {/* <Card2/> */}
  <Card4/>
  {/* </div> */}

    <Same/>

    <NextCard/>
    
    <div className="flex flex-wrap justify-center gap-4 p-4  overflow-x-hidden">
<Card3/>
</div>
{/* <Link href={'#'} className="underline text-center font-bold mt-4 block">
  View All Posts
</Link> */}
<ViewAllPostsLink/>

<Follow/>
{/* <Footer/> */}



{/* <Card2 img={''} para={''} price={''}/> */}


{/* <ShippingRatesPage/> */}


    </div>
  )
}
