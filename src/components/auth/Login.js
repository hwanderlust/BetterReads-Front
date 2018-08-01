import React from 'react'

class Login extends React.Component{

  state = {
    username: "",
    password: ""
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render(){
    return (
      <div className='form-page'>
        <main className='form-container'>
          <h1>Login</h1>
          <form className='form' onSubmit={(e) => {
            e.preventDefault()
            this.props.handleLogin(this.state.username, this.state.password)
          }}>
            <label className='form-labels'>Username</label>
            <input id="username" onChange={(e) => this.handleInputChange(e)} type='text' placeholder='Username' className='form-inputs' value={this.state.username}/>

            <label className='form-labels'>Password</label>
            <input id="password" onChange={(e) => this.handleInputChange(e)} type='password' placeholder='EequalsMsee2' className='form-inputs' value={this.state.password}/>
            <input className='form-button' type="submit"/>
          </form>
        </main>
      </div>
    )
  }
}

export default Login
