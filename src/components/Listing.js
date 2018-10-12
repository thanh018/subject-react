import React, { Component } from 'react';
class Listing extends Component {
  render() {
    return (
      <ul className="Listing">
        {this.props.children}
      </ul>
    );
  }
}

export default Listing;
