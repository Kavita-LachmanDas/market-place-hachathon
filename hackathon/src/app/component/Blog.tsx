// import Footer from "./Footer";
// import Header from "./Header";
// import Pagination from "./Pagination";
// import Turn from "./Turn";

import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import Pagination from "./Pagination";
import Turn from "./Turn";

// // pages/blog.js
// export default function Blog() {
//     const posts = [
//       {
//         id: 1,
//         title: "Going all-in with millennial design",
//         date: "14 Oct 2022",
//         category: "Wood",
//         image: "/img23.PNG",
//         excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
//       },
//       {
//         id: 2,
//         title: "Exploring new ways of decorating",
//         date: "14 Oct 2022",
//         category: "Handmade",
//         image: "/blog2.jpg",
//         excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
//       },
//       {
//         id: 3,
//         title: "Handmade pieces that took time to make",
//         date: "14 Oct 2022",
//         category: "Wood",
//         image: "/blog3.jpg",
//         excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
//       },
//     ];
  
//     const categories = [
//       { name: "Crafts", count: 9 },
//       { name: "Design", count: 8 },
//       { name: "Handmade", count: 1 },
//       { name: "Interior", count: 7 },
//       { name: "Wood", count: 9 },
//     ];
  
//     const recentPosts = [
//       "Going all-in with millennial design",
//       "Exploring new ways of decorating",
//       "Handmade pieces that took time to make",
//       "Modern homes in 2022",
//       "Colorful inspiration for your interior",
//     ];
  
//     return (
//         <div>
// <Header/>
      
// <div className=" mt-[80px]">
//       {/* Hero Section */}
//       <div
//         className="bg-cover bg-center h-56 flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/img4.png')",
//         }}
//       >
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
//           <p className="text-gray-500 mt-2">
//             <span className="text-gray-400">Home</span> &gt; Blog
//           </p>
//         </div>
//       </div>
//       </div>















//       <div className="min-h-screen bg-gray-50 p-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2">
//           {/* Blog Posts */}
//           <div className="lg:col-span-3 space-y-8 w-[500px]">
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 text-gray-500 text-sm">
//                     <span>👤 Admin</span>
//                     <span>{post.date}</span>
//                     <span>📂 {post.category}</span>
//                   </div>
//                   <h3 className="text-xl font-bold my-2">{post.title}</h3>
//                   <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat libero quidem consectetur molestias reiciendis esse facilis, maxime, aperiam, architecto sequi iste eos perferendis ad molestiae ratione suscipit harum earum?</p>
//                   <a
//                     href="#"
//                     className="text-blue-500 hover:underline font-medium"
//                   >
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
  
//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Categories */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-lg font-bold mb-4">Categories</h3>
//               <ul className="space-y-2">
//                 {categories.map((category) => (
//                   <li
//                     key={category.name}
//                     className="flex justify-between text-gray-600"
//                   >
//                     <span>{category.name}</span>
//                     <span>{category.count}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
  
//             {/* Recent Posts */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
//               <ul className="space-y-4">
//                 {recentPosts.map((post, index) => (
//                   <li key={index} className="text-gray-600">
//                     <a
//                       href="#"
//                       className="flex items-center gap-4 hover:underline"
//                     >
//                       <div className="w-12 h-12 bg-gray-200 rounded"></div>
//                       <span>{post}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>


// <Turn/>
// <Pagination/>
// <Footer/>
//       </div>
//     );
//   }
import Image from "next/image";
export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      category: "Wood",
      image: "/img23.PNG",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      date: "14 Oct 2022",
      category: "Handmade",
      image: "/img24.PNG",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      category: "Wood",
      image: "/img25.PNG",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    },
  ];

  const categories = [
    { name: "Crafts", count: 9 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 1 },
    { name: "Interior", count: 7 },
    { name: "Wood", count: 9 },
  ];

  const recentPosts = [
    "Going all-in with millennial design",
    "Exploring new ways of decorating",
    "Handmade pieces that took time to make",
    "Modern homes in 2022",
    "Colorful inspiration for your interior",
  ];

  return (
    <div className="overflow-x-hidden">
      <Header />

      <div className="mt-[80px]">
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-56 flex items-center justify-center"
          style={{
            backgroundImage: "url('/img4.png')",
          }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
            <p className="text-gray-500 mt-2">
              <span className="text-gray-400">Home</span> &gt; Blog
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-9 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Blog Posts */}
          <div className="lg:col-span-3 space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>👤 Admin</span>
                    <span>{post.date}</span>
                    <span>📂 {post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold my-2">{post.title}</h3>
                  <p className="text-gray-600 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus quaerat libero quidem consectetur molestias
                    reiciendis esse facilis, maxime, aperiam, architecto sequi
                    iste eos perferendis ad molestiae ratione suscipit harum
                    earum?
                  </p>
                  <Link
                    href="#"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Categories</h3>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex justify-between text-gray-600"
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
              <ul className="space-y-2">
                {recentPosts.map((post, index) => (
                  <li key={index} className="text-gray-600">
                    <Link
                      href="#"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <div className="w-20 h-10 bg-gray-200 rounded">
                        <Image src={"/img29.png"} width={300} height={300} alt="hi" />
                      </div>
                      <span>{post}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Turn />
      <Pagination />
      <Footer />
    </div>
  );
}
