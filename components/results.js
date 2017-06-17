var React = require("react");


var Results = React.createClass({

render: function() {
<div className = "main-container" > <div className="row">
  <div className="col-lg-6">
    <div className="demo-card-image mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-card--expand"></div>
    </div>
  </div>
  <div className="col-lg-6">

    <div className="card-panel contact-box">
      <span className="black-text">
        <h3>Name {{
            this.name
          }}</h3>
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header">
              <i className="fa fa-share" aria-hidden="true"></i>email</div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="fa fa-mobile" aria-hidden="true"></i>phone</div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">local_post_office</i>address</div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="fa fa-twitter" aria-hidden="true"></i>twitter</div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>

        </ul>
      </span>
    </div>
  </div>
</div> < div className = "row" > <div className="col-lg-12">
  <div className="card-panel">
    <span className="black-text">
      <center>
        <h4>Votes</h4>
        <hr/>
      </center>
    </span>
    </div>
  </div>
</div>
  }
});
