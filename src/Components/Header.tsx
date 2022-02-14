import React, { useContext, useState, useEffect } from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom'
import { EventContext } from '../Context/EventContext';

const Header = () => {
  const { setEvents, setCategory, setOrg } = useContext(EventContext)

  const resetEventsAndCategory = () => {
    setEvents([])
    setCategory('Any')
    setOrg(null)
    console.log('hi')
  }

  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to='/' className='nav-link' onClick={() => resetEventsAndCategory()}>home</Link>
        <Link to='/signin' className='nav-link' data-cy='signin-nav-link'>signin</Link>
      </nav>
      <div className='title-slogan'>
        <h1 className='title'>Do Goodr</h1>
        <h2 className='slogan'>Do more. Do good.</h2>
      </div>
    </header>
  );
}

export default Header;