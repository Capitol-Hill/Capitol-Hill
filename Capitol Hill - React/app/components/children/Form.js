import React from "react";
import {Link} from "react-router";
import Results from "./Results";

import helpers from "../utils/helpers";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      startYear: "",
      endYear: "",
      results: [],
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleStartYearChange = this.handleStartYearChange.bind(this);
    this.handleEndYearChange = this.handleEndYearChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQueryChange(event) {
    this.setState({query: event.target.value});
  }

  handleStartYearChange(event) {
    this.setState({startYear: event.target.value});
  }

  handleEndYearChange(event) {
    this.setState({endYear: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log("Query: " + this.state.query);
    console.log("start: " + this.state.startYear);
    console.log("end: " + this.state.endYear);

    // Run the query for the address
    helpers.runParameters(this.state.query, this.state.startYear, this.state.endYear).then(data => {
      console.log("callback recieved",data);
      //if our returned data is not the same from result, then setState
      if (data !== this.state.results) {
        console.log("Articles", data);
        this.setState({results: data});
      }
    });

  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong>
              <i className="fa  fa-list-alt"></i>
              Search Parameters</strong>
          </h3>
        </div>
        <div className="panel-body">

          {/* <!-- Here we create an HTML Form for handling the inputs--> */}
          <form role="form" onSubmit={this.handleSubmit}>

            {/* <!-- Here we create the text box for capturing the search term--> */}
            <div className="form-group">
              <label htmlFor="search">Search Term:</label>
              <input type="text" className="form-control" id="query" value={this.state.query} onChange={this.handleQueryChange} required/>
            </div>

            {/* <!-- Here we capture the Start Year Parameter--> */}
            <div className="form-group">
              <label htmlFor="start-year">Start Year</label>
              <input
                type="text"
                className="form-control"
                id="start-year"
                value ={this.state.startYear}
                onChange={this.handleStartYearChange}/>
            </div>

            {/* <!-- Here we capture the End Year Parameter --> */}
            <div className="form-group">
              <label htmlFor="end-year">End Year</label>
              <input
                type="text"
                className="form-control"
                id="end-year"
                value={this.state.endYear}
                onChange={this.handleEndYearChange}/>
            </div>

            {/* <!-- Here we have our final submit button --> */}
              <button
                type="submit"
                className="btn btn-default"
                id="run-search">
                <i className="fa fa-search"></i>
                Search</button>

          </form>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <br/> {/*This code will dump the result components*/}
            {/* {this.props.children} */}
            <Results render={this.state.results}/>
          </div>
        </div>

      </div>
    );
  }

}

export default Form;
