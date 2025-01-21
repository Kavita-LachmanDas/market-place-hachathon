
// 'use client'
// // import Header from '@/app/component/Header';
// import { client } from '@/sanity/lib/client';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// // import Footer from '@/app/component/Footer';

// export default function ProductDetail({ params }: { params: { id: string } }) {
//   const [cart, setCart] = useState<Product[]>([]);
// const [wishlist, setWishlist] = useState<Product[]>([]);
//   const [product, setProduct] = useState<any>(null);

//   // Fetch product details
//   useEffect(() => {
//     const fetchData = async () => {
//        const query = `*[_type == "card2"]{
//          _id,
//          name,
//          description,
//          price,
//          image{
//            asset->{
//              url
//            }
//          }
//        }`;
     
//        // Fetching data from Sanity
//        const data = await client.fetch(query);
//       const matchedProduct = data.find((item: any) => item._id === params.id);
//       setProduct(matchedProduct);
//     };

//     fetchData();
//   }, [params.id]); // Dependency ensures this runs only when params.id changes

//   // Initialize cart from localStorage
// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(savedCart);
//     const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//     setWishlist(savedWishlist);
//   }
// }, []); // Runs once when the component mounts

//   if (!product) return <p>Loading...</p>;

//   // Add item to cart
//   const addToCart = (product: { id: string; name: string; img: string; price: string; description: string }) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
//     console.log("Cart Updated: ", updatedCart);
//   };

// //  Add item to wishlist
//  const addToWishlist = (product: { id: string; name: string; img: string; price: string; description: string }) => {
//   const updatedWishlist = [...wishlist, product];
//   setWishlist(updatedWishlist);
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//   }
//   console.log("Wishlist Updated: ", updatedWishlist);
// };
//   return (
//    <div>
//   {/* <Header/> */}
    
// <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//     <Image 
//   alt="ecomm" 
//   className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded zoom-img" 
//   src={product.image.asset.url} 
//   width={300} 
//   height={300}
// />
//       {/* <Image alt="ecomm" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image.asset.url} width={300} height={300}/> */}
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
//         <div className="flex mb-4">
//           <span className="flex items-center">
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <span className="text-gray-600 ml-3">4 Reviews</span>
//           </span>
//           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//             <a className="text-gray-500">
//               <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//               </svg>
//             </a>
//           </span>
//         </div>
//         <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//           <div className="flex">
//             <span className="mr-3">Color</span>
//             <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
//           </div>
//           <div className="flex ml-6 items-center">
//             <span className="mr-3">Size</span>
//             <div className="relative">
//               <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                 <option>SM</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <span className="title-font font-medium text-2xl text-gray-900 p-2">Price : ${product.price}</span>
//           {/* <button onClick={() => alert(`${product.name} added to cart!`)}  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button> */}
//           <Link href={'/routes/cart'}> <button 
//           onClick={() => {
//             addToCart(product); // Add product to cart
//             alert(`${product.name} has been added to your cart!`); // Show alert
//           }}
//           className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
//         >
//           Add To Cart
//         </button></Link> 
//  <button 
// onClick={() => {
//   addToWishlist(product); // Add product to wishlist
//   alert(`${product.name} has been added to your wishlist!`); // Show alert
// }}
// className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
// >
// <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//   <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
// </svg>
// </button> 
//                 </div>
//                </div>
//             </div>
//            </div>
//          </section>
        
        
//         <hr />
//          <div className="p-9">
//            {/* Tab Section */}
//            <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-9 text-center">
//              <h1 className="underline font-bold text-[24px] md:text-[30px]">Description</h1>
//              <h1 className="text-[24px] md:text-[30px]">Additional information</h1>
//              <h1 className="text-[24px] md:text-[30px]">Reviews</h1>
//            </div>
        
//            {/* Text Content */}
//           <div className="text p-4 text-gray-500 text-sm md:text-base leading-relaxed">
//              <p>
//                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolorum ea blanditiis
//                deleniti labore perferendis minus doloribus ducimus eveniet. Tenetur ipsa officia labore ex
//                pariatur numquam odio deserunt, praesentium deleniti! Dignissimos iste illo, dolore aliquam
//                magnam ipsum nihil illum.
//                <br />
//                <br />
//                Labore eos cupiditate, ipsum vero voluptatibus officiis. Libero harum ducimus quod voluptate
//                alias beatae, voluptatum, provident, obcaecati iste cumque numquam reprehenderit? In,
//                delectus provident placeat, ei enim recusandae voluptatem dolorum et vero? Ullam dolore
//                repellendus animi obcaecati totam dolorem consectetur id sapiente modi quam? Eius ipsum
//                minima amet! Nihil distinctio hic sunt pariatur fugiat tenetur Lorem ipsum dolor sit amet
//                consectetur adipisicing elit. Minima maiores nobis quae esse. Error maxime ex dolorum itaque
//                reprehenderit dignissimos mollitia incidunt omnis. Labore dolore dolorem perferendis
//                officiis suscipit debitis!
//              </p>
//            </div>
        
//            {/* Image Section */}
//           <div className="flex flex-wrap justify-center gap-4 md:gap-9 mt-8">
//              <div className="w-[250px]  md:w-[400px] md:h-[400px]">
//               <Image
//                src={product.image.asset.url}
//                 width={400}
//                 height={400}
//                 alt="hello"
//                 className=" object-cover"
//               />
//             </div>
//             <div className="w-[250px]  md:w-[400px] md:h-[400px]">
//               <Image
//                 src={product.image.asset.url}
//                 width={400}
//                 height={400}
//                 alt="hello"
//                 className=" object-cover"
//               />
//              </div>
//           </div>
//          </div>
//         <br /><br /><br />
        
//         {/* <Footer/> */}
        
//        </div> 
//    );
//  }

//  interface Product {
//    id: string;
//    name: string;
//   img: string;
//    price: string;
//  description: string;
//  }
































'use client'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number; // Assuming price is a number
  image: {
    asset: {
      url: string;
    };
  };
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "card2"]{
        _id,
        name,
        description,
        price,
        image {
          asset -> {
            url
          }
        }
      }`;
      const data: Product[] = await client.fetch(query);
      const matchedProduct = data.find((item) => item._id === params.id);
      setProduct(matchedProduct || null);
    };

    fetchData();
  }, [params.id]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]') as Product[];
      setCart(savedCart);
      const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as Product[];
      setWishlist(savedWishlist);
    }
  }, []);

  if (!product) return <p>Loading...</p>;

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log('Cart Updated: ', updatedCart);
  };

  const addToWishlist = (product: Product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    console.log('Wishlist Updated: ', updatedWishlist);
  };

  return (
      <div>
  {/* <Header/> */}
    
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <Image 
  alt="ecomm" 
  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded zoom-img" 
  src={product.image.asset.url} 
  width={300} 
  height={300}
/>
      {/* <Image alt="ecomm" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image.asset.url} width={300} height={300}/> */}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900 p-2">Price : ${product.price}</span>
          {/* <button onClick={() => alert(`${product.name} added to cart!`)}  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button> */}
          <Link href={'/routes/cart'}> <button 
          onClick={() => {
            addToCart(product); // Add product to cart
            alert(`${product.name} has been added to your cart!`); // Show alert
          }}
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Add To Cart
        </button></Link> 
 <button 
onClick={() => {
  addToWishlist(product); // Add product to wishlist
  alert(`${product.name} has been added to your wishlist!`); // Show alert
}}
className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
>
<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
</svg>
</button> 
                </div>
               </div>
            </div>
           </div>
         </section>
        
        
        <hr />
         <div className="p-9">
           {/* Tab Section */}
           <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-9 text-center">
             <h1 className="underline font-bold text-[24px] md:text-[30px]">Description</h1>
             <h1 className="text-[24px] md:text-[30px]">Additional information</h1>
             <h1 className="text-[24px] md:text-[30px]">Reviews</h1>
           </div>
        
           {/* Text Content */}
          <div className="text p-4 text-gray-500 text-sm md:text-base leading-relaxed">
             <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolorum ea blanditiis
               deleniti labore perferendis minus doloribus ducimus eveniet. Tenetur ipsa officia labore ex
               pariatur numquam odio deserunt, praesentium deleniti! Dignissimos iste illo, dolore aliquam
               magnam ipsum nihil illum.
               <br />
               <br />
               Labore eos cupiditate, ipsum vero voluptatibus officiis. Libero harum ducimus quod voluptate
               alias beatae, voluptatum, provident, obcaecati iste cumque numquam reprehenderit? In,
               delectus provident placeat, ei enim recusandae voluptatem dolorum et vero? Ullam dolore
               repellendus animi obcaecati totam dolorem consectetur id sapiente modi quam? Eius ipsum
               minima amet! Nihil distinctio hic sunt pariatur fugiat tenetur Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Minima maiores nobis quae esse. Error maxime ex dolorum itaque
               reprehenderit dignissimos mollitia incidunt omnis. Labore dolore dolorem perferendis
               officiis suscipit debitis!
             </p>
           </div>
        
           {/* Image Section */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-9 mt-8">
             <div className="w-[250px]  md:w-[400px] md:h-[400px]">
              <Image
               src={product.image.asset.url}
                width={400}
                height={400}
                alt="hello"
                className=" object-cover"
              />
            </div>
            <div className="w-[250px]  md:w-[400px] md:h-[400px]">
              <Image
                src={product.image.asset.url}
                width={400}
                height={400}
                alt="hello"
                className=" object-cover"
              />
             </div>
          </div>
         </div>
        <br /><br /><br />
        
        {/* <Footer/> */}
        
       </div> 
  );
}



