import React from "react";
import {Link} from "react-router";

import Results from "./Results";

class Home extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div className="container">
        <div className="nav">
          {/* <!-- Button trigger modal --> */}
          <a className="waves-effect waves-light btn loginbtn" data-toggle="modal" data-target="#modal1">signup / login</a>
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
                  <div className="input-field col s6">
                    <input id="email" type="text" className="validate"/>
                    <label htmlFor="email">email</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="last_name">password</label>
                  </div>
                </div>
                <div id="test2" className="col s12">
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
                </div>
              </div>
              <a href="/" className="modal-action modal-close waves-effect waves-green btn-flat">continue</a>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="logo">Capitol Hill
            <i className="fa fa-flag" aria-hidden="true"></i>
          </div>
        </div>
        <div className="main-container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="row">

            <div className="col-lg-12 search-div">

              {/* <!-- <form action="/results" method="POST"> --> */}

              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label searchbar">
                <input className="mdl-textfield__input search-input" type="text" id="search" name="search"/>
                <label className="mdl-textfield__label" htmlFor="sample3">enter address</label>

              </div>

              <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored search-button" id="searchbutton">
                <i className="material-icons">search</i>
              </button>
              {/* <!-- Dropdown Trigger --> */}
              <a className='dropdown-button btn' href='#' data-activates='dropdown1'>search by</a>

              {/* <!-- Dropdown Structure --> */}
              <ul id='dropdown1' className='dropdown-content'>
                <li>
                  <a href="#!">Address</a>
                </li>
                <li>
                  <a href="#!">Senator</a>
                </li>

              </ul>

            {/* </form> */}

          </div>

          <div className="row results">
            <div className="col-lg-12">
              {/* <!-- Textfield with Floating Label --> */}
              {/* <!-- <div className="container">
                <div className="jumbotron">
                  Capitol Hill <i className="fa fa-flag" aria-hidden="true"></i>
                </div> --> */}
                <Results/>
            </div>
          </div>

          </div>

        </div>
      </div>


  );
}
}

export default Home;
