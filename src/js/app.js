$(function(){

    /* Nav Toggle on mobile
    ======================================*/

    let navToggle = $('#navToggle')
    let nav = $('#nav')

    navToggle.on('click', function(event) {
        event.preventDefault()

        $(this).toggleClass('active')
        nav.toggleClass('show')
    });



    /* Smooth Scroll  to section 
    ======================================*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault()

        let scrollEl = $(this).data('scroll')
        let scrollElPos = $(scrollEl).offset().top
        
        $("html, body").animate({
            scrollTop: scrollElPos
        }, 1000)

    })
    


    /* Reviews Slider */
    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500
    });



   

})

