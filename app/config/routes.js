// Include the React library
import React from "react";

// Include the react-router module
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import { Switch } from 'react-router-dom';

// Reference the high-level components
import Main from "../components/Main";
import Home from "../components/Home";
import MapComponent from "../components/children/MapComponent";
import Results from "../components/Results";
import notFound from "../components/children/notFound";


// Export the Routes
const routes = (

  // The high level component is the Router component
  	<Router history={browserHistory}>
    	<Route path="/" component={Main} >
      		{/* <Route path="Home" component={Home} /> */}
      		<Switch>
	        	<Route path="MapComponent" component={MapComponent}/>
	        	<Route path="results/" component={Results} />
	        	<Route path="results/:id/" component={Results} />
            <Route path="notFound" component={notFound} />
        	</Switch>
  		</Route>
	</Router>
);

export default routes;
