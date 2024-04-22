$(document).ready(function(){
    //banner owl carousel
    $("#productsbanner .owl-carousel").owlCarousel({
        dots:true,
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoPlayHoverPause:true
    });
    // top sales owl carousel
    $("#top-sales .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0 : {
                items:1
            },
            480 : {
                items:2
            },
            600 : {
                items:3
            },
            800 : {
                items:4
            },
            1000 : {
                items:5
            }
        }
    });
    // special price
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });
    
    // filter items on button click
    $(".btn-group-sm").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    });
    // new owl carousel
    $("#new-phone .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0 : {
                items:1
            },
            480 : {
                items:2
            },
            600 : {
                items:3
            },
            800 : {
                items:4
            },
            1000 : {
                items:5
            }
        }
    });
    // latest blog owl carousel
    $("#latest-blog .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0 : {
                items:1
            },
            768 : {
                items:2
            },
            1000 : {
                items:3
            }
        }
    });
    //product qty up and down funcation
    let $qty_up = $(".qty .qty_up");
    let $qty_down = $(".qty .qty_down");
    // let $qty_input = $(".qty .qty_input");

    $qty_up.click(function(e){
        $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($qty_input.val()>=1 && $qty_input.val()<9){
            $qty_input.val(function(i,oldval){
                return ++oldval;
            });
        }
    });
     $qty_down.click(function(e){
        $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($qty_input.val()>1 && $qty_input.val()<=10){
            $qty_input.val(function(i,oldval){
                return --oldval;
            })
        }
     });
});
    
