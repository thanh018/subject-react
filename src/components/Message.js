import React, { Component } from 'react';
class Message extends Component {
  render() {
    var {messagePar} = this.props;
    return (
      <div className="Message">
        {messagePar}
      </div>
    );
  }
}

export default Message;
