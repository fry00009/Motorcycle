$(document).ready(function() {

  // Circle one

  $(".Circle").click(function() {
    $(".Circle").addClass("expand");
  });

  $(".Circle").dblclick(function() {
    $(".Circle").removeClass("expand");
    $(".Circle").addClass("retract");
    $(".TurnSignal").addClass("Flash");
  });

  // Car

  $(".Circle").click(function() {
    $(".Car").addClass("slide");
  });

 // Circle Moon

 $(".Circle").click(function() {
   $(".Moon").addClass("opacity");
 });

  $(".Circle").click(function() {
    $(".CircleMoon").addClass("opacity");
  });

  $(".CircleMoon").click(function() {
    $(".CircleMoon").removeClass("opacity");
    $(".CircleMoon").addClass("expand");
    $(".Moon").removeClass("opacity");
    $(".Moon").addClass("clean");
    $(".Night").addClass("dark");
  });

  $(".CircleMoon").dblclick(function() {
    $(".CircleMoon").removeClass("expand");
    $(".CircleMoon").addClass("retract");
    $(".CircleMoon").addClass("opacityafter");
    $(".Moon").removeClass("clean");
    $(".Moon").addClass("opacityafter");
    $(".Night").removeClass("dark");
    $(".Night").addClass("darkfade");
  });

// Tailight

  $(".Circle").click(function() {
    $(".CircleTail").addClass("opacity");
  });

  $(".CircleTail").click(function() {
    $(".CircleTail").removeClass("opacity");
    $(".CircleTail").addClass("expand");
  });

  $(".CircleTail").dblclick(function() {
    $(".CircleTail").removeClass("expand");
    $(".CircleTail").addClass("retract");
    $(".CircleTail").addClass("opacityafter");
  });

// Blindspot

  $(".Circle").click(function() {
    $(".Blindspot").addClass("opacity");
  });

  $(".Blindspot").click(function() {
    $(".Blindspot").removeClass("opacity");
    $(".Blindspot").addClass("expand");
  });

  $(".Blindspot").dblclick(function() {
    $(".Blindspot").removeClass("expand");
    $(".Blindspot").addClass("retract");
    $(".Blindspot").addClass("opacityafter");
  });



});
