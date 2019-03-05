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

var setDatePicker = function() {
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
    monthNames: ['1월', '2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  });
  $('.input_date').datepicker();
};

var setAccordian = function() {
  $('.js-accordian').each(function() {
    $(this).on('click', function() {
      $(this).closest('.accordian_inp').toggleClass('open');
      $(this).closest('.accordian_inp').find('.inp_wrap').slideToggle();
    });
var popUp = function(){
  $('.js-popup-btn').on('click',function(){
    $(this).next('.popup').addClass('open');
  });
  $('.btn_close_pop').on('click', function(){
    $(this).closest('.popup').removeClass('open');
  });
};

$(document).ready(function() {
  miniLayer();
  setGnb();
  mobileGnb();
  if ($('.file_inp').length) {
    inputFile();
  }
  if ($('.input_date').length) {
    setDatePicker();
  }
  setAccordian();
  inputFile();
  popUp();
});
