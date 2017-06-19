// Include React
import React from "react";
//import helpers from "../utils/helpers";
// Creating the Results component

class Results extends React.Component{
  constructor() {
    super();
  }
  // saveArticle(title, url){
  //   console.log("You click to save ", title, url);
  //   helpers.postSaved(title,url);
  // alert("Article saved!");
  // }
  // Here we render the function
  render() {
    return (
      <div className = "main-container" >
        <div className="row">
          <div className="col-lg-6">
            <div className="demo-card-image mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">

              </div>
            </div>
          </div>
          <div className="col-lg-6">

          <div className="card-panel contact-box">
            <span className="black-text">
                            <h3 className="senatorName">Name Insert here</h3>
              {/* <h3>Name {{this.name}}</h3> */}
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-share" aria-hidden="true"></i>email</div>
                  <div className="collapsible-body">
                    <span id="email">Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-mobile" aria-hidden="true"></i>phone</div>
                  <div className="collapsible-body">
                    <span id="phone">Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">local_post_office</i>address</div>
                  <div className="collapsible-body">
                    <span id="address">Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-twitter" aria-hidden="true"></i>twitter</div>
                  <div className="collapsible-body">
                    <span id="twitter">Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>

              </ul>
            </span>
          </div>
          </div>
        </div>
      <div className = "row" >
        <div className="col-lg-12">
        <div className="card-panel">
          <span className="black-text">
            <center>
              <h4>Votes</h4>
              <hr/>
            </center>
          </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

{/* // Export the component back for use in other files */}
export default Results;
