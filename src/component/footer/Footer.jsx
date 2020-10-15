import React, { Component } from "react";
import {FaTwitter , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/machalliance/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/MachAlliance'},
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="container-desktop">
                            <div className="row align-items-end row--0">
                                <div className="col-lg-6">
                                    <div className="footer-left">
                                        <div className="inner">
                                            <h2>Join us</h2>
                                            <span class="join-title">MACH Alliance newsletter sign-up</span>
                                            <a rel="noopener" href="https://share.hsforms.com/1vH2ljjp8TvS1cbURdpNKbw4t5u0"><button class="footer-button">Join the movement</button></a>
                                            <h2>Follow us</h2>
                                            {/* Start Single Widget  */}
                                            <div className="">
                                                <div className="footer-link">
                                                    <div className="social-share-inner">
                                                        <ul className="social-share social-style--1 d-flex justify-content-start liststyle mt--15">
                                                            {SocialShare.map((val , i) => (
                                                                <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                            ))}
                                                        </ul>
                                                    </div> 
                                                </div>
                                            </div>
                                            {/* End Single Widget  */}

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer-right" data-black-overlay="10">
                                        <div className="row">
                                            {/* Start Single Widget  */}
                                            <div className="col-lg-6 col-sm-6 col-12">
                                                <div className="footer-link">
                                                    <h4>Navigation</h4>
                                                    <ul className="ft-link">
                                                        <li><a href="/manifesto">Manifesto</a></li>
                                                        <li><a href="/about">What is MACH</a></li>
                                                        <li><a href="/mach-technology">MACH Technology</a></li>
                                                        <li><a href="/insights">Blog</a></li>
                                                        <li><a href="/newsroom">Press</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Widget  */}
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="getintouch-footer"><p>Copyright © 2020 MACH Alliance. <br/> All Rights Reserved.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;