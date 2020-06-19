import React, { Component } from "react";

class Theboardcomp extends Component{

    constructor(){
        super()

        this.state = { isLoading : true, theboard: null}
    }

    componentDidMount(){
        this.getArchitecture()
    }

    getArchitecture = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/theboard/entries?environment=development&locale=en-us', {
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
            this.setState({theboard:json.entries[0], isLoading:false})
        })
    }


    render(){
        
        const { isLoading, theboard} = this.state;
        
        
        let category = 'The board'

        if(isLoading){
            return null
        }

        return(
            <React.Fragment>
                <div className="architecture-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-8 col-md-12">
                                <div className="architecture-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h2 className="title">{theboard.content_title}</h2>
                                    </div>
                                    <div className="paragraph">
                                        <p className="body-text" dangerouslySetInnerHTML={{ __html: theboard.summary} } />
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
export default Theboardcomp;