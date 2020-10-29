import React from "react";

class TwitterMessage extends React.Component {
 

    state = {
      message: ''
    };
    
    handleChange = event => {
      this.setState({
        message: event.target.value
      })
    }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.length}/>
      </div>
    );
  }
}

export default TwitterMessage;
