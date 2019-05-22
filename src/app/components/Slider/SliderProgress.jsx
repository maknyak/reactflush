import React, { Component } from 'react';
import {Progress} from "reactstrap";

class SliderProgress extends Component {
  render() {
    const { progress, activeIndex, length } = this.props;
    return(
      <div className="row mt-3">
        <div className="col-sm-7 my-auto">
          <Progress value={progress} color="light" style={{height: 3}}/>
        </div>
        <div className="col-sm-3 my-auto">
          <div className="d-flex">{`${activeIndex + 1} / ${length}`}</div>
        </div>
      </div>
    )
  }
}

export default SliderProgress;