import React, { Component } from 'react';
class Listing extends Component {
  render() {
    return (
      <div className="Listing">
        {this.props.children}
      </div>
    );
  }
}

export default Listing;
