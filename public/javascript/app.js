$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".carousel").carousel();
  $(".parallax").parallax();
  $(".tabs").tabs();
  $(".modal").modal();
});

$("#signup").on("click", function(e) {
  e.preventDefault();
  $(".logged-in").show();
  $(".logged-out").hide();
});

$("#signin").on("click", function(e) {
  e.preventDefault();
  $(".logged-in").show();
  $(".logged-out").hide();
});

$("#logout").on("click", function(e) {
  e.preventDefault();
  $(".logged-in").hide();
  $(".logged-out").show();
});
