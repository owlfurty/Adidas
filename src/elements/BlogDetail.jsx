import React, { Component } from "react";
// import PageHelmet from "../component/common/Helmet";
import Head from 'next/head'
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { IoMdCalendar } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import InsightsComp from "../elements/InsightsComp";

class BlogDetail extends Component {

    constructor(props) {
        super(props)
        this.uid = props.match.params.uid
        this.blogpost = props.location.blogpost

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
            this.setState({loading:false, blog:json.entry})
        })
    }

    componentDidMount(){
        this.getBlog(this.uid)
    }

    componentWillReceiveProps(){
        if(this.props.location.pathname !== this.props.history.location.pathname ){
            this.getBlog(this.props.history.location.blogpost.uid)
            window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
        }
    }

    render(){
        const { loading, blog } = this.state;

        if ( loading ) {
            return null;
        }
        console.log(blog)
        return (

            <React.Fragment>

                <Head>
                    <title>{blog.og_title || blog.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <meta name="description" content={blog.og_description}></meta>
                    <meta property="og:title" content={blog.og_title || blog.title}  key="ogtitle" />
                    <meta property="og:description" content={blog.og_description} key="ogdesc" />
                </Head>

                {/* <PageHelmet pageTitle='Blog Details' ogTitle={blog.og_title || blog.title} ogDescription={blog.og_description} ogImage={blog.og_image ? blog.og_image.url : "https://images.contentstack.io/v3/assets/bltb9eff0ec0532965e/blta5fb5186db0221ca/5eecbe71464b61607c65f1ab/Matts_blog_-_pic.jpg"}/> */}
                <Header headertransparent="header--black" colorblack="color--white" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <div className="sub-hero rn-page-title-area pt--120 bg_image" style={{ backgroundImage: `url(${blog.hero_image.url})` }} data-black-overlay="3">
                    <div className="container-desktop position-relative">
                        <div className="row">
                            <div className="col-lg-8 pt--80">
                                <div className="inner">
                                    <h1 className="title">{blog.title}</h1>
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
                    <div className="white-space">
                        <ul className="page-list">
                            <li className="breadcrumb-item">
                                <i to={`${process.env.PUBLIC_URL}`}><IoMdCalendar /> </i> {blog.date}
                            </li>
                        </ul>
                        <ul className="page-list">
                            <li className="breadcrumb-item">
                                <i to={`${process.env.PUBLIC_URL}`}><IoMdCreate /> </i> {blog.authorname}
                            </li>
                        </ul>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pb--70 bg_color--1 blog-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h3 className="category">{blog.category_name}</h3>
                                    <h2>{blog.subject_title}</h2>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: blog.body} } />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Start InsightsComp Area */}
                <div className="insights-area insights-position-top linend">
                    <InsightsComp />
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

export default BlogDetail;