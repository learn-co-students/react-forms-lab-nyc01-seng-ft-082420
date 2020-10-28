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
    if (this.state.username.length > 1 && this.state.password.length > 1) {
      this.props.handleLogin(this.state.username, this.state.password)

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
            <input onChange={this.handleField} mid="password" name="password" type="password" value={this.state.password} />
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
