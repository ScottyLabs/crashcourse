// cache the element
var $navBar = $('.nav');
var $register = $('.register');
var $about = $('.about');
var $schedule = $('.schedule');
var $dots = $('.dots');
// find original navigation bar position
var navPos = $navBar.offset().top;
var register1 = $('#register1').offset().top;
var about1 = $('#about1').offset().top;
var about2 = $('#about2').offset().top;
var about3 = $('#about3').offset().top;
var about4 = $('#about4').offset().top;
var about5 = $('#about5').offset().top;
var about6 = $('#about6').offset().top;
var schedule1 = $('#schedule1').offset().top;
// on scroll
$(window).scroll(function() {
    // get scroll position from top of the page
    var scrollPos = $(window).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('fixed');
        $register.addClass('changeButton');
        $dots.css({"visibility":"visible","opacity":1});
        $('.wrapper .anchor').each(function(i) {
           if ($(this).offset().top <= scrollPos+40) {
               $('.dots li.active').removeClass('active');
               $('.dots li').eq(i).addClass('active');
           }
        });
        if (about1 <= scrollPos+60 && schedule1 > scrollPos+60){
          $register.removeClass('changeButton');
          $about.addClass('changeButton');
          $schedule.removeClass('changeButton');
        }
        if (schedule1 <= scrollPos+60){
          $about.removeClass('changeButton');
          $schedule.addClass('changeButton');
          $register.removeClass('changeButton');
        }
        if (scrollPos >= navPos && about1 > scrollPos+60){
          $about.removeClass('changeButton');
          $schedule.removeClass('changeButton');
          $register.addClass('changeButton');
        }

    } else{
        $navBar.removeClass('fixed');
        $register.removeClass('changeButton');
        $dots.css({"visibility":"hidden","opacity":0});
        $('.active').removeClass('active')
    }

});



//DOTS ANIMATION
$('.dots li').on('click', function(){
  var scrollAnchor = $(this).attr('data-scroll')
      scrollPoint = $('span[id="' + scrollAnchor + '"]').offset().top;

  $('body,html').animate({
    scrollTop: scrollPoint
  }, 500);
  return false;
});

$('li a').on('click', function(){
  var scrollAnchor = $(this).attr('class')
      scrollPoint = $('span[id="' + scrollAnchor + '"]').offset().top;

  $('body,html').animate({
    scrollTop: scrollPoint
  }, 500);
  return false;
});
$('li span').on('click', function(){
  var scrollAnchor = $(this).attr('data-scroll')
      scrollPoint = $('span[id="' + scrollAnchor + '"]').offset().top;

  $('body,html').animate({
    scrollTop: scrollPoint
  }, 500);
  return false;
});
