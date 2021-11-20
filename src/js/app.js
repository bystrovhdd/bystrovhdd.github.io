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

})

