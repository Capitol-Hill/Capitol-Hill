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
      coordinates: {},
      locationFound: false
    };
    this.setQuery = this.setQuery.bind(this);
    this.setResults = this.setResults.bind(this);
    this.setResult = this.setResult.bind(this);
    this.resultFound = this.resultFound.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
  }

  // Sets the state with an argument passed from Searchbar component, and passes up to the Main component.
  setQuery(term) {
    this.setState({term: term});
    this.props.setQuery(term)
  }

  // Sets the state with an argument passed from Searchbar component, and passes up to the Main component.
  setResults(results){
    this.setState({results: results})
    this.props.locationFound(false)
    this.setState({locationFound: false})
  }

  // Sets the state with an argument passed from Searchbar component, and passes up to the Main component.
  setResult(result){
    this.setState({result: result})
    this.props.locationFound(false)
    this.setState({locationFound: false})

  }

  // Sets the state with an argument passed from Searchbar component, and passes up to the Main component.  
  resultFound(boolean){
    this.setState({resultFound: boolean})
    this.props.locationFound(false)
    this.setState({locationFound: false})

  }

  // Sets the state with an argument passed from Searchbar component, and passes up to the Main component.
  setCoordinates(coordinates){
    this.setState({coordinates: coordinates});
    this.props.setCoordinates(coordinates);
    this.setState({locationFound: true});
  }

  render() { 
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
              setQuery = {this.setQuery}
              setResult = {this.setResult}
              setResults = {this.setResults}
              resultFound = {this.resultFound}
              setCoordinates = {this.setCoordinates}
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
