import Link from "next/link";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="input shadow-lg focus:border-2 border-gray-300 px-5 py-2 rounded-xl md:w-64 w-96 max-sm:w-56   transition-all  outline-none"
        name="search"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <Link href={`/search/${searchValue}`}>
          <svg
            className="size-4 absolute bg-r top-3 right-3 cursor-pointer text-gray-500"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SearchBar;
