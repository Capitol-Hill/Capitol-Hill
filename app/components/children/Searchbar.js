// Include React
import React from "react";
import searchBarHelper from "../utils/searchBarHelper.js";
import {browserHistory} from "react-router";
// Creating the Results component

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {term: "", result: {}, resultFound: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount(){
      searchBarHelper.initializeDatabases();
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    // console.log(newState)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setTerm(this.state.term);
    const result = searchBarHelper.searchDatabases(this.state.term);
    this.setState({term: ""});
    if (result) {
      // console.log(result);
      this.setState({result: result, resultFound: true});
      this.props.setResult(result);
      this.props.resultFound(true);
      browserHistory.push(`/results/${result.id}/`);
    }
    else {
  browserHistory.push("/notFound");
    }
  }

  render() {
    // console.log(this.state.term)
    // console.log(this.state.result)
    return (

    <form onSubmit={this.handleSubmit}> <div className="create-update-form">
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label searchbar">
        <input type="text" className="mdl-textfield__input search-input" id="term" value={this.state.term} onChange={this.handleChange}/>
        <label className="mdl-textfield__label" htmlFor="search">enter address or search by name</label>
      </div>

      <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored search-button" id="searchbutton" onSubmit={this.handleSubmit}>
        <i className="material-icons">search</i>
      </button>
    </div>
    </form>
    )
  }
};

export default Searchbar;
