(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".homepage-slides-area").owlCarousel({
        	items:1,
        	loop:true,
        	dots:true,
        	dotsData:true,
        	nav:true,
        	navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	