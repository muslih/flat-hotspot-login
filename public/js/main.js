(function() {
  $(function() {
    var url;
    url = window.location.pathname;
    console.log(url);
    return $('nav a').each(function() {
      if ($(this).attr('href') === url) {
        return $(this).addClass('active');
      } else {
        return $('#nav li').first(function() {
          return a.addClass('active');
        });
      }
    });
  });

  $(function() {
    $('.popupakses').hide();
    $('.popupsyarat').hide();
    $('.caraAkses').click(function() {
      $('body').css('overflow', 'hidden');
      return $('.popupakses').fadeIn(500);
    });
    $('.syaratKetentuan').click(function() {
      $('body').css('overflow', 'hidden');
      return $('.popupsyarat').fadeIn(500);
    });
    return $('.exit').click(function() {
      $(this).parents('div').fadeOut(500);
      return $('body').css('overflow', 'auto');
    });
  });

  $(function() {
    $('.popupakses > div').scrooly({
      step: 15,
      opacity: 0.5,
      speed: 200
    });
    return $('.popupsyarat > div').scrooly({
      step: 15,
      opacity: 0.5,
      speed: 200
    });
  });

}).call(this);
