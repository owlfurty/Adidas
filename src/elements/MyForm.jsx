import React, { Component } from "react";

class Footer extends Component {


  constructor(){
    super()

    this.state = {isLoading: true, joinmovement:null}
  }

  componentDidMount(){
    this.getJoinMovement()
  }
  

  getJoinMovement = () => {
      fetch('https://cdn.contentstack.io/v3/content_types/joinmovement/entries?environment=development&locale=en-us', {
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
          this.setState({joinmovement:json.entries[0], isLoading:false})
      })
  }

  render() {

    let {isLoading, joinmovement} = this.state

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
                  <div className="section-title">
                    <h3 className="category">{joinmovement.title}</h3>
                    <h2>{joinmovement.slogan}</h2>
                    <p>{joinmovement.description}</p>
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
                      <a href={joinmovement.first_button.href}>
                        <span className="join-category">{joinmovement.first_title}</span>
                        <span className="join-title">{joinmovement.first_description}</span>
                        <button className={"button"}>{joinmovement.first_button.title}</button>
                      </a>
                    </li>

                    
                    <li>
                      <a href={joinmovement.second_button.href}>
                        <span className="join-category">{joinmovement.second_title}</span>
                        <span className="join-title">{joinmovement.second_description}</span>
                        <button className="button">{joinmovement.second_button.title}</button>
                      </a>
                    </li>

                    <li>
                      <a href={joinmovement.third_button.href}>
                        <span className="join-category">{joinmovement.third_title}</span>
                        <span className="join-title">{joinmovement.third_description}</span>
                        <button className={"button"}>{joinmovement.third_button.title}</button>
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