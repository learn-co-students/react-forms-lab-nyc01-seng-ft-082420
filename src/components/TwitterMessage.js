import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweet: "",
      remaining: props.maxChars
    };
  }


  handleChars = event => {
    let count = event.target.value.length
    let remaining = this.props.maxChars - count
    this.setState({
      tweet: event.target.value,
      remaining: remaining
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChars} type="text" name="message" id="message" value={this.state.tweet} />
        <h1>Remaining: {this.state.remaining}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
