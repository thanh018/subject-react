import React, { Component } from 'react';
import ListingContainer from './containers/ListingContainer';
import TableContainer from './containers/TableContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <main id="mainContainer">
          <ListingContainer></ListingContainer>
          <TableContainer></TableContainer>
          </main>
      </div>
    );
  }
}

export default App;
