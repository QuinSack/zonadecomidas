import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import Navbar from './Navbar'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <Container>
          <Row>
            <h3 className='text-center'>About Us</h3>
          </Row>
          <Row>
            <h3 className='text-center'>Our Journey</h3>
          </Row>
        </Container>
        
        
        
      </div>
      <BackToHomeButton />  
    </>
  )
}

export default About