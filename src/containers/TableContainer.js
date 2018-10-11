import React, { Component } from 'react';
import Table from './../components/Table';
import TableItem from './../components/TableItem';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class TableContainer extends Component {
  render() {
    var {table} = this.props;
    console.log(table);

    return (
      <Table>
        {this.showTable(table)}
      </Table>
    );
  }

  showTable = (table) => {
    var result = null;
    if(table.length > 0) {
      result = table.map((item, index) => {
        return(
          <TableItem
            key = {index}
            index = {index}
            item = {item}
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
        reservation: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => {
  return {
    table: state.table
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   return {

//   }
// }
export default connect(mapStateToProps, null)(TableContainer);
