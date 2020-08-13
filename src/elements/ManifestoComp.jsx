import React, { Component } from "react";

class ManifestoComp extends Component{
    
    constructor(){
        super()
        
        this.state = { isLoading : true, manifesto: null}
    }
    
    componentDidMount(){
        this.getManifest()
    }

    getManifest = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/manifesto/entries?environment=development&locale=en-us', {
            method:'get',
            mode:'cors',
            headers:{
                api_key:'bltb9eff0ec0532965e',
                access_token:'csbcb89082a35b960cf9d10e11',
                Accept: "*/*"
            }
        })
        .then((response)=> {
            return response.json()
        })
        .then((json) => {
            this.setState({manifesto:json.entries[0], isLoading:false})
        })
    }
    

    render(){
        const { isLoading, manifesto} = this.state;
        let category = 'Manifesto'

        if(isLoading){
            return null
        }

        return(
            <React.Fragment>
                <div className="manifesto-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="manifesto-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h6 className="quote-title"> {manifesto.quote_title}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-desktop">
                        <div className="quote-thumb">
                            <p className="text-white text-italic">
                                {manifesto.quote_thumb}
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="paragraph">
                                    <div className="body-text" dangerouslySetInnerHTML={{ __html: manifesto.summary} } />
                                    <a className="text-link" href="/manifesto">
                                        {manifesto.read_more}
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