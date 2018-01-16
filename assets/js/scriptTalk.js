// cache the element
var $navBar = $('.nav');
// on scroll
$(window).scroll(function() {
    // get scroll position from top of the page
    var scrollPos = $(window).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('fixed');

    } else{
        $navBar.removeClass('fixed');
    }
});
