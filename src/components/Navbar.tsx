import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
   <nav>
    <div className="nav-wrapper teal accent-2 px1">
      <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">ToDo List</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;