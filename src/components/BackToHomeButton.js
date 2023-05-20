import React from 'react'
import { Link } from 'react-router-dom'

const BackToHomeButton = () => {
  return (
    <div>
        <Link to='/'><button className='backtohome'>Back To Home</button></Link>
    </div>
  )
}

export default BackToHomeButton