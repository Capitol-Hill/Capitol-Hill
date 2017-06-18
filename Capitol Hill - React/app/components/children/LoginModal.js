// Include React
import React from "react";
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
          <a className="btn-floating btn-large waves-effect waves-light teal mapbtn" href="map.html">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </a>
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
                    <input id="email" type="text" className="validate"/>
                    <label htmlFor="email">email</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="last_name">password</label>
                  </div>

                </form>
              </div>
              <div id="test2" className="col s12">
                <form action="/signup">
                  <div className="input-field col s6">
                    <input id="email" type="text" className="validate"/>
                    <label htmlFor="first_name">email</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="last_name">password</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="address" type="text" className="validate"/>
                    <label htmlFor="address">
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
