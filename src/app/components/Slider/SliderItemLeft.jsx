import React, { Component } from 'react';
import SliderProgress from './SliderProgress';
import {FirstWord} from "../../../utils/helper";

class SliderItemLeft extends Component {
  render() {
    const { item, progress, activeIndex, length } = this.props;

    return (
      <div className="row no-gutters">
        <div className="col-md-5 col-lg-4 my-auto">
          <div className="carousel-img carousel-bg d-none d-md-block">
            <img src={item.imagesrc} alt={item.imagesrc} className="img-fluid" />
          </div>

          <SliderProgress item={item} length={length} progress={progress} activeIndex={activeIndex} />
        </div>

        <div className="col-md-7 col-lg-7">
          <div className="carousel-content">
            <div className="card pl-sm-4">
              <div className="card-body">
                <h3 className="card-title" dangerouslySetInnerHTML={FirstWord(item.title)} />
                <div className="card-devider"></div>
                <p>{item.content}</p>
                <a href={item.url} className="text-reset">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItemLeft;