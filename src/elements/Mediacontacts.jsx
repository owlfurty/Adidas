import React, { Component } from "react";

class Mediacontacts extends Component{
    render(){
        let
        category = 'Media contacts'
        return(
            <React.Fragment>
                <div className="mediacontacts-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="mediacontacts-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mediacontacts-content">
                        <div className="container">
                            <div className="row mediacontacts-pictures">
                                <div className="col-6 col-lg-3">
                                    <figure>
                                        <img alt="mediacontacts" src="https://source.unsplash.com/collection/9288561/800x800"/>
                                        <p className="contact">Chat Janson</p>
                                        <ul>
                                            <li><a href="/"><img src="/assets/images/brand/icon-mail.svg" alt=""/></a></li>
                                            <li><a href="/"><img src="/assets/images/brand/icon-phone.svg" alt=""/></a></li>
                                        </ul>
                                    </figure>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <figure>
                                        <img alt="mediacontacts" src="https://source.unsplash.com/collection/9288561/700x700"/> 
                                        <p className="contact">Chat Janson</p>
                                        <ul>
                                            <li><a href="/"><img src="/assets/images/brand/icon-mail.svg" alt=""/></a></li>
                                            <li><a href="/"><img src="/assets/images/brand/icon-phone.svg" alt=""/></a></li>
                                        </ul>
                                    </figure>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <figure>
                                        <img alt="mediacontacts" src="https://source.unsplash.com/collection/9288561/650x650"/> 
                                        <p className="contact">Chat Janson</p>
                                        <ul>
                                            <li><a href="/"><img src="/assets/images/brand/icon-mail.svg" alt=""/></a></li>
                                            <li><a href="/"><img src="/assets/images/brand/icon-phone.svg" alt=""/></a></li>
                                        </ul>
                                    </figure>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <figure>
                                        <img alt="mediacontacts" src="https://source.unsplash.com/collection/9288561/600x600"/> 
                                        <p className="contact">Chat Janson</p>
                                        
                                        <ul>
                                            <li><a href="/"><img src="/assets/images/brand/icon-mail.svg" alt=""/></a></li>
                                            <li><a href="/"><img src="/assets/images/brand/icon-phone.svg" alt=""/></a></li>
                                        </ul>
                                    </figure>
                                </div>
                            </div>
                        </div>

                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Mediacontacts;