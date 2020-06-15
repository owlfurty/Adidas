import React, { Component } from "react";

class Events extends Component{
    render(){
        let
        category = 'Events'
        return(
            <React.Fragment>
                <div className="events-wrapper">

                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="events-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h2 className="title">Come and see us in</h2>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events-content">
                        <div className="container">
                            <div className="row events-links">
                                <div className="col-12">
                                    <ul>
                                        <li><a href="/">
                                            <span class="event-date">may 18, 2020 - venue</span>
                                            <span class="event-title">Article title comes here over multiple lines if needed.</span>
                                            </a>
                                        </li>
                                        <li><a href="/">
                                            <span class="event-date">may 18, 2020 - venue</span>
                                            <span class="event-title">Article title comes here over multiple lines if needed.</span>
                                            </a>
                                        </li>
                                        <li><a href="/">
                                            <span class="event-date">may 18, 2020 - venue</span>
                                            <span class="event-title">Article title comes here over multiple lines if needed.</span>
                                            </a>
                                        </li>
                                        <li><a href="/">
                                            <span class="event-date">may 18, 2020 - venue</span>
                                            <span class="event-title">Article title comes here over multiple lines if needed.</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <a class="button whitebg" href="/events">More events</a>
                                </div>
                            </div>
                        </div>
                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Events;