$(".hamburger").click(function(){
  $("ul").animate({right: 0});
  $("body").addClass("active");
})

$(".icon-close").click(function(){
  $("ul").animate({right: '-260px'});
  $("body").removeClass("active");
})
