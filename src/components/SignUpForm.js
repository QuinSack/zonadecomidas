import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SignUpForm = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className="leftcol">
          <h1>Left Column</h1>
          <p>Would display some image here later</p>
        </Col>
        <Col md={6} className="rightcol">
          <div className="signupformcontainer">
            <form>
                <section className='signinregister'>
                    <p>Sign In</p>
                    <button>Register</button>
                </section>
                <section className='emailsection'>
                    <label><strong>Email Address</strong></label>
                    <input />
                </section>
                <section className='passwordsection'>
                    <label><strong>Password</strong></label>
                    <input />
                </section>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpForm