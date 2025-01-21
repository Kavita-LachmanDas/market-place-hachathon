

// 'use client'
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { BiUser, BiSearch, BiHeart, BiCart } from 'react-icons/bi';
// import { client } from '@/sanity/lib/client';
// import { FaTruck } from 'react-icons/fa';

// interface HeaderData {
//   navigationLinks: { title: string; url: string }[];
//   icons: { type: string; url: string }[];
//   backgroundColor: string;
// }

// const Header = () => {
//   const [headerData, setHeaderData] = useState<HeaderData | null>(null);

//   useEffect(() => {
//     const fetchHeaderData = async () => {
//       const query = `*[_type == "header"] {
//         navigationLinks[] { title, url },
//         icons[] { type, url },
//         backgroundColor
//       }[0]`; // Fetch the first document of type 'header'

//       const data = await client.fetch(query);
//       setHeaderData(data);
//     };

//     fetchHeaderData();
//   }, []);

//   if (!headerData) return <div>Loading...</div>;

//   return (
//     <header
//       className="flex items-center justify-between p-4 bg-[#FBEBB5]" 
      
//     >
//       {/* Left Section: Empty for spacing */}
//       <div className="flex-1"></div>

//       {/* Center Section: Navigation Links */}
//       <nav className="flex space-x-8">
//         {headerData.navigationLinks.map((link) => (
//           <Link href={link.url} key={link.title} className="text-gray-800 hover:underline">
//             {link.title}
//           </Link>
//         ))}
//       </nav>

//       {/* Right Section: Icons */}
//       <div className="flex space-x-4 flex-1 justify-end">
//       {headerData.icons.map((icon, index) => {
//           let IconComponent;

//           switch (icon.type) {
//             case 'BiUser':
//               IconComponent = BiUser;
//               break;
//             case 'BiSearch':
//               IconComponent = BiSearch;
//               break;
//             case 'BiHeart':
//               IconComponent = BiHeart;
//               break;
//             case 'BiCart':
//               IconComponent = BiCart;
//               break;
//             case 'FaTruck': // Add FaTruck case here
//               IconComponent = FaTruck;
//               break;
//             default:
//               return null;
//           }
              

//           return (
//             <a href={icon.url} key={index} className="text-gray-800 hover:text-gray-600">
//               <IconComponent size={24} />
//             </a>
//           );
//         })}
//       </div>
//     </header>
//   );
// };

// export default Header;













'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BiUser, BiSearch, BiHeart, BiCart } from 'react-icons/bi';
import { FaTruck } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and Close icons

interface HeaderData {
  navigationLinks: { title: string; url: string }[];
  icons: { type: string; url: string }[];
  backgroundColor: string;
}

const Header = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  useEffect(() => {
    const fetchHeaderData = async () => {
      const query = `*[_type == "header"] {
        navigationLinks[] { title, url },
        icons[] { type, url },
        backgroundColor
      }[0]`;

      const data = await client.fetch(query);
      setHeaderData(data);
    };

    fetchHeaderData();
  }, []);

  if (!headerData) return <div>Loading...</div>;

  return (
    <header className="flex items-center justify-between p-4 bg-[#FBEBB5] relative">
      {/* Left Section: Hamburger Menu */}
      <div className="flex items-center">
        <button
          className="lg:hidden text-gray-800 hover:text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Center Section: Navigation Links */}
      <nav
        className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-8 ${
          menuOpen ? 'absolute top-full left-0 w-full bg-[#FBEBB5] p-4 z-50' : 'hidden lg:flex'
        }`}
      >
        {headerData.navigationLinks.map((link) => (
          <Link
            href={link.url}
            key={link.title}
            className="block text-gray-800 hover:underline py-2 lg:py-0"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {link.title}
          </Link>
        ))}
      </nav>

      {/* Right Section: Icons */}
      <div className="flex space-x-4">
        {headerData.icons.map((icon, index) => {
          let IconComponent;

          switch (icon.type) {
            case 'BiUser':
              IconComponent = BiUser;
              break;
            case 'BiSearch':
              IconComponent = BiSearch;
              break;
            case 'BiHeart':
              IconComponent = BiHeart;
              break;
            case 'BiCart':
              IconComponent = BiCart;
              break;
            case 'FaTruck':
              IconComponent = FaTruck;
              break;
            default:
              return null;
          }

          return (
            <a href={icon.url} key={index} className="text-gray-800 hover:text-gray-600">
              <IconComponent size={24} />
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
