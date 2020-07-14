import React, { Component } from "react";
import {Helmet} from 'react-helmet'
import { ReactSEOMetaTags } from 'react-seo-meta-tags'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <ReactSEOMetaTags
                    render={<Helmet>
                        <meta property="og:title" content={this.props.ogTitle || " "} data-react-helmet="true"/>
                        <meta property="og:description" content={this.props.ogDescription || ""} data-react-helmet="true"/>
                        <meta property="og:image" content={this.props.ogImage || "https://images.contentstack.io/v3/assets/bltb9eff0ec0532965e/blta5fb5186db0221ca/5eecbe71464b61607c65f1ab/Matts_blog_-_pic.jpg"} data-react-helmet="true"/>
                        <title>{this.props.pageTitle} || Enterprise MACHified.</title>
                        <meta name="description" content="MACH – The massive, monolithic enterprise software platforms that dominate today keep delivering slightly ‘faster horses’ to their customers." />
                    </Helmet>}
                    website={{ ...siteMetadata }}   
                />
                
            </React.Fragment>
        )
    }
}


export default PageHelmet;
