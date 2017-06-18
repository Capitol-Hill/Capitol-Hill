// Include React
import React from "react";

// Here we include all of the sub-components
import Home from "./children/Home";

// Creating the Main component
class Main extends React.Component {

  // Here we render the function
  render() {
    return (
      <div>
 <Home/>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Main;
