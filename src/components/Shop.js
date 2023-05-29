import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import { Link } from 'react-router-dom'

const lunchMeals = [
  {
    id: 1,
    name: "Waakye",
    price: 55
  },
  {
    id: 2,
    name: "Jollof",
    price: 40
  },
  {
    id: 3,
    name: "Banku with Tilapia",
    price: 75
  },
  {
    id: 4,
    name: "Fufu with Goat Meat",
    price: 80
  },
  {
    id: 5,
    name: "Omo Tuo",
    price: 60
  },
  {
    id: 6,
    name: "Beans with fried plantain",
    price: 35
  },
  {
    id: 7,
    name: "Yam with palava sauce",
    price: 30
  },
  {
    id: 8,
    name: "Fried rice with chicken",
    price: 60
  }
]

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