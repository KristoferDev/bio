$(document).ready(function(){   
   $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      responsive:{
         0:{
            items:1,
            loop:true
         },
         600:{
            items:2,
            loop:true
         },
         991:{
            items:3,
            loop:true
         }
      }
   });
});
