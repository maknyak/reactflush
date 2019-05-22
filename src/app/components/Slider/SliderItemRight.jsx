import React, { Component } from 'react';
import SliderProgress from './SliderProgress';
import { FirstWord } from "../../../utils/helper";

class SliderItemRight extends Component {
  render() {
    const { item, progress, activeIndex, length } = this.props;

    return (
      <div className="row no-gutters">
        <div className="col-md-7 col-lg-7  my-auto">
          <img src={item.imagesrc} alt={item.imagesrc} className="img-fluid"/>
        </div>

        <div className="col-md-5 col-lg-5 my-auto">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" dangerouslySetInnerHTML={FirstWord(item.title)} />
              <div className="card-devider"></div>
              <p>{item.content}</p>
              <a href={item.url} className="text-reset">Learn more</a>
            </div>
          </div>

          <SliderProgress item={item} length={length} progress={progress} activeIndex={activeIndex} />
        </div>
      </div>
    );
  }
}

export default SliderItemRight;