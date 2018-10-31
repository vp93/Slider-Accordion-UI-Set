$(function() {
  $("#tabs").tabs({
    show: { effect: "blind", direction: "right", duration: 100 }
  });
  $("#accordion").accordion();

  var btn = $("#accordion li a");
  var c = 1;

  var img = $("#tabs > img");

  $(btn).on("click", function() {
    $(btn).removeClass("active");
    $(btn)
      .parent()
      .find(".addon")
      .removeClass("fadein");

    $(this).addClass("active");
    $(this)
      .parent()
      .find(".addon")
      .addClass("fadein");
  });
});

/* that's all folks */