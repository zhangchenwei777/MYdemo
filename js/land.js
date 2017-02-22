/**
 * Created by bjwsl-001 on 2016/11/2.
 */
//登录方式切换
$(function(){
  $('#id_land').click(function(e){
    e.preventDefault();
    $('.form_id').removeClass('disnone').addClass('disblock');
    $('.form_id').siblings('div').removeClass('disblock').addClass('disnone')
  });
  $('#phone_land').click(function(e){
    e.preventDefault();
    $('.form_phone').removeClass('disnone').addClass('disblock');
    $('.form_phone').siblings('div').removeClass('disblock').addClass('disnone');
});
});
//登录注册切换
$(function(){
  $('.denglu').click(function(e){
    e.preventDefault();
    $('#from_dlu').removeClass('disnone').addClass('disblock');
    $('#from_dlu').siblings('.from_all').removeClass('disblock').addClass('disnone')
  });
  $('.zhuce').click(function(e){
    e.preventDefault();
    $('#from_zce').removeClass('disnone').addClass('disblock');
    $('#from_zce').siblings('.from_all').removeClass('disblock').addClass('disnone');
  });
});
//点击获得验证码
$(function(){
  var timer=null;
  var num=60;
  var btn=document.getElementById("btn_yzm");
  btn.onclick=function(){
    btn.disabled=true;//点击后禁用按钮
    timer=setInterval(function(){
      //console.log(this);这里就不能用this了，否则this代表的是window
      num--;
      btn.value=num+"秒后重新发送";
      if(num===0){
        btn.disabled=false;//当num为0是，按钮不再禁用
        btn.value="点击发送验证码";//按钮里的文字回复
        clearInterval(timer);//清除间歇定时器
        num=60;//下次点击时礽从4开始
      }
    },1000)
  }
});

//验证码
$(function(){
  var ctx = vcode.getContext('2d');

  var w = vcode.width;
  var h = vcode.height;

  //填充一个矩形做背景
  ctx.fillStyle = rc(180,240);
  ctx.fillRect(0,0,w,h);

  //绘制5个随机字符
  var pool = 'ABCDEFGHJKLMNPQRSTWXY3456789';
  ctx.textBaseline = 'bottom';
  for(var i=0; i<5; i++){
    var x = 18*i+5;   //文本的X
    var y = h;        //文本的Y
    var c = pool[rn(0,pool.length)];

    ctx.fillStyle = rc(30,180); //文本颜色
    ctx.font = rn(20,30)+'px Arial'; //文本大小
    var deg = rn(-45, 45);//文本旋转
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI/180);
    ctx.fillText(c, 0, 0);
    ctx.rotate(-deg * Math.PI/180);
    ctx.translate(-x, -y);
  }

  //绘制5条干扰线
  for(var i=0; i<5; i++){
    ctx.beginPath();
    ctx.moveTo(rn(0,w), rn(0,h));
    ctx.lineTo(rn(0,w), rn(0,h));
    ctx.strokeStyle = rc(30,180);
    ctx.stroke();
  }

  //绘制50个杂色点——半径为1的圆
  for(var i=0; i<50; i++){
    ctx.beginPath();
    ctx.arc(rn(0,w),rn(0,h),1,0,2*Math.PI);
    ctx.fillStyle = rc(30,230);
    ctx.fill();
  }


  //获取一个指定范围内随机数 random number
  function rn(min, max){
    return Math.floor( Math.random()*(max-min)+min );
  }
  //获取一个指定范围内随机颜色 random color
  function rc(min, max){
    var r = rn(min, max);
    var g = rn(min, max);
    var b = rn(min, max);
    return `rgb(${r},${g},${b})`;
  }
});

//验证注册中心
$('#dl_uname').next("span").removeClass("hidden").addClass("msg-default");
dl_uname.onblur=function(){
  //console.log(this.validity);
  if(this.validity.valueMissing){
    this.setCustomValidity("用户名不能为空");
    $(this).next("span").html("用户名不能为空").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  }else if(this.validity.tooShort){
    this.setCustomValidity("用户名不能少于8位");
    $(this).next("span").html("用户名不能少于8位").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  }else{this.setCustomValidity("");
    $(this).next("span").html("ok").removeClass("msg-default").addClass("msg-succ");
  }
}
dl_upwd.onfocus=function(){
  $(this).next("span").removeClass("hidden").removeClass("msg-error").addClass("msg-default");
}
dl_upwd.onblur=function(){
  if(this.validity.valueMissing){
    this.setCustomValidity("密码不能为空");
    $(this).next("span").html("密码不能为空").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  }else if(this.validity.tooShort){
    this.setCustomValidity("密码不能少于6位");
    $(this).next("span").html("密码不能少于6位").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  }else{this.setCustomValidity("");
    $(this).next("span").html("ok").removeClass("msg-default msg-error").addClass("msg-succ");}
}
dl_tpwd.onfocus=function(){
  $(this).next("span").removeClass("hidden").removeClass("msg-error").addClass("msg-default");
}
dl_tpwd.onblur=function(){
  var twd = $('#dl_upwd').val();
  console.log(this.value);
  if(this.validity.valueMissing){
    this.setCustomValidity("密码不能为空");
    $(this).next("span").html("密码不能为空").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  }else if(this.value!=twd){
    this.setCustomValidity("两次密码不相同");
    $(this).next("span").html("两次密码不相同").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  }else{this.setCustomValidity("");
    $(this).next("span").html("ok").removeClass("msg-default msg-error").addClass("msg-succ");}
}
umail.onfocus=function(){
  $(this).next("span").removeClass("hidden").removeClass("msg-error").addClass("msg-default");
}
umail.onblur=function() {
  //console.log(this.validity);
  if (this.validity.valueMissing) {
    this.setCustomValidity("邮箱地址不能为空");
    $(this).next("span").html("邮箱地址不能为空").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  } else if (this.validity.typeMismatch) {
    this.setCustomValidity("邮箱格式不正确，请正确输入");
    $(this).next("span").html("邮箱格式不正确，请正确输入").removeClass("msg-default").removeClass("msg-succ").addClass("msg-error");
  }else{this.setCustomValidity("");
    $(this).next("span").html("ok").removeClass("msg-default msg-error").addClass("msg-succ");
  }
}
uphone.onfocus=function(){
  $(this).next("span").removeClass("hidden").removeClass("msg-error").addClass("msg-default");
}
uphone.onblur=function(){
  //console.log(this.validity);
  if(this.validity.valueMissing){
    this.setCustomValidity("手机号不能为空");
    $(this).next("span").html("手机号不能为空").removeClass("msg-default").addClass("msg-error");
  }else if(this.validity.typeMismatch){
    this.setCustomValidity("手机号不正确，请正确输入");
    $(this).next("span").html("手机号不正确，请正确输入").removeClass("msg-default").addClass("msg-error");
  }else{this.setCustomValidity("");
    $(this).next("span").html("ok").removeClass("msg-default msg-error").addClass("msg-succ");
  }
}
age.onfocus=function(){
  $(this).next("span").removeClass("hidden").html("您的年龄").removeClass("msg-error").addClass("msg-default");
}
age.onblur=function(){
  //console.log(this.validity);
  if(this.validity.rangeOverflow){
    this.setCustomValidity("您的年龄太大了");
    $(this).next("span").html("您的年龄太大了").removeClass("msg-default").addClass("msg-error");
  }else if(this.validity.rangeUnderflow){
    this.setCustomValidity("您的年龄太小了");
    $(this).next("span").html("您的年龄太小了").removeClass("msg-default").addClass("msg-error");
  }else{this.setCustomValidity("");$(this).next("span").html("ok").removeClass("msg-default").addClass("msg-succ");}
}
birthday.onfocus=function(){
  $(this).next("span").removeClass("hidden").html("您的出生日期").removeClass("msg-error").addClass("msg-default");
}
birthday.onblur=function(){
  //console.log(this.validity);
  if(this.validity.valueMissing){
    this.setCustomValidity("出生日期不能为空");
  }else{this.setCustomValidity("");
    $(this).next("span").html("ok").removeClass("msg-default").addClass("msg-succ");}
}

//登录转跳
$('#login').click(function(){
  //读取用户输入的数据----表单序列化
  var inputData = $('#login-form').serialize();
  console.log(inputData);
  $.ajax({
    type:'POST',
    url: 'data/1_login.php',
    data:inputData,
    success:function(txt,msg,xhr){
      if(txt=='ok'){
        var loginName = $('[name="uname"]').val();
        sessionStorage['logonName'] = loginName;
        location.href = 'mz.html';
      }else{
        alert('登录失败！账号或密码错误'+txt);
      }
    }
  });
});
$('#submit').click(function(){
  var data = $('#zc-form').serialize();
  console.log(data);
  $.ajax({
    type: 'POST',
    url: 'data/land.php',
    data:data,
    success:function(result){
      console.log('开始处理服务器端返回的注册结果')
      //console.log(result);
      if(result.msg=='succ'){
        alert('注册成功！');
        location.href='mz.html';
      }else {
        alert('注册失败！')
      }
    }
  });
})
