import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  handleField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state)

    }
    
  }

  render() {
    return (
      <form onSubmit={e => {this.login(e)}}>
        <div>
          <label>
            Username
            <input onChange={this.handleField} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleField} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
