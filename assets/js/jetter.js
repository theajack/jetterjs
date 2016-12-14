J.ready(function() {
	Jet.initValid();
  jet_addNoteWrapper();
	J.tag("head")[0].append(J.new("style").text(".jet-unpass{border-color:#f20!important;border-style:solid!important;background-color:rgba(255,0,0,0.1)!important;color:#f00!important;}#jetNoteWrapper{width:100%;position:fixed;z-index:100;transition:top .3s ease;top:-70px}#jetNoteLittleWrapper{width:30%;min-height:65px;text-align:center;margin:0 auto;border:1px solid #666;border-radius:0 0 10px 10px;border-top:0}#jetNoteLittleWrapper[jet-style=gray].success{background-color:rgba(210,210,210,0.9);color:#444}#jetNoteLittleWrapper[jet-style=gray].info{background-color:rgba(170,170,170,0.9);color:#444}#jetNoteLittleWrapper[jet-style=gray].warn{background-color:rgba(80,80,80,0.9);color:#ccc}#jetNoteLittleWrapper[jet-style=gray].error{background-color:rgba(40,40,40,0.9);color:#ccc}#jetNoteLittleWrapper[jet-style=color]{border-color:#ddd;color:#fff}#jetNoteLittleWrapper[jet-style=color].success{background-color:rgba(51,134,51,0.9)}#jetNoteLittleWrapper[jet-style=color].info{background-color:rgba(55,78,237,0.9)}#jetNoteLittleWrapper[jet-style=color].warn{background-color:rgba(237,149,58,0.9)}#jetNoteLittleWrapper[jet-style=color].error{background-color:rgba(212,73,73,0.9)}#jetNoteIcon{font-size:30px;margin:5px 0}#jetNoteContent{font-size:20px;margin-bottom:5px;}"))
});
var jet_t;
var Jet = {
	useDefaultStyle: true,
  language:"English",
	get: function(jetForm,type) {
    if(type!=undefined&&type!="json"){
      return jet_getElemsFormData(J.select("[jet-form=" + jetForm + "]"), "jet-name");
    }else{
      return jet_getElemsObj(J.select("[jet-form=" + jetForm + "]"), "jet-name");
    }
	},
	set: function(jetForm, data) {
		jet_setObjVal(J.select("[jet-form=" + jetForm + "]"), "jet-name", data)
	},
  initValid:function(obj){
    var list;
    if(obj==undefined){
      list=J.attr("jet-valid");
    }else{
      list=obj.select("[jet-valid]");
    }
    list.each(function(a) {
      a.attr({
        "onBlur": "jet_validInput(this)",
        "onfocus": "jet_addValidValue(this)"
      })
    });
  },
	validate: function(a, b,c) {
    if(c!=undefined){
			jet_validateForm(J.select("[jet-form=" + a + "]"), b, c)
    }else{
			jet_validateForm(J.select("[jet-form=" + a + "]"), b)
    }
	},
	banDefault: function() {
		this.useDefaultStyle = false;
		J.class("jet-unpass").removeClass("jet-unpass")
	},
  show:jet_mesShow,
  showWait:jet_mesShowWait,
  close:jet_mesClose,
  checkArg:jet_checkArg,
  setNoteStyle:jet_setNoteStyle,
	validSinglePass: function(input, result) {},
	validSingleFail: function(input, result) {},
  turnPage:jet_turnPage,
  getContent:jet_getContentForGet,
  getUrlPara:jet_getUrlPara,
  fit:jet_fit,
  getRandom:jet_getRandomNum,
  isMobile:jet_isMobile,
  copy:j_copy
};

function jet_getElemsObj(d, b) {
	var a = d.select("[" + b + "]");
	var c = {};
	a.each(function(e) {
		c[e.attr(b)] = jet_getContentForGet(e);
	});
	return c
}
function jet_getElemsFormData(d, b){
  var a = d.select("[" + b + "]");
	var c = new FormData();
	a.each(function(e) {
    c.append(e.attr(b), jet_getContentForGet(e));
	});
	return c;
}
function jet_getContentForGet(input){
  if(input.hasClass("jet-unpass")){
    return input.attr("jet-value");
  }else{
    var a=input.content();
    return a;
  }
}
function jet_setObjVal(c, a, b) {
	inputs = c.select("[" + a + "]");
	inputs.each(function(d) {
		var e = d.attr(a);
		d.content(b[e])
	})
}
function jet_validInput(b) {
  var v=b.attr("jet-valid");
  var vt="";
  if(v.indexOf("lengthOfAny") != -1){
    var e = v.substring(12, v.length - 1).split(",");
    var f = "lengthOfAny";
    var str=b.content();
    if(str.length>=parseInt(e[0])&&str.length<=parseInt(e[1])){
      vt="true";
    }else{
      vt=jet_getValidText(f,e);
    }
  }else{
    vt = jet_checkValue(v, b.content());
  }
  if(vt=="true"){
    if (Jet.useDefaultStyle) {
      b.removeClass("jet-unpass").attr("jet-value", "");
    }
    Jet.validSinglePass(b, vt);
  }else{
    if (Jet.useDefaultStyle) {
      b.attr("jet-value", b.content()).content(vt).addClass("jet-unpass");
    }
    Jet.validSingleFail(b, vt);
  }
}
function jet_addValidValue(a) {
	if (a.hasClass("jet-unpass")) {
		a.content(a.attr("jet-value"))
	}
}
function jet_validateForm(g, f, c) {
	var e = [];
	var b = true;
	if (c == undefined) {
		b = false
	}
	var d = true;
	var a = g.select("[jet-valid]");
	a.each(function(j) {
		var h = jet_validInput(j);
		if (h != "true") {
			d = false;
			if (b) {
				e[e.length] = {
					"obj": j,
					"error": h
				}
			}
		}
	});
	if (!d) {
		if (b) {
			c(e)
		}
	} else {
		if (f != undefined) {
			f()
		}
	}
}
function jet_getElemsStrs(d, b) {
	var a = d.select("[" + b + "]");
	var c = [];
	a.each(function(e) {
		c[i] = [e.attr(b),  jet_getContentForGet(e)]
	});
	return c
}
var validTextCn = {
	"null": "*可以为空",
	"date": "*格式为XXXX-XX-XX",
	"email": "*格式为XXX@XX.com",
	"number": "*须为纯数字",
	"length": "*输入长度为",
	"lengthOfAny": "*输入长度为",
	"tel": "*须为11位纯数字",
	"letterStart": "*字母开头且长度为",
	"range": "*数字不在范围内",
	"express": "*自定义错误",
};
var validTextEn = {
	"null": "*null is allowed",
	"date": "*format:XXXX-XX-XX",
	"email": "*format:XXX@XX.com",
	"number": "*expect a number",
	"length": "*length between",
	"lengthOfAny": "*length between",
	"tel": "*must be 11 digits",
	"letterStart": "*letter start and length",
	"range": "*not in range",
	"express": "*wrong express",
};

function jet_getRegExp(f) {
	var d = 0;
	var c = 0;
	if (f.indexOf("length") != -1) {
		var e = f.substring(7, f.length - 1).split(",");
		f = "length";
		d = e[0];
		c = e[1]
	} else if (f.indexOf("letterStart") != -1) {
    var e = f.substring(12, f.length - 1).split(",");
    f = "letterStart";
    d = e[0];
    c = e[1]
  }
	switch (f) {
	case "null":
		return /^\S{0}$/;
		break;
	case "date":
		return /^(([12]\d{3}-((0[1-9])|(1[1-2]))-((0[1-9])|([1-2]\d)|3(0|1))))$/;
		break;
	case "email":
		return /^((\w*@\w*.com))$/;
		break;
	case "number":
		return /^(\d+)$/;
		break;
	case "tel":
		return /^([1]\d{10})$/;
		break;
	case "letterStart":
		return new RegExp("^([a-zA-Z]([a-zA-Z\\d]){" + (parseInt(d) - 1) + "," + (parseInt(c) - 1) + "})$");
		break;
	case "length":
		return new RegExp("^(([a-zA-Z\\d]){" + d + "," + c + "})$");
		break;
	case "express":
		return value;
		break;
	default:
		return "";
		break
	}
}
function jet_getValidText(type,range){
  if(Jet.language=="Chinaese"){
    if(range==undefined){
      return validTextCn[type];
    }else{
      return validTextCn[type] + "[" + range[0] + "," + range[1] + "]";
    }
  }else{
    if(range==undefined){
      return validTextEn[type];
    }else{
      return validTextEn[type] + "[" + range[0] + "," + range[1] + "]";
    }
  }
}
function jet_checkValue(a, e) {
	if (a.indexOf("null") != -1) {
		var c = a.split(" ");
		var b = (c[0] == "null") ? c[1] : c[0];
		if (b.indexOf("range") != -1) {
			var d = jet_testRange(a, e);
			if (d != "true" && e != "") {
				return d
			}
		}
		if (!jet_getRegExp(b).test(e) && e != "") {
			return jet_getValueText(b)
		}
	} else {
		if (a.indexOf("range") != -1) {
			var d = jet_testRange(a, e);
			if (d != "true") {
				return d
			}
		} else {
			if (!jet_getRegExp(a).test(e)) {
				return jet_getValueText(a)
			}
		}
	}
	return "true"
}
function jet_getValueText(b) {
	var c = 0;
	if (b.indexOf("range") != -1) {
		c = 6
	} else {
		if (b.indexOf("letterStart") != -1) {
			c = 12
		} else {
			if (b.indexOf("length") != -1) {
				c = 7
			}
		}
	}
	if (c != 0) {
		var a = b.substring(c, b.length - 1).split(",");
    return jet_getValidText(b.substring(0, c - 1),a);
	} else {
		return jet_getValidText(b);
	}
}
function jet_testRange(b, c) {
	var a = b.substring(6, b.length - 1).split(",");
	b = "number";
	if (jet_getRegExp(b).test(c)) {
		if (parseInt(c) < parseInt(a[0]) || parseInt(c) > parseInt(a[1])) {
      return jet_getValidText("range",a);
		}
	} else {
		return jet_getValidText("number");
	}
	return "true"
}
function jet_getUrlPara() {
	var d = decodeURI(location.search.substring(1)).split("&");
	if (d.length == 0) {
		return ""
	} else {
		if (d.length == 1) {
			return d[0].split("=")[1]
		} else {
			var a = {};
			for (var c = 0; c < d.length; c++) {
				var b = d[c].split("=");
				a[b[0]] = b[1]
			}
			return a
		}
	}
}
function jet_turnPage(a) {
	window.location.href = (encodeURI(a))
};
function jet_getRandomNum(Min,Max){  
  return (Min + Math.round(Math.random() * (Max - Min)));   
};
function jet_fit(n){
  if(n>=0){
    return 1;
  }
  return -1;
};
function jet_isMobile(){
  if((/AppleWebKit.*Mobile/i).test(navigator.userAgent)){
    return true;
  }else{
    return false;
  }
};
function jet_mesShow(content,statu,time,callback,needClose){
  clearTimeout(jet_t);
  var icon="";
  if(!statu){
    icon="glyphicon glyphicon-ok-sign";
    statu="success";
  }else{
    switch (statu){
      case "success":icon="glyphicon glyphicon-ok-sign";break;
      case "warn":icon="glyphicon glyphicon-exclamation-sign";break;
      case "error":icon="glyphicon glyphicon-remove-sign";break;
      case "info":icon="glyphicon glyphicon-info-sign";break;
      default:icon="glyphicon glyphicon-info-sign";statu="info";break;
    }
  }
  J.id("jetNoteIcon").className=icon;
  J.id("jetNoteLittleWrapper").className=statu;
  J.id("jetNoteContent").text(content);
  J.id("jetNoteWrapper").css("top","0px");
  time=jet_checkArg(time,1500);
  if(time.constructor.name=="String"){
    switch (time){
      case "slower":time=2500;break;
      case "slow":time=2000;break;
      case "normal":time=1500;break;
      case "fast":time=1000;break;
      case "faster":time=500;break;
      default:time=1500;
    }
  }
  jet_t=setTimeout(function(){
    if(needClose!=false){
      jet_t=setTimeout(function(){
        jet_mesClose();
        if(callback!=undefined){
          callback();
        }
      },time);
    }
  },300);
}
function jet_mesShowWait(content,statu){
  statu=jet_checkArg(statu,"info");
  jet_mesShow(content,statu,0,function(){},false);
}
function jet_mesClose(){
  J.id("jetNoteWrapper").css("top","-70px");
}
function jet_checkArg(arg,defaultValue){
  return (arg==undefined)?defaultValue:arg;
}
function jet_setNoteStyle(style){
  if(style!="color"){
    style="gray";
  }
  J.id("jetNoteLittleWrapper").attr("jet-style",style);
}
function jet_addNoteWrapper(){
  var lwrapper=J.new("div").attr({"id":"jetNoteLittleWrapper","jet-style":"color","onclick":"Jet.close()"}).append([J.new("span").attr("id","jetNoteIcon"),J.new("div").attr("id","jetNoteContent")]);
  J.body().append(J.new("div").attr("id","jetNoteWrapper").append(lwrapper));
}