import React from 'react'

const SignInForm = () => {
  return (
    <div className='signinformcontainer'>
        <div className='signinformwelcome'>
            <h3>Some fancy UI down below...</h3>
        </div>
        <form className='signinform'>
            <div className='forminput'>
                <section className='emailsection'>
                    <div className='emaillabel'>
                        <label htmlFor='email'>Email: </label>
                    </div>
                    <div className='emailinput'>
                        <input type='email' placeholder='Enter your email' id='email' name='email' />
                    </div>
                </section>
                <section className='passwordsection'> 
                    <label htmlFor='password' className='passwordlabel'>Password: </label>
                    <input type='password' placeholder='Enter your password' id='password' name='password' className='passwordinput' />
                </section>
            </div>   
            <section>
                <button type='submit' className='signinbtn'>Log In</button>
            </section>
        </form>
    </div>
  )
}

export default SignInForm