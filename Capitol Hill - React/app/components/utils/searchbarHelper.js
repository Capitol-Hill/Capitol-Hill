import axios from "axios";
// import mongojs from "mongojs";
// import mongoose from "mongoose";

const searchBarHelper = {

    congress: [],
    senate: [],

    // this.initializeDatabases = this.initializeDatabases.bind(this);

    initializeDatabases: function() {
        $.getJSON("/api/congress", searchResult => {
            this.congress = searchResult;
        })

        $.getJSON("/api/senators", searchResult => {
            this.senate = searchResult
        })
    },

    searchDatabases: function(query) {
      // console.log(query) /
        var first = query.split(' ').slice(0)
        // console.log(first[0])
        var last = query.split(' ').slice(1);
        // console.log(last[0])

        var congressMember = searchBarHelper.congress.filter(congressman => {
            return (congressman.last_name === last[0] && congressman.first_name === first[0])
        });
        // console.log(congressMember[0])
        if (congressMember[0]){
            return(congressMember[0]);
        }

        var senator = searchBarHelper.senate.filter(senator => {
            return (senator.last_name === last[0] && senator.first_name === first[0])
        });

        return(senator[0])
    }
}

export default searchBarHelper;