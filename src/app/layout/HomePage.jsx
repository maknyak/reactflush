import React, {Component} from 'react';
import Slider from '../components/Slider/Slider';
import SliderIndicator from '../components/Slider/SliderIndicator';
import HeadingPage from '../components/HeadingPage/HeadingPage';
import {datado, datasolution, datastudy} from '../../dummy';
import {FirstWord} from "../../utils/helper";

class HomePage extends Component {
  render() {
    return (
      <main id="main">
        <section id="do">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-9 offset-lg-3">
                <HeadingPage title="What We Do" devider={true} center={true} />
                <Slider items={datado} isProgress={true} tpl="SliderItemLeft"/>
              </div>
            </div>
          </div>
        </section>

        <section id="solution">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-10 offset-lg-1">
                <HeadingPage title="Solution" devider={true} center={true} />
                <Slider items={datasolution} isPrevious={true} isNext={true} isProgress={true} tpl="SliderItemRight" />
              </div>
            </div>
          </div>
        </section>

        <section id="product">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <HeadingPage title="Our Products" devider={true} center={false} />

                <div className="row no-gutters">
                  <div className="col-md-6 col-lg-5 col-xl-4 zindex-1">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title" dangerouslySetInnerHTML={FirstWord('Nodeflux Grid')} />
                        <div className="card-img">
                          <img src={process.env.PUBLIC_URL +'/images/iva.png'} alt=""/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rem. Tempora ex, magnam,
                          natus maiores neque iure aliquam earum reprehenderit ea architecto doloribus corporis
                          repellat reiciendis dolore consectetur dolores saepe.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-5 col-xl-4">
                    <div className="card card-scale-sm">
                      <div className="card-body">
                        <h3 className="card-title" dangerouslySetInnerHTML={FirstWord('Nodeflux Cloud')} />
                        <div className="card-img">
                          <img src={process.env.PUBLIC_URL +'/images/fire.png'} alt=""/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rem. Tempora ex, magnam,
                          natus maiores neque iure aliquam earum reprehenderit ea architecto doloribus corporis
                          repellat reiciendis dolore consectetur dolores saepe.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="casestudy">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <HeadingPage title="Case Study" devider={true} center={true} />
                <SliderIndicator items={datastudy}/>
              </div>
            </div>
          </div>
        </section>

        <section id="client">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <HeadingPage title="Our Client" devider={true} center={true} />
                <div className="logo">
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL +'/images/polri-logo.png'} alt="image5"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL +'/images/gojek.png'} alt="image6"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL +'/images/jkt-smart-city.png'} alt="image7"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL +'/images/electronic-city-copy.png'} alt="image8"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL +'/images/tj.png'} alt="image9"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL + '/images/digital-service.png'} alt="image10"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL + '/images/qlue-logo-update-1.png'} alt="image11"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL + '/images/bin-2-x.png'} alt="image12"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL + '/images/pins.png'} alt="image13"/>
                  </a>
                  <a href="#!">
                    <img src={process.env.PUBLIC_URL + '/images/jasa-marga-logo-svg-copy.png'} alt="image14"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="patner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <HeadingPage title="Our Patner" devider={true} center={true} />

                <div className="row no-gutters mx-2n">
                  <div className="col-md-6 px-1">
                    <div className="banner banner-lg">
                      <img src={process.env.PUBLIC_URL +'/images/nvidia.png'} alt="image1" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row no-gutters mx-2n">
                      <div className="col-6 col-sm-6 px-1 pb-2">
                        <div className="banner banner-sm">
                          <img src={process.env.PUBLIC_URL + '/images/nvidia-logo-horizontal.png'} alt="image2" className="banner-img"/>
                        </div>
                      </div>
                      <div className="col-6 col-sm-6 px-1 pb-2">
                        <div className="banner banner-sm">
                          <img src={process.env.PUBLIC_URL + '/images/telkom-indonesia.png'} alt="image3" className="banner-img"/>
                        </div>
                      </div>
                      <div className="col-6 col-sm-6 px-1 pb-2">
                        <div className="banner banner-sm">
                          <img src={process.env.PUBLIC_URL +'/images/cropped-640-px-binus-university-logo.png'} alt="image4" className="banner-img"/>
                        </div>
                      </div>
                      <div className="col-6 col-sm-6 px-1 pb-2">
                        <div className="banner banner-sm">
                          <img src={process.env.PUBLIC_URL + '/images/bitmap-copy.png'} alt="image4" className="banner-img"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 offset-md-1">
                <HeadingPage title="Reach Us" border="true" center="false" desc="Tell us your problem by contacting us"/>

                <div className="contact-bg">
                  <img src={process.env.PUBLIC_URL + '/images/map.svg'} alt="map" className="img-fluid" />
                  <div className="contact-inner">
                    <button className="btn btn-info bg-info-linier rounded-pill px-4">Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default HomePage;