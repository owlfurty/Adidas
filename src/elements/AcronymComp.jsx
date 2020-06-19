import React, { Component } from "react";

class AcronymComp extends Component{

    constructor(){
        super()

        this.state = { isLoading : true, acronym: null}
    }

    componentDidMount(){
        this.getManifest()
    }

    getManifest = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/acronym/entries?environment=development&locale=en-us', {
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
            this.setState({acronym:json.entries[0], isLoading:false})
        })
    }
    

    render(){
        const { isLoading, acronym} = this.state;

        if(isLoading){
            return null
        }

        return(
            <React.Fragment>
                <div className="acronym-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-6 col-md-12">
                                <div className="acronym-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{acronym.title}</h3>
                                        <h2 className="title">{acronym.content_title}</h2>
                                    </div>
                                    <div className="paragraph">
                                        <div className="body-text" dangerouslySetInnerHTML={{ __html: acronym.summary} } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="info-content">
                        <p className="text-white" dangerouslySetInnerHTML={{ __html: acronym.services} } />
                        <a className="text-link" href="/mach-technology">{acronym.read_more}</a>
                    </div>
 
                </div>
            </React.Fragment>
        )
    }
}
export default AcronymComp;