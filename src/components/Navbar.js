import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to='/' className='home-page'>Home</Link>
        <ul>
            <li>
              <Link to='/shop'>Shop</Link>
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
        </ul>
    </nav>
  )
}

export default Navbar