// Include React
import React from "react";
import {Link} from "react-router";
import {Button, Modal, Tabs, Tab} from 'react-materialize';
import axios from "axios";

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail:"",
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

    console.log("Logging in with:");
    console.log("email: " + this.state.loginEmail);
    console.log("password: " + this.state.loginPassword);

    //  this.setState({[event.target.name]: "");

    event.preventDefault();
  }

  handleSignUpSubmit(event) {

    console.log("Signup with:");
    console.log("email: " + this.state.signupEmail);
    console.log("password: " + this.state.signupPassword);
    console.log("address: " + this.state.address);

    //this.setState({[event.target.name]: "");

    event.preventDefault();
  }

  handleUser(event){
      this.setState({isLoggedIn: true,
                      userEmail: this.state.signupEmail,
                    userEmail: this.state.loginEmail, });

    }

  handleLogout(event) {
    this.setState({isLoggedIn: false});

    axios.get("/user/logout");
  }


  modalChooser() {
    if (this.state.isLoggedIn === false) {
      return (
        <Modal trigger={< a className = "btn waves-effect waves-red loginbtn" > Login / Signup < /a>}>
          <Tabs className='z-depth-1'>
            <Tab title="Log In" className="log" active>
              <form action="/user/login" method="POST">
                <div className="input-field col s12">
                  <input id="loginEmail" name="loginEmail" type="email" className="validate" value ={this.state.loginEmail} onChange={this.handleChange}/>
                  <label htmlFor="loginEmail">Email</label>
                </div>
                <div className="input-field col s12">
                  <input id="loginPassword" name="loginPassword" type="password" className="validate" value ={this.state.loginPassword} onChange={this.handleChange}/>
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <Button type="submit" waves='light' id="loginSubmit" className="modal-close" onClick={this.handleUser}>Log In
                </Button>
              </form>
            </Tab>
            {/* Register Window */}
            <Tab title="Register" className="log">
              <form action="/user/signup" method="POST">
                <div className="input-field col s12">
                  <input id="signupEmail" name="signupEmail" type="email" className="validate" value ={this.state.signupEmail} onChange={this.handleChange}/>
                  <label htmlFor="newEmail">Email</label>
                </div>
                <div className="input-field col s12">
                  <input id="signupPassword" name="signupPassword" type="password" className="validate" value ={this.state.signupPassword} onChange={this.handleChange}/>
                  <label htmlFor="newPAssword">Password</label>
                </div>
                <div className="input-field col s12">
                  <input id="address" name="address" type="text" className="validate" value ={this.state.address} onChange={this.handleChange}/>
                  <label htmlFor="newAddress">
                    Address</label>
                </div>
                <Button type="submit" waves='light' id="registerSubmit" className="modal-close" onClick={this.handleUser}>Register
                </Button>
              </form>
            </Tab>
          </Tabs>
        </Modal>
      );
    } else {
      return (
        <div>
          <a className="btn waves-effect waves-red loginbtn" onClick={this.handleLogout}>Logout</a>
          <p>
            Welcome {this.state.userEmail}</p>
        </div>
      );
    }
  }
  render() {

    return (
      <div className="container">
        <div className="nav">
          {/* <!-- Button trigger modal --> */}

          {this.modalChooser()}

          <Link to="/MapComponent" className="btn-floating btn-large waves-effect waves-light red mapbtn">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </Link>
        </div>

      </div>
    );
  }
}
const styles = {
  tabs: {
    color: "rgb(0, 150, 136)"
  }
}

{/* // Export the component back for use in other files */}
export default LoginModal;
