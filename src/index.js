// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Home layout
import MachAliance from './home/MainDemo';
import BlogDetail from './elements/BlogDetail'
import Newsroom from './elements/Newsroom'
import PressDetail from './elements/PressDetail'

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";

import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import Insights from "./elements/Insights";
import MachTechnology from "./elements/MachTechnology";
import error404 from "./elements/error404";

import Manifesto from "./elements/Manifesto";

// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
// import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";

import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();
class Root extends Component{
    render(){
        return(
            <BrowserRouter history={hist} basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={MachAliance}/>

                    {/* Element Layout */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/newsroom`} component={Newsroom}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/newsdetail/:uid`} component={PressDetail}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/manifesto`} component={Manifesto}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blogdetail/:uid`} component={BlogDetail}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/insights`} component={Insights}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/mach-technology`} component={MachTechnology}/>

                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>

                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();