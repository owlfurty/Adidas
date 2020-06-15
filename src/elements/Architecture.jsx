import React, { Component } from "react";

class Architecture extends Component{
    render(){
        let
        category = 'Architecture',
        paragraphOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit velit elit. Aliquam blandit rhoncus fermentum. Donec mollis vehicula arcu quis interdum. Nullam euismod volutpat porttitor.',
        paragraphTwo = 'Nullam aliquet consequat metus sit amet pharetra. Nam lorem justo, volutpat ut gravida ac, bibendum at ipsum. Vivamus lobortis nisl vulputate erat auctor, vel sagittis turpis aliquet.',
        readMore = 'everything about MACH technology';
        return(
            <React.Fragment>
                <div className="architecture-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-8 col-md-12">
                                <div className="architecture-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                    <div className="paragraph">
                                        <p className="body-text">{paragraphOne}</p>
                                        <p className="body-text">{paragraphTwo}</p>
                                        <a className="text-link" href="/">{readMore}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </React.Fragment>
        )
    }
}
export default Architecture;