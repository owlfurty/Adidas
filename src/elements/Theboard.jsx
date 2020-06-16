import React, { Component } from "react";

class Theboard extends Component{

    constructor(){
        super()

        this.state = { isLoading : true, team: null}
    }

    componentDidMount(){
        this.getBoard()
    }

    getBoard = () => {
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
            console.log(json)
            let boardMembers = json.entries.filter((member)=>{
                return member.tags.includes("board")
            })
    
            let advisoryMembers = json.entries.filter((member)=>{
                return member.tags.includes("advisory")
            })    
            this.setState({boardMembers:boardMembers, advisoryMembers:advisoryMembers, isLoading:false })
        })
    }

    
    getElements(list){
        return list.map((member) => {
            let firstname = member.title.split(" ")[0]
            let lastname = member.title.replace(firstname + " ", "")
            return (
                <div className="col-6 col-lg-2">
                    <img alt="theboard" src={member.headshot.url}/>
                    <p className="firstname">{firstname}</p>
                    <p className="lastname">{lastname}</p>
                    <p className="jobtitle">{member.role}</p>
                </div>
            )
        })
    }

    render(){

        const {boardMembers, advisoryMembers, isLoading } = this.state;
        
        if ( isLoading ) {
            return null;
        }

        let boardList = this.getElements(boardMembers)

        let advisoryList = this.getElements(advisoryMembers)

        let
        category = 'Theboard',
        title = 'Together freeing up technology.',
        paragraphOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit velit elit. Aliquam blandit rhoncus fermentum. Donec mollis vehicula arcu quis interdum. Nullam euismod volutpat porttitor.',
        firstname = 'Kelly',
        lastname = 'Goetsch',
        jobtitle = 'President',
        crewOne = 'Board',
        crewTwo = 'Advisory board';
        return(
            <React.Fragment>
                <div className="theboard-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-8 col-md-12">
                                <div className="theboard-inner inner">
                                    <div className="section-title">
                                        <h3 className="category">{category}</h3>
                                        <h2 className="title">{title}</h2>
                                    </div>
                                    <div className="paragraph">
                                        <p className="body-text">{paragraphOne}</p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>       
                    <div className="team-content">
                        <h3 className="category">{crewOne}</h3>    
                        <div className="row team-pictures">
                            {boardList}
                        </div>

                        <h3 className="category crewtwo">{crewTwo}</h3>    
                        <div className="row team-pictures">
                            {advisoryList}
                        </div>
                    </div>         
                </div>
            </React.Fragment>
        )
    }
}
export default Theboard;