import React, { Component } from 'react';

class Subject extends Component {
  render() {
    var {subject} = this.props;
    return (
      <div className="Subject">
        <ul>
          <li>{subject.name}</li>
          <li>{subject.branch}</li>
          <li>{subject.reservation}</li>
          <li>
            <a
              title="select"
              onClick = { () => this.onAddToTableBtn(subject) }
            >
              Select
            </a>
          </li>
        </ul>
      </div>
    );
  }

  onAddToTableBtn = (subject) => {
    this.props.onAddToTablePar(subject);
  }

}

export default Subject;
