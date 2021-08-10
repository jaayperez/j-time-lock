/*
* J | 0 TIME LOCK
* Last Update: August 2021
* Author: J
* Copyright (C) 2021 J
* This is a premium product, available exclusively by J.
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Equal height box
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    setTimeout(function(){

        $("#loading").addClass('animated-middle slideOutUp').removeClass('opacity-0');

    },1000);

    setTimeout(function(){

        $("#home").addClass('animated-middle fadeInUp').removeClass('opacity-0');

    },800);

    setTimeout(function(){

        setTimeout(function() {
            $('.text-intro').each(function(i) {
                (function(self) {
                    setTimeout(function() {
                        $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                    },(i*150)+150);
                    })(this);
                });
            }, 0);

    },1000);

    setTimeout(function(){

        $("#home").removeClass('animated-middle fadeInUp');

    },2001);

});

/* ------------------------------------- */
/* 2. Equal height box ................. */
/* ------------------------------------- */

/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
     $(container).each(function() {

       $el = $(this);
       $($el).height('auto')
       topPostion = $el.position().top;

       if (currentRowStart != topPostion) {
         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
           rowDivs[currentDiv].height(currentTallest);
         }
         rowDivs.length = 0; // empty the array
         currentRowStart = topPostion;
         currentTallest = $el.height();
         rowDivs.push($el);
       } else {
         rowDivs.push($el);
         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
     });
}

$(window).load(function() {
    "use strict";
    equalheight('.equalizer');
});

$(window).resize(function(){
    "use strict";
    equalheight('.equalizer');
});

$(document).ready(function(){
    "use strict";
});
