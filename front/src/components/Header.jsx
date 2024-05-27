import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="bg-blue-500 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white font-semibold text-xl">Logo</Link>
          <ul className="flex space-x-4">
            <li><Link to="/data" className="text-white hover:underline">Data</Link></li>
            <li><Link to="/analyse" className="text-white hover:underline">Analyse</Link></li>
            <li><Link to="/fact" className="text-white hover:underline">Fact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
