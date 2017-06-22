// Include React
import React from "react";
import {Link} from "react-router";
import { Button, Modal, Tabs, Tab } from 'react-materialize';

class LoginModal extends React.Component{
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

this.handleChange= this.handleChange.bind(this);

this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);

this.modalChooser = this.modalChooser.bind(this);
  }

handleChange(event){
  this.setState({[event.target.name]: event.target.value});
}

  handleLoginSubmit(event) {

    console.log("Logging in with:");
    console.log("email: " + this.state.email);
    console.log("password: " + this.state.password);
    event.preventDefault();
  }

  handleSignUpSubmit(event) {

    console.log("Signup with:");
    console.log("email: " + this.state.email);
    console.log("password: " + this.state.password);
    console.log("address: " + this.state.address);

    //userAPI.postSignup(this.state.email, this.state.password);
      event.preventDefault();
  }

  modalChooser() {
     if (this.state.isLoggedIn === false) {
       return (
       <Modal
         trigger={<Button className="loginbtn" waves='light'>Login/Signup</Button>
         }>
         <Tabs className='z-depth-1 tabs-fixed-width'>
           <Tab title="Log In" active>
             <form action="/user/login" method="POST">
                   <div className="input-field col s12">
                     <input
                       id="loginEmail"
                       name="loginEmail"
                       type="email"
                       className="validate"
                       value ={this.state.loginEmail}
                       onChange = {this.handleChange}
                     />
                     <label htmlFor="loginEmail">Email</label>
                   </div>
                   <div className="input-field col s12">
                     <input
                       id="loginPassword"
                       name="loginPassword"
                       type="password"
                       className="validate"
                       value ={this.state.loginPassword}
                       onChange = {this.handleChange}
                     />
                     <label htmlFor="loginPassword">Password</label>
                   </div>
                     <Button type="submit" waves='light' id="loginSubmit">Log In
                     </Button>
                 </form>
           </Tab>
           {/* Register Window */}
           <Tab title="Register">
             <form action="/user/signup" method="POST">
                   <div className="input-field col s12">
                     <input
                       id="signupEmail"
                       name="signupEmail"
                       type="email"
                       className="validate"
                       value ={this.state.signupEmail}
                       onChange = {this.handleChange}
                     />
                     <label htmlFor="signupEmail">Email</label>
                   </div>
                   <div className="input-field col s12">
                     <input
                       id="signupPassword"
                       name="signupPassword"
                       type="password"
                       className="validate"
                       value ={this.state.signupPassword}
                       onChange = {this.handleChange}
                     />
                     <label htmlFor="signupPassword">Password</label>
                   </div>
                   <div className="input-field col s12">
                     <input
                       id="address"
                       name="address"
                       type="text"
                       className="validate"
                       value ={this.state.address}
                       onChange = {this.handleChange}
                     />
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
       return <p> Welcome {this.state.email}</p>;
     }

   }

  render() {
    return (
      <div className="container">
        <div className="nav">
          {/* <!-- Button trigger modal --> */}

        { this.modalChooser() }

          <Link to="/MapComponent" className="btn-floating btn-large waves-effect waves-light teal mapbtn">
              <i className="fa fa-globe" aria-hidden="true"></i>
          </Link>
        </div>



      </div>
    );
  }
}

{/* // Export the component back for use in other files */}
export default LoginModal;
