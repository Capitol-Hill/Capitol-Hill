const MapHelper = {

    senators: [],
    congress: [],

    // Imports the GeoJSON documents from our Districts API (imported from MongoDb)
    getDistricts: function(congressionalDistrictsMaps) {
        $.getJSON("/api/districts", data => {
            let geojsonFeature = data;
            
            $.getJSON("/api/congress", congressData => {
                this.congress = congressData;

                    $.getJSON("/api/senators", senateData => {
                        this.senators = senateData;
                        data.forEach(a => a.onEachFeature = this.onEachFeature);

                        L.geoJSON(geojsonFeature, {

                            onEachFeature: this.onEachFeature,
                            style: function(feature) {
                                switch (feature.properties.Party) {
                                    case 'Republican':
                                        return {
                                            color: "#ff0000"
                                        };
                                    case 'Democrat':
                                        return {
                                            color: "#0000ff"
                                        };
                                }
                            }
                    }).addTo(congressionalDistrictsMaps);
                })
            })
        })
    },



    // A function that gets passed to each GeoJSON layer. If that layer is clicked, it pulls up the properties of that layer
    onEachFeature: function(feature, layer) {

        var district = feature.properties.District;
        var districtCode = feature.properties.Code;
        // Spliting the district code will be used for finding the congressman of that district
        var CodeArray = districtCode.split("-");
        var stateID = CodeArray[0];
        // States with one district are called At-Large, such as Alaska At-Large or AK-AL, hence we changed the AL to a 1 so that our database can recognize it.
        var districtID = CodeArray[1] === "AL" ? "1" : CodeArray[1];
        var congressMember;
        var senator;

        congressMember = MapHelper.congress.filter( congressman => {
            return congressman.state === stateID && congressman.district === parseInt(districtID).toString();
        })

        senator = MapHelper.senators.filter( senator => {
            return senator.state === stateID;
        })


        if (!congressMember[0]) {
            layer.bindPopup(`
                    <strong>${senator[0].state} Senators: </strong>
                    <br><img src='${senator[0].image}' style="height: 176px; width: 176px">
                    <br>${senator[0].first_name} ${senator[0].last_name} (${senator[0].party})
                    <br><a href='/results/${senator[0].id}/'>View ${senator[0].first_name} ${senator[0].last_name}'s Legislation Voting History</a>
                    <br><img src='${senator[1].image}' style="height: 176px; width: 176px">
                    <br>${senator[1].first_name} ${senator[1].last_name} (${senator[1].party})
                    <br><a href='/results/${senator[1].id}/'>View ${senator[1].first_name} ${senator[1].last_name}'s Legislation Voting History</a>
                    <br>
                    <hr>
                    <strong>Congressional Representative: </strong>
                    <br>
                    <br><strong>No Current Congressman</strong>
                    `)
        } else {
            layer.bindPopup(`
                <strong>${senator[0].state} Senators: </strong>
                <br><img src='${senator[0].image}' style="height: 176px; width: 176px">
                <br>${senator[0].first_name} ${senator[0].last_name} (${senator[0].party})
                <br><a href='/results/${senator[0].id}/'>View ${senator[0].first_name} ${senator[0].last_name}'s Legislation Voting History</a>
                <br><img src='${senator[1].image}' style="height: 176px; width: 176px">
                <br>${senator[1].first_name} ${senator[1].last_name} (${senator[1].party})
                <br><a href='/results/${senator[1].id}/'>View ${senator[1].first_name} ${senator[1].last_name}'s Legislation Voting History</a>
                <br>
                <hr>
                <strong>Congressional Representative: </strong>
                <br><img src='${congressMember[0].image}' style="height: 176px; width:144px">
                <br>${congressMember[0].first_name} ${congressMember[0].last_name} (${congressMember[0].party})
                <br>District: ${district}
                <br>District Code: ${districtCode}
                <br><a href='/results/${congressMember[0].id}/'>View ${congressMember[0].first_name} ${congressMember[0].last_name}'s Legislation Voting History</a>
                <br>
                `)
            }
        },

    search: function(location) {
        //   console.log(location);
        const geocodeAPI = "e0b0d01ed16c4ac7a6839fee808f7142";
        let locationQuery = location.trim().replace(/ /g, "+");
        const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + locationQuery + "&pretty=1&key=" + geocodeAPI;

        $.get(queryURL, function(err, res) {
            err ? console.log(err) : console.log(res)
            // let newView = [40.134335, -96.298589];
            // congressionalDistrictsMaps = L.map("madpid").setView(newView, 6);
        })
    }
}

export default MapHelper;
