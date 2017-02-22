/**
 * Created by bjwsl-001 on 2016/10/29.
 */
//导航中的下拉菜单
$(function(){
  //导航下来
  $('#phone-type li p a').mouseover(function(){$(this).parent().next().animate({"height":"186px"},1000)
  });
  $('#phone-type li p a').mouseout(function(){
    $(this).parent().next().animate({"height":"0"},1000)
  });
});


//登录和用户名之间切换
$(function(){
  var name = sessionStorage.getItem('logonName');
  if(name!=null){
    $("#user").html(`
        <li>
          <a href="#">我的订单</a>
        </li>
        <li>
          <a href="#">欢迎回来 ${name}</a>
        </li>
        <li>
          <a href="shopcar.html">${name}的购物车</a>
        </li>
        <li>
          <a href="#" id="exit">退出</a>
        </li>
     `);
    }
    $('#exit').click(function(e){
     e.preventDefault();
     sessionStorage.removeItem('logonName');
     $("#user").html(`
      <li>
        <a href="#">我的订单</a>
      </li>
      <li>
        <a href="land.html">登陆</a>
      </li>
      <li>
        <a href="#">注册</a>
      </li>
      <li>
        <a href="#">购物车</a>
      </li>
     `);
  });
});
