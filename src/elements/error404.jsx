import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiChevronUp } from "react-icons/fi";
import Getintouch from "../elements/Getintouch"
class error404 extends Component {

    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='About MACH Alliance' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="sub-hero rn-page-title-area pt--120 bg_image" style={{ backgroundImage: `url(/assets/images/hero-images/404.jpg)` }} data-black-overlay="3">
                    <div className="container-desktop position-relative">
                        <div className="row">
                            <div className="col-lg-12 pt--180 text-right">
                                <div className="inner">
                                    <h1 className="title">404</h1>
                                    <h1 className="title">Something is wrong</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                
                {/* Start Getintouch Area */}
                <div className="container-desktop getintouch-area getintouch-position-top">
                    <Getintouch />
                </div>
                {/* End Getintouch Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />

            </React.Fragment>
        )
    }
}
export default error404;




