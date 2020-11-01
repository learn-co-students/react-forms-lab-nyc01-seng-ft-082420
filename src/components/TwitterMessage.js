import React from "react";

class TwitterMessage extends React.Component {
  
    state = {
      message: ''
    };
  
    characterUpdate = (e) => {
      // console.log(e)
      this.setState({
        message: e.target.value
      })
    }
  render() {
    // console.log(this.state.message.length)
    let characterLeft  = this.props.maxChars - this.state.message.length  
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.characterUpdate} value={this.state.message}/>
        <h5>{characterLeft} character is left</h5>
      </div>
    );
  }
}

export default TwitterMessage;
