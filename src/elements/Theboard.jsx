import React, { Component } from "react";

class Theboard extends Component{
    render(){
        let
        category = 'Theboard',
        title = 'Together freeing up technology.',
        paragraphOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit velit elit. Aliquam blandit rhoncus fermentum. Donec mollis vehicula arcu quis interdum. Nullam euismod volutpat porttitor.',
        firstname = 'Kelly',
        lastname = 'Goetsch',
        jobtitle = 'President',
        crewOne = 'Board',
        crewTwo = 'Advisory board';
        return(
            <React.Fragment>
                <div className="theboard-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-8 col-md-12">
                                <div className="theboard-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h2 className="title">{title}</h2>
                                    </div>
                                    <div className="paragraph">
                                        <p className="body-text">{paragraphOne}</p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>       
                    <div className="team-content">
                        <h3 className="category">{crewOne}</h3>    
                        <div className="row team-pictures">
                            <div className="col-6 col-lg-2">
                                <img alt="theboard" src="/assets/images/team/team-1@2x.png"/>
                                <p className="firstname">{firstname}</p>
                                <p className="lastname">{lastname}</p>
                                <p className="jobtitle">{jobtitle}</p>
                            </div>
                            <div className="col-6 col-lg-2">
                                <img alt="theboard" src="/assets/images/team/team-2@2x.png"/>
                                <p className="firstname">{firstname}</p>
                                <p className="lastname">{lastname}</p>
                                <p className="jobtitle">{jobtitle}</p>
                            </div>
                            <div className="col-6 col-lg-2">
                                <img alt="theboard" src="/assets/images/team/team-3@2x.png"/>
                                <p className="firstname">{firstname}</p>
                                <p className="lastname">{lastname}</p>
                                <p className="jobtitle">{jobtitle}</p>
                            </div>
                            <div className="col-6 col-lg-2">
                                <img alt="theboard" src="/assets/images/team/team-4@2x.png"/>
                                <p className="firstname">{firstname}</p>
                                <p className="lastname">{lastname}</p>
                                <p className="jobtitle">{jobtitle}</p>
                            </div>
                        </div>

                        <h3 className="category crewtwo">{crewTwo}</h3>    
                        <div className="row team-pictures">
                            <div className="col-6 col-lg-2">
                                <img alt="theboard" src="/assets/images/team/advisory-1@2x.png"/>
                                <p className="firstname">{firstname}</p>
                                <p className="lastname">{lastname}</p>
                                <p className="jobtitle">{jobtitle}</p>
                            </div>
                            <div className="col-6 col-lg-2">
                                <img alt="theboard" src="/assets/images/team/advisory-2@2x.png"/>
                                <p className="firstname">{firstname}</p>
                                <p className="lastname">{lastname}</p>
                                <p className="jobtitle">{jobtitle}</p>
                            </div>
                        </div>
                    </div>         
                </div>
            </React.Fragment>
        )
    }
}
export default Theboard;