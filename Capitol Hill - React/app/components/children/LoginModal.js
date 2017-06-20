// Include React
import React from "react";
import {Link} from "react-router";
//import helpers from "../utils/helpers";
// Creating the Results component

class LoginModal extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          {/* <!-- Button trigger modal --> */}
          <a className="waves-effect waves-light btn loginbtn" data-toggle="modal" data-target="#modal1">signup / login</a>
            
          <Link to="/map" className="btn-floating btn-large waves-effect waves-light teal mapbtn">
              <i className="fa fa-globe" aria-hidden="true"></i>
          </Link>
        </div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s3">
                    <a className="active" id="log" href="#test1">login</a>
                  </li>
                  <li className="tab col s3">
                    <a href="#test2" id="sign">signup</a>
                  </li>

                </ul>
              </div>
              <div id="test1" className="col s12">
                <form action="/login">
                  <div className="input-field col s6">
                    <input id="loginEmail" type="text" className="validate"/>

                    <label htmlFor="loginEmail">email</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="loginPassword" type="password" className="validate"/>
                    <label htmlFor="loginPassword">password</label>
                  </div>

                </form>
              </div>
              <div id="test2" className="col s12">
                <form action="/signup">
                  <div className="input-field col s6">
                    <input id="newEmail" type="text" className="validate"/>
                    <label htmlFor="newEmail">email</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="newPassword" type="password" className="validate"/>
                    <label htmlFor="newPassword">password</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="newAddress" type="text" className="validate"/>
                    <label htmlFor="newAddress">
                      address</label>
                  </div>
                </form>
              </div>

            </div>
            <a href="/" className="modal-action modal-close waves-effect waves-green btn-flat">continue</a>
          </div>
        </div>
      </div>
    );
  }
}

{/* // Export the component back for use in other files */}
export default LoginModal;
