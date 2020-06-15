import React, { Component } from "react";
import {FaTwitter , FaLinkedinIn, FaYoutube} from "react-icons/fa";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
    {Social: <FaYoutube /> , link: 'https://youtube.com/'},
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
                                            <span>If you want to join our lorem ipsum dolor et samit, you should:</span>
                                            
                                            <a className="rn-button-style--2" href="/contact">
                                                <span>stay informed</span>
                                            </a>
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
                                                        <li><a href="/portfolio">Manifesto</a></li>
                                                        <li><a href="/about">What is MACH</a></li>
                                                        <li><a href="/contact">MACH Technology</a></li>
                                                        <li><a href="/about">MACH Consult</a></li>
                                                        <li><a href="/contact">Blog</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Single Widget  */}
                                            {/* Start Single Widget  */}
                                            <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
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