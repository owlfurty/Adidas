import React, { Component } from "react";

class SliderOne extends Component {
  render() {
    return (
        <div className="slider-activation">
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-top bg_image bg_image--1" data-black-overlay="2">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h1 className="title">Enterprise <br/> MACHified.</h1>
                            </div>
                        </div>
                    </div>
                    {/* Start Home CTA */}
                    <div className="header-btn">
                                <a className="rn-btn home-btn" href="/">
                                    <span>join the movement</span>
                                </a>
                            </div>
                            {/* End Home CTA */}
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderOne;