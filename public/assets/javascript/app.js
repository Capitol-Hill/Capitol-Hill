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

    if ( isNaN(parseInt(search)) ) {
      first = search.split(' ').slice(0, -1).join(' ');
      last = search.split(' ').slice(-1).join(' ');
      searchName = {first: first, last: last};
      console.log("Not an address")
}   


//
    $(".search-div").animate({ top: "-215px", left: "60px", "font-size": "16px" }, 500);
    $(".logo").animate({ top: "-38px", left: "2px", "font-size": "40px" }, 500);
    $(".searchbar").animate({width: "-=250px"}, 500);
    $(".search-input").animate({height: "-=10px", width: "-=200px", "font-size": "16px"}, 500);
    $("#searchbutton").animate({width: "-=200px"}, 500);
    $(".results").show();
    $.post("/results", searchName, function(data) {
      console.log(data)
      $(".senatorName").text(data[0].first_name + " " + data[0].last_name);
      $("#email").text(data[0].phone);
      $("#phone").text(data[0].phone);
      $("#address").text(data[0].office);
      $("#twitter").text("@"+data[0].twitter_account);
      $(".sen-image").css("background-image", 'url(data[0].image)')
      // $(".search-input").val("");






    });
  });
