import React, { Component } from 'react';
import Listing from './../components/Listing';
import Subject from './../components/Subject';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddToTable, actMessage } from '../actions';

class ListingContainer extends Component {
  render() {
    var { listing } = this.props;
    return (
      <Listing>
        { this.showListing(listing) }
      </Listing>
    );
  }

  showListing(listing) {
    var { onAddToTable, onChangeMessage } = this.props;
    var result = null;
    if(listing.length > 0) {
      result = listing.map((item, index) => {
        return <Subject
          key={index}
          subject = {item}
          onAddToTablePar = {onAddToTable}
          onChangeMessagePar = {onChangeMessage}
        />
      });
    }
    return result;
  }
}

ListingContainer.propTypes = {
  listing: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      branch: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  onAddToTable: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    listing: state.listing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToTable: (subject) => {
      dispatch(actAddToTable(subject, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingContainer);
