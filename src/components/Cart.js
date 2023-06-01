import React from 'react'
import BackToHomeButton from './BackToHomeButton'

const Cart = (props) => {
  const {cartItems, onAdd, onRemove} = props
  


  return (
    <div>
        <div>
          {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
        <div>
          {cartItems.map((item) => {
            return <div key={item.id}>
              <div>{item.name}</div>
              <div>
                <button onClick={() => onAdd(item)}>+</button>
                <button onClick={() => onRemove(item)}>-</button>
              </div>
              <div>
                {item.qty} x {item.price.toFixed(2)}
              </div>
            </div>
          })}
        </div>
        <BackToHomeButton />
    </div>
  )
}

export default Cart