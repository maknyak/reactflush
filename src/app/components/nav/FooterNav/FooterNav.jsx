import React, { Component } from 'react';

class FooterNav extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-2">
              <div className="nodeflux">nodeflux</div>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="row">
                <div className="col-6 col-sm-3">
                  <h1 className="footer-title">Company</h1>
                  <ul className="footer-list">
                    <li><a href="#!" className="text-reset">About</a></li>
                    <li><a href="#!" className="text-reset">Career</a></li>
                    <li><a href="#!" className="text-reset">Blog's</a></li>
                  </ul>
                </div>
                <div className="col-6 col-sm-3">
                  <h1 className="footer-title">Nodeflux Cloud</h1>
                  <ul className="footer-list">
                    <li><a href="#!" className="text-reset">Security & Defense</a></li>
                    <li><a href="#!" className="text-reset">Smart City</a></li>
                    <li><a href="#!" className="text-reset">Retail</a></li>
                  </ul>
                </div>
                <div className="col-6 col-sm-3">
                  <h1 className="footer-title">Product</h1>
                  <ul className="footer-list">
                    <li><a href="#!" className="text-reset">Nodeflux Grid</a></li>
                    <li><a href="#!" className="text-reset">Nodeflux Cloud</a></li>
                  </ul>
                </div>
                <div className="col-6 col-sm-3">
                  <h1 className="footer-title">Location</h1>
                  <address>
                    Jl. Kemang Timur No.24, RT.7/RW.4, Bangka, Mampang Prpt., Jakarta Selatan, 12730 <br/>
                    <abbr title="Phone">(021) 22718184</abbr> <br/><br/>
                    <a href="mailto:hello@nodeflux.io" className="text-reset">hello@nodeflux.io</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 my-auto">&copy; 2019 All right reserved - nodeflux.io</div>
              <div className="col-sm-5 my-auto text-right">
                <ul className="list-inline mb-1">
                  <li className="list-inline-item px-2">
                    <a href="#!">
                      <img src={process.env.PUBLIC_URL + '/images/instagram-logo.svg'} className="img-fluid height-20" alt="instagram"/>
                    </a>
                  </li>
                  <li className="list-inline-item px-2">
                    <a href="#!">
                      <img src={process.env.PUBLIC_URL + '/images/youtube.svg'} className="img-fluid height-20" alt="youtube"/>
                    </a>
                  </li>
                  <li className="list-inline-item px-2">
                    <a href="#!">
                      <img src={process.env.PUBLIC_URL + '/images/facebook.svg'} className="img-fluid height-20" alt="facebook"/>
                    </a>
                  </li>
                  <li className="list-inline-item px-2">
                    <a href="#!">
                      <img src={process.env.PUBLIC_URL + '/images/linkedin.svg'} className="img-fluid height-20" alt="linkedin"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterNav;