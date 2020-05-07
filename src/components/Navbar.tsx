import React from 'react';

const Navbar: React.FC = () => (
   <nav>
    <div className="nav-wrapper teal accent-2 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html">ToDo List</a></li>
        <li><a href="badges.html">About Us</a></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;