import React, { Component } from 'react';

class HeadingPage extends Component {
  render() {
    const opt = this.props;
    return (
      <div className={ opt.center ? 'heading text-center' : 'heading text-left' } >
        <h2 className="heading-title" data-title={opt.title}>{opt.title}</h2>
        { (opt.desc) ? <p className="heading-desc">{opt.desc}</p> : ''}
        { (opt.devider) ? <div className="heading-devider"></div> : ''}
      </div>
    )
  }
}

export default HeadingPage;