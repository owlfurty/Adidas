import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Enterprise MACHified.</title>
                    <meta name="description" content="MACH – The massive, monolithic enterprise software platforms that dominate today keep delivering slightly ‘faster horses’ to their customers." />
                    <meta property="og:title" content={this.props.ogTitle || ""}/>
                    <meta property="og:description" content={this.props.ogDescription || ""}/>
                    <meta property="og:image" content={this.props.ogImage || ""}/>
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
