$(".hamburger").click(function(){
  $("ul").css("visibility", "visible").animate({right: 0});
  $("body").addClass("active");
})

$(".icon-close").click(function(){
  $("ul").css("visibility", "hidden").animate({right: '-260px'});
  $("body").removeClass("active");
})
