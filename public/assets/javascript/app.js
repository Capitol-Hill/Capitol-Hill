$(document).ready(function() {
    $(".results").hide();
});


$("#searchbutton").on('click', function() {
    event.preventDefault();
    var first;
    var last;
    var searchName;
    var address;
    //
    var search = $(".search-input").val();

    if (isNaN(parseInt(search))) {
        first = search.split(' ').slice(0, -1).join(' ');
        last = search.split(' ').slice(-1).join(' ');
        searchName = { first: first, last: last };
        console.log("Not an address")
    }


    //
    $(".search-div").animate({ top: "-215px", left: "60px", "font-size": "16px" }, 500);
    $(".logo").animate({ top: "-38px", left: "2px", "font-size": "40px" }, 500);
    $(".searchbar").animate({ width: "-=250px" }, 500);
    $(".search-input").animate({ height: "-=10px", width: "-=200px", "font-size": "16px" }, 500);
    $("#searchbutton").animate({ width: "-=200px" }, 500);
    $(".results").show();
    $.post("/results", searchName, function(data) {
        console.log(data)
        $(".senatorName").text(data[0].first_name + " " + data[0].last_name);
        $("#email").text(data[0].phone);
        $("#phone").text(data[0].phone);
        $("#address").text(data[0].office);
        $("#twitter").text("@" + data[0].twitter_account);
        $(".sen-image").css("background-image", 'url(data[0].image)')
            // $(".search-input").val("");


    });
});


// Login/Register Buttons
$("#login-submit").on("click", function(event) {
    var email = $("#login-email").val().trim();
    var password = $("#login-password").val().trim();


});

$("#register-submit").on("click", function(event) {
    var email = $("#new-email").val().trim();
    var address = $("#new-address").val().trim();
    var password = $("#new-password").val().trim();
    var confirmation = $("#new-confirm").val().trim();
    var passwordNotSame = false;

    if (password != confirmation) {
        passwordNotSame = false;
        alert("The passwords do not match");
    } else {
        passwordNotSame = true;
    }

    if (email === null || address === null || password === null || confirmation === null || passwordNotSame === false) {
        alert("Fill out all the fields");
        return;
    }

    // Check for duplicate email
    $.post("/users", { email: email }, function(data) {
        if (data.length === 0) {
            var newUserObj = {
                    email: email,
                    address: address,
                    password: password
                }
                // Store user information
            $.post("/users/new", newUserObj, function(dats) {
                window.location.href = "index.html";
            });
        }
    })


})