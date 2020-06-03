import React, { Component } from "react";

class Manifesto extends Component{
    render(){
        let
        category = 'Manifesto',
        quoteTitle = "Henry Ford is purported to have said:",
        quoteThumb = '“If I had asked people what they wanted, they would have said faster horses.”',
        paragraphOne = 'The massive, monolithic enterprise software platforms that dominate today keep delivering slightly ‘faster horses’ to their customers. And because ‘nobody ever got fired for buying from the top right of an evaluation’, enterprises timidly accept it.',
        paragraphTwo = 'And yet, technology has moved on – fast and liberating - enabling new ways to think about and new ways to do business. That’s why we have started the MACH Alliance - to help companies take advantage of new tech and break the cycle.',
        readMore = 'read the entire manifesto';
        return(
            <React.Fragment>
                <div className="manifesto-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="manifesto-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h6 className="quote-title">{quoteTitle}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quote-thumb">
                        <p className="text-white text-italic">{quoteThumb}</p>
                    </div>
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="paragraph">
                                    <p className="body-text">{paragraphOne}</p>
                                    <p className="body-text">{paragraphTwo}</p>
                                    <a className="text-link" href="/">{readMore}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}
export default Manifesto;