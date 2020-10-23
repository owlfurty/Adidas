import React, { Component } from "react";

class CrewComp extends Component{

    constructor(){
        super()

        this.state = { isLoading : true, team: null}
    }

    componentDidMount(){
        this.getBoard()
    }

    getBoard = () => {
        fetch('https://cdn.contentstack.io/v3/content_types/company_and_individuals/entries?environment=development&locale=en-us', {
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
            let boardMembers = json.entries.filter((member)=>{
                return member.position.includes("Company")
            })
    
            let advisoryMembers = json.entries.filter((member)=>{
                return member.position.includes("Ambassadors")
            })    
            this.setState({boardMembers:boardMembers, advisoryMembers:advisoryMembers, isLoading:false })
        })
    }

    
    getElements(list){
        return list.map((member) => {
            let firstname = member.title.split(" ")[0]
            let lastname = member.title.replace(firstname + " ", "")
            return (
                <div className="col-6 col-lg-2" key={member.uid}>
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
            // crewOne = 'Company Members',
            crewTwo = 'Ambassadors'
            // crewTwo = 'Ambassadors'
        return(
            <React.Fragment>
                <div className="team-content zindexplus">
                    {/* <h3 className="category">{crewOne}</h3>    
                    <div className="row team-pictures">
                        {boardList}
                    </div> */}

                    <h3 className="category crewtwo">{crewTwo}</h3>    
                    <div className="row team-pictures">
                        {advisoryList}
                    </div>
                </div>         
            </React.Fragment>
        )
    }
}
export default CrewComp;