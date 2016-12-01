var winHeight = document.body.offsetHeight,
    winWidth = document.body.offsetWidth,
    headHeight = $(".head-wrapper").outerHeight(),
    footerHeight = $("#footer").outerHeight(),
    swiperPageHeight = winHeight - headHeight - footerHeight ,
    mesShowMT = (winHeight - 167)/2,
    setMesHeight = (winHeight-206)/2,
    detailSwiper,
    t;
var page,
  boxData1="",
  boxData2="",
  type_adddetail = 6;
var c_remember="remember_me";
var c_autologin="autologin";
var c_nickname="nickname";
var c_password="password";
var c_hasregistname="hasregistname";
var isTest=false;
$(function () {
  if($("#footer").length>0){
    $(".foot-active").addClass("active");
    $(".foot-normal").removeClass("foot-normal");
  }
  if($.cookie("isLogin")=="true"||$("body").attr("data-page")=="index"){
    addValidTail();
    bindUserData();
  }else{
    mesShow("您还未登录，即将返回登录页面...","warn",1000,function(){
      window.location.href=(encodeURI("index.html?auto=false"));
    })
  }
  //putVerCenter();
})
function isAndroidLogin(){
  if($.cookie("isAndroid")=="true"){
    return true;
  }
  return false;
}
var isFull=false;
function fullScreen(){
  if(isFull){
    exitFullscreen();
    isFull=false;
  }else{
    launchFullScreen(document.documentElement);
    isFull=true;
  }
}
function isMobile(){
  if(winWidth<600){
    return true;
  }else{
    return false;
  }
}
function launchFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozExitFullScreen) {
    document.mozExitFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
function checkPage(pagename){
  if(location.pathname.indexOf(pagename)!=-1){
    return true;
  }
  return false;
}
function getLoginState(){
  var loginState={};
  loginState[c_remember]=$.cookie(c_remember);
  loginState[c_autologin]=$.cookie(c_autologin);
  loginState[c_nickname]=$.cookie(c_nickname);
  loginState[c_password]=$.cookie(c_password);
  return loginState;
}
function getUserCookie(){
  var userCookie={};
  userCookie[c_nickname]=$.cookie(c_nickname);
  userCookie[c_password]=$.cookie(c_password);
  return userCookie;
}
function getNickName(){
  return $.cookie(c_nickname);
}
function hasRegist(){
  return $.cookie(c_hasregistname);
}
function registRecord(nickname){
  $.cookie(c_hasregistname,nickname,{ expires: 365});
}
function login(){
  window.location.href="share.html";
  $.cookie("isLogin", "true");
  if(!hasRegist()){
    registRecord($.cookie(c_nickname));
  }
}
function isAndroid(){
  $.cookie("isAndroid","true");
}
 

function selectType(obj){
  $(obj).next().slideToggle();
}
// 下拉选择框
function selectTypeVal(obj){
  $(obj).parent().prev().children().eq(0).text($(obj).text());
  $(obj).parent().slideUp();
}

function changePage(i){
  $($("#headInfo").children().get(i)).addClass("active");
  $($("#headInfo").children().get(1-i)).removeClass("active");
  page.swipeTo(i);
}
function initSwiper(swiperContainer){
  detailSwiper = new Swiper("#"+swiperContainer,{
    mode:'vertical',
    mousewheelControl: true,
    calculateHeight:true,
    scrollContainer: true,     //设置整个Swiper作为可滚动区域，制作滚动条
  });
}

function initPageSwiper(swiperPage,num,type){
  page = new Swiper("#"+swiperPage, {
    mode:'horizontal',
    initialSlide :num,
    onSlideChangeStart: function(){
      if(type==type_adddetail){
        $(".swiper-nav .active").removeClass("active");
        $(".swiper-nav .swiper-slide").eq(page.activeIndex).addClass("active");
      }else{
        $($("#headInfo").children().get(page.activeIndex)).addClass("active");
        $($("#headInfo").children().get(1-page.activeIndex)).removeClass("active");
      }
    }
  });
}

function bindDate(id) {
  $('#'+id).mobiscroll().date({
    preset : 'date',
    theme: 'ios7', 
    mode: 'scroller',  // 以wheel滑动方式选择
    display: 'bottom',  //显示在中间
    lang: 'zh' ,
  // cancelText:null,    // 取消按钮
    dateOrder: 'yymmdd',
    dateFormat: 'yy-mm-dd',  //返回结果格式
    maxDate: new Date(),//设置最大日期
    // minDate: new Date() //设置最小日期
    buttons:['set', 'cancel'],
  });
}
// 预算年月
function bindYearMonth(id) {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth();
  $('#'+id).mobiscroll().date({
    preset : 'date',
    theme: 'android-ics light', 
    mode: 'scroller',  // 以wheel滑动方式选择
    display: 'bottom',  //显示在中间
    lang: 'zh' ,
  // cancelText:null,    // 取消按钮
    dateOrder: 'yymm',
    dateFormat: 'yy-mm',  //返回结果格式
    maxDate: new Date(new Date().setFullYear(2100,12)),//设置最大日期
    minDate: new Date(new Date().setFullYear(year,month)) //设置最小日期
  });
}
      
function getSeriesData(data){
  var dataWrapper = [];
  var dataPart = [];
  var dataAll = [];
  for(var key in data){
    var dataInner = [];
    dataInner[0] = data[key].name;
    dataInner[1] = parseFloat(data[key].money);
    dataWrapper[key] = dataInner;
    dataPart[key] = data[key].name;
  }
  dataAll[0] = dataWrapper;
  dataAll[1] = dataPart;
  return dataAll;
}


function complete(){
  closeCenterPage();
}
  
function closeCenterPage(){
  hideAllTail();
  $("#userCenter").removeClass("show");
  $(".cover-div").removeClass("show");
  setTimeout(function(){
    $("#userCenter").addClass("display-none");
    $(".cover-div").addClass("display-none");
  },100);
}
function hideAllTail(){
  $(".valid-tail").css("visibility","hidden");
}
function initNavSwiper(swiperNav){
  var nav = new Swiper("."+swiperNav,{
    slidesPerView: 'auto',     //slider容器能够同时显示的slides数量
    freeMode:true,             //若为true则是自由模式，不会自动贴合滑动位置
    noSwiping : true,          //设为true时，可以在slide上增加类名'swiper-no-swiping'，使该slide无法滑动。
    freeModeFluid:true,       //若为true，释放滑块之后仍会滑动一点。
    calculateHeight : true,   //当值为true时，Swiper根据slides内容计算容器高度。
    visibilityFullFit: true,  //如果启用，仅有“可视”的slides会最后适应容器的大小
    onSlideClick: function(nav){
      page.swipeTo( nav.clickedSlideIndex )
    }
  });
}
function pullHidden(id){
  var $obj = $("#"+id);
  if(!$obj.hasClass("show-wrapper")){
    $obj.removeClass("display-none");
    setTimeout(function(){
      $obj.addClass("show-wrapper").removeClass("hidden-again");
    },50);
  }else{
    $obj.addClass("hidden-again").removeClass("show-wrapper");
    setTimeout(function(){
      $obj.addClass("display-none");
    },600);
  }
}
function setData(title,defaulttext){
  stopScroll();
  var $noteWrapper = $("<div/>").addClass("note-wrapper");
    var $noteDiv = $("<div/>").addClass("div-note frame");
      var $titleDiv = $("<div/>").addClass("theme-color").text(title);
        var $spanIcon = $("<span/>").addClass("glyphicon glyphicon-remove mes-close-icon mr-none").attr("onclick","mesClose()");;
      $titleDiv.append($spanIcon);
      var $inputDiv1 = $("<div/>").addClass("land-wrapper");
        var $inputText1 = $("<input/>").attr({"type":"text","placeholder":"请设置问题"}).addClass("land-text set-password").val(defaulttext);
      $inputDiv1.append($inputText1);  
      var $inputDiv2 = $("<div/>").addClass("land-wrapper");
        var $inputText2 = $("<input/>").attr({"type":"text","placeholder":"请设置答案"}).addClass("land-text set-password");
      $inputDiv2.append($inputText2);
      var $setBtn = $("<div/>").addClass("setpw-button edit-button").attr({"onClick":"setBoxData(this)","id":"aaa"}).text("完成");
    $noteDiv.append($titleDiv,$inputDiv1,$inputDiv2,$setBtn);
  $noteWrapper.append($noteDiv);
  $noteWrapper.css("top",setMesHeight+"px");
  $("body").append($noteWrapper); 
}
function stopScroll(){
  $(document.body).css({
    "overflow-y":"hidden"
  })
}
function startScroll(){
  $(document.body).css({
    "overflow-y":"auto"
  });
}

function setBoxData(obj){
  var question = $(obj).parent().children().eq(1).children().eq(0).val();
  var answer = $(obj).parent().children().eq(2).children().eq(0).val();
  if(question!=""){
    boxData1 = question;
    boxData2 = answer;
    mesClose();
  }else{
    mesShow("问题不可为空！","warn");
  }
}
function clearBoxData(){
  boxData1="";
  boxData2="";
}

function mesShow(content,statu,time,callback,needClose){
  if($(".note-wrapper").length!=0){
    $(".note-wrapper").remove();
  }
  var icon="";
  if(!statu){
    icon="glyphicon-ok-sign";
  }else{
    switch (statu){
      case "success":icon="glyphicon-ok-sign";break;
      case "warn":icon="glyphicon-exclamation-sign";break;
      case "error":icon="glyphicon-remove-sign";break;
      case "info":icon="glyphicon-info-sign";break;
      default:;break;
    }
  }
  clearTimeout(t);
  var $wrapper=$("<div/>").addClass("note-wrapper");
  var $note=$("<div/>").addClass("div-note "+statu).attr("onclick","mesClose()");
      var $inDiv=$("<div/>");
        var $icon=$("<span/>").addClass("glyphicon "+ icon +" mes-icon");
        var $closeIcon=$("<span/>").addClass("glyphicon glyphicon-remove mes-close-icon");
      $inDiv.append($icon,$closeIcon);
      var $content=$("<span/>").text(content);
  $note.append($inDiv,$content); 
  $wrapper.append($note);
  $wrapper.css("top",mesShowMT+"px");
  $("body").append($wrapper);
  if(!time){
    time=1000;
  }
  t=setTimeout(function(){
    if(needClose!=false){
      $(".note-wrapper").fadeOut(time);
      t=setTimeout(mesClose,time);
    }
    if(!(!callback)){
      callback();
    }
  },time*2);
}
function mesShowWait(content,type){
  if(!type){
    mesShow(content,"info",0,function(){},false);
  }else{
    mesShow(content,type,0,function(){},false);
  }
}
function mesClose(){
  $(".note-wrapper").remove();
  startScroll();
}
function wrapperRaise(id){
  $("#"+id).removeClass("display-none");
  setTimeout(function(){
    $(".content-wrapper").addClass("raise");
    $(".show-content-wrapper").addClass("raise");
  },100)
}
function putVerCenterById(id){
  var $obj=$("#"+id);
  $obj.css("margin-top",(($obj.parent().height()-$obj.height())/2)+"px");
}
function putVerCenter(){
  $.each($(".vertical-center"),function(i,obj){
    $(obj).css("margin-top",(($(obj).parent().height()-$(obj).height())/2)+"px");
  });
}
function closePage(obj){
  $obj = $(obj);
  $(".content-wrapper").removeClass("raise");
  $(".sztype-content").removeClass("raise");
  setTimeout(function(){
    $obj.parent().parent().addClass("display-none");
  },300)
}
function closePageFromPar(parentId){
  var $obj=$(parentId).parent().parent().parent().parent().parent();
  $(".content-wrapper").removeClass("raise");
  $(".sztype-content").removeClass("raise");
  setTimeout(function(){
    $obj.addClass("display-none");
  },300)
}

/*        计算器表格          */
function delAllNum(obj){
  getTarget(obj).val("").removeClass("num-size");
}

function delAllNumAndClose(obj){
  delAllNum(obj);
  closeNumPage();
}
function delNum(obj){
  var target=getTarget(obj);
  var oriNum = target.val();
  if(oriNum.length>0){
    target.val(oriNum.substring(0,oriNum.length-1));
    if(oriNum.length==1){
      target.removeClass("num-size");
    }
  }
}
function changeNum(obj){
  var num=$(obj).text();
  var target=getTarget(obj);
  var canIn=true;
  var type=target.attr("data-type");
  var length=target.val().length;
  if((type=="pw"&&length>=4)||(type=="id"&&length>=6)){
    mesShow("已达到长度要求","success");
  }else{
    target.val(target.val()+num);
    if(length==0){
      target.addClass("num-size");
    }
      
  }
}
function showNumPage(target){
  $("#numInput").attr("data-target",target);
  $("#numInput").animate({bottom:"0px"});
}
function closeNumPage(){
  $("#numInput").animate({bottom:"-210px"});
}
function getTarget(obj){
  return $("#"+$("#numInput").attr("data-target"));
}


//[notnull,date,datetime,number,length:x,email,phone,idnum,express:xxx]
//data-name='name'  data-valid='notnull'
/*  获取表单的键值  */
function getFormVal(formId){
  var dataObj = getElemsObj(formId,"data-name");
  return(dataObj);
}
function getElemsObj(formId,name){
  $inputs = $("#"+formId).find('['+name+']');
  var dataObj = {};  //json对象  键值对
  //data["name"]="shi";
  $.each($inputs,function(i,input){
    var property = $(input).attr(name);
    var value = $(input).val();
    dataObj[property] = value;
  });
  return dataObj;
}
function setFormVal(formId,data){
  setObjVal("#"+formId,data);
}
function setObjVal(obj,data){
  $inputs = $(obj).find('[data-name]');
  $.each($inputs,function(i,input){
    var dname=$(input).attr('data-name')
    if(isDate(dname)){
      data[dname]=modDate(data[dname]);
    }
    if($(input)[0].tagName=="INPUT"){
      $(input).val(data[dname]);
    }else{
      $(input).text(data[dname]);
    }
  });
}
function isDate(name){
  if(name=="time"||name=="date"||name=="datetime"||name=="birthday"){
    return true;
  }
  return false;
}
/* 个人中心修改页面 */
function showCenterPage(){
  $("#userCenter").removeClass("display-none");
  $(".cover-div").removeClass("display-none");
  setTimeout(function(){
    $("#userCenter").addClass("show");
    $(".cover-div").addClass("show");
  },100);
  closeNumPage();
}
function editInfo(){
  $(".common-input").removeAttr("disabled").addClass("bg-eee");
  $("#female").removeAttr("disabled");
  $("#male").removeAttr("disabled");
  $("#editBtn").addClass("display-none");
  $("#finishBtn").removeClass("display-none");
  $("#passWord").attr("type","text");
  bindDate("memberBir");
  $("#disabledDiv").addClass("display-none");
  playBtnClick();
}
function bindUserData(){
  if($("#userCenter").length>0){
    var postData=getUserCookie();
    postData["method"]="getUserData";
    getData(postData,function(userData){
      if(userData=="false"){
        mesShow("检测到您登录状态异常，即将跳转回重新登录登录界面...","error",1000,function(){
          window.location.href=(encodeURI("index.html?auto=false"));
        });
      }else{
        userData.birthday=modDate(userData.birthday)
        setFormVal("userCenterWrapper",userData);
        if(userData.sex=="0"){
          $("#female").attr("checked","checked");
        }else{
          $("#male").attr("checked","checked");
        }
        if(checkPage("manage")){
          var $obj=$("#modifyNickname").parent().parent();
          if(userData.modifynickname>0){
            $obj.prev().slideDown();
          }else{
            $obj.remove();
            $obj.prev().remove();
          }
        }else if(checkPage("share")){
          if(userData.showupdate==1){
            wrapperRaise("showUpdate");
            getData({
              "nickname":userData.nickname,
              "method":"clearShowUpdate"
            },function(d){});
          }
        }
      }
    });
  }
}
function getRegistNum(){
  return getRandomNum(100000,999999);
}
function getRandomNum(Min,Max){   
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
} 
function modDate(date){
  if(!date){
    return "";
  }else{
    if(!getRegExp("date").test(date)){
      return date.split('T')[0];
    }else{
      return date;
    }
  }
}
function changeSex(sex){
  $("#memberSex").val(sex);
}
function updateUserData(){
  if(validateForm("userCenterForm")){
    var postData = getFormVal("userCenterForm","updateUserData");
    $(".common-input").attr("disabled","disabled").removeClass("bg-eee");
    $("#female").attr("disabled","disabled");
    $("#male").attr("disabled","disabled");
    $("#finishBtn").addClass("display-none");
    $("#editBtn").removeClass("display-none");
    $("#passWord").attr("type","passWord");
    $("#disabledDiv").removeClass("display-none");
    mesShowWait("正在修改...");
    getData(postData,function(data){
      if(data=="true"){
        mesShow("修改成功","success");
      }else{
        mesShow("修改失败","warn");
      }
    });
    closeCenterPage();
  }
  playBtnClick();
}
/*  与后台的交互方法  */
//与java交互的方法
function postData(method,data){//本地Html是才可用
  /*if(isAndroid){
    if(!data){
      return $.parseJSON(dataPost.dataPost(method,"")); 
    }else{
      return $.parseJSON(dataPost.dataPost(method,JSON.stringify(data))); 
    }
  }else{
    return [{}];
  }*/
}
//向java中发送数据，因为访问http某个网址的时候返回值会出错
function sendData(method,data){
  if($.cookie("isAndroid")=="true"){
    if(!data){
      dataPost.dataPost(method,""); 
    }else{
      dataPost.dataPost(method,JSON.stringify(data)); 
    }
  }
}
//jsFun是回调的js函数，dataMethod是java里的方法名称，用来获取数据
//相当于执行的是jsFun，参数是java中方法dataMethod返回的，para为dataMethod的参数，可以没有
function exeFun(jsFun,dataMethod,para){
  if($.cookie("isAndroid")=="true"){
    if(!para){
      dataPost.exeJsFun(jsFun,dataMethod);
    }else{
      dataPost.exeJsFun(jsFun,dataMethod,para);
    }
  }
}
//与C#交互的方法
function getData(object,callback) {
	if(isTest){
	}else{
	  var method = object.method;
	  delete object.method;
	  $.ajax({
		type: "Post", //要用post方式  
		url: "splitter/splitter.aspx/methodChoose", //方法所在页面和方法名  
		data: JSON.stringify({
		  "objStr": JSON.stringify(object),
		  "method": method
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		async: true,
		success: function(data){
      var objs=$.parseJSON(data.d).value;
      if(objs.length==1){
        callback(objs[0]);
      }else{
        callback(objs)
      }
		},
		error: function (err) {
		  mesShow("服务器运行出错！","error");
		}
	  });
    
     /*$.ajax({
        type: "post",
        url: 'splitter/splitter.aspx/methodChoose',            
        async: true,
        datatype: "JSONP",
        jsonpCallback: "jsonpcallback",
        contentType: "application/json",
        data: data,
        success: function (response) {
        },
        error: function (err) {
        mesShow("服务器运行出错！","error");
      }
      });*/
	}
}

function getFormVal(formId,method){
  var data=getElemsObj(formId,"data-name");
  data["method"] = method;
  return data;
}

function getElemsObj(formId,name){//取元素组成json
  var $inputs = $("#"+formId).find("["+name+"]");
  var data={};
  $.each($inputs,function(i,input){
    if($(input)[0].tagName=="INPUT"){
      data[$(input).attr(name)] = $(input).val();
    }else{
      data[$(input).attr(name)] = $(input).text();
    }
  });
  return data;
}
/*关于表单验证*/
function addValidTail(){
  $.each($("[data-valid]"),function(index,elem){
    var star="";
    if($(elem).attr("data-valid").indexOf("notnull")>=0)
      star="*";
    $(elem).after('<span class="valid-tail" onclick="hideValidTail(this)">'+star+'</span>');
    $(elem).attr("onBlur","validInput(this)")
  });
}
function validInput(obj){
  var result=checkValue($(obj).attr("data-valid"),$(obj).val());
  $(obj).next().text(result);
  $(obj).next().css("visibility","visible");
}
function hideValidTail(obj){
  $(obj).css("visibility","hidden");
}
function validateForm(formId){
  var result=[];
  var isPass=true;
  var elems=getElemsStrs(formId,"data-valid");//这个属性值会重名，所以要用数组不用json
  $.each(elems,function(i,elem){
    result[i] = checkValue(elem[0],elem[1]);
  });
  var $inputs = $("#"+formId).find("[data-valid]");
  //var color="";
  $.each($inputs,function(i,input){
    if(result[i]=="√通过"||result[i]=="√可为空"){
      //color="#0d0";
    }else{
      //color="#f00";
      if(isPass)
        isPass=false;
        
      //$inputs.css()
    }
    //$(input).next().css("color",color).text(result[i]);
    $(input).next().text(result[i]);
    $(input).next().css("visibility","visible");
  });
  if(!isPass){
    mesShow("输入有误！请按提示改正。","warn");
    return false;
  }
  return true;
}

function getElemsStrs(formId,name){//取元素组成数组
  var $inputs = $("#"+formId).find("["+name+"]");
  var data=[];
  $.each($inputs,function(i,input){
    if($(input)[0].tagName=="INPUT"){
      data[i]=[$(input).attr(name),$(input).val()];
    }else{
      data[i]=[$(input).attr(name),$(input).text()];
    }
  });
  return data;
}

var validText={
  "notnull":"*必填",
  "date":"*格式为XXXX-XX-XX",
  "email":"*格式为XXX@XX.com",
  "number":"*须为纯数字",
  "bid":"*须为五或六纯数字",
  "bpw":"*须为四位纯数字"
}
function checkValue(typeStr,value){
  var types=typeStr.split(",");//将类型值以逗号分隔成数组
  if(types.length==1){
    var reg = getRegExp(typeStr);
    if(!reg.test(value)){
      return validText[typeStr];
    }else{
      if(value==""){
        return "√可为空";
      }else{
        return "√通过";
      }
    }
  }else if(types.length==2){//参数有两个
    if(!value){//若为空直接返回
      return "*必填";
    }else{
      var type;
      if(types[0]=="notnull"){//找出不是notnull的那个参数
        type=types[1];
      }else{
        type=types[0];
      }
      var reg=getRegExp(type);
      if(reg=="")
        return "data-valid参数错误";
      else if(!reg.test(value)){
        return validText[type];
      }else{
        return "√通过";
      }
    }
  }else{
    return "data-valid参数个数错误";
  }
}
function getRegExp(type){
  switch(type){
    case "notnull":return /^\S+$/;break;
    case "date":return /^(([12]\d{3}-((0[1-9])|(1[1-2]))-((0[1-9])|([1-2]\d)|3(0|1)))|(\S{0}))$/;break;
    case "email":return /^((\w*@\w*.com)|(\S{0}))$/;break;
    case "number":return /^((\d+)|(\S{0}))$/;break;
    case "bid":return /^(\d{5,6})$/;break;
    case "bpw":return /^(\d{4})$/;break;
    //待扩展
    case "express":return value;break;
    default:return "";break;
  }
}
function getUrlPara(){
  var urlPara=decodeURI(location.search.substring(1)).split("&");
  if(urlPara.length==0){
    return "";
  }else if(urlPara.length==1){
    return urlPara[0].split("=")[1];
  }else{
    var para={};
    for(var i=0;i<urlPara.length;i++){
      var paraEach=urlPara[i].split("=");
      para[paraEach[0]] = paraEach[1];
    }
    return para;
  }
}
function playBgm(){
  postData("playBgm");
  isPlayBgm=true;
}
function stopBgm(){
  postData("stopBgm");
  isPlayBgm=false;
}
function playBtnClick(){
  postData("playBtnClick");
}
function getNowDate(){
  return new Date().Format("yyyy-MM-dd");
}
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o){
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return fmt;
}
