// Include React
import React from "react";
import searchBarHelper from "../utils/searchBarHelper.js";
import {browserHistory} from "react-router";
// Creating the Results component

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
            this.state = {query: "", result: {}, resultFound: false, coordinates:{}, databases: {senate: [], congress: []}}
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    };

  componentDidMount(){
  // Upon mounting, we do an API request to gather House and Senate members from our databases
      let congressDB = searchBarHelper.initializeCongress().then((congressDB)=>{
          let senateDB = searchBarHelper.initializeSenate().then((senateDB)=>{
          this.setState({databases: {senate: senateDB, congress: congressDB}}); 
          });
      });
  }

  handleChange(event) {
      // Changes the state upon user input
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
  }

  handleSubmit(event) {
      event.preventDefault();
      this.props.setQuery(this.state.query);

      const result = searchBarHelper.searchDatabases(this.state.query);
      const isAddress = searchBarHelper.isAddress(this.state.query);

      searchBarHelper.searchByAddress(this.state.query).then((response)=>{
          let location = response;
          console.log(location)
          let coordinates = location.data.results[0].geometry.location;
          this.setState({coordinates: coordinates});
          this.props.setCoordinates(coordinates);


          if (result) {
              this.setState({result: result, resultFound: true});
              this.props.setResult(result);
              this.props.resultFound(true);
              browserHistory.push(`/results/${result.id}/`)
          } else if (location.data.status === 'OK'){
              browserHistory.push("/mapComponent");
          } else if (result === undefined) {
              browserHistory.push("/notFound");
          }


      })
  }


  render() {
    return (

    <form onSubmit={this.handleSubmit}> <div className="create-update-form">
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label searchbar">
        <input type="text" className="mdl-textfield__input search-input" id="query" value={this.state.query} onChange={this.handleChange}/>
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
