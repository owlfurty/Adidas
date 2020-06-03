import React, { Component } from "react";

class Insights extends Component{
    render(){
        let
        category = 'Insights',
        categoryName = 'Category Name',
        blogTitle = 'Blog title comes here',
        blogText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit velit elit. Aliquam blandit rhoncus fermentum. Donec mollis vehicula arcu quis interdum. Nullam euismod volutpat porttitor.';
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
                                
                                    <div className="blog-item">
                                        <div className="image-holder">
                                            <img src="https://source.unsplash.com/user/dulceylima/960x960" alt=""/>
                                        </div>
                                        <div className="content-holder">
                                            <p className="date">may 18, 2020</p>
                                            <p className="author">Kelly Goetsch <span>commercetools</span> </p>
                                            <h3 className="category-name">{categoryName}</h3>
                                            <h2 className="blog-title">{blogTitle}</h2>
                                            <p className="blog-text">{blogText}</p>
                                        </div>
                                    </div>

                                    <div className="blog-item">
                                        <div className="image-holder">
                                            <img src="https://source.unsplash.com/user/dulceylima/920x920" alt=""/>
                                        </div>
                                        <div className="content-holder">
                                            <p className="date">may 18, 2020</p>
                                            <p className="author">Kelly Goetsch <span>commercetools</span> </p>
                                            <h3 className="category-name">{categoryName}</h3>
                                            <h2 className="blog-title">{blogTitle}</h2>
                                            <p className="blog-text">{blogText}</p>
                                        </div>
                                    </div>

                                    <div className="blog-item">
                                        <div className="image-holder">
                                            <img src="https://source.unsplash.com/user/dulceylima/980x980" alt=""/>
                                        </div>
                                        <div className="content-holder">
                                            <p className="date">may 18, 2020</p>
                                            <p className="author">Kelly Goetsch <span>commercetools</span> </p>
                                            <h3 className="category-name">{categoryName}</h3>
                                            <h2 className="blog-title">{blogTitle}</h2>
                                            <p className="blog-text">{blogText}</p>
                                        </div>
                                    </div>

                                    <div className="blog-item">
                                        <div className="image-holder">
                                            <img src="https://source.unsplash.com/user/dulceylima/930x930" alt=""/>
                                        </div>
                                        <div className="content-holder">
                                            <p className="date">may 18, 2020</p>
                                            <p className="author">Kelly Goetsch <span>commercetools</span> </p>
                                            <h3 className="category-name">{categoryName}</h3>
                                            <h2 className="blog-title">{blogTitle}</h2>
                                            <p className="blog-text">{blogText}</p>
                                        </div>
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
export default Insights;