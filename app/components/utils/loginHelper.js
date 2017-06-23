// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Helper functions for making API Calls
var loginHelper = {


//  This function posts new searches to our database.
  postLogin(email, password) {
    console.log("im in the login helper", email, password);
    return axios({
      method: 'post',
      url: '/user/login',
      data: {
        loginEmail: email,
        loginPassword: password
      }
    }).then(response =>{
      console.log("sending response back to loginModal.js from LOGIN helper", response);

      return response;
    }).catch(error=>{
      console.log(error);
    });

    // return axios.post("/api/saved", { title, url });
  }


};

// We export the API helper
export default loginHelper;
