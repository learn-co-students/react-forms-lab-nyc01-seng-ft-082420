import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      remaining: props.maxChars
    };
  }

  changeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.changeHandler}/>
        <p> ({this.state.remaining - this.state.value.length}/{this.state.remaining}) </p>
      </div>
    );
  }
}

export default TwitterMessage;
