import React from 'react'
import Email from '../form/Email'
import Password from '../form/Password'

const Login = props => {
  console.log('login works');
  return (
    <div className='form-page'>
      <main className='form-container'>
        <h1>Login</h1>
        <form className='form'>
          <Email className='email' />
          <Password className='password' />
        </form>
      </main>
    </div>
  )
}

export default Login
