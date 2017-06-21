// Include React
import React from "react";
import {Link} from "react-router";
import { Button, Modal, Tabs, Tab } from 'react-materialize';

class LoginModal extends React.Component{
  constructor() {
    super();
    this.state = {
    isLoggedIn: false,
    email: "",
    password: "",
    address: ""
};
this.handleEmailChange = this.handleEmailChange.bind(this);
this.handlePasswordChange = this.handlePasswordChange.bind(this);
this.handleAddressChange = this.handleAddressChange.bind(this);

this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);

this.modalChooser = this.modalChooser.bind(this);
  }


  handleEmailChange(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event){
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  handleAddressChange(event){
    event.preventDefault();
    this.setState({address: event.target.value});
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
         <Tabs className='z-depth-1'>
           <Tab title="Log In" active>
             <form action="/user/login" method="POST">
                   <div className="input-field col s12">
                     <input
                       id="email"
                       name="email"
                       type="email"
                       className="validate"
                       value ={this.state.email}
                       onChange = {this.handleEmailChange}
                     />
                     <label htmlFor="loginEmail">Email</label>
                   </div>
                   <div className="input-field col s12">
                     <input
                       id="password"
                       name="password"
                       type="password"
                       className="validate"
                       value ={this.state.password}
                       onChange = {this.handlePasswordChange}
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
                       id="email"
                       name="email"
                       type="email"
                       className="validate"
                       value ={this.state.email}
                       onChange = {this.handleEmailChange}
                     />
                     <label htmlFor="newEmail">email</label>
                   </div>
                   <div className="input-field col s12">
                     <input
                       id="password"
                       name="password"
                       type="password"
                       className="validate"
                       value ={this.state.password}
                       onChange = {this.handlePasswordChange}
                     />
                     <label htmlFor="newPAssword">password</label>
                   </div>
                   <div className="input-field col s12">
                     <input
                       id="address"
                       name="address"
                       type="text"
                       className="validate"
                       value ={this.state.address}
                       onChange = {this.handleAddressChange}
                     />
                     <label htmlFor="newAddress">
                       Address</label>
                   </div>
                   <Button type="submit" waves='light' id="registerSubmit">Register
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
