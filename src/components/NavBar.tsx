
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-background/80 backdrop-blur-md z-10">
      <Link to="/">
        <Logo />
      </Link>
      
      <Link
        to="/inlog"
        className="px-6 py-2 bg-investbot-purple text-white rounded-md hover:bg-investbot-darkPurple transition-colors"
      >
        Inloggen
      </Link>
    </nav>
  );
};

export default NavBar;
