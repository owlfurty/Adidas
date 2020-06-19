import React, { Component } from "react";

class Events extends Component{

    constructor(){
        super()
        this.state = { isLoading: true, events:null}
    }

    componentDidMount(){
        this.getEvents()
    }

    getEvents = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/events/entries?environment=development&locale=en-us', {
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
            this.setState({events:json.entries, isLoading:false})
        })
    }

    getElements(list){

        let elements = list.map((event) => {
            let eventDate = new Date(Date.parse(event.event_date))
            let formattedDate = eventDate.getDate()+"-"+eventDate.getMonth()+"-"+eventDate.getFullYear()
            
            return (
                <li key={event.uid}>
                    <a href={event.event_url}>
                        <span class="event-date">{formattedDate + " - " + event.event_city}</span>
                        <span class="event-title">{event.title}</span>
                    </a>
                </li>
            )
        })
        return elements
    }

    render(){
        const { isLoading, events} = this.state

        if( isLoading ){
            return null
        }
        let componentsList = this.getElements(events)

        let
        category = 'Events'
        return(
            <React.Fragment>
                <div className="events-wrapper">

                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="events-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h2 className="title">Come and see us</h2>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events-content">
                        <div className="container">
                            <div className="row events-links">
                                <div className="col-12">
                                    <ul>
                                        {componentsList}
                                    </ul>
                                    {/* <a class="button whitebg" href="/events">More events</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Events;