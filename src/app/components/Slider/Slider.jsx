import React, { Component } from 'react';
import {Carousel, CarouselIndicators, CarouselControl, CarouselItem} from 'reactstrap';
import SliderItemLeft from './SliderItemLeft';
import SliderItemRight from './SliderItemRight';

class Slider extends Component {
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

  goToIndex = (newIndex) => {
    if (this.animating) return;
    const currentProgress = newIndex * (100/(this.props.items.length - 1));
    this.setState({
      activeIndex: newIndex,
      progress: currentProgress
    });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    const currentProgress = this.state.progress - (100 / (this.props.items.length -1));

    if (this.state.progress > 0) {
      this.setState({
        activeIndex: nextIndex,
        progress: currentProgress
      });
    }
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    const currentProgress = this.state.progress + (100 / (this.props.items.length -1));

    if (this.state.progress < 100) {
      this.setState({
        activeIndex: nextIndex,
        progress: currentProgress
      });
    }

  }

  render() {
    const { activeIndex, progress } = this.state;
    const { items, indicator, isPrevious, isNext, navigation, interval, tpl } = this.props;

    return (
      <div className="slider">
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} interval={interval} keyboard={false}>
          { indicator ? <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> : null}
          {
            items.map((item, index) => {
              return (
                <CarouselItem key={index} item={item} className="px-5">
                  { tpl === 'SliderItemLeft' ? <SliderItemLeft item={item} length={items.length} progress={progress} activeIndex={activeIndex} /> : null }
                  { tpl === 'SliderItemRight' ? <SliderItemRight item={item} length={items.length} progress={progress} activeIndex={activeIndex} /> : null }
                </CarouselItem>
              )
            })
          }

          { navigation && (progress > 0 || isPrevious) ? <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} /> : null }
          { navigation && (progress < 100 || isNext)  ? <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> : null }
        </Carousel>
      </div>
    )
  }
}

Slider.defaultProps = {
  items: [],
  indicator: false,
  isNext: false,
  isPrevious: false,
  isProgress: false,
  navigation: true,
  interval: false,
  tpl: 'SliderItemRight'
}

export default Slider;