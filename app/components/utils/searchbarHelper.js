import axios from "axios";
// import geocoder from "geocoder";

const searchBarHelper = {

    congress: [],
    senate: [],

    initializeCongress: function() {
        // initializes and sets congressional database
        return $.getJSON("/api/congress", searchResult => {
            this.congress = searchResult;
        })
    },

    initializeSenate: function() {
        // initializes and sets senate database
        return $.getJSON("/api/senators", searchResult => {
            this.senate = searchResult;
        })
    },

    searchDatabases: function(query) {
        // initializes and sets congressional database
        var first = query.split(' ').slice(0)
        var last = query.split(' ').slice(1);

        var congressMember = searchBarHelper.congress.filter(congressman => {
            return (congressman.last_name.toLowerCase() === last[0].toLowerCase() && congressman.first_name.toLowerCase() === first[0].toLowerCase())
        });
        // console.log(congressMember[0])
        if (congressMember[0]){
            return(congressMember[0]);
        }

        var senator = searchBarHelper.senate.filter(senator => {
            return (senator.last_name.toLowerCase() === last[0].toLowerCase() && senator.first_name.toLowerCase() === first[0].toLowerCase())
        });

        return(senator[0])
    },

    searchByAddress: function(query){
        const address = query.replace(/ /g, "+");
        const apiKey = 'AIzaSyDghggj9A-EiGq0oE_C7z6rYASe2OTe4_4';
        let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;

        return axios.get(queryURL).then((response)=>{
            // console.log(response.data.results[0].geometry.location)
            return(response)
        })
    },


    isAddress: function(query){
        return (/\d/).test(query);
    }




}








export default searchBarHelper;