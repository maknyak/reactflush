import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    const {student} = this.props;
    return (
      <li>{student.name}</li>
    )
  }
}

export default ListItem;