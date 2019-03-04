/**
 * common.js
 * 작성 예정
 */

var setGnb = function() {
  var idx;

  $('.gnb > li').find('a').on('click', function() {
    idx = $(this).parent().index();
    $('.sub_gnb').removeClass('active');
    $('.sub_gnb').eq(idx).addClass('active');
  });

};

var miniLayer = function() {
  var targets = ['.btn_login.login', '.btn_lang'];

  for (var i = 0; i < targets.length; i++) {
    $(targets[i]).on('click', openLayer);
  }
  function openLayer() {
    $(this).next('.js-layer').toggleClass('open');
    $(this).blur(function() {
      $(this).next('.js-layer').removeClass('open');
    });
  }
};

var mobileGnb = function() {
  $('.btn_hambuger').on('click', function() {
    $(this).toggleClass('open');
    $('.mobile_gnb').toggleClass('open');
    $('body').toggleClass('open');
  });

  $('.mobile_gnb dt a').on('click', function() {
    $(this).closest('dt').toggleClass('on');
    $(this).closest('dl').find('dd').slideToggle();
  });
};

var inputFile = function() {
  $('.file_inp').each(function() {
    var fileName;
    $(this).on('change', function() {
      if (window.FileReader) {
        fileName = $(this)[0].files[0].name;
      } else {
        fileName = $(this).val().split('/').pop().split('\\').pop();
      }

      $(this).siblings('.js-file_name').val(fileName);
    });
  });
};

$(document).ready(function() {
  miniLayer();
  setGnb();
  mobileGnb();
  inputFile();
});
