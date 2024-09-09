import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50 p-4 ">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4 text-gray-600">
          <li><a href="#help" className="hover:text-black">Help</a></li>
          <li><a href="#status" className="hover:text-black">Status</a></li>
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#careers" className="hover:text-black">Careers</a></li>
          <li><a href="#press" className="hover:text-black">Press</a></li>
          <li><a href="#blog" className="hover:text-black">Blog</a></li>
          <li><a href="#privacy" className="hover:text-black">Privacy</a></li>
          <li><a href="#terms" className="hover:text-black">Terms</a></li>
          <li><a href="#text-to-speech" className="hover:text-black">Text to speech</a></li>
          <li><a href="#teams" className="hover:text-black">Teams</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
