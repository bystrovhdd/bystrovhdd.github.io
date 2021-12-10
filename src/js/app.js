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
    


    /* Reviews Slider 
    =======================================*/
    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500
    });


    let caseSlider = $("#caseSlider");

    caseSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500,
        
    });


    /* Modal
    =======================================*/
   $('[data-modal]').on('click', function(event) {
       event.preventDefault();

       let modal = $(this).data('modal');
       console.log(modal);

       $('body').addClass('no-scroll');
       $(modal).addClass('show');
   });

   $('[data-modal-close]').on('click', function(event) {
       event.preventDefault();
       let modal = $(this).parents('.modal');

       $('body').removeClass('no-scroll');
       modal.removeClass('show')
   });

   $("#modalPhone").mask("+7(999) 999-9999");
   


    $('form').submit(function(event){
        if($("#modalPhone").val() == "" || $("#modalMail").val() == "") {
            event.preventDefault();
	        alert("Введите телефон или email")
        } else if($("#modalMail").val() == !"@") {
            alert("Это не похоже на email")
        }
    });

    

});

