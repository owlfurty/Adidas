import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import Getintouch from "../elements/Getintouch"
import MyForm from "../elements/MyForm"
import Pressroom from "../elements/Pressroom"

class Newsroom extends Component{
    constructor(){
        super()

        this.state = { isLoading : true, pressrelease: null}
    }

    componentDidMount(){
        this.getInsights()
    }

    getInsights = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/pressrelease/entries?environment=development&locale=en-us', {
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
            this.setState({pressrelease:json.entries[0], isLoading:false})
        })
    }


    render(){
        const { isLoading} = this.state

        if( isLoading ){
            return null
        }

        return(
            <React.Fragment>
                <PageHelmet pageTitle='Newsroom' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="sub-hero rn-page-title-area pt--120 bg_image" style={{ backgroundImage: `url(https://source.unsplash.com/user/vanschneider/1400x920)` }} data-black-overlay="1">
                    <div className="container-desktop position-relative">
                        <div className="row">
                            <div className="col-lg-12 pt--80">
                                <div className="inner">
                                    <h1 className="title">Newsroom</h1>
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
                    <div className="white-space"><Breadcrumb title={'Newsroom'} /></div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start pressrelease */}
                <div className="rn-blog-details pb--20 bg_color--1">
                    {/* Start pressreleaseComp Area */}
                     {/* <pressreleaseComp /> */}
                     <div className="pressrelease-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-8 col-md-12">
                                <div className="pressrelease-inner inner">
                                    <div className="section-title">
                                        <h2 className="section-title mt--0">Extra Extra read all about it.</h2>
                                        <p className="boy-text">The massive, monolithic enterprise software platforms that dominate today keep delivering slightly ‘faster horses’ to their customers. And because ‘nobody ever got fired for buying from the top right of an evaluation’, enterprises timidly accept it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                   
                </div>
                    {/* End pressreleaseComp Area */}
                    
                </div>
                {/* End pressrelease */}
                
                {/* Start Getintouch Area */}
                 <div className="container-desktop getintouch-area getintouch-position-top">
                    <Pressroom />
                </div>
                {/* End Getintouch Area */}

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
export default Newsroom;