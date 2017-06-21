import React from "react";
import {Link} from "react-router";

import Results from "./Results";
import LoginModal from "./LoginModal";
import MapComponent from "./MapComponent.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    
  };

  render() {
    return (
      <div>
        <LoginModal/>
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

              <form role='form' className="create-update-form">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label searchbar">
                  <input className="mdl-textfield__input search-input" type="text" id="search" name="search"/>
                  <label className="mdl-textfield__label" htmlFor="search">enter address or search by name</label>

                </div>

                <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored search-button" id="searchbutton">
                  <i className="material-icons">search</i>
                </button>
              </form>

              {/* <!-- Dropdown Trigger -->
            <!-- <a class='dropdown-button btn' href='#' data-activates='dropdown1'>search by</a>

              <! Dropdown Structure -->
            <!-- <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">Address</a></li>
                <li><a href="#!">Senator</a></li>

              </ul> --> */}

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
              <div className="col-lg-12">
                <MapComponent/>
                {/*this.props.children*/}
              </div>
            </div>

          </div>

        </div>
      </div>

    );
  }
}

export default Home;
