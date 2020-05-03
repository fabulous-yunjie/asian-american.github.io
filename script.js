$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".who-container").offset().top},
        'slow');
});