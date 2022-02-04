import React from 'react';
import SignIn from './SignIn'
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1>Do Goodr</h1>
      <h2>Do more. Do good.</h2>
      <nav>
        <ul>
          <li>home</li>
          <li>events</li>
        </ul>
      </nav>
      <SignIn />
    </header>
  );
}

export default Header;