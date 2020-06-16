import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class BlogDetail extends Component {

    constructor(props) {
        super(props)
        console.log(props.match.params.uid)
        console.log(props.match.params)
        this.uid = props.match.params.uid
        this.blogpost = props.location.blogpost

        console.log('blogpost: ', this.blogpost)
        this.state = { loading : true, blog: null}
    }

    getBlog(uid) {
        fetch(`https://cdn.contentstack.io/v3/content_types/blog_post/entries/${uid}?&environment=development&locale=en-us`, {
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
            console.log("json: ", json)
            this.setState({loading:false, blog:json.entry})
        })
    }

    componentDidMount(){
        this.getBlog(this.uid)

    }

    render(){
        const { loading, blog} = this.state;

        if ( loading ) {
            return null;
        }

        let tagsList = blog.tags?.join(",")
        return (

            <React.Fragment>
                <PageHelmet pageTitle='Blog Details' />
                <Header headertransparent="header--black" colorblack="color--white" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <div className="sub-hero rn-page-title-area pt--120 bg_image" style={{ backgroundImage: "url('{blog.title}')" }} data-black-overlay="7">
                    <div className="container-desktop position-relative">
                        <div className="row">
                            <div className="col-lg-12 pt--80">
                                <div className="inner">
                                    <h1 className="title">Enterprise <br/> MACHified.</h1>
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
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="blog-title">{blog.title}</h2>
                                <p className="blog-text">Tags: {tagsList}</p>
                                <p className="blog-text">{blog.summary}</p>
                                <div dangerouslySetInnerHTML={{ __html: blog.body} } />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}
                            

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

export default BlogDetail;