import React from "react";


class notFound extends React.Component {

  render() {
    return (
      <div className="main-container">
        <center><h3>Error:</h3><br/>
          <h5>No results found. Please refine search term by searching for your exact address or the exact name of a Senator or Congressman</h5></center>
      </div>
    )
  }
}
export default notFound;
