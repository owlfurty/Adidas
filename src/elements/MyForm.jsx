// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="signup-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
                <div className="col-lg-12 col-md-12">
                    <div className="signup-inner inner">
                        <div className="section-title">
                            <h3 className="category">SIGN UP NOW</h3>
                            <h2>Join the movement</h2>
                            <p>Nullam aliquet consequat metus sit amet pharetra. Nam lorem justo, volutpat ut gravida ac, bibendum at ipsum. Vivamus lobortis nisl vulputate erat auctor vel sagittis.</p>
                        </div>
                        <form 
                            class="on-yellow"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/xjvarova"
                            method="POST"
                        >
                            <input placeholder="name" type="name" name="name" />
                            <input placeholder="title" type="text" name="title" />
                            <input placeholder="company" type="text" name="company" />
                            <input placeholder="email" type="email" name="email" />
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}