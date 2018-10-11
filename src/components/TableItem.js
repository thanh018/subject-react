import React, { Component } from 'react';

class TableItem extends Component {
  render() {
    var {item} = this.props;
    console.log(item);
    return (
      <div className="TableItem">
        <ul>
          <li>{item.subject.id}</li>
          <li>{item.subject.name}</li>
          <li>{item.subject.branch}</li>
          <li>{item.quantity}</li>
          <li><a>x</a></li>
        </ul>
      </div>
    );
  }
}

export default TableItem;
