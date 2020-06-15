import React, { Component } from "react";

class ManifestoComp extends Component{
    render(){
        let
        category = 'Manifesto'
        return(
            <React.Fragment>
                <div className="manifesto-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-8 col-md-12">
                                <div className="manifesto-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h6 className="quote-title"> ---------- quoteTitle ----------</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-desktop">
                        <div className="quote-thumb">
                            <p className="text-white text-italic">
                                ---------- quoteThumb ----------
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="paragraph">
                                    <p className="summary">
                                    ---------- KisaParagraf ----------
                                    </p>
                                    <p className="body-text">
                                    ---------- UzunParagraf ----------
                                    </p>
                                    <a className="text-link" href="/">
                                    ---------- HepsiniOkuLinki ----------
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}
export default ManifestoComp;