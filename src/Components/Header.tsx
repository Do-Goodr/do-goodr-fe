import React from 'react';
import SignIn from './SignIn'
import '../Styles/Header.css';
import CreateEventForm from './CreateEventForm';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="Header">
      <h1>Do Goodr</h1>
      <h2>Do more. Do good.</h2>
      <Link to='/newevent'><button >Add Volunteer Opp</button></Link>
      <nav>
        <ul>
          <li>home</li>
          <li>events</li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;