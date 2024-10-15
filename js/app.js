 
$(document).ready(function(){
 
    $(window).scroll(function(){
        if(this.scrollY>20){
           
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }

        if(this.scrollY >500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    });


    // aos animaton
    AOS.init();

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });


//typin animation script


 let WhatAmI=["Kitt's Mom", "Senior","Best Fnd of Antor","Jaan of anTor","Banalata From Rajshahi" ]

var typed= new Typed(".typing",{
    strings:WhatAmI,
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


var typed= new Typed(".typing-2",{
    strings: WhatAmI,
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
// carousel slider 

$('.owl-carousel').owlCarousel({
    margin:15,
    items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
     responsiveClass:true,
     responsiveRefreshRate:true,

     responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
          
          
        },            
        960:{
            items:2
        },
        1200:{
            items:3
        },
        1920:{
            items:4
        }
    }
    //  center:true

    // nav:true,
    // lazyLoad:true,
  
  
    
    
})








 })









//  VIDEO 1:6m MINUTE FISISHED

 /* <div class="star-icon">
<span><li class="fas fa-star"></li></span>
<span><li class="fas fa-star"></li></span>
<span><li class="fas fa-star"></li></span>
<span><li class="fas fa-star"></li></span>
<span><li class="fas fa-star"></li></span>
</div> */ 