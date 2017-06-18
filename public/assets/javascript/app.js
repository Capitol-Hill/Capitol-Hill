$(document).ready(function() {
  $(".results").hide();
});

//
$("#searchbutton").on('click', function() {
    event.preventDefault();
    var search = $(".search-input").val();
    var first = search.split(' ').slice(0, -1).join(' ');
    var last = search.split(' ').slice(-1).join(' ');
    var searchName = {first: first, last: last};
    $(".search-div").animate({ top: "-200px", left: "48px", "font-size": "16px" }, 500);
    $(".logo").animate({ top: "-38px", left: "2px", "font-size": "36px" }, 500);
    $(".searchbar").animate({width: "-=250px"}, 500);
    $(".search-input").animate({height: "-=10px", width: "-=200px", "font-size": "16px"}, 500);
    // $(".search-input").val("");
    $("#searchbutton").animate({width: "-=200px"}, 500);
    $(".results").show();
    $.post("/results", searchName, function(data) {
      console.log(data)
      $(".senatorName").text(data[0].first_name + " " + data[0].last_name);
      $("#email").text(data[0].phone);
      $("#phone").text(data[0].phone);
      $("#address").text(data[0].office);
      $("#twitter").text("@"+data[0].twitter_account);
      $(".sen-image").css("background-image", "url(data[0].image)")





    });
  });
