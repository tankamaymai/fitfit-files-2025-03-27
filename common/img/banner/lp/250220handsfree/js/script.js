$(document).ready(function() {
    // ヘッダーの高さを取得
    var headH = $('.sp_header').outerHeight();
  
    // スムーススクロール
    $('.Mv-info-item[href^="#"]').click(function () {
      var speed = 250;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headH;
      $("html, body").animate({
          scrollTop: position
      }, speed, "swing");
      return false;
    });
  });