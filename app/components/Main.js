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
      location: {},
      locationFound: false,
    };
    this.setHomeLocation = this.setHomeLocation.bind(this);
    this.locationFound = this.locationFound.bind(this);
  }

  setHomeLocation(location){
    this.setState({location: location, locationFound: true})
  }

  locationFound(boolean){
  	this.setState({locationFound: boolean})
  }
  // Here we render the function
  render() {
    // console.log(this.state.location)
  	// if (this.state.locationFound === true){
  	//    var dom = <MapComponent locationQuery={this.state.location}/>
  	// }  
    var clonedChildren;
      if(this.props.children){
        clonedChildren = React.cloneElement(this.props.children, {locationQuery: this.state.location, locationFound: this.state.locationFound});
      }
    return (
      <div>
 		<Home
 		setHomeLocation = {this.setHomeLocation}
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
