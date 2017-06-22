import React from "react";
import {Link} from "react-router";


import Results from "./Results";
import LoginModal from "./children/LoginModal";
import Searchbar from "./children/Searchbar";
import MapComponent from "./children/MapComponent";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      results: [],
      result: {},
      resultFound: false,
      location: {},
      locationFound: false
    };
    this.setTerm = this.setTerm.bind(this);
    this.setResults = this.setResults.bind(this);
    this.setResult = this.setResult.bind(this);
    this.resultFound = this.resultFound.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  setTerm(term) {
  this.setState({term: term});
  }

  setResults(results){
    this.setState({results: results})
    this.props.locationFound(false)
    this.setState({locationFound: false})
  }

  setResult(result){
    this.setState({result: result})
    this.props.locationFound(false)
    this.setState({locationFound: false})

  }

  resultFound(boolean){
    this.setState({resultFound: boolean})
    this.props.locationFound(false)
    this.setState({locationFound: false})

  }

  setLocation(location){
    this.setState({location: location});
    this.props.setHomeLocation(location);
    this.setState({locationFound: true});
  }

  render() {
    // console.log(this.props.children)
 
    return (

      <div>
        <LoginModal/>
        <div className="banner">
          <Link to="/"><div className="logo" style={styles.logo}>Capitol Hill
            <i className="fa fa-flag" aria-hidden="true"></i>
          </div></Link>
        </div>
        <div className="main-container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="row">
            <div className="col-lg-12 search-div">

              <Searchbar
              setTerm = {this.setTerm}
              setResult = {this.setResult}
              setResults = {this.setResults}
              resultFound = {this.resultFound}
              setLocation = {this.setLocation}
              />

            </div>
            <div className="row results">
                {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
    logo: {
      color: "black"
    }
}

export default Home;
