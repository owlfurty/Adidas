import React, { Component } from "react";

class Mediacontacts extends Component{
    constructor(){
        super()
        this.state = { isLoading: true, mediacontacts:null}
    }

    componentDidMount(){
        this.getMediaContacts()
    }

    getMediaContacts = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/media_contacts/entries?environment=development&locale=en-us', {
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
            this.setState({mediacontacts:json.entries, isLoading:false})
        })
    }

    getElements(list){

        let elements = list.map((mediacontact) => {
            return (
                <div className="col-6 col-lg-3" key={mediacontact.uid}>
                    <figure>
                        <img alt="mediacontacts" src={mediacontact.member_logo.url}/> 
                        <p className="contact">{mediacontact.title}</p>               
                        <ul>
                            <li><a href={"mailto:" + mediacontact.email}><img src="/assets/images/brand/icon-mail.svg" alt=""/></a></li>
                            <li><a href={"tel:" + mediacontact.phone}><img src="/assets/images/brand/icon-phone.svg" alt=""/></a></li>
                        </ul>
                    </figure>
                </div>
            )
        })
        return elements
    }

    render(){
        let
        category = 'Media contacts'

        const { isLoading, mediacontacts} = this.state

        if( isLoading ){
            return null
        }
        let elementsList = this.getElements(mediacontacts)
        return(
            <React.Fragment>
                <div className="mediacontacts-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="mediacontacts-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mediacontacts-content">
                        <div className="container">
                            <div className="row mediacontacts-pictures">
                                {elementsList}
                            </div>
                        </div>

                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Mediacontacts;