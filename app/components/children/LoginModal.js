// Include React
import React from "react";
import {Link} from "react-router";
import {Button, Modal, Tabs, Tab} from 'react-materialize';

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

    signupHelper.postSignup(this.state.signupEmail, this.state.signupPassword, this.state.address).then(data => {
      console.log("this is the data here LoginModal.js", data);
    })
    //this.setState({[event.target.name]: "");

    event.preventDefault();
  }

  modalChooser() {
     if (this.state.isLoggedIn === false) {
       return (
       <Modal
         trigger={<a className="btn waves-effect waves-red loginbtn">Login/Signup</a>
         }>
         <Tabs className='z-depth-1'>
           <Tab title="Log In" className="log" active>
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
           <Tab title="Register" className="log">
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


{/* // Export the component back for use in other files */
}
export default LoginModal;
