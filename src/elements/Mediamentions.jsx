import React, { Component } from "react";

class Mediamentions extends Component{

    constructor(){
        super()
        this.state = { isLoading: true, mediamentions:null}
    }

    componentDidMount(){
        this.getMediamentions()
    }

    getMediamentions = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/media_mentions/entries?environment=development&locale=en-us', {
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
            this.setState({mediamentions:json.entries, isLoading:false})
        })
    }

    getElements(list){
        // return []
        let elements = list.map((mention) => {
            return (
            <li key={mention.uid}><a href={mention.link}>{mention.description}</a></li>
            )
        })
        return elements
    }

    render(){

        const { isLoading, mediamentions} = this.state

        if( isLoading ){
            return null
        }

        let componentsList = this.getElements(mediamentions)

        let
        category = 'Media Mentions'
        return(
            <React.Fragment>
                <div className="mediamentions-wrapper">

                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="mediamentions-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mediamentions-content">
                        <div className="container">
                            <div className="row mediamentions-links">
                                <div className="col-12">
                                    <ul>
                                        {componentsList}
                                    </ul>
                                    <a className="button" href="/media-mentions">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Mediamentions;