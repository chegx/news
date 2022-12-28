$(".hamburger").click(function(){
  $("ul").animate({right: 0});
  $("ul").attr("aria-hidden", "false");
  $("body").addClass("active");
})

$(".icon-close").click(function(){
  $("ul").animate({right: '-260px'});
  $("ul").attr("aria-hidden", "true");
  $("body").removeClass("active");
})
