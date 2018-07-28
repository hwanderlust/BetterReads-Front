import React from 'react'
import Email from '../form/Email'
import Password from '../form/Password'

const SignUp = props => {
  console.log('signup working');
  return (
    <div className='form-page'>
      <main className='form-container'>
        <h1>Sign Up</h1>
        <form className='form'>
          <Email className='email' />
          <Password className='password' />
          <Password className='password' />
        </form>
      </main>
    </div>
  )
}

export default SignUp
