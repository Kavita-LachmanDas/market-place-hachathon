// export default function SearchBar() {
//     return (
    //   <div  style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", padding:"20px"}}>
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         padding: "10px",
    //         border: "1px solid #ccc",
    //         borderRadius: "50px",
    //         width: "800px",
    //         backgroundColor: "#f9f9f9",
    //         justifyContent: "center"
    //       }}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         style={{
    //           width: "20px",
    //           height: "20px",
    //           color: "#999",
    //           marginRight: "10px",
    //         }}
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M21 21l-4.35-4.35m1.425-5.925A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.5 7.5z"
    //         />
    //       </svg>
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         style={{
    //           border: "none",
    //           outline: "none",
    //           width: "100%",
    //           fontSize: "16px",
    //           backgroundColor: "transparent",
    //         }}
    //       />
    //     </div>
    //   </div>
//     );
//   }
  

'use client'

import { useState } from "react";

interface SearchProps {
    onSearch: (query: string) => void;
  }
  
  const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      onSearch(value); // Pass query to parent
    };
  
    return (
     
      <div  style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", padding:"20px"}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "50px",
          width: "800px",
          backgroundColor: "#f9f9f9",
          justifyContent: "center"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{
            width: "20px",
            height: "20px",
            color: "#999",
            marginRight: "10px",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.425-5.925A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.5 7.5z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search... through categories"
          value={query}
          onChange={handleInputChange}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "16px",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
    );
  };
  
  export default Search;
  