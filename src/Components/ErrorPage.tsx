import React, { useContext, useEffect } from 'react';
import { BiMessageSquareError } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../Styles/ErrorPage.css';

const ErrorPage = () => {

  return (
    <section className="error-page">
      <BiMessageSquareError size={100} />
        <h2>Invalid URL</h2>
        <Link className='error-btn' to='/'>Go Home!</Link>
    </section>
  )
}

export default ErrorPage;