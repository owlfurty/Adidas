import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";


class Breadcrumb extends Component{
    render(){
        const { title , parent} = this.props;
        return(
            <React.Fragment>
                <ul className="page-list">
                    <li className="breadcrumb-item">
                        <Link to={`${process.env.PUBLIC_URL}`}><IoMdHome /></Link>
                    </li>
                    {parent? <li className="breadcrumb-item">{parent}</li>:''}
                    <li className="breadcrumb-item active">{title}</li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Breadcrumb;

