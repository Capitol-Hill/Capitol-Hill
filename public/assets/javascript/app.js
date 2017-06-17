$(document).ready(function() {
  //
  // // Open
  // $('.collapsible').collapsible('open', 0);
  //
  // // Close
  // $('.collapsible').collapsible('close', 0);
  //
  // // Destroy
  // $('.collapsible').collapsible('destroy');


$("#searchbutton").on('click', function() {
    event.preventDefault();

    $(".search-div").animate({ top: "-210px", left: "100px" }, 500);
    $(".logo").animate({ top: "-40px", left: "2px", "font-size": "30px" }, 500);
    // $(".logo").animate({ "font-size": "24px" }, 500);
    $(".searchbar").animate({width: "-=250px"}, 500);
    $(".search-input").animate({width: "-=200px", "font-size": "24px"}, 500);
    $(".search-input").val("");
    $("#searchbutton").animate({width: "-=200px"}, 500);

  });

});
