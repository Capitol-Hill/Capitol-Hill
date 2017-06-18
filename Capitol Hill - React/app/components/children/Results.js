// Include React
import React from "react";
import helpers from "../utils/helpers";
// Creating the Results component

class Results extends React.Component{
  constructor() {
    super();
  }

  saveArticle(title, url){
    console.log("You click to save ", title, url);
    helpers.postSaved(title,url);
  alert("Article saved!");
  }
  // Here we render the function
  render() {
    return (

      // <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved -->
      <div className="panel panel-primary">

        {/* <!-- Panel Heading for the retrieved articles box --> */}
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-table"></i>Top Articles</strong></h3>
        </div>

        {/* <!-- This main panel will hold each of the resulting articles --> */}
        <div className="panel-body" id="add-section">

          {this.props.render.map((data,i)=> (
             <div className="well" key={i}>
               <div>
                 <h3 className="articleHeadline">
                 <a href={data.url}><span className="label label-primary">{i}</span><strong>{data.title}</strong></a>
                 <button
                   type="button"
                   className="btn btn-success pull-right"
                   id="save"
                   onClick={() => this.saveArticle(data.title, data.url)}
                   ><i className="fa fa-search"></i> Save Article</button>
               </h3>
             </div>
             </div>

         ))}

        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Results;
