import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import Getintouch from "../elements/Getintouch"
import MyForm from "../elements/MyForm"
import TheboardComp from "../elements/TheboardComp";
import CrewComp from "../elements/CrewComp";

class About extends Component {
    constructor() {
        super()

        this.state = { isLoading: true, about: null }
    }

    componentDidMount() {
        this.getManifest()
    }

    getManifest = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/about/entries?environment=development&locale=en-us', {
            method: 'get',
            mode: 'cors',
            headers: {
                api_key: 'bltb9eff0ec0532965e',
                access_token: 'csbcb89082a35b960cf9d10e11',
                Accept: "*/*"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({ about: json.entries[0], isLoading: false })
            })
    }


    render() {
        let category = 'About MACH Alliance'
        const { isLoading, about } = this.state

        if (isLoading) {
            return null
        }

        return (
            <React.Fragment>
                <PageHelmet pageTitle='About MACH Alliance' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="sub-hero rn-page-title-area pt--120 bg_image bg_image--7" data-black-overlay="7">
                    <div className="container-desktop position-relative">
                        <div className="row">
                            <div className="col-lg-6 pt--80">
                                <div className="inner">
                                    <h1 className="title">{about.title}</h1>
                                </div>
                            </div>
                        </div>
                        {/* Start Home CTA */}
                        {/* <div className="header-btn">
                            <a className="rn-btn home-btn" target="blank" href="https://airtable.com/shr4tKK2Kduhj84iM">
                                <span>Sign up</span>
                            </a>
                        </div> */}
                        {/* End Home CTA */}
                    </div>
                    <div className="white-space"><Breadcrumb title={'About'} /></div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start About */}
                <div className="rn-blog-details pb--70">
                    {/* Start AboutComp Area */}
                    <div className="manifesto-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">

                                <div className="col-lg-8 col-md-12">
                                    <div className="manifesto-inner inner">
                                        <div className="section-title">
                                            <h3 className="category">{category}</h3>
                                            {/* <h2 className="section-title mt--0"> {about.title}</h2> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-8 col-md-12">
                                    <div className="paragraph">
                                        <p className="body-text" dangerouslySetInnerHTML={{ __html: about.full_text }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* End AboutComp Area */}
                    
                    {/* Start TheboardComp Area */}
                    <div className="theboard-area theboardComp-position-top container-desktop">
                        <TheboardComp />
                    </div>
                    {/* End TheboardComp Area */}

                </div>
                {/* End About */}

                {/* Start CrewComp Area */}
                <div className="CrewComp-area CrewComp-position-top container-desktop">
                        <CrewComp />
                    </div>
                    {/* End CrewComp Area */}

                {/* Start MyForm Area */}
                <div className="container-desktop myForm-area myForm-position-top linend">
                    <MyForm />
                </div>
                {/* End MyForm Area */}

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
export default About;