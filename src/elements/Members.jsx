import React, { Component } from "react";

class Members extends Component{

    constructor(){
        super()
        this.state = { isLoading: true, members:null}
    }

    componentDidMount(){
        this.getMembers()
    }

    getMembers = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/members/entries?environment=development&locale=en-us', {
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
            this.setState({members:json.entries, isLoading:false})
        })
    }

    getElements(list){
        let sortedList = list.sort(function(a, b) {
            var textA = a.member_name.toUpperCase();
            var textB = b.member_name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        let elements = sortedList.map((member) => {
            return (
                <div className="col-6 col-lg-3" key={member.uid}>
                    <img alt="members" src={member.member_logo.url}/>
                    <p className="member">{member.title}</p>
                </div>
            )
        })
        return elements
    }

    render(){
        let category = 'Members'
        const { isLoading, members} = this.state

        if( isLoading ){
            return null
        }

        let elementsList = this.getElements(members)

        return(
            <React.Fragment>
                <div className="Members-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="members-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="members-content">
                        <div className="container">
                            <div className="row members-pictures">
                                {elementsList}
                            </div>
                        </div>

                    </div>
                                       
                </div>
            </React.Fragment>
        )
    }
}
export default Members;