import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ''};
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    let charLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxlength={this.props.maxchars} onChange={event=> this.handleChange(event)} value={this.state.message}/>
        {charLeft}
      </div>
    );
  }
}

export default TwitterMessage;
