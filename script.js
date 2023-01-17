$(".hamburger").click(function() {
  $("body").addClass("active");
  $("button").toggle();
  $("ul").show("fast").animate({
    right: 0
  });
})

$(".icon-close").click(closeMenu);

$(".overlay").click(closeMenu);

function closeMenu(){
  $("body").removeClass("active");
  $("button").toggle();
  $("ul").animate({
    right: '-260px'
  }).hide("fast");
}

