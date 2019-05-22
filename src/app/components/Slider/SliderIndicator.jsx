import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'reactstrap';

class SliderIndicator extends Component {
  state = {
    activeIndex: 0,
    progress: 0
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  goToIndex = (newIndex) => () => {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;

    if (this.state.progress > 0) {
      this.setState({
        activeIndex: nextIndex
      });
    }
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;

    if (this.state.progress < 100) {
      this.setState({
        activeIndex: nextIndex
      });
    }

  }

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;

    return (
      <div className="slider">
        <div className="row">
          <div className="col-md-5 col-lg-3 offset-lg-1">
            <ul className="carousel-list mt-5">
              {
                items.map((item, index) => {
                  return (<li className={(index === activeIndex) ? 'carousel-list-item active' : 'carousel-list-item'} key={index} onClick={this.goToIndex(index)}>{item.title}</li>)
                })
              }
            </ul>
          </div>

          <div className="col-md-7 col-lg-8">
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} keyboard={false}>
              {/*<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
              {
                items.map((item, index) => {
                  return (
                    <CarouselItem key={index} className="pt-5">
                      <div className="row">
                        <div className="col-md-12 col-lg-6">
                          <div className="carousel-img">
                            <img src={item.imagelogo} alt={item.title} className="carousel-img-child"/>
                            <img src={item.imagesrc} alt={item.title} className="img-fluid"/>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                          <div className="carousel-desc">
                            <h3 className="carousel-desc-title">{item.title}</h3>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  )
                })
              }
            </Carousel>
          </div>
        </div>

      </div>
    )
  }
}

SliderIndicator.defaultProps = {
  items: []
}

export default SliderIndicator;