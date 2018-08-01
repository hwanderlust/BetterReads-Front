import React from 'react'

class SignUp extends React.Component {

  state ={
    name: "",
    username: "",
    password: ""
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  render() {

    const { handleSignUp, usernames } = this.props

    const validateUsername = (e) => {
      if(usernames) {
        if(usernames.includes(e.target.value)) {
          e.target.style = 'outline: none; border: 1px solid red;'
        }
      }
    }

    const validatePassword = (e) => {
      if(e.target.value.length <= 6) {
        e.target.style = 'outline: none; border: 1px solid red;'
      }
    }

    return (
      <div className='form-page'>
        <main className='form-container'>
          <h1>Sign Up</h1>
          <form className='form' onSubmit={(e) => {
            e.preventDefault()
            if(this.state.password.length >= 6) {
              handleSignUp(this.state.username, this.state.password, this.state.name)
            }
          }}>
            <label className='form-labels'>Name</label>
            <input id="name" onChange={(e) => this.handleInputChange(e)} type='text' placeholder='Name' className='form-inputs' value={this.state.name} />

            <label className='form-labels'>Username</label>
            <input id="username" onChange={(e) => this.handleInputChange(e)} type='text' placeholder='Username' className='form-inputs' onBlur={(e) => validateUsername(e)}  value={this.state.username}/>

            <label className='form-labels'>Password</label>
            <input id="password" onChange={(e) => this.handleInputChange(e)} type='password' placeholder='EequalsMsee2' className='form-inputs' onBlur={(e) => validatePassword(e)} value={this.state.password}/>
            <input className='form-button' type="submit"/>
          </form>
        </main>
      </div>
    )
  }
}

export default SignUp
