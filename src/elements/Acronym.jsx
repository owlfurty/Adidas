import React, { Component } from "react";

class Acronym extends Component{
    render(){
        let
        category = 'The Acronym',
        Title = "What is MACH?",
        paragraphOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit velit elit. Aliquam blandit rhoncus fermentum. Donec mollis vehicula arcu quis interdum. Nullam euismod volutpat porttitor.',
        paragraphTwo = 'Nullam aliquet consequat metus sit amet pharetra. Nam lorem justo, volutpat ut gravida ac, bibendum at ipsum. Vivamus lobortis nisl vulputate erat auctor, vel sagittis turpis aliquet.',
        paragraphThree = 'Praesent hendrerit tristique ipsum, vel laoreet dolor. Aenean id fermentum sem. Aliquam ultricies mattis dignissim. Nunc fringilla massa sed lacus egestas, eget blandit nibh consectetur. Nam sagittis porta nulla, eget aliquet elit blandit vel.',
        infocontentOne = 'Micro Services',
        infocontentTwo = 'API First',
        infocontentThree = 'Cloud Native',
        infocontentFour = 'Headless',
        readMore = 'learn more';
        return(
            <React.Fragment>
                <div className="acronym-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-6 col-md-12">
                                <div className="acronym-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h2 className="title">{Title}</h2>
                                    </div>
                                    <div className="paragraph">
                                        <p className="body-text">{paragraphOne}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="info-content">
                        <p className="text-white">
                            {infocontentOne}<br/> 
                            {infocontentTwo}<br/>
                            {infocontentThree}<br/>
                            {infocontentFour}
                        </p>
                        <a className="text-link" href="/">{readMore}</a>
                    </div>

                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="paragraph">
                                    <p className="body-text">{paragraphTwo}</p>
                                    <p className="body-text">{paragraphThree}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}
export default Acronym;