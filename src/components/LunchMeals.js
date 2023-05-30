import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import waakye from '../images/waakye.jpg'
import jollof from '../images/jollof.jpg'
import banku from '../images/banku.jpg'
import fufu from '../images/fufu.jpg'
import riceballs from '../images/riceballs.jpg'
import gobe from '../images/gobe.jpg'
import palava from '../images/palava.jpg'
import friedrice from '../images/friedrice.jpg'

const lunchMeals = [
    {
      id: 1,
      name: "Waakye",
      price: 55,
      image: waakye
    },
    {
      id: 2,
      name: "Jollof",
      price: 40,
      image: jollof
    },
    {
      id: 3,
      name: "Banku with Tilapia",
      price: 75,
      image: banku
    },
    {
      id: 4,
      name: "Fufu with Goat Meat",
      price: 80,
      image: fufu
    },
    {
      id: 5,
      name: "Omo Tuo",
      price: 60,
      image: riceballs
    },
    {
      id: 6,
      name: "Beans with fried plantain",
      price: 35,
      image: gobe
    },
    {
      id: 7,
      name: "Yam with palava sauce",
      price: 30,
      image: palava
    },
    {
      id: 8,
      name: "Fried rice with chicken",
      price: 60,
      image: friedrice
    }
  ]
  
  const lunchList = lunchMeals.map((lun) => {
    return (
        <div className='lunchcontainer'>
            <ul className='lunchbox'>
                <img src={lun.image} className='img'/>
                <div className='nameprice'>
                  <strong>{lun.name}</strong><br />
                  <strong>GHC {lun.price.toFixed(2)}</strong>
                </div>
                <div>
                  <button className='addcartbtn'>Add to Cart</button>
                </div>
            </ul>
        </div>
        
    )
  })

const LunchMeals = () => {
  return (
    <div>
      <div className='lunchmealsheader'>
        <h3><strong>ZONA DE COMIDAS LUNCH CUISINE</strong></h3>
      </div>
      <div>
        {lunchList}
        <BackToHomeButton />
      </div>
    </div>
  )
}

export default LunchMeals