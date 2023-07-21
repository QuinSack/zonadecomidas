
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const SignInForm = () => {
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
                <section className='staysignin'>
                  <label>
                    <input type='checkbox' />Stay signed in
                  </label>
                  <p>Forgot your password?</p>
                </section>
                <section className='logbtn'>
                  <button>Sign In</button>
                </section>
                <Link><h4 className='trbsign'>Trouble signing in?</h4></Link>
                <p className='ortext'>OR</p>
                <hr />
                <section className='linkaccountbtn'>
                  <button><FontAwesomeIcon icon={faGoogle} color='red'></FontAwesomeIcon><strong> Continue with Google</strong></button>
                  <button><FontAwesomeIcon icon={faFacebook} color='blue'></FontAwesomeIcon><strong> Continue with Facebook</strong></button>
                  <button><FontAwesomeIcon icon={faApple}></FontAwesomeIcon><strong> Continue with Apple</strong></button>
                </section>
                <p>
                  By clicking Sign In or Continue with Google, Facebook or Apple, you agree to Zona
                  de Comidas' <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>
                </p>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SignInForm