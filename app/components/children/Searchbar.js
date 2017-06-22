// Include React
import React from "react";
import searchBarHelper from "../utils/searchBarHelper.js";
import {browserHistory} from "react-router";
// Creating the Results component

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {term: "", result: {}, resultFound: false, location:{}};
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
      const isAddress = searchBarHelper.isAddress(this.state.term);

      searchBarHelper.searchByAddress(this.state.term).then((response)=>{
      let location = response.data.results[0].geometry.location;
      this.setState({location: location});
      // console.log(this.state.location);
      this.props.setLocation(location);
      })
      
    if (isAddress === true){
        browserHistory.push("/mapComponent");
    } else if (result === undefined) {
        browserHistory.push("/notFound");
    } else if (result) {
        this.setState({result: result, resultFound: true});
        this.props.setResult(result);
        this.props.resultFound(true);
        browserHistory.push(`/results/${result.id}/`);
    }
  }


  render() {

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
