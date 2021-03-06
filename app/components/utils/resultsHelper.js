import axios from "axios";

const resultsHelper = {

	congress: [],
    senate: [],


    initializeDatabases: function(cb) {
        $.getJSON("/api/congress", searchResult => {
            this.congress = searchResult;
            $.getJSON("/api/senators", searchResult => {
	            this.senate = searchResult
	            cb();
        	})
        })   
    },

    searchById: function(query) {
        // console.log(query);
        var congressMember = resultsHelper.congress.filter(congressman => {
        	return (congressman.id === query);
        });
        // console.log(congressMember[0])

        if (congressMember[0]){
            return(congressMember[0])
        }

        var senator = resultsHelper.senate.filter(senator => {
            return (senator.id === query)
        });

        // console.log(senator[0]);
        return(senator[0]);
    },

    showVotingHistory: function(id){
        const queryURL = `https://api.propublica.org/congress/v1/members/${id}/votes.json`;
        const key = 'UBLSmu1Daiac66s4Ug33f2vr45lBA1BO8hMNnQ4A';
        return axios.get(queryURL, {
            headers: {'X-API-Key': key}
        }).then( (response)=> {
            return response.data.results[0];
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export default resultsHelper;