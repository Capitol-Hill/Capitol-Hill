import React from "react";
import {Link} from "react-router";
import MapHelper from "../utils/MapHelper.js"

class MapComponent extends React.Component {
  	constructor() {
    	super();
      
      // this.state = {
      //     congressionalDistrictsMaps: 
      // }
  	}

	componentDidMount() {
    const centerOfAmerica = [40.134335, -96.298589];
    // Create the map, sets the view to the centerOfAmerica
    const congressionalDistrictsMaps = L.map('mapid').setView(centerOfAmerica, 4);

    // Set up the OSM layer
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(congressionalDistrictsMaps);
      MapHelper.getDistricts(congressionalDistrictsMaps);
  }

  	render(){
	    return (<div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--6-phone">
        	    	<div id="mapid" style={styles.map}>
        	    	</div>
        		  </div>);
  	}
}

  const styles = {
      map: {
        height: "800px", 
        width: "100%",
      }
  }
export default MapComponent;
