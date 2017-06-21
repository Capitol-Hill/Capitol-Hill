// Include React
import React from "react";
import resultsHelper from "./utils/resultsHelper";
// Creating the Results component

class Results extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
      result: {},
      urlID: "",
      votingHistory: {}
    };
  }

  componentDidMount(){
    // console.log("~~~~~MOUNTED~~~~")
    resultsHelper.initializeDatabases( () => {
      if (this.props.routeParams){  
          const id = this.props.routeParams.id;
          const url = this.props.params.id;
          const result = resultsHelper.searchById(id);
          const votingHistory = resultsHelper.showVotingHistory(id, (results) => {
              console.log(results)
          });
          console.log(votingHistory)
          this.setState({result: result, urlID: id, votingHistory: votingHistory});
        }
      });
  }

  render() {
    // console.log(this.state.votingHistory)
    return (
      <div className = "main-container" >
        <div className="row">
          <div className="col-lg-6">
            <div className="demo-card-image mdl-card mdl-shadow--2dp sen-image">
              <img src={this.state.result.image} style={style}/>
              <div className="mdl-card__title mdl-card--expand">
              </div>
            </div>
          </div>
          <div className="col-lg-6">

          <div className="card-panel contact-box">
            <span className="black-text">
              <h3 className="senatorName"></h3>
             <h3>{this.state.result.first_name} {this.state.result.last_name}</h3>
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-share" aria-hidden="true"></i>email</div>
                  <div className="collapsible-body">
                    <span id="email"><a target="_blank" href={this.state.result.contact_form}>Send {this.state.result.first_name} {this.state.result.last_name} an email </a></span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-mobile" aria-hidden="true"></i>phone</div>
                  <div className="collapsible-body">
                    <span id="phone">{this.state.result.phone}</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">local_post_office</i>address</div>
                  <div className="collapsible-body">
                    <span id="address">{this.state.result.office}</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-twitter" aria-hidden="true"></i>twitter</div>
                  <div className="collapsible-body">
                    <a target="_blank" id="twitter" href={"https://twitter.com/" + this.state.result.twitter_account}>@{this.state.result.twitter_account}</a>
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

const style = {
    height: "100%",
    width: "100%",
}
{/* // Export the component back for use in other files */}
export default Results;
