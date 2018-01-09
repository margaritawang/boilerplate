import React, {Component} from 'react';

class Message extends Component {
  render() {
    if (this.props.type === 'chat') {
      return (
        <div className="message">
          <span className="message-username">{this.props.user}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      );
    }

    if (this.props.type === 'system') {
      return (
        <div className="message system">
          {this.props.content}
        </div>
      );
    }
  }
}

export default Message;