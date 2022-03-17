import React, { Component } from 'react'
import { login } from "../configuration/Auth";

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {

    const { email, password } = this.state

    return (
      <div className='body'>

        <div className='login-field'>

          <h1 className='login-logo'>Vivint</h1>

          <div className='login-input'>

            <div className="ui input">
              <input type="text" placeholder="email" onChange={e => this.setState({ email: e.target.value })}/>
            </div>

            <div className="ui input">
              <input type='password' placeholder="password" onChange={e => this.setState({ password: e.target.value })}/>
            </div>

            <div className="login-button" >
              <button className="ui primary basic orange circular button" onClick={e => login(email, password)}>Login</button>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default Login

