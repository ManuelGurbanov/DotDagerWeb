import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 p-4 bg-gradient-to-tr from-purple-100 to-purple-200 ring ring-purple-300">
      <div className="flex justify-end items-center max-w-6xl mx-auto">
        <button onClick={toggleMenu} className="sm:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M5 7H25M5 15H25M5 23H25"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex space-x-6 text-white font-semibold`}
        >
          <a href="#home" className="hover:text-purple-300 transition text-purple-500">
            Home
          </a>
          <a href="#about" className="hover:text-purple-300 transition text-purple-500">
            About
          </a>
          <a href="#hobbies" className="hover:text-purple-300 transition text-purple-500">
            Hobbies
          </a>
          <a href="#contact" className="hover:text-purple-300 transition text-purple-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
