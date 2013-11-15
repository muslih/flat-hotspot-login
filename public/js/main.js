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
      return $('.popupakses').fadeIn(500);
    });
    $('.syaratKetentuan').click(function() {
      return $('.popupsyarat').fadeIn(500);
    });
    return $('.exit').click(function() {
      return $(this).parents('div').fadeOut(500);
    });
  });

}).call(this);
