// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Helper functions for making API Calls
var signupHelper = {

//  This function posts new searches to our database.
  postSignup(email, password, address) {
    console.log("im in the signup helper", email, password, address);
    return axios({
      method: 'post',
      url: '/user/signup',
      data: {
        signupEmail: email,
        signupPassword: password,
        address:address
      }
    }).then(response =>{
      console.log("sending response back to loginModal.js from signupHelper")
      return response;
    });

    // return axios.post("/api/saved", { title, url });
  }


};

// We export the API helper
export default signupHelper;
