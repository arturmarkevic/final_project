import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-300 py-3 px-6">
      <nav className="flex justify-around">
        <ul className="flex space-x-4">
          <li className="capitalize border-b hover:border-black transition-all duration-500 cursor-pointer">
            <Link to="/">Main</Link>
          </li>
          <li className="capitalize border-b hover:border-black transition-all duration-500 cursor-pointer">
            <Link to="/duk">Prices</Link>
          </li>
          <li className="capitalize border-b hover:border-black transition-all duration-500 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="capitalize border-b hover:border-black transition-all duration-500 cursor-pointer">
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
