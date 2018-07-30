import React from 'react'
import Email from '../form/Email'
import Password from '../form/Password'

const SignUp = props => {
  console.log(props);

  const handleSignUp = (e) => {
    e.preventDefault()
    // console.log("inside handleSignUp");
    const username = e.target.querySelector('#username').value
    const password = e.target.querySelector('#password').value
    const name = e.target.querySelector('#name').value
    props.createUser({username, password, name})
  }

  return (
    <div className='form-page'>
      <main className='form-container'>
        <h1>Sign Up</h1>
        <form className='form' onSubmit={(e) => handleSignUp(e)}>
          <label className='form-labels'>Name</label>
          <input id="name" type='text' placeholder='Name' className='form-inputs'/>

          <label className='form-labels'>Username</label>
          <input id="username" type='text' placeholder='Username' className='form-inputs'/>

          <label className='form-labels'>Password</label>
          <input id="password" type='password' placeholder='EequalsMsee2' className='form-inputs' />
          <input type="submit"/>
        </form>
      </main>
    </div>
  )
}

export default SignUp
