import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

  render() {
    let charactersLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.state.message}/>
        {charactersLeft}
      </div>

    );
  }
}

export default TwitterMessage;
