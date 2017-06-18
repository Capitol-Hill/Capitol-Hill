import React from "react";
import helpers from "../utils/helpers";

class SavedArticles extends React.Component {
  constructor() {
    super();
    this.state = {
      saved: []
    };
  }
  //The moment the page renders get the Main
  componentDidMount() {
    // Get the saved articles from db
    helpers.getSaved().then(response => {
      console.log("Saved", response.data[0]);
      if (response !== this.state.saved) {
        this.setState({saved: response.data});
      }
    });
  }

  removeSaved(id){
    helpers.removeSaved(id).then( () =>{

      helpers.getSaved().then(response => {
          console.log("Updated Saved history", response.data);
          this.setState({saved: response.data});

      });

    });


    alert("Article removed");
  }

  render(){
    return(
      // <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved -->
      <div className="panel panel-primary">

        {/* <!-- Panel Heading for the retrieved articles box --> */}
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-table"></i>  Saved Articles</strong></h3>
        </div>

        {/* <!-- This main panel will hold each of the resulting articles --> */}
        <div className="panel-body" id="add-section">
           {this.state.saved.map((data,i)=>(
              <div className="well" key={data._id}>
              <div>
                <h3 className="articleHeadline">
                  <a href={data.url}><span className="label label-primary">{i+1}</span><strong> {data.title}</strong></a>
                  <button
                    type="button"
                    className="btn btn-success pull-right"
                    id="saved-remove"
                    onClick={()=>this.removeSaved(data._id)}
                    ><i className="fa fa-search"></i> Remove Article</button>
                </h3>
              </div>
              </div>
          ))}
        </div>
      </div>

    );
  }
}

export default SavedArticles;
