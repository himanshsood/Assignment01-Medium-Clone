import React from 'react';
import logo from '../assets/Logo.png';

function Navbar({ onSignInClick }) {
  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="text-2xl font-semibold">
          <img src={logo} alt="Logo" className='w-40 h-10' />
        </div>

        {/* Right*/}
        <div className="flex space-x-6 items-center">
          <a href="#our-story" className="text-gray-700 hover:text-black">Our story</a>
          <a href="#membership" className="text-gray-700 hover:text-black">Membership</a>
          <a href="#write" className="text-gray-700 hover:text-black">Write</a>

          {/* Sign in link */}
          <button onClick={onSignInClick} className="text-gray-700 hover:text-black">Sign in</button>

          {/* Get started*/}
          <a href="#get-started" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

