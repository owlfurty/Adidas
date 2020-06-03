import React, { Component } from "react";

class Members extends Component{
    render(){
        let
        category = 'Members',
        member = 'contentstack';
        return(
            <React.Fragment>
                <div className="Members-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="members-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="members-content">
                        <div className="row members-pictures">
                            <div className="col-6">
                                <img alt="members" src="/assets/images/team/member-1@2x.png"/>
                                <p className="member">{member}</p>
                            </div>
                            <div className="col-6">
                                <img alt="members" src="/assets/images/team/member-2@2x.png"/>
                                <p className="member">{member}</p>
                            </div>
                            <div className="col-6">
                                <img alt="members" src="/assets/images/team/member-3@2x.png"/>
                                <p className="member">{member}</p>
                            </div>
                            <div className="col-6">
                                <img alt="members" src="/assets/images/team/member-4@2x.png"/>
                                <p className="member">{member}</p>
                            </div>
                        </div>

                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Members;