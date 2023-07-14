import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import lunchMealsArray from './LunchMealsArray'
import { Container,Row, Col } from 'reactstrap'


const LunchMeals = (props) => {
  const {onAdd} = props

  const lunchList = lunchMealsArray.map((lun) => {
    return (
        <div className='lunchcontainer'>
            <ul className='lunchbox'>
                <img src={lun.image} className='img'/>
                <div className='nameprice'>
                  <strong>{lun.name}</strong><br />
                  <strong>GHC {lun.price.toFixed(2)}</strong>
                </div>
                <div>
                  <button className='addcartbtn' onClick={() => onAdd(lun)}>Add to Cart</button>
                </div>
            </ul>
        </div>
        
    )
  })

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