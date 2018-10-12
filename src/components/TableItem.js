import React, { Component } from 'react';
import * as Types from './../constants/ActionsType';

class TableItem extends Component {
  render() {
    var {item} = this.props;
    return (
      <tr>
        <td>{item.subject.id}</td>
        <td>{item.subject.name}</td>
        <td>{item.subject.branch}</td>
        <td>{item.quantity}</td>
        <td>{this.showTotal(item.quantity, item.subject.price)}</td>
        <td><a onClick = { () => this.onUpdateBtn(item.subject, item.quantity - 1)}>-</a></td>
        <td><a onClick = { () => this.onUpdateBtn(item.subject, item.quantity + 1)}>+</a></td>
        <td><a onClick = { () => this.onDeleteBtn(item.subject)}>x</a></td>
      </tr>
    );
  }

  onDeleteBtn = (subject, message) => {
    this.props.onDeleteTablePar(subject);
    this.props.onChangeMessagePar(Types.REMOVE_SUBJECT);
  }

  onUpdateBtn = (subject, quantity) => {
    this.props.onUpdateTablePar(subject, quantity);
    this.props.onChangeMessagePar(Types.UPDATE_SUBJECT);
  }

  showTotal = (quantity, price) => {
    return quantity*price;
  }
}

export default TableItem;
