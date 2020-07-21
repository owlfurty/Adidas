import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Getintouch extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="getintouch-wrapper">

                    <div className="getintouch-content">
                        <div className="container">
                            <div className="row getintouch-links">
                                <div className="col-12">
                                    <figure>
                                        <Link to="/">
                                            <img width="119" src="/assets/images/logo/logoblack.svg" alt="Digital Agency"/>
                                        </Link>
                                    </figure>
                                    <h2>Get in touch</h2>
                                    <a className="mailto" href="mailto:info@machalliance.org">info@machalliance.org</a>
                                </div>
                            </div>
                        </div>

                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Getintouch;