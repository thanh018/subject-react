import React, { Component } from 'react';
class Table extends Component {
  render() {
    return (
      <table border="1" className="Table">
        <tbody>{this.props.children}</tbody>

      </table>
    );
  }
}

export default Table;
