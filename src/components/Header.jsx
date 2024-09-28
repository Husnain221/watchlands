import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle
  const [searchValue, setSearchValue] = useState("");
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

  const searchDropdownRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdowns
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-slate-100  fixed w-full z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Watch</span>
            <span className="text-slate-700">Lands</span>
          </h1>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-blue-900 focus:outline-none"
        >
          {menuOpen ? (
            <FaTimes className="w-8 h-8" />
          ) : (
            <FaBars className="w-8 h-8" />
          )}
        </button>

        {/* Desktop Search Bar */}
        <div className="relative hidden lg:flex items-center w-full max-w-xl">
          <div className="absolute left-0 flex items-center pl-3 h-full">
            <FiSearch size={22} className="text-gray-500" />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search properties..."
            className="w-full py-2 pl-12 pr-12 text-blue-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <button
            className="absolute right-0 top-0 h-full flex items-center px-4 rounded-full hover:bg-gray-200 transition-transform duration-300"
            onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
          >
            <FaChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                searchDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <Transition
            show={searchDropdownOpen}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95"
            className="absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg w-48 z-50"
            ref={searchDropdownRef}
          >
            <div className="py-2">
              {["Sale", "Hostels", "Mortgage", "Rent"].map((item) => (
                <button
                  key={item}
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </Transition>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-slate-700 hover:underline cursor-pointer">
                Sign In
              </li>
            )}
          </Link>
        </ul>

        {/* User Account Dropdown */}
        <div className="relative flex items-center">
          <div
            ref={dropdownRef}
            className="relative cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-300"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <FaUserCircle className="w-8 h-8" />
          </div>
          <Transition
            show={dropdownOpen}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95"
            className="absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded-xl shadow-xl z-50"
          >
            <div className="py-2">
              {["Profile", "Settings", "Logout"].map((option) => (
                <Link
                  key={option}
                  to={`/${option.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors duration-300"
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
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 transform -translate-y-4"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-4"
        className="lg:hidden"
      >
        <div className="px-4 py-4 bg-blue-600 text-white">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-lg font-medium hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-blue-300 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/profile"
              className="text-lg font-medium hover:text-blue-300 transition-colors duration-300"
            >
              Profile
            </Link>
          </div>

          {/* Mobile Search */}
          <div className="relative mt-4">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search properties..."
              className="w-full py-2 pl-10 pr-12 text-blue-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FiSearch size={22} />
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
