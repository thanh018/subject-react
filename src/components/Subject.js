import React, { Component } from 'react';
import * as Types from './../constants/ActionsType';

class Subject extends Component {
  render() {
    var {subject} = this.props;
    return (
      <li className="Subject">
        <div className="subject-content">
          <div className="image">
            <img src={subject.image} alt=""/>
          </div>
          <div className="info">
            <h1>{subject.name}</h1>
            <p>{subject.description}</p>
            <p className="price">{subject.price}</p>
            <span className="branch">{subject.branch}</span>
            <a
              title="add"
              className="add"
              onClick = { () => this.onAddToTableBtn(subject) }
            >
              Add
            </a>
          </div>
        </div>
      </li>
    );
  }

  onAddToTableBtn = (subject) => {
    this.props.onAddToTablePar(subject);
    this.props.onChangeMessagePar(Types.ADD_SUBJECT);
  }

}

export default Subject;
