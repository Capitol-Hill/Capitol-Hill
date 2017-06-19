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
          <a className="waves-effect waves-light btn loginbtn" href="#SignUpLogin">signup / login</a>
          <a className="btn-floating btn-large waves-effect waves-light teal mapbtn" href="map.html">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </a>
        </div>

        {/* Modal body */}
        <div id="SignUpLogin" className="modal SignUpLogin">
         <div className="modal-content">
           <div className="row">

             <div className="col s12">
               <ul className="tabs">
                 <li className="tab col s3">
                     <a className="active " id="log" href="#login-modal">Login</a>
                 </li>
                 <li className="tab col s3">
                   <a href="#signUp-modal" id="sign">Sign Up</a>
                 </li>
               </ul>
             </div>

             <div id="login-modal" className="col s12">
               <form action="/login">
                 <div className="input-field col s12">
                   <input id="email" type="text" className="validate"/>
                   <label htmlFor="email">Email</label>
                 </div>
                 <div className="input-field col s12">
                   <input id="password" type="password" className="validate"/>
                   <label htmlFor="last_name">Password</label>
                 </div>
           <a href="/" className="modal-action modal-close waves-effect waves-green btn-flat">Login</a>
               </form>
             </div>
             <div id="signUp-modal" className="col s12">
               <form action="/signup">
                 <div className="input-field col s12">
                   <input id="email" type="text" className="validate"/>
                   <label htmlFor="first_name">Email</label>
                 </div>
                 <div className="input-field col s12">
                   <input id="password" type="password" className="validate"/>
                   <label htmlFor="last_name">Password</label>
                 </div>
                 <div className="input-field col s12">
                   <input id="address" type="text" className="validate"/>
                   <label htmlFor="Address">
                     Address</label>
                 </div>
                 <a href="/" className="modal-action modal-close waves-effect waves-green btn-flat">Register</a>
               </form>
             </div>
         </div>
       </div>
     </div>
      </div>
    );
  }
}

{/* // Export the component back for use in other files */}
export default LoginModal;
