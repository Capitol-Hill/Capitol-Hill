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
      votingHistory: [],
      lastRoute: ""
    };
  }

  componentDidMount(){
    // console.log("~~~~~MOUNTED~~~~")
    resultsHelper.initializeDatabases( () => {
      if (this.props.routeParams){
          this.setState({lastRoute: this.props.routeParams})
          const id = this.props.routeParams.id;
          const url = this.props.params.id;
          const result = resultsHelper.searchById(id);
          resultsHelper.showVotingHistory(id).then((results) => {
              const votingHistory =  results.votes;
              this.setState({result: result, urlID: id, votingHistory: votingHistory});
          });
        }
      });
    $('.collapsible').collapsible();
  }

  componentWillReceiveProps(nextProps){

       if (nextProps.routeParams !== this.state.lastRoute){

          this.setState({lastRoute: nextProps.routeParams})
          const id = nextProps.routeParams.id;
          const url = nextProps.params.id;
          const result = resultsHelper.searchById(id);
          resultsHelper.showVotingHistory(id).then((results) => {
              const votingHistory =  results.votes;
              this.setState({result: result, urlID: id, votingHistory: votingHistory});
          });
        }
  }

  render() {
       var voteHistoryDOM = this.state.votingHistory.map( (vote) => {
        var list = [];
        list.push(
          <div className="row">
              <div className="col s12 m12">
                  <div className="card-panel indigo voteBoxes" style={styles.votes}>
                      <span className="white-text">
                          <div>
                          {vote.date} at {vote.time}
                          <br/><h5>{vote.question} </h5>
                          <hr/>
                          <br/>of {vote.description}
                          <br/>
                          <br/> Voted: <div id={vote.position}>{vote.position}</div>
                          <br/> Results:<div id={vote.result}>{vote.result}</div>
                          </div>
                      </span>
                  </div>
              </div>
          </div>);
        
        return (list);
      });


    return (
      <div className = "main-container" >
        <div className="row">
          <div className="col-lg-6">
            <div className="demo-card-image mdl-card mdl-shadow--2dp sen-image">
              <img src={this.state.result.image} style={styles.image}/>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="card-panel contact-box">
            <span className="black-text">
              <h3 className="senatorName" style={styles.headers}></h3>
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
            <span className="black-text" style={styles.headers}>
              <center>
                <h4>{this.state.result.first_name}'s Votes</h4>
                <hr/>
                </center>
              </span>
                <div className="votesPanel">
                {voteHistoryDOM}
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const styles = {
    image: {
      height: "75%",
      width: "75%",
      display: 'block',
      margin: '0 auto',
    },
    votes: {
      width: "100%"
    },
    headers: {
      "font-family": "Raleway"
    },
    Yes : {
      color: "red"
    }

}
{/* // Export the component back for use in other files */}
export default Results;
