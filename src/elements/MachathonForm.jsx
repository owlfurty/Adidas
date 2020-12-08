import React, { Component } from "react";

class Footer extends Component {


  constructor(){
    super()

    this.state = {isLoading: true, machathonform:null}
  }

  componentDidMount(){
    this.getMachathonForm()
  }
  

  getMachathonForm = () => {
      fetch('https://cdn.contentstack.io/v3/content_types/machathonform/entries?environment=development&locale=en-us', {
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
        if(this.state.integrator !== null)
          this.setState({machathonform:json.entries[0], isLoading:false})
      })
  }

  render() {

    let {isLoading, machathonform} = this.state

    if ( isLoading ) {
      return null;
    }

    return (
      <React.Fragment>
        <div id="signup" className="signup-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-12 col-md-12">
                <div className="signup-inner inner">
                  <div className="section-title mt-40">
                    <h3 className="category">{machathonform.title}</h3>
                    <h2>{machathonform.slogan}</h2>
                    <p>{machathonform.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="join-content">
            <div className="container">
              <div className="row join-links">
                <div className="col-12">
                  <ul>
                    <li>
                      <a href={machathonform.first_button.href}>
                        <button className={"button"}>{machathonform.first_button.title}</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Footer;