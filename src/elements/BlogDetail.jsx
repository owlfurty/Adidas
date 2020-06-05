import React, { Component } from "react";

import { Link } from 'react-router-dom'


class BlogDetail extends Component {

    constructor(props) {
        super(props)
        console.log(props.match.params.url)
        console.log(props.match.params)
        this.url = props.match.params.url
        this.blogpost = props.location.blogpost

        console.log('blogpost: ', this.blogpost)
        this.state = { loading : true, result: this.blogpost}
    }

    render(){

        return (

            <main>
                <div>
                    <h2 className="blog-title">{this.blogpost.title}</h2>
                    <p className="blog-text">{this.blogpost.summary}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.blogpost.body} } />
                </div>
            </main>
        )
    }

}

export default BlogDetail;