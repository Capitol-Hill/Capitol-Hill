// Include React
import React from "react";
import MapComponent from "./children/MapComponent"
// Here we include all of the sub-components
import Home from "./Home";

// Creating the Main component
class Main extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      address: "",
      coordinates: {},
      locationFound: false,
    };
    this.setCoordinates = this.setCoordinates.bind(this);
    this.locationFound = this.locationFound.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  // Sets the state with an argument passed from Home component
  setQuery(query){
    this.setState({address: query})
  }
  
  // Sets the state with an argument passed from Home component
  setCoordinates(coordinates){
    this.setState({coordinates: coordinates, locationFound: true})
  }

  // Sets the state with an argument passed from Home component
  locationFound(boolean){
  	this.setState({locationFound: boolean})
  }
  // Here we render the function
  render() {
    var clonedChildren;
      if(this.props.children){
        // we clone the children and send additional props down with it, since these props were sent up from the searchbar component
        clonedChildren = React.cloneElement(this.props.children, {address: this.state.address, coordinates: this.state.coordinates, locationFound: this.state.locationFound});
      }
    return (
      <div>
 		<Home
    setQuery = {this.setQuery}
 		setCoordinates = {this.setCoordinates}
 		homeLocation = {this.state.location}
 		locationFound = {this.locationFound}
 		/>

    {clonedChildren}

      </div>
    
    
    );
  }
}

// Export the component back for use in other files
export default Main;
