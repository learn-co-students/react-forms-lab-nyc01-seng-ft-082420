import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
    <span>Remaining Characters: {this.props.maxChars - this.state.message.length}</span>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
