$(document).ready(function () {

    $('.menu1').hover(function() {
        // preciso procurar dentro de li
        // $(this).find('.menu2').show();
        $(this).find('.menu2').slideDown();
    }, function() {
        // $(this).find('.menu2').hide();
        $(this).find('.menu2').slideUp();
    });

    $( "#btn-about" ).click(function() {
        $( "#p-about" ).toggle( "slow", function() {
          // Animation complete.
        });
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    var $doc = $('html, body');
    $('').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
        return false;
    });

});

