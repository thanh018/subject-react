import React, { Component } from 'react';
import ListingContainer from './containers/ListingContainer';
import TableContainer from './containers/TableContainer';
import MessageContainer from './containers/MessageContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListingContainer></ListingContainer>
        <MessageContainer></MessageContainer>
        <TableContainer></TableContainer>
      </div>
    );
  }
}

export default App;
