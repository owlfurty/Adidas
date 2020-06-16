import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Pressroom extends Component{

    state = {entries: [], isLoading:true}

    getEntries = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/pressrelease/entries?environment=development&locale=en-us', {
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
            this.setState({entries:json.entries, isLoading:false})
        })
    }

    componentDidMount(){
        this.getEntries()
    }

    render(){
        const { entries, isLoading } = this.state;
        
        if ( isLoading ) {
            return null;
        }
        let category = 'Pressroom'
        let sortedEntries = entries.sort((a, b) => b.date - a.date)
        let componentsList = sortedEntries.map((pressRelease) => {
            console.log('pr: ', pressRelease)
            const na = { 
                pathname: `/newsdetail/${pressRelease.uid}`, 
                pressRelease: pressRelease 
            }
            // let link = window.location + `newsdetail/${pressRelease.uid}`

            if ( pressRelease.hero_image !== null){
                console.log("A")
                let img_link = pressRelease.hero_image.url
                return (
                    <div className="press-item">
                        <Link to={na} alt='blog'></Link>
                        <div className="image-holder">
                            <img src={img_link} alt="#"/>
                        </div>
                        <div className="text-holder">
                            <p className="date">{pressRelease.date}</p>
                            <h2 className="press-title">{pressRelease.title}</h2>
                        </div>
                    </div>
                )

            } else {
                console.log("B")
                return (
                    <div className="press-item">
                        <Link to={na}></Link>
                        <div className="image-holder">
                            <img src="https://source.unsplash.com/user/dulceylima/930x930" alt="#"/>
                        </div>
                        <div className="text-holder">
                            <p className="date">{pressRelease.date}</p>
                            <a href={link}></a>
                            <h2 className="press-title">{pressRelease.title}</h2>
                        </div>
                        
                    </div>
                )
            }
        })
        console.log(componentsList)
        return(
            <React.Fragment>
                <div className="pressroom-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="pressroom-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h2>Where the truth is told.</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="pressroom-inner inner cssgrid">
                                    {componentsList}
                                </div>
                            </div>
                        </div>
                        <a class="button" href="/newsroom">Show all</a>
                    </div>   
                </div>
                
            </React.Fragment>
        )
    }
}
export default Pressroom;