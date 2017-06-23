// Include React
import React from "react";
import {Link} from "react-router";
import {Button, Modal, Tabs, Tab} from 'react-materialize';

import signupHelper from "../utils/signupHelper";
import loginHelper from "../utils/loginHelper";

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      loginEmail: "",
      loginPassword: "",
      signupEmail: "",
      signupPassword: "",
      address: ""
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);

    this.modalChooser = this.modalChooser.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClearChange(event) {
    this.setState({
      [event.target.name]: ""
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    console.log("Logging in with:");
    console.log("email: " + this.state.loginEmail);
    console.log("password: " + this.state.loginPassword);

    //  this.setState({[event.target.name]: "");
    loginHelper.postLogin(this.state.loginEmail, this.state.loginPassword).then(data => {
      console.log("getting data from logging in", data);
      console.log("status: " , data.status);

    });

  }

  handleSignUpSubmit(event) {
    event.preventDefault();
    console.log("Signup with:");
    console.log("email: " + this.state.signupEmail);
    console.log("password: " + this.state.signupPassword);
    console.log("address: " + this.state.address);

    signupHelper.postSignup(this.state.signupEmail, this.state.signupPassword, this.state.address).then(data => {
      console.log("this is the data here LoginModal.js", data);
    });
    //this.setState({[event.target.name]: "");


  }


  modalChooser() {
    if (this.state.isLoggedIn === false) {
      return (
        <Modal trigger={<Button className = "loginbtn" waves = 'light' > Login / Signup </Button>}>
          <Tabs className='z-depth-1 tabs-fixed-width'>
            <Tab title="Log In" active>
              <form onSubmit={this.handleLoginSubmit}>
                <div className="input-field col s12">
                  <br/>
                  <input id="loginEmail" name="loginEmail" type="email" className="validate" value ={this.state.loginEmail} onChange={this.handleChange}/>
                  <label htmlFor="loginEmail">Email</label>
                </div>
                <div className="input-field col s12">
                  <input id="loginPassword" name="loginPassword" type="password" className="validate" value ={this.state.loginPassword} onChange={this.handleChange}/>
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <Button type="submit" waves='light' id="loginSubmit" onSubmit={this.handleClearChange}>Log In
                </Button>
              </form>
            </Tab>
            {/* Register Window */}
            <Tab title="Register">
              <form onSubmit={this.handleSignUpSubmit}>
                <div className="input-field col s12">
                  <br/>
                  <input id="signupEmail" name="signupEmail" type="email" className="validate" value ={this.state.signupEmail} onChange={this.handleChange}/>
                  <label htmlFor="signupEmail">Email</label>
                </div>
                <div className="input-field col s12">
                  <input id="signupPassword" name="signupPassword" type="password" className="validate" value ={this.state.signupPassword} onChange={this.handleChange}/>
                  <label htmlFor="signupPassword">Password</label>
                </div>
                <div className="input-field col s12">
                  <input id="address" name="address" type="text" className="validate" value ={this.state.address} onChange={this.handleChange}/>
                  <label htmlFor="address">
                    Enter Address</label>
                </div>
                <Button className="center-align" type="submit" waves='light' id="registerSubmit">Register
                </Button>
              </form>
            </Tab>
          </Tabs>
        </Modal>
      );
    } else {
      return <p>
        Welcome {this.state.email}</p>;
    }

  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          {/* <!-- Button trigger modal --> */}

          {this.modalChooser()}

          <Link to="/MapComponent" className="btn-floating btn-large waves-effect waves-light teal mapbtn">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </Link>
        </div>

      </div>
    );
  }
}

{/* // Export the component back for use in other files */
}
export default LoginModal;
