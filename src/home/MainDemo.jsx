import React, { Component , Fragment } from "react";
import Header from "../component/header/Header";

import SliderOne from "../component/slider/SliderOne";
// import SliderVideo from "../component/slider/SliderVideo";

import About from "../component/HomeLayout/homeOne/About";
import ManifestoComp from "../elements/ManifestoComp";
import AcronymComp from "../elements/AcronymComp";
import Architecture from "../elements/Architecture";
import Theboard from "../elements/Theboard";
import Members from "../elements/Members";
import Insights from "../elements/Insights";
import Pressroom from "../elements/Pressroom";
import Mediacontacts from "../elements/Mediacontacts";
import Mediamentions from "../elements/Mediamentions";
import Events from "../elements/Events";
import MyForm from "../elements/MyForm"
import Getintouch from "../elements/Getintouch"

import Helmet from "../component/common/Helmet";

import Footer from "../component/footer/Footer";

class MainDemo extends Component{
    render(){
        return(
            <Fragment> 
                <Helmet pageTitle="MACH Alliance" />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}
                
                {/* Start About Area */}
                <div className="about-area about-position-top linend">
                    <About />
                </div>
                {/* End About Area */}

                {/* Start ManifestoComp Area */}
                <div className="manifesto-area manifesto-position-top linend">
                    <ManifestoComp />
                </div>
                {/* End ManifestoComp Area */}

                {/* Start Acronym Area */}
                <div className="acronym-area acronym-position-top linend">
                    <AcronymComp />
                </div>
                {/* End Acronym Area */}

                {/* Start Architecture Area */}
                <div className="architecture-area architecture-position-top linend">
                    <Architecture />
                </div>
                {/* End Architecture Area */}

                {/* Start Theboard Area */}
                <div className="theboard-area theboard-position-top container-desktop">
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

                {/* Start Pressroom Area */}
                <div className="pressroom-area pressroom-position-top linend">
                    <Pressroom />
                </div>
                {/* End Pressroom Area */}

                {/* Start Mediacontacts Area */}
                <div className="mediacontacts-area mediacontacts-position-top linend">
                    <Mediacontacts />
                </div>
                {/* End Mediacontacts Area */}

                {/* Start Mediamentions Area */}
                <div className="mediamentions-area mediamentions-position-top">
                    <Mediamentions />
                </div>
                {/* End Mediamentions Area */}

                {/* Start Events Area */}
                <div className="events-area events-position-top ">
                    <Events />
                </div>
                {/* End Mediamentions Area */}
                
                {/* Start MyForm Area */}
                <div className="myForm-area myForm-position-top linend">
                    <MyForm />
                </div>
                {/* End MyForm Area */}

                {/* Start Getintouch Area */}
                <div className="container-desktop getintouch-area getintouch-position-top">
                    <Getintouch />
                </div>
                {/* End Getintouch Area */}

                <Footer />
                
            </Fragment>
            
        )
    }
}
export default MainDemo;