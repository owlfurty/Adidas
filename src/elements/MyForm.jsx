import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="signup" className="signup-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-12 col-md-12">
                <div className="signup-inner inner">
                  <div className="section-title">
                    <h3 className="category">SIGN UP NOW</h3>
                    <h2>Join the movement</h2>
                    <p>Nullam aliquet consequat metus sit amet pharetra. Nam lorem justo, volutpat ut gravida ac, bibendum at ipsum. Vivamus lobortis nisl vulputate erat auctor vel sagittis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="join-content">
            <div className="container">
              <div className="row join-links">
                <div className="col-12">
                  <ul>
                    <li>
                      <a href="http://eventbride.com/sample-event">
                        <span className="join-category">Vendors</span>
                        <span className="join-title">Nullam aliquet consequat metus sit amet pharetra. Nam lorem justo, volutpat ut gravida ac, bibendum at ipsum.</span>
                        <button className="button">Take the vendor test</button>
                      </a>
                    </li>

                    <li>
                      <a href="http://eventbride.com/sample-event">
                        <span className="join-category">Integrators</span>
                        <span className="join-title">Nullam aliquet consequat metus sit amet pharetra. Nam lorem justo, volutpat ut gravida ac, bibendum at ipsum.</span>
                        <button className="button">Take the integrator  test</button>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Footer;