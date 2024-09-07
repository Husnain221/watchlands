import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const dropdownRef = useRef(null);
  const searchDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      searchDropdownRef.current &&
      !searchDropdownRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
      setSearchDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className='bg-gray-200 text-blue-900 shadow-lg'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Brand */}
        <Link
          to='/'
          className='text-3xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-300'
        >
          PRO<span className='text-blue-600'>perty</span>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden text-blue-900 focus:outline-none'
        >
          {menuOpen ? (
            <FaTimes className='w-8 h-8' />
          ) : (
            <FaBars className='w-8 h-8' />
          )}
        </button>

        {/* Desktop Nav Links */}
        {/* <div className="hidden lg:flex items-center space-x-6">
          {['Flats', 'Plots'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-blue-900 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div> */}

        <div className='relative hidden lg:flex items-center w-full max-w-xl'>
          <div className='absolute left-0 flex items-center pl-3 h-full'>
            <FiSearch size={22} className='text-gray-500' />
          </div>
          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search properties...'
            className='w-full py-2 pl-12 pr-12 text-blue-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
          />
          <button
            className='absolute right-0 top-0 h-full flex items-center px-4 rounded-full hover:bg-gray-200 transition-transform duration-300'
            onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
          >
            <FaChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                searchDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          <Transition
            show={searchDropdownOpen}
            enter='transition ease-out duration-300'
            enterFrom='opacity-0 transform scale-95'
            enterTo='opacity-100 transform scale-100'
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100 transform scale-100'
            leaveTo='opacity-0 transform scale-95'
            className='absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg w-48 z-50'
            ref={searchDropdownRef}
          >
            <div className='py-2'>
              {['Sale', 'Purchase', 'Mortgage', 'Rent'].map((item) => (
                <button
                  key={item}
                  className='block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors duration-300'
                >
                  {item}
                </button>
              ))}
            </div>
          </Transition>
        </div>

        {/* User Account Dropdown */}
        <div className='relative flex items-center'>
          <div
            ref={dropdownRef}
            className='relative cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-300'
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-haspopup='true'
            aria-expanded={dropdownOpen}
          >
            <FaUserCircle className='w-8 h-8' />
          </div>
          <Transition
            show={dropdownOpen}
            enter='transition ease-out duration-300'
            enterFrom='opacity-0 transform scale-95'
            enterTo='opacity-100 transform scale-100'
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100 transform scale-100'
            leaveTo='opacity-0 transform scale-95'
            className='absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded-xl shadow-xl z-50'
          >
            <div className='py-2'>
              {['Profile', 'Settings', 'Logout'].map((option) => (
                <Link
                  key={option}
                  to={`/${option.toLowerCase()}`}
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors duration-300'
                >
                  {option}
                </Link>
              ))}
            </div>
          </Transition>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={menuOpen}
        enter='transition ease-out duration-300'
        enterFrom='opacity-0 transform -translate-y-4'
        enterTo='opacity-100 transform translate-y-0'
        leave='transition ease-in duration-200'
        leaveFrom='opacity-100 transform translate-y-0'
        leaveTo='opacity-0 transform -translate-y-4'
        className='lg:hidden'
      >
        <div className='px-4 py-4 bg-blue-600 text-white'>
          <div className='flex flex-col space-y-2'>
            {['Flats', 'Plots'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className='text-lg font-medium hover:text-blue-300 transition-colors duration-300'
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Search */}
          <div className='relative mt-4'>
            <input
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search properties...'
              className='w-full py-2 pl-10 pr-12 text-blue-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
            />
            <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
              <FiSearch size={22} />
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FiSearch } from 'react-icons/fi';
// import { MdArrowDropDownCircle, MdAccountCircle } from 'react-icons/md';
// import 'react-toggle/style.css';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

//   const dropdownRef = useRef(null);
//   const searchDropdownRef = useRef(null);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleSearchDropdown = () => setSearchDropdownOpen(!searchDropdownOpen);

//   const handleClickOutside = (event) => {
//     if (
//       dropdownRef.current && !dropdownRef.current.contains(event.target) &&
//       searchDropdownRef.current && !searchDropdownRef.current.contains(event.target)
//     ) {
//       setDropdownOpen(false);
//       setSearchDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-white shadow-lg p-6">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Brand */}
//         <a href="#home" className="text-4xl font-extrabold text-indigo-600 tracking-wide">
//           PRO<span className="text-gray-600">perty</span>
//         </a>

//         {/* Search Bar Section */}
//         <div className="relative flex items-center max-w-xl ml-12 w-full">
//           <div className="relative flex items-center flex-grow">
//             <div className="absolute left-0 flex items-center pl-3 h-full">
//               <FiSearch size={22} className="text-gray-500" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search properties..."
//               className="w-full py-3 px-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all duration-300 ease-in-out"
//             />
//             <button
//               className="absolute right-0 top-0 h-full text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-100 transition-all duration-300 ease-in-out"
//               onClick={toggleSearchDropdown}
//             >
//               <MdArrowDropDownCircle size={24} />
//             </button>
//             {searchDropdownOpen && (
//               <div
//                 ref={searchDropdownRef}
//                 className="absolute right-0 top-14 bg-white border border-gray-300 rounded-xl shadow-xl w-48 z-50"
//               >
//                 <div className="py-2">
//                   <button className="block w-full px-4 py-2 text-gray-700 hover:bg-indigo-50">Sale</button>
//                   <button className="block w-full px-4 py-2 text-gray-700 hover:bg-indigo-50">Purchase</button>
//                   <button className="block w-full px-4 py-2 text-gray-700 hover:bg-indigo-50">Mortgage</button>
//                   <button className="block w-full px-4 py-2 text-gray-700 hover:bg-indigo-50">Rent</button>
//                 </div>
//               </div>
//             )}

//           </div>
//         </div>

//         {/* Navigation Headers and User Account Dropdown */}
//         <div className="relative flex items-center space-x-6">
//           <Link to="/flats" className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition-all duration-200">
//             Flats
//           </Link>
//           <Link to="/plots" className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition-all duration-200">
//             Plots
//           </Link>

//           {/* User Account Icon */}
//           {/* User Account Icon */}
//           <div
//             ref={dropdownRef}
//             className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-indigo-600 text-white relative z-50"
//             onClick={toggleDropdown}
//           >
//             <MdAccountCircle size={32} />
//           </div>
//           {dropdownOpen && (
//             <div className="absolute right-0 top-14 bg-white border border-gray-300 rounded-xl shadow-xl z-50">
//               <div className="flex flex-col p-4">
//                 <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">Profile</Link>
//                 <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">Settings</Link>
//                 <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">Logout</Link>
//               </div>
//             </div>
//           )}

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
