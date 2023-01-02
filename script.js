$(".hamburger").click(function() {
  $("body").addClass("active");
  $(this).toggle();
  $("ul").show("fast").animate({
    right: 0
  });
})

$(".icon-close").click(function() {
  $("body").removeClass("active");
  $(".hamburger").toggle();
  $("ul").animate({
    right: '-260px'
  }).hide("fast");
})
