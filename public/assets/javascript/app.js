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

    $(".search-div").animate({ top: "-200px", left: "48px", "font-size": "16px" }, 500);
    $(".logo").animate({ top: "-38px", left: "2px", "font-size": "36px" }, 500);
    // $(".logo").animate({ "font-size": "24px" }, 500);
    $(".searchbar").animate({width: "-=250px"}, 500);
    $(".search-input").animate({height: "-=10px", width: "-=200px", "font-size": "16px"}, 500);
    $(".search-input").val("");
    $("#searchbutton").animate({width: "-=200px"}, 500);

  });

});
