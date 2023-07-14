import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import  Navbar  from './Navbar'
import hausakoko from '../images/hausakoko.jpg'
import oats from '../images/oats.jpg'
import tombrown from '../images/tombrown.jpg'
import teabreadegg from '../images/teabreadegg.jpg'
import whitekoko from '../images/whitekoko.jpg'
import caffeine from '../images/caffeine.jpg'

const BreakfastMeals = () => {
  //const {id, name, price, image} = props.breakfast

  const breakfastMealsArray = [
    {
      id: 9,
      name: "Hausa Koko",
      price: 20,
      image: hausakoko
    },
    {
      id: 10,
      name: "Oats",
      price: 20,
      image: oats
    },
    {
      id: 11,
      name: "Tom Brown",
      price: 25,
      image: tombrown
    },
    {
      id: 12,
      name: "Tea with bread and egg",
      price: 35,
      image: teabreadegg
    },
    {
      id: 13,
      name: "White Porridge",
      price: 30,
      image: whitekoko
    },
    {
      id: 14,
      name: "Coffee",
      price: 25,
      image: caffeine
    }
  ]


  return (
    <div>
        <Navbar />
        <h3>Breakfast Meals</h3>
        <BackToHomeButton />
    </div>
  )
}

export default BreakfastMeals