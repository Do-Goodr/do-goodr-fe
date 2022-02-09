import React, { useContext } from 'react';
import SignIn from './SignIn'
import '../Styles/Header.css';
import { Link } from 'react-router-dom'
import { EventContext } from '../Context/EventContext';

const Header = () => {
  const { setEvents } = useContext(EventContext)


  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to='/' className='nav-link' onClick={() => setEvents([])}>home</Link>
        <Link to='/signin' className='nav-link'>signin</Link>
      </nav>
      <div className='title-slogan'>
        <h1 className='title'>Do Goodr</h1>
        <h2 className='slogan'>Do more. Do good.</h2>
      </div>
      <Link to='/newevent' className='add-opp-btn'>Add Volunteer Opp</Link>
      
    </header>
  );
}

export default Header;