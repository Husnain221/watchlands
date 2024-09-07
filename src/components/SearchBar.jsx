import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const SearchBar = () => {
  return (
    <div className="mt-16 mb-16 text-center">
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full py-4 px-6 text-lg border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-md transition-all duration-300 ease-in-out"
        />
        <button className="absolute right-0 top-0 h-full bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 shadow-md transition-all duration-300 ease-in-out">
          <FiSearch size={24} />
        </button>
      </div>
      <div className="mt-6 flex justify-center items-center space-x-4">
        <span className="text-lg text-gray-700 font-medium">Rental</span>
        <Toggle
          icons={false}
          className="toggle-custom"
          defaultChecked={false}
        />
        <span className="text-lg text-gray-700 font-medium">Sell/Purchase</span>
      </div>
    </div>
  );
};

export default SearchBar;
