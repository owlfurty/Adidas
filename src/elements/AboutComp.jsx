import React, { Component } from "react";

class AboutComp extends Component{

    constructor(){
        super()

        this.state = { isLoading : true, about: null}
    }

    componentDidMount(){
        this.getAbout()
    }

    getAbout = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/about/entries?environment=development&locale=en-us', {
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
            this.setState({about:json.entries[0], isLoading:false})
        })
    }
    

    render(){
        const { isLoading, about} = this.state;
        let category = 'About'

        if(isLoading){
            return null
        }

        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{about.title}</h2>
                                        <p className="description" dangerouslySetInnerHTML={{ __html: about.summary} } />
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
export default AboutComp;