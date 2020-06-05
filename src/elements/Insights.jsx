import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Insights extends Component{

    state = {entries: [], isLoading:true, teamAndAllies:[]}

    getEntries = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/blog_post/entries?environment=development&locale=en-us', {
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
            this.setState({entries:json.entries, isLoading:false, teamAndAllies:this.state.teamAndAllies})
        })
    }

    getTeamAndAllies = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/team_and_allies/entries?environment=development&locale=en-us', {
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
            this.setState({entries:this.state.entries, isLoading:false, teamAndAllies:json.entries })
        })
    }

    componentDidMount(){
        this.getEntries()
        this.getTeamAndAllies()
    }

    render(){
        const { entries, isLoading, teamAndAllies } = this.state;
        
        if ( isLoading ) {
            return null;
        }
        let category = 'Insights', categoryName = 'Category Name'
        let sortedEntries = entries.sort((a, b) => b.date - a.date)
        let componentsList = sortedEntries.map((blogPost) => {

            let author = teamAndAllies.filter((taa) => {
                return blogPost.author[0] === taa.uid
            })[0]
            // let link = window.location + blogPost.url.replace("/","")

            const newTo = { 
                pathname: `/blogdetail${blogPost.url}`, 
                blogpost: blogPost 
            }
            if ( blogPost.hero_image !== null){

                let img_link = blogPost.hero_image.url
                return (
                    <Link to={newTo}>
                        <div className="blog-item">
                            <div className="image-holder">
                                <img src={img_link} alt=""/>
                            </div>
                            <div className="content-holder">
                                <p className="date">{blogPost.date}</p>
                                <p className="author">{author?.title} <span>{author?.role}</span> </p>
                                <h3 className="category-name">{categoryName}</h3>
                                <h2 className="blog-title">{blogPost.title}</h2>
                                <p className="blog-text">{blogPost.summary}</p>
                            </div>
                        </div>
                     
                    </Link>
                )

            } else {

                return (
                    <div className="blog-item">
                        <div className="image-holder">
                            <img src="https://source.unsplash.com/user/dulceylima/930x930" alt=""/>
                        </div>
                        <div className="content-holder">
                            <p className="date">{blogPost.date}</p>
                            <p className="author">{author?.title} <span>{author?.role}</span> </p>
                            <h3 className="category-name">{categoryName}</h3>
                            <h2 className="blog-title">{blogPost.title}</h2>
                            <p className="blog-text">{blogPost.summary}</p>
                        </div>
                    </div>
                )
            }
        })
       
        return(
            <React.Fragment>
                <div className="insights-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="insights-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="insights-inner inner">
                                    {componentsList}
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}
export default Insights;