import React from "react";


class loginError extends React.Component {

  render() {
    return (
      <div className="main-container">
        <center><h3>Error:</h3><br/>
          <h5>Invalid email or password. Try Again</h5></center>
      </div>
    )
  }
}
export default loginError;
