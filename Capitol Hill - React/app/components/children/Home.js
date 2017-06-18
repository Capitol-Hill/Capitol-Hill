import React from "react";
import {Link} from "react-router";

class Home extends React.Component{
  constructor(){
    super();
  };

  render(){
    return(
    <div>
    <div className="container">
      <div className="nav">
        <a className="waves-effect waves-light btn loginbtn" href="#modal1">signup / login</a>
          <div id="modal1" className="modal">
              <div className="modal-content">
                <h4>log in</h4>
                <input placeholder="Placeholder" id="email" type="text" className="validate"/>
                <label htmlFor="first_name">email addresss</label>
                <input id="last_name" type="password" className="validate"/>
                <label htmlFor="last_name">password</label>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">log in</a>
              </div>
          </div>
      </div>
    </div>

    <div className="banner">
      <div className="logo">Capitol Hill <i className="fa fa-flag" aria-hidden="true"></i>
      </div>
    </div>

    <div className="main-container">
      <div className="row">
        <div className="col-lg-12">
        </div>
      </div>
      <div className="row">
      </div>
      <div className="col-lg-12 search-div">

        {/* <!-- <form action="/results" method="POST"> --> */}


        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label searchbar">
          <input className="mdl-textfield__input search-input" type="text" id="search" name="search"/>
          <label className="mdl-textfield__label" htmlFor="sample3">enter address</label>
        </div>

        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored search-button" id="searchbutton"><i className="material-icons">search</i>
        </button>
              <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                address
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Address</a></li>
                <li><a href="#">Senator</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>

        {/* </form>  */}


      </div>
      <div className="row">
        <div className="col-lg-12"></div>
      </div>
    </div>
    </div>
    );
  }
}

export default Home;
