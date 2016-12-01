$(function(){
  $("[jet-valid]").attr("onBlur","validInput(this)");
})
var Jet={
  "useDefaultStyle":true,
  "get":function(jetForm){
    return getElemsObj($("[jet-form="+jetForm+"]"),"jet-name");
  },"set":function(jetForm,data){
    setObjVal($("[jet-form="+jetForm+"]"),"jet-name",data);
  },"validate":function(a,b){
    if(arguments.length==1){
      validateForm($("[jet-form="+a.jetform+"]"),a.onpass,a.onfail);
    }else{
      validateForm($("[jet-form="+a+"]"),b);
    }
    
  },"banDefault":function(){
    this.useDefaultStyle=false
  },
  
}
function getElemsObj($obj,name){//取元素组成json
  var $inputs = $obj.find("["+name+"]");
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
function setObjVal($obj,name,data){
  $inputs = $obj.find('['+name+']');
  $.each($inputs,function(i,input){
    var dname=$(input).attr(name);
    if($(input)[0].tagName=="INPUT"){
      $(input).val(data[dname]);
    }else{
      $(input).text(data[dname]);
    }
  });
}

/*关于表单验证*/
function addValidTail(){
  $.each($("[jet-valid]"),function(index,elem){
    var star="";
    if($(elem).attr("jet-valid").indexOf("notnull")>=0)
      star="*";
    $(elem).after('<span class="valid-tail" onclick="hideValidTail(this)">'+star+'</span>');
    $(elem).attr("onBlur","validInput(this)")
  });
}
function validInput(obj){
  var result=checkValue($(obj).attr("jet-valid"),$(obj).val());
  if(result!="true"){
    if(Jet.useDefaultStyle){
      $(obj).addClass("jet-unpass");
    }
  }else{
    if(Jet.useDefaultStyle){
      $(obj).removeClass("jet-unpass");
    }
  }
  return result;
}
function validateForm($obj,onpass,onfail){
  var data=[];
  var needData=true;
  if(onfail==undefined){
    needData=false;
  }
  var isPass=true;
  var $inputs = $obj.find("[jet-valid]");
  $.each($inputs,function(i,input){
    var result=validInput(input);
    if(result!="true"){
      isPass=false;
      if(needData){
        data[data.length]={
          "obj":input,
          "error":result
        }
      }
    }
  });
  if(!isPass){
    if(needData){
      onfail(data);
    }
  }else{
    if(onpass!=undefined)
      onpass();
  }
}

function getElemsStrs($obj,name){//取元素组成数组
  var $inputs = $obj.find("["+name+"]");
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
}
function checkValue(typeStr,value){
  var types=typeStr.split(",");//将类型值以逗号分隔成数组
  $.each(types,function(i,type){
    if(type.indexOf("range")!=-1){
      var i=type.substring(6,type.length-1).split(",");
      type="number";
      if(getRegExp(type).test(value)){
        
      }else{
        return validText.number;
      }
      if(parseInt(value)>=parseInt(i[0])&&)
      a=i[0];
      b=i[1];
    }else{
      
    }
    
    if($(input)[0].tagName=="INPUT"){
      data[i]=[$(input).attr(name),$(input).val()];
    }else{
      data[i]=[$(input).attr(name),$(input).text()];
    }
  });
  if(types.length==1){
    var reg = getRegExp(typeStr);
    if(reg.test(value)){
      return "true";
    }else{
      return validText[typeStr];
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
        return "jet-valid参数错误";
      else if(!reg.test(value)){
        return validText[type];
      }else{
        return "√通过";
      }
    }
  }else{
    return "jet-valid参数个数错误";
  }
}
function getRegExp(type){
  var a=0;
  var b=0;
  if(type.indexOf("length")!=-1){
    var i=type.substring(7,type.length-1).split(",");
    type="length";
    a=i[0];
    b=i[1];
  }else if(type.indexOf("letterStart")!=-1){
    var i=type.substring(12,type.length-1).split(",");
    type="letterStart";
    a=i[0];
    b=i[1];
  }
  switch(type){
    case "null":return /^\S{0}$/;break;
    case "notnull":return /^\S+$/;break;
    case "date":return /^(([12]\d{3}-((0[1-9])|(1[1-2]))-((0[1-9])|([1-2]\d)|3(0|1))))$/;break;
    case "email":return /^((\w*@\w*.com))$/;break;
    case "number":return /^(\d+)$/;break;
    case "tel":return /^([1]\d{10})$/;break;
    case "userName":return new RegExp("^([a-zA-Z]([a-zA-Z\\d]){"+a+","+b+"})$");break;
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