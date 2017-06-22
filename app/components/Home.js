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
    };
    this.setTerm = this.setTerm.bind(this);
    this.setResults = this.setResults.bind(this);
    this.setResult = this.setResult.bind(this);
    this.resultFound = this.resultFound.bind(this);
  }

//   componentDidUpdate(prevProps, prevState) {
//
//   if (prevState.searchTerm !== this.state.searchTerm) {
//     console.log("UPDATED");
//
//     helpers.runQuery(this.state.searchTerm).then((data) => {
//       if (data !== this.state.results) {
//         console.log(data);
//
//         this.setState({ results: data });
//       }
//     });
//   }
// }

  setTerm(term) {
  this.setState({term: term});
  }

  setResults(results){
    this.setState({results: results})
  }

  setResult(result){
    this.setState({result: result})
  }

  resultFound(boolean){
    this.setState({resultFound: boolean})
  }

  render() {
    // console.log(this.state.result)
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
