import React from 'react'

const SignUpForm = () => {
  return (
    <div className='signupformcontainer'>
        <div className='signupformwelcome'>
            <h3>Some fancy UI down below...</h3>
        </div>
        <form className='signupform'>
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
                <button type='submit' className='signupbtn'>Create Account</button>
            </section>
        </form>
    </div>
  )
}

export default SignUpForm