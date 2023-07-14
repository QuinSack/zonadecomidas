import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import Navbar from './Navbar'
import { Container,Row, Col } from 'reactstrap'

const Careers = () => {
  return (
    <>
      <Navbar />
      <Container className='careercont'>
        <Row className='meetteam'>
          <h3 className='text-center'>Meet our team</h3>
          <Col className='teamcard'>
            <div>
              <section className='teamimage'>
                <h3>Member Image</h3>
              </section>
              <section className='teamname'>
                <h3>Member Name</h3>
              </section>
              <section className='teamdescription'>
                <p>lorem ipsum nonsense</p>
              </section>
              <section>
                <h3>Job Role</h3>
              </section>
            </div>
          </Col>
          <Col className='teamcard'>
            <div>
              <section className='teamimage'>
                <h3>Member Image</h3>
              </section>
              <section className='teamname'>
                <h3>Member Name</h3>
              </section>
              <section className='teamdescription'>
                <p>lorem ipsum nonsense</p>
              </section>
              <section>
                <h3>Job Role</h3>
              </section>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <section className='storypage'>
                <h3>Inspiring Stories</h3>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <h3>Meet our team!</h3>
        <h3>Inspiring Stories</h3>
        <h3>Available Positions</h3>
        <BackToHomeButton />
      </div>
    </> 
  )
}

export default Careers