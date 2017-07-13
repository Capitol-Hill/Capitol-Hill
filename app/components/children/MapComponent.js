import React from "react";
import {Link} from "react-router";
import MapHelper from "../utils/MapHelper.js"

class MapComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isAddress: false,
      }
    }

  componentDidMount() {
    // If no address is entered, this sets the view of the map to the center of America
    if (this.props.locationFound === false){
    const centerOfAmerica = [40.134335, -96.298589];
    const congressionalDistrictsMaps = L.map('mapid').setView(centerOfAmerica, 4);
    // Set up the OSM layer
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(congressionalDistrictsMaps);
      MapHelper.getDistricts(congressionalDistrictsMaps);
    } 
    // else {
      // console.log(this.props.locationQuery)
      // const locationQuery = this.props.locationQuery;
      // const congressionalDistrictsMaps = L.map('mapid').setView(locationQuery, 12);
      // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(congressionalDistrictsMaps);
      // MapHelper.getDistricts(congressionalDistrictsMaps);
    // }
  }
  componentWillReceiveProps(nextProps){
    // If an adress is searched for, the map must be rendered here because we are recieving props from the Searchbar/Main;
    const isAddress = MapHelper.search(nextProps.address);
    // Coordinates are returned from the Searchbar/Main components
    const coordinates = nextProps.coordinates;
    const congressionalDistrictsMaps = new L.map('mapid');
    // congressionalDistrictsMaps.remove();
    congressionalDistrictsMaps.setView(coordinates, 12);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(congressionalDistrictsMaps);
    MapHelper.getDistricts(congressionalDistrictsMaps);
  }

  // componentShouldReceiveProps(){
  //    const coordinates = this.props.coordinates;
  //     const congressionalDistrictsMaps = L.map('mapid').setView(coordinates, 12);
  //     L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(congressionalDistrictsMaps);
  //     MapHelper.getDistricts(congressionalDistrictsMaps);
  //   }
  
    render(){
      // console.log(this.props.coordinates)
      return (
      <div className="col-lg-12">
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
