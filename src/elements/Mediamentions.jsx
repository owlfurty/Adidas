import React, { Component } from "react";

class Mediamentions extends Component{
    render(){
        let
        category = 'Media Mentions'
        return(
            <React.Fragment>
                <div className="mediamentions-wrapper">

                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="mediamentions-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mediamentions-content">
                        <div className="container">
                            <div className="row mediamentions-links">
                                <div className="col-12">
                                    <ul>
                                        <li><a href="/">Article title comes here over multiple lines if needed.</a></li>
                                        <li><a href="/">Article title comes here over multiple lines if needed.</a></li>
                                        <li><a href="/">Article title comes here over multiple lines if needed.</a></li>
                                    </ul>
                                    <a class="button" href="/media-mentions">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Mediamentions;