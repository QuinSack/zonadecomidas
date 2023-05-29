import React from 'react'
import BackToHomeButton from './BackToHomeButton'

const availableMeals = [
  {
    id:1,
    name:"Waakye",

  }
]

const Shop = () => {
  return (
    <div>
        <h3>Available Meals</h3>
        <div className='mealcategories'>
          <button className='ml'>Breakfast</button>
          <button className='ml'>Lunch</button>
          <button className='ml'>Side Meals</button>
          <button className='ml'>Desserts</button>
          <button className='ml'>Smoothies</button>
        </div>
        <h3>Discounted meals</h3>
        <BackToHomeButton />
    </div>
  )
}

export default Shop