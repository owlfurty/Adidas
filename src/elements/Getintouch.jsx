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
                                    <a class="mailto" href="mailto:email@address.com">email@address.com</a>
                                </div>
                            </div>
                        </div>

                    </div>
                                       
                </div>
                <div className="getintouch-footer"><p>Copyright © 2020 MACH Alliance. <br/> All Rights Reserved.</p></div>
            </React.Fragment>
        )
    }
}
export default Getintouch;