import React, { Component , Fragment } from "react";
import Header from "../component/header/Header";

import SliderOne from "../component/slider/SliderOne";

import About from "../component/HomeLayout/homeOne/About";
import Manifesto from "../elements/Manifesto";
import Acronym from "../elements/Acronym";
import Architecture from "../elements/Architecture";
import Theboard from "../elements/Theboard";
import Members from "../elements/Members";
import Insights from "../elements/Insights";

import Helmet from "../component/common/Helmet";

class MainDemo extends Component{
    render(){
        return(
            <Fragment> 
                <Helmet pageTitle="Main Demo" />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}
                

                {/* Start About Area */}
                <div className="about-area about-position-top pb--120 linend">
                    <About />
                </div>
                {/* End About Area */}

                {/* Start Manifesto Area */}
                <div className="manifesto-area manifesto-position-top linend">
                    <Manifesto />
                </div>
                {/* End Manifesto Area */}

                {/* Start Acronym Area */}
                <div className="acronym-area acronym-position-top linend">
                    <Acronym />
                </div>
                {/* End Acronym Area */}

                {/* Start Architecture Area */}
                <div className="architecture-area architecture-position-top linend">
                    <Architecture />
                </div>
                {/* End Architecture Area */}

                {/* Start Theboard Area */}
                <div className="theboard-area theboard-position-top">
                    <Theboard />
                </div>
                {/* End Theboard Area */}

                {/* Start Members Area */}
                <div className="members-area members-position-top linend">
                    <Members />
                </div>
                {/* End Members Area */}

                {/* Start Insights Area */}
                <div className="insights-area insights-position-top linend">
                    <Insights />
                </div>
                {/* End Insights Area */}


                
                
            </Fragment>
        )
    }
}
export default MainDemo;