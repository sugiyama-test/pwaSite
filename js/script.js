$(document).ready(function () {

  //openingアニメーション
    $(function(){
      $(".mainSite").css("display", "none");
      setTimeout(function() {
          $('.anime').fadeOut();
        }, 1000);
      });

      $(function(){
          $(".mainSite").css({opacity:'0'});
          setTimeout(function(){
            $(".mainSite").css("display", "block");
            $(".mainSite").stop().animate({opacity:'1'},1000);
          },1000);
      });


    // スクロール時の動き処理
    $(function(){
      $('a[href^="#"]').click(function(){
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    });

});