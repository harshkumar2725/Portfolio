$('.portfolio-button').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.portfolio').offset().top
    }, 800); // Adjust the scroll speed as needed (in milliseconds)
});
