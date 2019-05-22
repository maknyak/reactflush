import React, { Component } from 'react';
import ListItem from './ListItem';

const students = [
  {name: 'Ian'},
  {name: 'Maulana'}
]

class List extends Component {
  render() {
    return (
      <ul>

        {students.map((student, index) => {
          return <ListItem student={student} key={index} />
        })}
      </ul>
    )
  }
}

export default List;