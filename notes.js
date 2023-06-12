
$(document).ready(function() {
  var getslideHeight = $('.slide.active').height();

  $('.slides').css({
    height: getslideHeight
  });

  function calcslideHeight() {
    getslideHeight = $('.slide.active').height();

    $('.slides').css({
      height: getslideHeight
    });
  }

  function animateContentColor() {
    var getslideColor = $('.slide.active').attr('slide-color');

    $('body').css({
     
    });

    $('.title').css({
      
    });

    $('.btn').css({
      
    });
  }

  var slideItem = $('.slide'),
    slideCurrentItem = slideItem.filter('.active');

  $('#next').on('click', function(e) {
    e.preventDefault();

    var nextItem = slideCurrentItem.next();

    slideCurrentItem.removeClass('active');

    if (nextItem.length) {

      slideCurrentItem = nextItem.addClass('active');
    } else {
      slideCurrentItem = slideItem.first().addClass('active');
    }

    calcslideHeight();
    animateContentColor();
  });

  $('#prev').on('click', function(e) {
    e.preventDefault();

    var prevItem = slideCurrentItem.prev();

    slideCurrentItem.removeClass('active');

    if (prevItem.length) {
      slideCurrentItem = prevItem.addClass('active');
    } else {
      slideCurrentItem = slideItem.last().addClass('active');
    }

    calcslideHeight();
    animateContentColor();
  });

  // Ripple
  $('[ripple]').on('click', function(e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function() {
      rippleDiv.remove();
    }, 1900);
  });
});


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

