
$(function () {
   var item={
   img:'static/img/heisenberg.png', //图片 
   info:'弹幕文字信息', //文字 
   href:'http://www.yaseng.org', //链接 
   close:true, //显示关闭按钮 
   speed:8, //延迟,单位秒,默认8
   bottom:70, //距离底部高度,单位px,默认随机 
   color:'green', //颜色,默认白色 
   old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
 }

console.log('发送一个弹幕');
 // 发送一个弹幕
$('body').barrager(item);
});

// 循环发送弹幕
var data = [{
  img:'static/img/heisenberg.png', //图片 
  info:'这是一条弹幕', //文字 
  href:'http://www.yaseng.org', //链接 
  close:true, //显示关闭按钮 
  speed:8, //延迟,单位秒,默认8
  bottom:70, //距离底部高度,单位px,默认随机 
  color:'green', //颜色,默认白色 
  old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
},{
  img:'static/img/heisenberg.png', //图片 
  info:'我爱你', //文字 
  href:'http://www.yaseng.org', //链接 
  close:true, //显示关闭按钮 
  speed:8, //延迟,单位秒,默认8
  bottom:140, //距离底部高度,单位px,默认随机 
  color:'green', //颜色,默认白色 
  old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
},
{
  img:'static/img/heisenberg.png', //图片 
  info:'我想操你', //文字 
  href:'http://www.yaseng.org', //链接 
  close:true, //显示关闭按钮 
  speed:8, //延迟,单位秒,默认8
  bottom:210, //距离底部高度,单位px,默认随机 
  color:'green', //颜色,默认白色 
  old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
}];

//每条弹幕发送间隔
var looper_time=3*1000;
var items=data;
//弹幕总数
var total=data.length;
//是否首次执行
var run_once=true;
//弹幕索引
var index=0;
//先执行一次
barrager();
function  barrager(){
  if(run_once){
      //如果是首次执行,则设置一个定时器,并且把首次执行置为false
      looper=setInterval(barrager,looper_time);                
      run_once=false;
  }
  //发布一个弹幕
  $('body').barrager(items[index%total]);
  //索引自增
  index++;
  //所有弹幕发布完毕，清除计时器。
  // if(index == total){
 
  //     clearInterval(looper);
  //     return false;
  // }



}

