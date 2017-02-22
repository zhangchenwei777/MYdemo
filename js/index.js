
//轮播
  $(function () {
    var clone=$("#slider .images li").first().clone();
    //console.log(clone);
    $("#slider .images").append(clone);
    var i=0;
    var size=$("#slider .images li").size();
    //console.log(size);
//            点击向左轮播
    $("#slider .btn_l").click(function () {
      i--;
      if(i==-1){
        $("#slider .images").css({left:-(size-1)*1240});
        i=size-2;
      }
      $("#slider .images").stop().animate({left:-i*1240}, 2000);
      $("#slider .num li").eq(i).addClass("on").siblings().removeClass("on");
    });
//            点击向右轮播
    $("#slider .btn_r").click(function () {
      moveR();
    });
//            向右轮播函数
    function moveR() {
      i++;
      if(i==size){
        $("#slider .images").css({left:0});
        i=1;
      }
      $("#slider .images").stop().animate({left:-i*1240}, 2000);
      if(i==size-1){
        $("#slider .num li").eq(0).addClass("on").siblings().removeClass("on");
      }else {
        $("#slider .num li").eq(i).addClass("on").siblings().removeClass("on");
      }
    }
//            鼠标滑过圆点
    $("#slider .num li").hover(function () {
      var index=$(this).index();
      i=index;
      $("#slider .images").stop().animate({left:-i*1240}, 2000);
      $(this).addClass("on").siblings().removeClass("on");
    });
//            定时自动轮播
    var t=setInterval(function () {
      moveR();
    },3000);
//            鼠标滑过图片停止自动轮播
    $("#slider").hover(function(){
        clearInterval(t);},
      function(){
        t=setInterval(function () {
          moveR();
        },3000)
      });
  });

//热品切换v
$(function(){
  $('#prev_left').click(function(e){
    e.preventDefault();
    $('#next_right').css('border-color', '#999');
    $(this).css('border-color', '#ddd');
    var Left = parseFloat($(".hot_banner").css('left'));
    if(Left<=0){
      $(".hot_banner").addClass('hot_banner_right');
    }
  });
  $('#next_right').click(function(e){
    $('#prev_left').css('border-color', '#999');
    $(this).css('border-color', '#ddd');
    e.preventDefault();
    var Left = parseFloat($(".hot_banner").css('left'));
    if (Left<0) {
      $(".hot_banner").removeClass('hot_banner_right');
    }
  });
});

