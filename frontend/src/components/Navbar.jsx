import React, { useState } from 'react';
import { FaHome, FaAddressBook, FaEnvelope, FaPlus, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="flex items-center space-x-2">
            <FaHome />
            <span>ConnectEase</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="flex items-center space-x-2 hover:text-gray-300">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="/contacts" className="flex items-center space-x-2 hover:text-gray-300">
            <FaAddressBook />
            <span>Contacts</span>
          </a>
          <a href="/send" className="flex items-center space-x-2 hover:text-gray-300">
            <FaEnvelope />
            <span>Send</span>
          </a>
          <a href="/add-contact" className="flex items-center space-x-2 hover:text-gray-300">
            <FaPlus />
            <span>Add Contact</span>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-300 focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-700`}>
        <a href="/" className="block px-4 py-2 text-white hover:bg-gray-600">
          <FaHome className="inline mr-2" />
          Home
        </a>
        <a href="/contacts" className="block px-4 py-2 text-white hover:bg-gray-600">
          <FaAddressBook className="inline mr-2" />
          Contacts
        </a>
        <a href="/send" className="block px-4 py-2 text-white hover:bg-gray-600">
          <FaEnvelope className="inline mr-2" />
          Send
        </a>
        <a href="/add-contact" className="block px-4 py-2 text-white hover:bg-gray-600">
          <FaPlus className="inline mr-2" />
          Add Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
