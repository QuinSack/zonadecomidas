import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
        <h3>Available Meals</h3>
        <div className='mealcategories'>
          <Link to='/shop/breakfastmeals'><button className='ml'>Breakfast</button></Link>
          <Link to='/shop/lunchmeals'><button className='ml'>Lunch</button></Link>
          <Link to='/shop/sidemeals'><button className='ml'>Side Meals</button></Link>
          <Link to='/shop/desserts'><button className='ml'>Desserts</button></Link>
          <Link to='/shop/smoothies'><button className='ml'>Smoothies</button></Link>
        </div>
        <h3>Discounted meals</h3>
        <BackToHomeButton />
    </div>
  )
}

export default Shop