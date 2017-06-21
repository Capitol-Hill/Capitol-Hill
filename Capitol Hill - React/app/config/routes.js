// Include the React library
import React from "react";

// Include the react-router module
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import { Switch } from 'react-router-dom'; 

// // Include the Route component for displaying individual routes
// var Route = router.Route;
//
// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// var Router = router.Router;
//
// // Include the hashHistory prop to handle routing client side without a server
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashArticle = router.hashArticle;
//
// // Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

// Reference the high-level components
import Main from "../components/Main";
import Home from "../components/Home";
import MapComponent from "../components/children/MapComponent";
import Results from "../components/Results";

// Export the Routes
const routes = (

  // The high level component is the Router component
  	<Router history={browserHistory}>
    	<Route path="/" component={Main} >
      		{/* <Route path="Home" component={Home} /> */}
      		<Switch>
	        	<Route path="MapComponent" component={MapComponent} />
	        	<Route path="results/" component={Results} />
	        	<Route path="results/:id/" component={Results} />
        	</Switch>
  		</Route>
	</Router>
);

export default routes;
