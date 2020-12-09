import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import Getintouch from "../elements/Getintouch"
import MachathonForm from "../elements/MachathonForm"

import ReactGA from 'react-ga';

ReactGA.initialize('UA-175292539-1', {
    debug: false,
    titleCase: false
})

class Machathon extends Component{
    constructor(){
        super()
        
        this.state = { isLoading : true, machathon: null}
    }
    
    componentDidMount(){
        ReactGA.pageview(window.location.pathname + window.location.search)
        this.getManifest()
    }

    getManifest = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/machathon/entries?environment=development&locale=en-us', {
            method:'get',
            mode:'cors',
            headers:{
                api_key:'bltb9eff0ec0532965e',
                access_token:'csbcb89082a35b960cf9d10e11',
                Accept: "*/*"
            }
        })
        .then((response)=> {
            return response.json()
        })
        .then((json) => {
            this.setState({machathon:json.entries[0], isLoading:false})
        })
    }


    render(){
        let category = 'Machathon'
        const { isLoading, machathon} = this.state

        if( isLoading ){
            return null
        }

        return(
            <React.Fragment>
                <PageHelmet pageTitle='Machathon' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="sub-hero blck rn-page-title-area pt--120 bg_image" style={{ backgroundImage: `url(/assets/images/hero-images/rocket.jpg)` }} data-black-overlay="3">
                    <div className="container-desktop position-relative">
                        <div className="row">
                            <div className="col-lg-12 pt--80">
                                <div className="inner">
                                    <h1 className="title">Ready for<br/> the launch?</h1>
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
                    <div className="white-space"><Breadcrumb title={'MACHathon'} /></div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Machathon */}
                <div className="rn-blog-details pb--70 bg_color--1">
                    {/* Start MachathonComp Area */}
                     {/* <MachathonComp /> */}
                     <div className="machathon-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-8 col-md-12">
                                <div className="machathon-inner inner">
                                    <div className="section-title mt-40">
                                        <h3 className="category">{category}</h3>
                                        <h2 className="title hack"> {machathon.quote_title}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="paragraph">
                                    <span className="body-summary" dangerouslySetInnerHTML={{ __html: machathon.summary} } />
                                    <div className="divide">
                                        <div className="leftpart lansmant">
                                            <h2>22-29 <span>January 2021</span></h2>
                                            <p>from home or wherever you are</p>
                                        </div>
                                        <div className="rightpart">
                                            <img width="391" src="/assets/images/brand/machathon.svg" alt=""/>
                                        </div>
                                    </div>
                                    <span className="hack body-text" dangerouslySetInnerHTML={{ __html: machathon.full_text} } />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* End MachathonComp Area */}
                    
                </div>
                {/* End Machathon */}
                
                {/* Start MyForm Area */}
                <div className="container-desktop myForm-area myForm-position-top linend">
                    <MachathonForm />
                </div>
                {/* End MyForm Area */}

                <div class="about-area pt--120 bg_color--1" id="about">
                        <div class="about-wrapper">
                            <div class="container">
                                <div class="row row--35 align-items-center">
                                    <div class="col-lg-5">
                                        <div class="thumbnail">
                                            <img alt="theboard" src={machathon.profile_image.url}/>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="about-inner inner">
                                            <div class="section-title profile-info">
                                                <p class="description">
                                                    <span className="hack body-text" dangerouslySetInnerHTML={{ __html: machathon.profile_info} } />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
export default Machathon;