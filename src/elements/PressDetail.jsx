import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { IoMdCalendar } from "react-icons/io";
import Pressroom from "../elements/Pressroom";

class PressDetail extends Component {

    constructor(props) {
        super(props)
        this.uid = props.match.params.uid
        this.pressRelease = props.location.pressRelease

        this.state = { isLoading : true, entry: null}
    }
    getNews(uid){
        fetch(`https://cdn.contentstack.io/v3/content_types/pressrelease/entries/${uid}?environment=development&locale=en-us`, {
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
            this.setState({entry:json.entry, isLoading:false})
        })
    }

    componentDidMount(){
        this.getNews(this.uid)
    }

    componentWillReceiveProps(){
        if(this.props.location.pathname !== this.props.history.location.pathname ){
            this.getNews(this.props.history.location.pressRelease.uid)
            window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
        }
    }

    render(){
        const { isLoading, entry } = this.state;

        if ( isLoading ) {
            return null;
        }
        let img_link = entry.hero_image == null ? 'https://source.unsplash.com/user/dulceylima/930x930' : entry.hero_image.url
        return (

            <React.Fragment>
                <PageHelmet pageTitle='Blog Details' />
                <Header headertransparent="header--black" colorblack="color--white" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <div className="sub-hero rn-page-title-area pt--120 bg_image" style={{ backgroundImage: `url(${img_link})` }} data-black-overlay="3">
                    <div className="container-desktop position-relative">
                        <div className="row">
                            <div className="col-lg-8 pt--80">
                                <div className="inner">
                                    <h1 className="title">{entry.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-space">
                        <ul className="page-list">
                            <li className="breadcrumb-item">
                                <i to={`${process.env.PUBLIC_URL}`}><IoMdCalendar /> </i> {entry.date}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="rn-blog-details pb--70 bg_color--1 blog-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div class="section-title">
                                    <h2>{entry.summary}</h2>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: entry.body} } />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Start InsightsComp Area */}
                <div className="insights-area insights-position-top linend">
                    <Pressroom />
                </div>
                {/* End Insights Area */}
                            

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

export default PressDetail;