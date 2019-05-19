import React, { Component } from 'react';
class Blog extends Component {
  render() {
    return (
      <ul className="Blog">
        {this.props.children}
      </ul>
    );
  }
}

export default Blog;
