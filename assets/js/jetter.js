J.ready(function() {
	Jet.initValid();
	J.tag("head").append(J.new("style").text(".jet-unpass{border-color:#f20!important;border-style:solid!important;background-color:rgba(255,0,0,.1)!important;color:red!important}.jet-icon-wrapper{width:100%;height:40px}.jet-icon-circle{display:block;width:40px;height:40px;margin:0 auto;border-radius:20px;border:5px solid #fff;position:relative}.jet-icon-circle span{background-color:#fff;display:block;position:absolute;border-radius:3px}.jet-icon-circle.jet-no-border{border-color:transparent;position:relative;top:3px;left:5px}.jet-icon-part-ok1{width:11px;height:7px;top:14px;left:5px}.jet-icon-part-ok2{width:7px;height:18px;top:7px;left:14px}.jet-icon-part-x{width:7px;height:20px;top:5px;left:11px}.jet-rotate-45{transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-moz-transform:rotate(45deg)}.jet-rotate-045{transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-moz-transform:rotate(-45deg)}.jet-icon-part-bar,.jet-icon-part-block{width:7px;left:11px}.jet-icon-part-block{height:7px}.jet-icon-part-bar{height:13px}.jet-icon-part-info1,.jet-icon-part-warn1{top:4px}.jet-icon-part-info2{top:13px}.jet-icon-part-warn2{top:19px}#jetConfirmWrapper,#jetConfirmWrapper *,#jetInputWrapper,#jetInputWrapper *,#jetNoteWrapper,#jetNoteWrapper *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#jetConfirmWrapper,#jetInputWrapper,#jetNoteWrapper{width:100%;position:fixed;z-index:100;transition:top .3s ease;top:-100%}#jetConfirmContent,#jetInputContent{font-size:22px;padding:3% 10px 10px 10px;color:#fff;height:50%;white-space:normal;word-break:break-all}#jetConfirmBtnWrapper,#jetInputBtnWrapper{height:50px}#jetInputContent{padding:3% 10% 10px 10%}.jet-input{width:100%;color:#888;padding-left:5px;font-size:18px}.jet-input-text{text-align:left}#jetConfirmCancel,#jetConfirmOk,#jetInputCancel,#jetInputOk{width:50%;float:left;height:100%;border-top:4px solid rgba(255,255,255,.9);cursor:pointer}#jetConfirmOk{border-right:2px solid rgba(255,255,255,.9)}#jetConfirmCancel,#jetInputCancel{border-left:2px solid rgba(255,255,255,.9)}#jetConfirmLittleWrapper,#jetInputLittleWrapper,#jetNoteLittleWrapper{width:30%;min-height:65px;text-align:center;margin:0 auto;border:1px solid #666;border-radius:0 0 10px 10px;border-top:0;padding-top:10px;background-color:rgba(51,134,51,.9)}#jetConfirmLittleWrapper,#jetInputLittleWrapper{width:30%;background-color:rgba(136,136,136,.9);border-color:#bbb;padding-top:0}#jetInputLittleWrapper{background-color:rgba(100,100,100,.9)}#jetConfirmLittleWrapper.jet-large,#jetInputLittleWrapper.jet-large,#jetNoteLittleWrapper[jet-size=large]{width:70%}#jetConfirmLittleWrapper.jet-middle,#jetInputLittleWrapper.jet-middle,#jetNoteLittleWrapper[jet-size=middle]{width:50%}#jetNoteLittleWrapper[jet-style=gray].jet-success{background-color:rgba(210,210,210,.9);color:#444}#jetNoteLittleWrapper[jet-style=gray].jet-info .jet-icon-circle,#jetNoteLittleWrapper[jet-style=gray].jet-success .jet-icon-circle{border-color:#444}#jetNoteLittleWrapper[jet-style=gray].jet-info .jet-icon-circle span,#jetNoteLittleWrapper[jet-style=gray].jet-success .jet-icon-circle span{background-color:#444}#jetNoteLittleWrapper[jet-style=gray].jet-info{background-color:rgba(170,170,170,.9);color:#444}#jetNoteLittleWrapper[jet-style=gray].jet-warn{background-color:rgba(80,80,80,.9);color:#ccc}#jetNoteLittleWrapper[jet-style=gray].jet-error .jet-icon-circle,#jetNoteLittleWrapper[jet-style=gray].jet-warn .jet-icon-circle{border-color:#ccc}#jetNoteLittleWrapper[jet-style=gray].jet-error .jet-icon-circle span,#jetNoteLittleWrapper[jet-style=gray].jet-warn .jet-icon-circle span{background-color:#ccc}#jetNoteLittleWrapper[jet-style=gray].jet-error{background-color:rgba(40,40,40,.9);color:#ccc}#jetNoteLittleWrapper[jet-style=color]{border-color:#ddd;color:#fff}#jetNoteLittleWrapper[jet-style=color].jet-success{background-color:rgba(51,134,51,.9)}#jetNoteLittleWrapper[jet-style=color].jet-info{background-color:rgba(55,78,237,.9)}#jetNoteLittleWrapper[jet-style=color].jet-warn{background-color:rgba(237,149,58,.9)}#jetNoteLittleWrapper[jet-style=color].jet-error{background-color:rgba(212,73,73,.9)}#jetNoteLittleWrapper[jet-style=color] .jet-icon-circle,#jetNoteLittleWrapper[jet-style=gray] .jet-icon-circle{border-color:#fff}#jetNoteLittleWrapper[jet-style=color] .jet-icon-circle span,#jetNoteLittleWrapper[jet-style=gray] .jet-icon-circle span{background-color:#fff}#jetNoteContent{font-size:20px;margin-bottom:5px;padding-top:5px;white-space:normal;word-break:break-all}"));
});
var jet_t,jet_ct;
var Jet = {
	useDefaultStyle: true,
	useShowForValid: true,
  noteStyle:"color",
  language:"English",
  lang:function(l){this.language=l},
	get: function(jetForm,type,name) {
    name=j_checkArg(name,"jet-name");
    if(type!=undefined&&type!="json"){
      return jet_getElemsFormData(jet_checkJetForm(jetForm), name);
    }else{
      return jet_getElemsObj(jet_checkJetForm(jetForm), name);
    }
	},
	set: function(jetForm,data,callback,name) {
    name=j_checkArg(name,"jet-name");
    jet_setObjVal(jet_checkJetForm(jetForm), name, data,callback);
	},
  clear:function(jetForm,name){
    this.set(jetForm,{},null,name);
  },
  initValid:function(obj){
    var list;
    if(obj==undefined){
      list=J.attr("jet-valid");
    }else{
      list=jet_checkJetForm(obj).select("[jet-valid]");
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
      jet_validateForm(jet_checkJetForm(a), b, c)
    }else{
      jet_validateForm(jet_checkJetForm(a), b)
    }
	},
	banDefault: function() {
		this.useDefaultStyle = false;
    var list=J.class("jet-unpass");
    list.each(function(input){
      jet_checkIsPw(input);
      input.removeClass("jet-unpass").val(input.attr("jet-value")).attr("jet-value","");
    });
	},
  useDefault:function(){
    this.useDefaultStyle = true;
  },
  banValidShow:function(){this.useShowForValid=false},
  useValidShow:function(){this.useShowForValid=true},
  show:jet_mesShow,
  confirm:jet_confirmShow,
  showWait:jet_mesShowWait,
  close:jet_mesClose,
  confirmClose:jet_confirmClose,
  inputClose:jet_inputClose,
  checkArg:j_checkArg,
  setNoteStyle:jet_setNoteStyle,
  onOnePass:function(callback){
    if(callback==undefined){
      jet_onOnePass=null;
    }else{
      if(callback.constructor.name=="String"){
        jet_onOnePass=function(input,info){eval(callback)};
      }else{
        jet_onOnePass=callback;
      }
    }
  },
  onOneFail:function(callback){
    if(callback==undefined){
      jet_onOneFail=null;
    }else{
      if(callback.constructor.name=="String"){
        jet_onOneFail=function(input,error){eval(callback)};
      }else{
        jet_onOneFail=callback;
      }
    }
  },
  turn:jet_turnPage,
  open:function(url){window.open(url)},
  back:function (){window.history.back();},
  forward:function (){window.history.forward();},
  getUrlPara:jet_getUrlPara,
  fit:jet_fit,
  getRandom:jet_getRandomNum,
  isMobile:jet_isMobile,
  copy:j_copy,
  //input:function(title,t,d,valid,callback1,callback2){
  input:function(data,callback1,callback2){
    var obj=J.id("jetInputContent");
    if(obj==undefined){
      jet_addInputWrapper();
      obj=J.id("jetInputContent");
    }
    obj.empty();
    if(data.constructor.name=="String"){
      obj.append(J.new("div").text(data));
      jet_appendOneInput((this.language=="Chinese")?"请输入：":"Please input:",null,null);
    }else if(data.constructor.name=="Array"){
      obj.append(J.new("div").text(j_checkArg(data[0],(this.language=="Chinese")?"信息输入":"Input Information")));
      jet_appendOneInput(data[1],data[2],data[3]);
      if(data[3]!=undefined){
        this.initValid(obj);
      }
    }else{
      obj.append(J.new("div").text(j_checkArg(data.title,(this.language=="Chinese")?"信息输入":"Input Information")));
      var a=j_checkArg(data.default,[]);
      var b=j_checkArg(data.valid,[]);
      if(data.text==undefined||data.text.constructor.name=="String"){
        jet_appendOneInput(data.text,a,b);
      }else{
        for(var i=0;i<data.text.length;i++){
          jet_appendOneInput(j_checkArg(data.text[i],(this.language=="Chinese")?"请输入：":"Please input:"),a[i],b[i]);
        }
      }
      if(b.length>0||b.constructor.name=="String"){
        this.initValid(obj);
      }
    }
    if(callback1!=undefined){
      if(callback1.constructor.name=="Function"){
        jet_submitCall=callback1;
      }else{
        jet_submitCall=function(){eval(callback1)};
      }
    }else{
      jet_submitCall=null;
    }
    if(callback2!=undefined){
      if(callback2.constructor.name=="Function"){
        jet_submitCancelCall=callback2;
      }else{
        jet_submitCancelCall=function(){eval(callback2)};
      }
    }else{
      jet_submitCancelCall=null;
    }
    J.id("jetInputWrapper").css("top","0");
  }
};
var jet_submitCall=null,
  jet_submitCancelCall=null,
	jet_onOnePass=null,
	jet_onOneFail=null;
function jet_checkIsPw(input){
  if(input.attr("jet-ispw")=="true"){
    input.attr("type","password");
  }
}
function jet_inputOk(){
  if(jet_submitCall!=undefined){
    J.id("jetInputContent").validate(function(){
      jet_submitCall(J.id("jetInputContent").findClass("jet-input").val());
      jet_inputClose();
    });
  }else{
    jet_inputClose();
  }
};
function jet_inputCancel(){
  if(jet_submitCancelCall!=undefined){
    jet_submitCancelCall();
  }
  jet_inputClose();
};
function jet_inputClose(){
  J.id("jetInputWrapper").css("top","-100%");
  setTimeout(function(){
    J.id("jetInputContent").empty();
  },300);
}
function jet_appendOneInput(p1,p2,p3){
  if(arguments.length==1){
    p2=p1.default;
    p3=p1.valid;
    p1=j_checkArg(p1.text,(Jet.language=="Chinese")?"请输入：":"Please input:");
  }else{
    p1=j_checkArg(p1,(Jet.language=="Chinese")?"请输入：":"Please input:");
  }
  J.id("jetInputContent").append(J.new("div").addClass("jet-input-text").text(p1));
  var input=J.new("input.jet-input[type=text]");
  if(p2!=undefined){
    input.val(p2);
  }
  if(p3!=undefined){
    input.attr("jet-valid",p3);
  }
  J.id("jetInputContent").append(input);
}
HTMLElement.prototype.getContent= function(){
  return jet_getContentForGet(this);
}
HTMLElement.prototype.get = function(type,name) {
  return Jet.get(this,type,name);
};
HTMLElement.prototype.initValid = function() {
  Jet.initValid(this);
  return this;
};
HTMLElement.prototype.set = function(data,callback,name) {
  Jet.set(this,data,callback,name);
  return this;
};
HTMLElement.prototype.clear = function(name) {
  Jet.clear(this,name);
  return this;
};
HTMLElement.prototype.validate = function(s,f) {
  jet_validateForm(this,s,f);
};
var jet=Jet;
function jet_checkJetForm(a){
  if(a.constructor.name=="String"){
    return J.select("[jet-form=" + a + "]");
  }
  return a;
}
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
}function jet_setObjVal(c, a, b,callback) {
	inputs = c.select("[" + a + "]");
  if(b.constructor.name=="Object"){
    inputs.each(function(d) {
      var e = d.attr(a);
      d.content(b[e]);
      if(callback!=undefined){
        callback(d,b[e],e);
      }
    });
  }else{
    inputs.each(function(d) {
      var e = d.attr(a);
      d.content(b.get(e));
      if(callback!=undefined){
        callback(d,b.get(e),e);
      }
    });
  }
}
function jet_validInput(b,needShow) {
  var v=b.attr("jet-valid");
  var vt="";
  if(v.indexOf("lengthOfAny") != -1){
    var e = v.substring(12, v.length - 1).split(",");
    var f = "lengthOfAny";
    var str=b.content();//(needShow==undefined)?b.getContent():b.content();
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
      jet_checkIsPw(b);
    }
    if(jet_onOnePass!=undefined)
      jet_onOnePass(b, vt);
  }else{
    if (Jet.useDefaultStyle) {
      b.attr("jet-value", b.content()).content(vt).addClass("jet-unpass");
      if(b.attr("type")=="password"){
        b.attr("jet-ispw","true").attr("type","text");
      }
    }
    if(jet_onOneFail!=undefined)
      jet_onOneFail(b, vt);
    if(Jet.useShowForValid&&needShow!=false){
      Jet.show(vt,"error");
    }
  }
  return vt;
}
function jet_validInputOfForm(b){
  if(b.hasClass("jet-unpass")){
    if(jet_onOneFail!=undefined){
      jet_onOneFail(b, b.val());
    }
    return b.val();
  }else{
    return jet_validInput(b,false);
  }
}
function jet_addValidValue(a) {
	if (a.hasClass("jet-unpass")) {
		a.content(a.attr("jet-value"));
    jet_checkIsPw(a);
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
		var h = jet_validInputOfForm(j);
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
			if(c.constructor.name="Function"){
        c(e);
      }else{
        eval(c);
      }
		}
    var text=(Jet.language=="Chinese")?"输入有误，请按提示改正。":"Values is not expected";
    if(Jet.useShowForValid){
      Jet.show(text,"error");
    }else{
      alert(text);
    }
	} else {
		if (f != undefined) {
			if(f.constructor.name="Function"){
        f();
      }else{
        eval(f);
      }
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
	"notnull": "*必填",
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
	"notnull": "*Required",
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
		return /^(([12]\d{3}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|3(0|1))))$/;
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
		return "null";
		break
	}
}
function jet_getValidText(type,range){
  if(Jet.language=="Chinese"){
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
  if(a.indexOf("notnull")!=-1){
    if(e.length==0){
      return jet_getValueText("notnull");
    }
  }else if (a.indexOf("null") != -1) {
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
  var obj=J.id("jetNoteLittleWrapper");
  if(obj==undefined){
    jet_addNoteWrapper();
    obj=J.id("jetNoteLittleWrapper");
  }
  var child=obj.findClass("jet-icon-circle").child();
  if(!statu){
    child[0].className="jet-icon-part-ok1 jet-rotate-45";child[1].className="jet-icon-part-ok2 jet-rotate-45";
    statu="success";
  }else{
    switch (statu){
      case "success":child[0].className="jet-icon-part-ok1 jet-rotate-45";child[1].className="jet-icon-part-ok2 jet-rotate-45";break;
      case "warn":child[0].className="jet-icon-part-bar jet-icon-part-warn1";child[1].className="jet-icon-part-block jet-icon-part-warn2";break;
      case "error":child[0].className="jet-icon-part-x jet-rotate-45";child[1].className="jet-icon-part-x jet-rotate-045";break;
      case "info":child[0].className="jet-icon-part-block jet-icon-part-info1";child[1].className="jet-icon-part-bar jet-icon-part-info2";break;
      default:child[0].className="jet-icon-part-ok1 jet-rotate-45";child[1].className="jet-icon-part-ok2 jet-rotate-45";break;
    }
  }
  obj.className="jet-"+statu;
  J.id("jetNoteContent").text(content);
  J.id("jetNoteWrapper").css("top","0");
  time=j_checkArg(time,1500);
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
var jet_okCall=null;
var jet_cancelCall=null;
function jet_confirmShow(content,callback1,callback2){
  clearTimeout(jet_ct);
  var obj=J.id("jetConfirmContent");
  if(obj==undefined){
    jet_addConfirmWrapper();
    obj=J.id("jetConfirmContent");
  }
  obj.text(content);
  J.id("jetConfirmWrapper").css("top","0");
  if(callback1!=undefined){
    if(callback1.constructor.name=="Function"){
      jet_okCall=callback1;
    }else{
      jet_okCall=function(){eval(callback1)};
    }
  }
  if(callback2!=undefined){
    if(callback2.constructor.name=="Function"){
      jet_cancelCall=callback2;
    }else{
      jet_cancelCall=function(){eval(callback2)};
    }
  }
}
function jet_mesShowWait(content,statu){
  statu=j_checkArg(statu,"info");
  jet_mesShow(content,statu,0,function(){},false);
}
function jet_mesClose(){
  J.id("jetNoteWrapper").css("top","-100%");
}
function jet_confirmOk(){
  if(jet_okCall!=null){
    jet_okCall();
    jet_okCall=null;
  }
  jet_confirmClose();
}
function jet_confirmCancel(){
  if(jet_cancelCall!=null){
    jet_cancelCall();
    jet_cancelCall=null;
  }
  jet_confirmClose();
}

function jet_confirmClose(){
  J.id("jetConfirmWrapper").css("top","-100%");
}
function jet_setNoteStyle(style){
  if(style!="color"){
    style="gray";
  }
  Jet.noteStyle=style;
  if(J.id("jetNoteLittleWrapper")!=undefined){
    J.id("jetNoteLittleWrapper").attr("jet-style",style);
  }
}

function jet_addNoteWrapper(){
  var iconCircle=J.new("span").addClass("jet-icon-circle").append([J.new("span"),J.new("span")]);
  var jetNoteIcon=J.new("div").attr("id","jetNoteIcon").addClass("jet-icon-wrapper").append(iconCircle);
  var jetNoteContent=J.new("div").attr("id","jetNoteContent")
  var lwrapper=J.new("div").attr({"id":"jetNoteLittleWrapper","jet-style":Jet.noteStyle}).append([jetNoteIcon,jetNoteContent]);
  J.body().append(J.new("div").attr({"id":"jetNoteWrapper","onclick":"Jet.close()"}).append(lwrapper));
  var w=J.width();
  if(w<400){
    J.id("jetNoteLittleWrapper").attr("jet-size","large");
  }else if(w<1200){
    J.id("jetNoteLittleWrapper").attr("jet-size","middle");
  }
}
function jet_addConfirmWrapper(){
  var confirmOkIcon=J.new("span").addClass("jet-icon-circle jet-no-border").append([J.new("span").addClass("jet-icon-part-ok1 jet-rotate-45"),J.new("span").addClass("jet-icon-part-ok2 jet-rotate-45")]);
  var confirmCancelIcon=J.new("span").addClass("jet-icon-circle jet-no-border").append([J.new("span").addClass("jet-icon-part-x jet-rotate-45"),J.new("span").addClass("jet-icon-part-x jet-rotate-045")]);
  var confirmOk=J.new("div").attr({"id":"jetConfirmOk","onclick":"jet_confirmOk()"}).append(confirmOkIcon);
  var confirmCancle=J.new("div").attr({"id":"jetConfirmCancel","onclick":"jet_confirmCancel()"}).append(confirmCancelIcon);
  var confirmBtnWrapper=J.new("div").attr("id","jetConfirmBtnWrapper").append([confirmOk,confirmCancle]);
  var confirmContent=J.new("div").attr("id","jetConfirmContent");
  var confirmLittleWrapper=J.new("div").attr("id","jetConfirmLittleWrapper").append([confirmContent,confirmBtnWrapper]);
  var confirmWrapper=J.new("div").attr("id","jetConfirmWrapper").append(confirmLittleWrapper);
  J.body().append(confirmWrapper);
  var w=J.width();
  if(w<400){
    J.id("jetConfirmLittleWrapper").addClass("jet-large");
  }else if(w<1200){
    J.id("jetConfirmLittleWrapper").addClass("jet-middle");
  }
}
function jet_addInputWrapper(){
  var InputOkIcon=J.new("span").addClass("jet-icon-circle jet-no-border").append([J.new("span").addClass("jet-icon-part-ok1 jet-rotate-45"),J.new("span").addClass("jet-icon-part-ok2 jet-rotate-45")]);
  var InputCancelIcon=J.new("span").addClass("jet-icon-circle jet-no-border").append([J.new("span").addClass("jet-icon-part-x jet-rotate-45"),J.new("span").addClass("jet-icon-part-x jet-rotate-045")]);
  var InputOk=J.new("div").attr({"id":"jetInputOk","onclick":"jet_inputOk()"}).append(InputOkIcon);
  var InputCancle=J.new("div").attr({"id":"jetInputCancel","onclick":"jet_inputCancel()"}).append(InputCancelIcon);
  var InputBtnWrapper=J.new("div").attr("id","jetInputBtnWrapper").append([InputOk,InputCancle]);
  var InputContent=J.new("div").attr("id","jetInputContent");
  var InputLittleWrapper=J.new("div").attr("id","jetInputLittleWrapper").append([InputContent,InputBtnWrapper]);
  var InputWrapper=J.new("div").attr("id","jetInputWrapper").append(InputLittleWrapper);
  J.body().append(InputWrapper);
  var w=J.width();
  if(w<400){
    J.id("jetInputLittleWrapper").addClass("jet-large");
  }else if(w<1200){
    J.id("jetInputLittleWrapper").addClass("jet-middle");
  }
}
