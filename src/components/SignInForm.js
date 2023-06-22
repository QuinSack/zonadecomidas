import React from 'react'

const SignInForm = () => {
  return (
    <div className='signinformcontainer'>
        <div className='signinformwelcome'>
            <h3>Create a Zona de Comidas Profile</h3>
            <h3>Some fancy UI down below...</h3>
        </div>
        <form className='signinform'>
            <section>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' placeholder='Enter your first name' id='firstName' name='firstName' />
            </section>
            <section>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' placeholder='Enter your last name' id='lastName' name='lastName' />
            </section>
        </form>
    </div>
  )
}

export default SignInForm