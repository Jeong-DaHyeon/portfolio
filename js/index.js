

$(document).ready(function(){

  let prgressState = false;
  $(window).scroll(function(){
    let posTop = $(window).scrollTop();
    if(posTop>600){
      if(prgressState==false){
        prgressState = circleProgress();
      }
    }
  });

  let swiper = new Swiper(".skill_station", {
        effect: "cards",
        grabCursor: true,
  });

  var swiper1 = new Swiper(".banner_station", {
       slidesPerView: 3,
       spaceBetween: 300,
       loop: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
     });

});
