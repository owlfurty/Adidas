import React, { Component } from "react";

import { Link } from 'react-router-dom'


class BlogDetail extends Component {

    constructor(props) {
        super(props)
        console.log(props.match.params.uid)
        console.log(props.match.params)
        this.uid = props.match.params.uid
        this.blogpost = props.location.blogpost

        console.log('blogpost: ', this.blogpost)
        this.state = { loading : true, blog: null}
    }

    getBlog(uid) {
        fetch(`https://cdn.contentstack.io/v3/content_types/blog_post/entries/${uid}?&environment=development&locale=en-us`, {
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
            console.log("json: ", json)
            this.setState({loading:false, blog:json.entry})
        })
    }

    componentDidMount(){
        //https://cdn.contentstack.io/v3/content_types/blog_post/entries/blta278bb5672180c94?&environment=development&locale=en-us
        this.getBlog(this.uid)

    }

    render(){
        const { loading, blog} = this.state;

        if ( loading ) {
            return null;
        }

        let tagsList = blog.tags?.join(",")
        return (

            <main>
                <div>
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-text">Tags: {tagsList}</p>
                    <p className="blog-text">{blog.summary}</p>
                    <div dangerouslySetInnerHTML={{ __html: blog.body} } />
                </div>
            </main>
        )
    }

}

export default BlogDetail;