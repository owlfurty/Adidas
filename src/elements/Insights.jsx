import React, { Component } from "react";

class Insights extends Component{

    state = {entries: [], isLoading:true}

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
            console.log(json)
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
        let category = 'Insights',
        categoryName = 'Category Name',
        blogTitle = 'Blog title comes here',
        blogText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit velit elit. Aliquam blandit rhoncus fermentum. Donec mollis vehicula arcu quis interdum. Nullam euismod volutpat porttitor.';

        let componentsList = entries.map((blogPost) => {

            if ( blogPost.hero_image !== null){

                let img_link = blogPost.hero_image.url

                return (
                    <div className="blog-item">
                        <div className="image-holder">
                            <img src={img_link} alt=""/>
                        </div>
                        <div className="content-holder">
                            <p className="date">{blogPost.date}</p>
                            <p className="author">{blogPost.author[0]} <span>commercetools</span> </p>
                            <h3 className="category-name">{categoryName}</h3>
                            <h2 className="blog-title">{blogPost.title}</h2>
                            <p className="blog-text">{blogPost.summary}</p>
                        </div>
                    </div>
                )

            } else {

                return (
                    <div className="blog-item">
                        <div className="image-holder">
                            <img src="https://source.unsplash.com/user/dulceylima/930x930" alt=""/>
                        </div>
                        <div className="content-holder">
                            <p className="date">{blogPost.date}</p>
                            <p className="author">{blogPost.author[0]} <span>commercetools</span> </p>
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