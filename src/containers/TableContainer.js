import React, { Component } from 'react';
import Table from './../components/Table';
import TableItem from './../components/TableItem';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { actDeleteTable, actUpdateTable, actMessage } from '../actions';

class TableContainer extends Component {
  render() {
    var {table} = this.props;
    return (
      <Table>
        {this.showTable(table)}
      </Table>
    );
  }

  showTable = (table) => {
    var { onDeleteTable, onUpdateTable, onChangeMessage } = this.props;
    var result = null;
    if(table.length > 0) {
      result = table.map((item, index) => {
        return(
          <TableItem
            key = {index}
            index = {index}
            item = {item}
            onDeleteTablePar = {onDeleteTable}
            onUpdateTablePar = {onUpdateTable}
            onChangeMessagePar = {onChangeMessage}
          />
        );
      })
    }
    return result;
  }
}

TableContainer.propTypes = {
  table: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        branch: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onDeleteTable: PropTypes.func.isRequired,
  onUpdateTable: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    table: state.table
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTable: (subject) => {
      dispatch(actDeleteTable(subject));
    },
    onUpdateTable: (subject, quantity) => {
      dispatch(actUpdateTable(subject, quantity));
    },
    onChangeMessage: (message) => {
      dispatch(actMessage(message));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
