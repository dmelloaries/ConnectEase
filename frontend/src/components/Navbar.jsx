// src/components/Navbar.jsx
import React from 'react';
import { FaHome, FaAddressBook, FaEnvelope, FaPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Contact Manager</span>
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
          <button className="text-gray-300 focus:outline-none">
            <FaPlus />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
