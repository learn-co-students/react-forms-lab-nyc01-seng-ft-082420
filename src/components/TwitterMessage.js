import React from "react";

class TwitterMessage extends React.Component {

    state = {
      message: "",
      remainingChars: this.props.maxChars
    }

  changeHandler = e => {
    this.setState({message: e.target.value, remainingChars: this.props.maxChars - e.target.value.length})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler}/>
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
