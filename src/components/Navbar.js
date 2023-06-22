import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <nav className='nav' sticky = 'top'>
        <Link to='/' className='home-page'>Zona de Comidas</Link>
        <div className='searchsection'>
          <input type='text' className='searchbar' placeholder='Search for your favorite meals, categories and more' />
          <button className='searchbutton'><FontAwesomeIcon icon={faSearch} color='white'></FontAwesomeIcon></button>
        </div>
        <ul>
            <li>
              <Link to='/shop'>Browse Meals</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li>
              <Link to='/aboutus'>About Us</Link>
            </li>
            <li>
              <Link to='/contactus'>Contact Us</Link>
            </li>
            <li>
              <Link to='/careers'>Careers</Link>
            </li>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar