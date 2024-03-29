import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="MACH Alliance" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="MACH Alliance" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="MACH Alliance" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="MACH Alliance" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.svg" alt="MACH Alliance" />;
        }
        
        return( 
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-right">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-left">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/MACHathon">Machathon</NavLink></li>
                                <li><NavLink to="/members" >Members</NavLink></li>
                                <li><NavLink to="/mach-technology" >Mach Technology</NavLink></li>
                                <li><NavLink to="/insights" >Insights</NavLink></li>
                                <li><NavLink to="/newsroom" >Newsroom</NavLink></li>
                                {/* <li><NavLink to="/events" >Events</NavLink></li> */}
                                {/* <li><a className="buttony" href="/#signup" >Sign up</a></li> */}
                            </ul>
                        </nav>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">

                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;