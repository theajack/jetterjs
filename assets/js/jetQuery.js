var J = {
  height:function(){return document.body.offsetHeight},
  width:function(){return document.body.offsetWidth},
	class: function(a) {
    return j_checkSelect(document.getElementsByClassName(a));
	},
	id: function(a) {
		return document.getElementById(a);
	},
	tag: function(a) {
		return j_checkSelect(document.getElementsByTagName(a));
	},
	attr: function(a) {
		return j_checkSelect(document.querySelectorAll("[" + a + "]"));
	},
	name: function(a) {
		return j_checkSelect(document.getElementsByName(a));
	},
	select: function(a) {
		return j_checkSelect(document.querySelectorAll(a));
	},
  body:function(){return document.body},
	new: function(a) {
    if(a.has("#")||a.has(".")||a.has("[")){
      var a1=a.split('#');
      var a2;
      if(a.has("[")){
        var l=a1[a1.length-1];
        a2=l.substring(0,l.indexOf("[")).split('.');
        a2[a2.length-1]+=l.substring(l.indexOf("["));
      }else{
        a2=a1[a1.length-1].split('.');
      }
      var ci=a2.length-1;
      var a3=a2[ci].split('[');
      for(var i=0;i<a3.length;i++){
        a2[ci+i]=a3[i];
      }
      anum=a3.length-1;
      cnum=a2.length-anum-1;
      var e;
      if(a1.length==1){
        e=document.createElement(a2[0]);
      }else{
        e=document.createElement(a1[0]);
        e.attr("id",a2[0]);
      }
      for(var i=1;i<a2.length;i++){
        if(cnum>0){
          cnum--;
          e.addClass(a2[i]);
        }else{
          var ai=a2[i].substring(0,a2[i].length-1).split("=");
          e.attr(ai[0],ai[1])
        }
      }
      return e;
    }else{
      return document.createElement(a)
    }
	},
  scroll:function(dy,callback,speed){
    if(dy!=0){
      document.body.scroll(dy,callback,speed);
      document.documentElement.scroll(dy,callback,speed);
    }
  },
  scrollTo:function(y,callback,speed){
    document.body.scrollTo(y,callback,speed);
    document.documentElement.scrollTo(y,callback,speed);
  },
	ready: (function() {
		var b = [];
		var d = false;

		function c(g) {
			if (d) {
				return
			}
			if (g.type === "onreadystatechange" && document.readyState !== "complete") {
				return
			}
			for (var f = 0; f < b.length; f++) {
				b[f].call(document)
			}
			d = true;
			b = null
		}
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", c, false);
			document.addEventListener("readystatechange", c, false);
			window.addEventListener("load", c, false)
		} else {
			if (document.attachEvent) {
				document.attachEvent("onreadystatechange", c);
				window.attachEvent("onload", c)
			}
		}
		return function a(e) {
			if (d) {
				e.call(document)
			} else {
				b.push(e)
			}
		}
	})(),
	load: function(a) {
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", function() {
				document.removeEventListener("DOMContentLoaded", arguments.callee, false);
				a()
			}, false)
		} else {
			if (document.attachEvent) {
				document.attachEvent("onreadystatechange", function() {
					if (document.readyState == "complete") {
						document.detachEvent("onreadystatechange", arguments.callee);
						a()
					}
				})
			}
		}
	},
  ajax:function(options){
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = j_formatParams(options.data);
    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
      var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
      var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //接收 - 第三步
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        var status = xhr.status;
        if (status >= 200 && status < 300) {
          options.success && options.success(xhr.responseText, xhr.responseXML);
        } else {
          options.fail && options.fail(status);
        }
      }
    }
    //连接 和 发送 - 第二步
    if (options.type == "GET") {
      xhr.open("GET", options.url + "?" + params, true);
      xhr.send(null);
    } else if (options.type == "POST") {
      xhr.open("POST", options.url, true);
      //设置表单提交时的内容类型
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(params);
    }
  },
  jsonp:function(options){
    options = options || {};
    if (!options.url || !options.callback) {
      throw new Error("illagel parameter");
    }
    //创建 script 标签并加入到页面中
    var callbackName = ('jsonp_' + Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    options.data[options.callback] = callbackName;
    var params = formatParams(options.data);
    var oS = document.createElement('script');
    oHead.appendChild(oS);
    //创建jsonp回调函数
    window[callbackName] = function (json) {
      oHead.removeChild(oS);
      clearTimeout(oS.timer);
      window[callbackName] = null;
      options.success && options.success(json);
    };
    //发送请求
    oS.src = options.url + '?' + params;
    //超时处理
    if (options.time) {
      oS.timer = setTimeout(function () {
        window[callbackName] = null;
        oHead.removeChild(oS);
        options.fail && options.fail({ message: "time out" });
      }, time);
    }
  },cookie:function(c_name,value,expiredays,path){
    if(arguments.length==1){
      if (document.cookie.length>0){
        var c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){ 
          c_start=c_start + c_name.length+1 ;
          var c_end=document.cookie.indexOf(";",c_start);
          if (c_end==-1) c_end=document.cookie.length;
          return unescape(document.cookie.substring(c_start,c_end));
        } 
      }
      return ""
    }else{
      var exdate=new Date();
      exdate.setDate(exdate.getDate()+expiredays);
      var c=c_name+ "=" +escape(value);
      if(expiredays!=undefined){
        c+=";expires="+exdate.toGMTString();
      }
      if(path!=undefined){
        if(path.constructor.name=="Boolean"){
          if(path){
            c+=(";path=/");
          }
        }else{
          c+=(";path="+path);
        }
      }
    }
  }
};
function j_formatParams(data) {
  var arr = [];
  for (var name in data) {
      arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
  }
  arr.push(("v=" + Math.random()).replace(".",""));
  return arr.join("&");
}
var j=J;
J.ready(function(){
  J.tag("head").append(J.new("style").text(".j-animation{transition:all .5s linear!important;-moz-transition:all .5s linear!important;-webkit-transition:all .5s linear!important;-o-transition:all .5s linear!important}.j-slide{overflow:hidden!important;height:0!important;padding-top:0!important;padding-bottom:0!important}.j-fade{opacity:0!important}.j-display-none{display:none!important}@keyframes j-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@-moz-keyframes j-spin{from{-moz-transform:rotate(0)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes j-spin{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@-o-keyframes j-spin{from{-o-transform:rotate(0)}to{-o-transform:rotate(360deg)}}"));
});
function S(s){
  if(s==undefined){
    return J.body();
  }else{
    return J.select(s);
  }
};
var s=S;
function j_checkSelect(b){
  if(b.length==1){
    return b[0];
  }
  return b;
};
HTMLElement.prototype.css = function(d, value) {
	if (value==undefined) {
		if (d.constructor.name == "Object") {
			for (var key in d) {
        if(d[key].has("!")){
          this.style.setProperty(key,j_checkCssValue(this,key,d[key].substring(0,d[key].indexOf("!"))),"important");
        }else{
          this.style.setProperty(key,j_checkCssValue(this,key,d[key]));
        }
			}
			return this
		} else {
			return getComputedStyle(this)[d];
		}
	} else {
    if(value.has("!")){
      this.style.setProperty(d,j_checkCssValue(this,d,value.substring(0,value.indexOf("!"))),"important");
    }else{
      this.style.setProperty(d,j_checkCssValue(this,d,value));
    }
		return this;
	}
};
HTMLElement.prototype.data = function(d, value) {
  if(arguments.length==0){
    if(this.hasAttr("jet-data")){
      return JSON.parse(this.attr("jet-data"));//escape unescape
    }else{
      return null;
    }
  }else if(arguments.length==1){
    if(d==undefined){
      this.removeAttr("jet-data");
      return this;
    }else{
      if (d.constructor.name == "Object") {
        if(this.hasAttr("jet-data")){
          var json=JSON.parse(this.attr("jet-data"));
          for (var key in d) {
            if(d[key]!=undefined){
              json[key]=d[key];
            }else{
              delete json[key];
            }
          }
          this.attr("jet-data",JSON.stringify(json));
        }else{
          this.attr("jet-data",JSON.stringify(d));
        }
        return this;
      } else {
        if(this.hasAttr("jet-data")){
          return JSON.parse(this.attr("jet-data"))[d];
        }else{
          return "";
        }
      }
    }
  }else{//2
    if(value==undefined){
      if(this.hasAttr("jet-data")){
        var json=JSON.parse(this.attr("jet-data"));
        if(d.constructor.name=="Array"){
          d.each(function(sd){
            delete json[sd];
          });
        }else{
          delete json[d];
        }
        this.attr("jet-data",JSON.stringify(json));
      }
      return this;
    }else{
      if(this.hasAttr("jet-data")){
        var json=JSON.parse(this.attr("jet-data"));
        json[d]=value;
        this.attr("jet-data",JSON.stringify(json));
      }else{
        var json={};
        json[d]=value;
        this.attr("jet-data",JSON.stringify(json));
      }
      return this;
    }
  }
	/*if (value==undefined) {
    if(d==false){
      this.removeAttr("jet-data");
      return this;
    }else if(d==undefined){
      if(this.hasAttr("jet-data")){
        return JSON.parse(this.attr("jet-data"));//escape unescape
      }else{
        return {};
      }
    }else{
      if (d.constructor.name == "Object") {
        if(this.hasAttr("jet-data")){
          var json=JSON.parse(this.attr("jet-data"));
          for (var key in d) {
            json[key]=d[key];
          }
          this.attr("jet-data",JSON.stringify(json));
        }else{
          this.attr("jet-data",JSON.stringify(d));
        }
        return this;
      } else {
        if(this.hasAttr("jet-data")){
          return JSON.parse(this.attr("jet-data"))[d];
        }else{
          return "";
        }
      }
    }
	} else {
    if(this.hasAttr("jet-data")){
      var json=JSON.parse(this.attr("jet-data"));
      json[d]=value;
      this.attr("jet-data",JSON.stringify(json));
    }else{
      var json={};
      json[d]=value;
      this.attr("jet-data",JSON.stringify(json));
    }
    return this;
	}*/
};
HTMLCollection.prototype.data = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"&&d != false){
    return this[0].data(d);
  }else{
    if(value==undefined){
      this.each(function(a){
        a.data(d);
      });
    }else{
      this.each(function(a){
        a.data(d,value);
      });
    };return this;
  }
};
NodeList.prototype.data = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"&&d != false){
    return this[0].data(d);
  }else{
    if(value==undefined){
      this.each(function(a){
        a.data(d);
      });
    }else{
      this.each(function(a){
        a.data(d,value);
      });
    };return this;
  }
};
function j_checkCssValue(obj,key,value){
  if(value.has("=")){
    var addValue=j_getCssNumberValue(value.substring(value.indexOf("=")+1));
    if(value.has("-=")){
      addValue[0]=-addValue[0];
    }
    var b;
    if(value.has("%")){
      b=j_getCssNumberValue(obj.style[key]);
    }else{
      b=j_getCssNumberValue(getComputedStyle(obj)[key]);
    }
    return (addValue[0]+b[0])+addValue[1];
  }
  return value;
};
function j_getCssNumberValue(value,tile){
  if(value==""||value==undefined){value="0%";}
  if(tile==undefined){
    if(value.has("px")){
      tile="px";
    }else if(value.has("%")){
      tile="%";
    }else if(value.has("em")){
      tile="em";
    }else{
      return [parseFloat(value),"px"];
    }
  }
  return [parseFloat(value.substring(0,value.indexOf(tile))),tile];
};
function j_checkStyleName(name){
  var a=name.split("-");
  if (a.length<=1){
    return name;
  }else{
    var str=a[0];
    for(var i=1;i<a.length;i++){
      str+=(a[i].charAt(0).toUpperCase()+a[i].substring(1));
    }
    return str;
  }
};
HTMLCollection.prototype.css = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"){
    return this[0].css(d,value);
  }else{
    this.each(function(a){
      a.css(d,value);
    });return this;
  }
};
NodeList.prototype.css = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"){
    return this[0].css(d,value);
  }else{
    this.each(function(a){
      a.css(d,value);
    });return this;
  }
};
HTMLElement.prototype.attr = function(c, b) {
	if (b==undefined) {
		if (c.constructor.name == "Object") {
			for (var a in c) {
				this.setAttribute(a, c[a])
			}
			return this;
		} else {
			return this.getAttribute(c)
		}
	} else {
		this.setAttribute(c, b);
		return this;
	}
};
HTMLElement.prototype.hasAttr = function(name) {
  return this.hasAttribute(name)
};
HTMLElement.prototype.removeAttr = function(name) {
  var aa=name.split(" ");
  if(aa.length>1){
    var obj=this;
    aa.each(function(a){obj.removeAttribute(a)});
  }else{
    this.removeAttribute(name);
  }
  return this;
};
HTMLCollection.prototype.removeAttr = function(name) {
  this.each(function(a){
    a.removeAttr(name);
  });return this;
};
NodeList.prototype.removeAttr = function(name) {
  this.each(function(a){
    a.removeAttr(name);
  });return this;
};
HTMLCollection.prototype.attr = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"){
    return this[0].attr(d,value);
  }else{
    this.each(function(a){
      a.attr(d,value);
    });return this;
  }
};
NodeList.prototype.attr = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"){
    return this[0].attr(d,value);
  }else{
    this.each(function(a){
      a.attr(d,value);
    });return this;
  }
};
HTMLElement.prototype.findClass = function(a) {
	return j_checkSelect(this.getElementsByClassName(a));
};
HTMLElement.prototype.findId = function(a) {
	return this.getElementById(a)
};
HTMLElement.prototype.findTag = function(a) {
	return j_checkSelect(this.getElementsByTagName(a));
};
HTMLElement.prototype.findAttr = function(a) {
	return j_checkSelect(this.querySelectorAll("[" + a + "]"));
};
HTMLElement.prototype.findName = function(a) {
	return j_checkSelect(this.querySelectorAll("[name=" + a + "]"));
};
HTMLElement.prototype.select = function(a) {
	return j_checkSelect(this.querySelectorAll(a));
};
HTMLElement.prototype.addClass = function(a) {
  var ca=a.split(" ");
  if(ca.length>1){
    var obj=this;
    ca.each(function(i){
      if (!obj.hasClass(i)) {
        obj.className += " " + i;
      }
    });
  }else{
    if (!this.hasClass(a)) {
      this.className += " " + a;
    }
  }
	return this;
};
HTMLElement.prototype.replaceClass = function(a,b) {
  if(this.hasClass(a)){
    this.addClass(b).removeClass(a);
  }
  return this;
};
HTMLCollection.prototype.replaceClass =function(a,b){
  this.each(function(c) {
    c.replaceClass(a,b);
  });
  return this;
};
NodeList.prototype.replaceClass =function(a,b){
  this.each(function(c) {
    c.replaceClass(a,b);
  });
  return this;
};
HTMLElement.prototype.removeClass = function(a) {
  if(a==undefined){
    this.className="";
  }else{
    var ca=a.split(" ");
    if(ca.length>1){
      var obj=this;
      ca.each(function(i){
        if (obj.hasClass(i)) {
          var b = new RegExp("(\\s|^)" + i + "(\\s|$)");
          obj.className = obj.className.replace(b, " ")
        }
      });
    }else{
      if (this.hasClass(a)) {
        var b = new RegExp("(\\s|^)" + a + "(\\s|$)");
        this.className = this.className.replace(b, " ")
      }
    }
  }
	return this;
};
HTMLElement.prototype.toggleClass = function(a) {
  var ca=a.split(" ");
  var obj=this;
  ca.each(function(i){
    if (obj.hasClass(a)) {
      obj.removeClass(a);
    } else {
      obj.addClass(a);
    }
  });
	return this
};
HTMLCollection.prototype.toggleClass =function(v){
  this.each(function(b) {
    b.toggleClass(v);
  });
  return this;
};
NodeList.prototype.val =function(v){
  this.each(function(b) {
    b.toggleClass(v);
  });
  return this;
};
HTMLElement.prototype.val = function(a) {
	if (a==undefined) {
		return this.value;
	} else {
    if(this.tagName == "INPUT"||this.tagName == "TEXTAREA"){
      this.value = a;
    }
		return this;
	}
};

HTMLCollection.prototype.val =function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.val());
    });
    return a;
  }else{
    this.each(function(b) {
      b.val(v);
    });
    return this;
  }
};
NodeList.prototype.val =function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.val());
    });
    return a;
  }else{
    this.each(function(b) {
      b.val(v);
    });
    return this;
  }
};
HTMLElement.prototype.text = function(a) {
	if (a==undefined) {
		return this.innerText
	} else {
		this.innerText = a;
		return this
	}
};
HTMLCollection.prototype.text =function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.text());
    });
    return a;
  }else{
    this.each(function(b) {
      b.text(v);
    });
    return this;
  }
};
NodeList.prototype.text=function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.text());
    });
    return a;
  }else{
    this.each(function(b) {
      b.text(v);
    });
    return this;
  }
};
HTMLElement.prototype.content = function(a) {
	if (this.tagName == "INPUT"||this.tagName == "TEXTAREA") {
		if (a==undefined) {
			return this.value
		} else {
			this.value = a
		}
	} else {
		if (a==undefined) {
			return this.innerText
		} else {
			this.innerText = a
		}
	}
	return this
};
HTMLCollection.prototype.content =function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.content());
    });
    return a;
  }else{
    this.each(function(b) {
      b.content(v);
    });
    return this;
  }
};
NodeList.prototype.content=function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.content());
    });
    return a;
  }else{
    this.each(function(b) {
      b.content(v);
    });
    return this;
  }
};
HTMLElement.prototype.copy = function(){
  return j_copy(this.content());
};
function j_copy(str){
  var a=J.id("jCopyInput");
  if(a==undefined){
    a=J.new("input").attr({"type":"text","id":"jCopyInput"}).css({"height":"0","position":"fixed"});
    J.body().append(a);
  }
  a.val(str).select();
  if(document.execCommand("Copy")){
    return true;
  }else{
    alert("Copy is not supported in your browser");
    return false;
  }
};
HTMLElement.prototype.copyHtml = function(){
  return j_copy(this.html());
};
HTMLElement.prototype.html = function(a) {
	if (a==undefined) {
		return this.innerHTML
	} else {
		this.innerHTML = a;
		return this
	}
};
HTMLCollection.prototype.html =function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.html());
    });
    return a;
  }else{
    this.each(function(b) {
      b.html(v);
    });
    return this;
  }
};
NodeList.prototype.html=function(v){
  if(v==undefined){
    var a=[];
    this.each(function(b) {
      a.append(b.html());
    });
    return a;
  }else{
    this.each(function(b) {
      b.html(v);
    });
    return this;
  }
};
HTMLElement.prototype.hasClass = function(a) {
	return new RegExp("(\\s|^)" + a + "(\\s|$)").test(this.className)
};
HTMLElement.prototype.next = function(i){
  if(i!=undefined){
    return this.parent().child(this.index()+i);
  }else{
    return this.parent().child(this.index()+1);
  }
};
HTMLElement.prototype.prev = function(i){
  if(i!=undefined){
    return this.parent().child(this.index()-i);
  }else{
    return this.parent().child(this.index()-1);
  }
};
HTMLElement.prototype.offset = function() {
	return {
    left:this.offsetLeft,
    top:this.offsetTop,
    height:this.offsetHeight,
    width:this.offsetWidth
  };
};
HTMLElement.prototype.left = function() {
	return this.offsetLeft;
};

HTMLElement.prototype.top = function() {
	return this.offsetTop;
};
HTMLElement.prototype.scrollTo =function(top,callback,speed){
  var n=0;
  var obj=this;
  speed=j_checkArg(speed,400);
  var times=j_checkAnimateSpeed(speed)/10;
  var per=(top-obj.scrollTop)/times;
  var d=obj.scrollTop;
  var scroll_t=setInterval(function(){
    d+=per;
    obj.scrollTop=Math.round(d);
    n++;
    if(n==times){
      obj.scrollTop=top;
      j_checkCallBack(callback,obj);
      clearTimeout(scroll_t);
    }
  },10);
  return this;
};

HTMLElement.prototype.animate =function(css,callback,speed,timing){
  var csss=JSON.stringify(css);
  if(csss.has("left")||csss.has("top")){
    if(this.css("position")=="static"){
      this.css({
        "position":"relative",
        "left":"0",
        "top":"0"
      });
    }else{
      if(this.style.top==""){
        this.style.top=this.css("top");
      }
      if(this.style.left==""){
        this.style.left=this.css("left");
      }
    }
  }
  if(csss.has("height")&&this.style.height==""){
    this.style.height=this.css("height");
  }
  if(csss.has("width")&&this.style.width==""){
    this.style.width=this.css("width");
  }
  this.addClass("j-animation");
  speed=j_checkAnimatePara(this,speed,timing);
  var obj=this;
  setTimeout(function(){
    obj.css(css);
    setTimeout(function(){
      j_checkCallBack(callback,obj);
      obj.removeClass("j-animation");
    },speed);
  },50)
  return this;
};
HTMLCollection.prototype.animate = function(css,callback,speed,timing) {
  this.each(function(a){
    a.animate(css,callback,speed,timing);
  });
	return this
};
NodeList.prototype.animate = function(css,callback,speed,timing) {
  this.each(function(a){
    a.animate(css,callback,speed,timing);
  });
	return this;
};
HTMLElement.prototype.rotate =function(deg,callback,speed,origin,timing){
  var obj=this;
  obj.addClass("j-animation");
  setTimeout(function(){
    speed=j_checkAnimatePara(obj,speed,timing);
    j_checkOrigin(obj,origin);
    obj.css({
      "transform": "rotate("+deg+"deg)",
      "-ms-transform": "rotate("+deg+"deg)",
      "-webkit-transform": "rotate("+deg+"deg)",
      "-o-transform": "rotate("+deg+"deg)",
      "-moz-transform": "rotate("+deg+"deg)"
    });
    setTimeout(function(){
      j_checkCallBack(callback,obj);
      j_removeAnimation(obj);
    },speed);
  },50);
  return this;
};HTMLElement.prototype.scale =function(rate,callback,speed,timing){
  return j_scaleBase(this,rate,rate,callback,speed,timing);
};HTMLElement.prototype.scaleX =function(rate,callback,speed,timing){
  return j_scaleBase(this,rate,1,callback,speed,timing);
};HTMLElement.prototype.scaleY =function(rate,callback,speed,timing){
  return j_scaleBase(this,1,rate,callback,speed,timing);
};
function j_checkCallBack(callback,obj){
  if(callback!=undefined){
    if(callback.constructor.name=="Function"){
      if(obj!=undefined){
        callback(obj);
      }else{
        callback();
      }
    }else{
      eval(callback);
    }
  }
}
HTMLCollection.prototype.scale = function(rate,callback,speed,timing) {
  this.each(function(a){
    a.scale(rate,callback,speed,timing);
  });
	return this
};
NodeList.prototype.scale = function(rate,callback,speed,timing) {
  this.each(function(a){
    a.scale(rate,callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.scaleX = function(rate,callback,speed,timing) {
  this.each(function(a){
    a.scaleX(rate,callback,speed,timing);
  });
	return this
};
NodeList.prototype.scaleX = function(rate,callback,speed,timing) {
  this.each(function(a){
    a.scaleX(rate,callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.scaleY = function(rate,callback,speed,timing) {
  this.each(function(a){
    a.scaleY(rate,callback,speed,timing);
  });
	return this
};
NodeList.prototype.scaleY = function(rate,callback,speed,timing) {
  this.each(function(a){
    a.scaleY(rate,callback,speed,timing);
  });
	return this
};
function j_scaleBase(obj,x,y,callback,speed,timing){
  obj.addClass("j-animation");
  setTimeout(function(){
    speed=j_checkAnimatePara(obj,speed,timing);
    obj.css({
      "transform": "scale("+x+","+y+")",
      "-ms-transform": "scale("+x+","+y+")",
      "-webkit-transform": "scale("+x+","+y+")",
      "-o-transform": "scale("+x+","+y+")",
      "-moz-transform": "scale("+x+","+y+")"
    });
    setTimeout(function(){
      j_checkCallBack(callback,obj);
      j_removeAnimation(obj);
    },speed);
  },50);
  return obj;
};
function j_checkOrigin(obj,o){
  if(o==undefined){
    o="center";
  }obj.css({
    "transform-origin": o,
    "-ms-transform-origin": o,
    "webkit-transform-origin": o,
    "-o-transform-origin": o,
    "-moz-transform-origin": o
  });
};
HTMLCollection.prototype.rotate = function(deg,callback,speed,origin,timing) {
  this.each(function(a){
    a.rotate(deg,callback,speed,origin,timing);
  });
	return this
};
NodeList.prototype.rotate = function(deg,callback,speed,origin,timing) {
  this.each(function(a){
    a.rotate(deg,callback,speed,origin,timing);
  });
	return this
};
HTMLElement.prototype.spin =function(speed,times,origin,callback,timing){
  timing=j_checkArg(timing,"linear");
  times=j_checkArg(times,"infinite");
  if(speed!=undefined){
    speed=j_checkSpinSpeed(speed);
  }else{
    speed=2;
  }
  j_checkOrigin(this,origin);
  if(times.constructor.name=="Number"){
    this.stopSpin();
    var obj=this;
    setTimeout(function(){
      j_helpSpin(speed,times,origin,callback,timing,obj);
    },20);
  }else{
    j_helpSpin(speed,times,origin,callback,timing,this);
  }
  return this;
};
function j_helpSpin(speed,times,origin,callback,timing,obj){
  obj.css({
    "animation":"j-spin "+speed+"s "+timing+" 0s "+times,
    "-moz-animation":"j-spin "+speed+"s "+timing+" 0s "+times,
    "-webkit-animation":"j-spin "+speed+"s "+timing+" 0s "+times,
    "-o-animation":"j-spin "+speed+"s "+timing+" 0s "+times
  });
  if(times.constructor.name=="Number"){
    if(callback!=undefined){
      setTimeout(function(){
        j_checkCallBack(callback,obj);
      },speed*times*1000);
    }
  }
}
HTMLCollection.prototype.spin = function(speed,times,origin,callback,timing) {
  this.each(function(a){
    a.spin(speed,times,origin,callback,timing);
  });
	return this
};
NodeList.prototype.spin = function(speed,times,origin,callback,timing) {
  this.each(function(a){
    a.spin(speed,times,origin,callback,timing);
  });
	return this
};
function j_checkSpinSpeed(time){
  if(time.constructor.name=="String"){
    switch (time){
      case "slower":time=3;break;
      case "slow":time=2.5;break;
      case "normal":time=2;break;
      case "fast":time=1.5;break;
      case "faster":time=1;break;
      default:time=2;
    }
    return time;
  }else{
    return time/1000;
  }
};
HTMLElement.prototype.stopSpin =function(){
  var mat=this.css("transform");
  this.css({
    "animation":"none",
    "-moz-animation":"none",
    "-webkit-animation":"none",
    "-o-animation":"none",
    "transform":mat
  });
  return this;
};
HTMLCollection.prototype.stopSpin = function() {
  this.each(function(a){
    a.stopSpin();
  });
	return this
};
NodeList.prototype.stopSpin = function() {
  this.each(function(a){
    a.stopSpin();
  });
	return this
};
function j_removeAnimation(obj){
  obj.removeClass("j-animation").css({
    "transition-duration":"0s!important",
    "-ms-transition-duration":"0s!important",
    "-webkit-transition-duration":"0s!important",
    "-o-transition-duration":"0s!important",
    "-moz-transition-duration":"0s!important"
  });
};
HTMLElement.prototype.slideUp=function(callback,speed,timing){
  return j_animateBase(this,"j-slide",callback,speed,timing,false)
};
HTMLElement.prototype.slideDown=function(callback,speed,timing){
  if(this.hasClass("j-fade")){
    this.removeClass("j-fade").addClass("j-slide");
  }
  return j_animateBase(this,"j-slide",callback,speed,timing,true);
};
HTMLElement.prototype.slideToggle=function(callback,speed,timing){
  if(this.hasClass("j-fade")){
    this.removeClass("j-fade").addClass("j-slide");
  }
  return j_animateBase(this,"j-slide",callback,speed,timing);
};
HTMLElement.prototype.fadeOut=function(callback,speed,timing){
  return j_animateBase(this,"j-fade",callback,speed,timing,false)
};
HTMLElement.prototype.fadeIn=function(callback,speed,timing){
  if(this.hasClass("j-slide")){
    this.removeClass("j-slide").addClass("j-fade");
  }
  return j_animateBase(this,"j-fade",callback,speed,timing,true);
};
HTMLElement.prototype.fadeToggle=function(callback,speed,timing){
  if(this.hasClass("j-slide")){
    this.removeClass("j-slide").addClass("j-fade");
  }
  return j_animateBase(this,"j-fade",callback,speed,timing);
};
HTMLElement.prototype.hide=function(){
  if(!this.hasAttr("j-display")){
  this.attr("j-display",this.css("display"));
  return this.css("display","none");
  };return this;
};
HTMLElement.prototype.show =function(needRemove){
  if(this.hasAttr("j-display")){
    if(needRemove==undefined){
      this.removeClass("j-fade j-slide");
    }
    return this.css("display",this.attr("j-display")).removeAttr("j-display");
  };return this;
};
HTMLElement.prototype.showToggle=function(){
  if(this.hasAttr("j-display")){
    this.show();
  }else{
    this.hide();
  }
};
function j_animateBase(obj,name,callback,speed,timing,isShow){
  if(isShow==undefined){
    if(obj.hasAttr("j-display")){
      isShow=true;
    }else{
      isShow=false;
    }
  }
  obj.addClass("j-animation");
  if(isShow){
    obj.show(false);
  }
  if(isShow!=false){
    setTimeout(function(){
      j_animateBasePart(obj,name,callback,speed,timing,isShow);
    },50);
  }else{
    j_animateBasePart(obj,name,callback,speed,timing,isShow);
  }
  return obj;
};
function j_animateBasePart(obj,name,callback,speed,timing,isShow){
  speed=j_checkAnimatePara(obj,speed,timing);
  if(isShow){
    obj.removeClass(name);
  }else{
    obj.addClass(name);
  }
  setTimeout(function(){
    j_checkCallBack(callback,obj);
    j_removeAnimation(obj);
    if(!isShow){
      obj.hide();
    }
  },speed);
};
function j_checkAnimatePara(obj,speed,timing){
  if(speed!=undefined){
    speed=j_checkAnimateSpeed(speed)/1000;
  }else{
    speed=0.5;
  }
  obj.css({
    "transition-duration":speed+"s!important",
    "-ms-transition-duration":speed+"s!important",
    "-webkit-transition-duration":speed+"s!important",
    "-o-transition-duration":speed+"s!important",
    "-moz-transition-duration":speed+"s!important"
  });
  timing=j_checkArg(timing,"linear");
  obj.css({
    "transition-timing-function":timing+"!important",
    "-ms-transition-timing-function":timing+"!important",
    "-webkit-transition-timing-function":timing+"!important",
    "-o-transition-timing-function":timing+"!important",
    "-moz-transition-timing-function":timing+"!important"
  });
  return speed*1000;
};
HTMLCollection.prototype.slideUp = function(callback,speed,timing) {
  this.each(function(a){
    a.slideUp(callback,speed,timing);
  });
	return this
};
NodeList.prototype.slideUp = function(callback,speed,timing) {
  this.each(function(a){
    a.slideUp(callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.slideDown = function(callback,speed,timing) {
  this.each(function(a){
    a.slideDown(callback,speed,timing);
  });
	return this
};
NodeList.prototype.slideDown = function(callback,speed,timing) {
  this.each(function(a){
    a.slideDown(callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.slideToggle = function(callback,speed,timing) {
  this.each(function(a){
    a.slideToggle(callback,speed,timing);
  });
	return this
};
NodeList.prototype.slideToggle = function(callback,speed,timing) {
  this.each(function(a){
    a.slideToggle(callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.fadeIn = function(callback,speed,timing) {
  this.each(function(a){
    a.fadeIn(callback,speed,timing);
  });
	return this
};
NodeList.prototype.fadeIn = function(callback,speed,timing) {
  this.each(function(a){
    a.fadeIn(callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.fadeOut = function(callback,speed,timing) {
  this.each(function(a){
    a.fadeOut(callback,speed,timing);
  });
	return this
};
NodeList.prototype.fadeOut = function(callback,speed,timing) {
  this.each(function(a){
    a.fadeOut(callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.fadeToggle = function(callback,speed,timing) {
  this.each(function(a){
    a.fadeToggle(callback,speed,timing);
  });
	return this
};
NodeList.prototype.fadeToggle = function(callback,speed,timing) {
  this.each(function(a){
    a.fadeToggle(callback,speed,timing);
  });
	return this
};
HTMLCollection.prototype.hide = function() {
  this.each(function(a){
    a.hide();
  });
	return this
};
NodeList.prototype.hide = function() {
  this.each(function(a){
    a.hide();
  });
	return this
};
HTMLCollection.prototype.show = function() {
  this.each(function(a){
    a.show();
  });
	return this
};
NodeList.prototype.show = function() {
  this.each(function(a){
    a.show();
  });
	return this
};
HTMLCollection.prototype.showToggle = function() {
  this.each(function(a){
    a.showToggle();
  });
	return this
};
NodeList.prototype.showToggle = function() {
  this.each(function(a){
    a.showToggle();
  });
	return this
};
HTMLElement.prototype.scroll =function(i,callback,speed){
  if(arguments.length==0){
    return this.scrollTop;
  }else{
    return this.scrollTo(this.scrollTop+i,callback,speed);
  }
};
function j_checkAnimateSpeed(time){
  if(time.constructor.name=="String"){
    switch (time){
      case "slower":time=1500;break;
      case "slow":time=1000;break;
      case "normal":time=500;break;
      case "fast":time=300;break;
      case "faster":time=100;break;
      default:time=500;
    }
  }
  return time;
};

function j_checkArg(arg,defaultValue){
  return (arg==undefined)?defaultValue:arg;
};
HTMLElement.prototype.scrollXTo =function(left,callback,speed){
  var n=0;
  var obj=this;
  speed=j_checkArg(speed,400);
  var times=j_checkAnimateSpeed(speed)/10;
  var per=(left-obj.scrollLeft)/times;
  var d=obj.scrollLeft;
  var scroll_t=setInterval(function(){
    d+=per;
    obj.scrollLeft=Math.round(d);
    n++;
    if(n==times){
      obj.scrollLeft=left;
      j_checkCallBack(callback,obj);
      clearTimeout(scroll_t);
    }
  },10);
  return this;
};
HTMLElement.prototype.scrollX=function(i,callback,speed){
  if(arguments.length==0){
    return this.scrollLeft;
  }else{
    return this.scrollXTo(this.scrollLeft+i,callback,speed);
  }
};
HTMLElement.prototype.height = function() {
	return this.offsetHeight;
};

HTMLElement.prototype.width = function() {
	return this.offsetWidth;
};

HTMLElement.prototype.child = function(i) {
  if(i==undefined){
    return this.children;
  }else{
    return this.children[i];
  }
};
HTMLElement.prototype.parent = function(i) {
  if(i==undefined){
    return this.parentElement;
  }else{
    var p=this;
    for(var j=0;j<i;j++){
      p=p.parentElement;
    }
    return p;
  }
};

HTMLElement.prototype.brother = function(i) {
  if(i==undefined){
    return this.parent().child();
  }else{
    return this.parent().child(i);
  }
};
HTMLElement.prototype.prepend = function(a) {
  if(a.constructor.name=="Array"){
    var obj=this;
    a.each(function(ele){
      obj.insertBefore(ele, this.children[0]);
    });
  }else{
    this.insertBefore(a, this.children[0]);
  }
  return this;
};
HTMLCollection.prototype.prepend = function(a) {
  this.each(function(c){
    c.prepend(a);
  });
	return this
};
NodeList.prototype.prepend = function(a) {
  this.each(function(c){
    c.prepend(b, a);
  });
	return this
};
HTMLElement.prototype.append = function(b, a) {
	if (a==undefined) {
    if(b.constructor.name=="Array"){
      var obj=this;
      b.each(function(ele){
        obj.appendChild(ele);
      });
    }else{
      this.appendChild(b);
    }
	} else {
		this.insertBefore(b, this.children[a]);
	}
  return this;
};
HTMLElement.prototype.after =function(b){
  if(b.constructor.name=="Array"){
    var obj=this;
    var objn=obj.next();
    b.each(function(ele){
      obj.parent().insertBefore(ele,objn);
    });
  }else{
    this.parent().insertBefore(b, this.next());
  }
  return this;
}
HTMLElement.prototype.before =function(b){
  if(b.constructor.name=="Array"){
    var obj=this;
    b.each(function(ele){
      obj.parent().insertBefore(ele,obj);
    });
  }else{
    this.parent().insertBefore(b, this);
  }
  return this;
}
HTMLCollection.prototype.after = function(b) {
  this.each(function(c){
    c.after(b);
  });
	return this
};
NodeList.prototype.after = function(b) {
  this.each(function(c){
    c.after(b);
  });
	return this
};
HTMLCollection.prototype.before = function(b) {
  this.each(function(c){
    c.before(b);
  });
	return this
};
NodeList.prototype.before = function(b) {
  this.each(function(c){
    c.before(b);
  });
	return this
};
HTMLCollection.prototype.append = function(b, a) {
  this.each(function(c){
    c.append(b, a);
  });
	return this
};
NodeList.prototype.append = function(b, a) {
  this.each(function(c){
    c.append(b, a);
  });
	return this
};
HTMLElement.prototype.index =function(){
  var list=this.parent().child();
  for(var i=0;i<list.length;i++){
    if(list[i]==this){
      return i;
    }
  }
  return -1;
};
HTMLElement.prototype.event=function(name,fun){
  if (fun==undefined) {
    for (var key in name) {
      if(name[key].constructor.name=="Function"){
        eval('this.'+key+'='+name[key]);
      }else{
        this.attr(key,name[key]);
      }
    }
	} else {
    if(fun.constructor.name=="Function"){
      eval('this.'+name+'='+fun);
    }else{
      this.attr(name,fun);
    }
	}
  return this;
};

HTMLElement.prototype.empty =function(){
  return this.html("");
};
HTMLCollection.prototype.empty = function() {
  this.each(function(a){
    a.empty();
  });
	return this
};
NodeList.prototype.empty = function() {
  this.each(function(a){
    a.empty();
  });
	return this
};

HTMLElement.prototype.remove =function(){
  this.parentNode.removeChild(this);
};
HTMLCollection.prototype.remove = function(a) {
  if(a==undefined){
    for(var i=0;i<this.length;){
      this[i].remove();
    }
  }else{
    if(a.constructor.name=="Number"){
      for(var i=0;i<this.length;i++){
        if(i==a){
          this[i].remove();
          return this;
        }
      }
    }else{
      for(var i=0;i<this.length;i++){
        if(this[i]==a){
          this[i].remove();
          return this;
        }
      }
    }
  }
};
NodeList.prototype.remove = function(a) {
  if(a==undefined){
    for(var i=0;i<this.length;){
      this[i].remove();
    }
  }else{
    if(a.constructor.name=="Number"){
      for(var i=0;i<this.length;i++){
        if(i==a){
          this[i].remove();
          return this;
        }
      }
    }else{
      for(var i=0;i<this.length;i++){
        if(this[i]==a){
          this[i].remove();
          return this;
        }
      }
    }
  }
};
HTMLElement.prototype.each = function(b) {
  b(this,0);
  return this;
};
HTMLCollection.prototype.each = function(b) {
	for (var a = 0; a < this.length; a++) {
		b(this[a],a);
	}
  return this;
};
HTMLCollection.prototype.attr=function(name,fun){
	this.each(function(b) {
		b.attr(name,fun);
	});
	return this;
};
NodeList.prototype.attr=function(name,fun){
	this.each(function(b) {
		b.attr(name,fun);
	});
	return this;
};
HTMLCollection.prototype.event=function(name,fun){
	this.each(function(b) {
		b.event(name,fun);
	});
	return this;
};
NodeList.prototype.event=function(name,fun){
	this.each(function(b) {
		b.event(name,fun);
	});
	return this;
};
HTMLCollection.prototype.removeClass = function(a) {
	this.each(function(b) {
		b.removeClass(a)
	});
	return this;
};
HTMLCollection.prototype.addClass = function(a) {
	this.each(function(b) {
		b.addClass(a);
	});
	return this;
};
NodeList.prototype.removeClass = function(a) {
	this.each(function(b) {
		b.removeClass(a);
	});
	return this;
};
NodeList.prototype.addClass = function(a) {
	this.each(function(b) {
		b.addClass(a);
	});
	return this;
};
NodeList.prototype.each = function(b) {
	for (var a = 0; a < this.length; a++) {
		b(this[a],a);
	}
  return this;
};
Array.prototype.each = function(b) {
	for (var a = 0; a < this.length; a++) {
		b(this[a],a);
	}
  return this;
};
Array.prototype.removeByIndex = function(b) {
	for (var a = 0; a < this.length; a++) {
		if(a==b){
      if(a<this.length-1){
        for(var i=a+1;i<this.length;i++){
          this[i-1]=this[i];
        }
      }
      this.length--;
      return this;
    }
	}
  return this;
};
Array.prototype.remove = function(b) {
	for (var a = 0; a < this.length; a++) {
		if(this[a]==b){
      if(a<this.length-1){
        for(var i=a+1;i<this.length;i++){
          this[i-1]=this[i];
        }
      }
      this.length--;
      return this;
    }
	}
  return this;
};

Array.prototype.insert = function(b,i) {
  for(var a=this.length-1;a>=i;a--){
    this[a+1]=this[a];
  }
  this[i]=b;
  return this;
};
Array.prototype.append = function(b) {
  this[this.length]=b;
  return this;
};
Array.prototype.prepend = function(b) {
  return this.insert(b,0);
};

Array.prototype.sort=function(asc){
  var len = this.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = this[i];
    while(preIndex >= 0 && this[preIndex] > current) {
      this[preIndex+1] = this[preIndex];
      preIndex--;
    }
    this[preIndex+1] = current;
  }
  if(asc==false){
    this.reverse();
  }
  return this;
};
Array.prototype.sortByAttr=function(attr,asc){
  if(!(!parseFloat(this[0][attr]))){
    var len = this.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
      preIndex = i - 1;
      current = this[i];
      while(preIndex >= 0 && this[preIndex][attr] > current[attr]) {
        this[preIndex+1] = this[preIndex];
        preIndex--;
      }
      this[preIndex+1] = current;
    }
    if(asc==false){
      this.reverse();
    }
  }
  return this;
};
Array.prototype.reverse=function(){
  var t;
  var n=Math.floor(this.length/2);
  for(var i=0;i<n;i++){
    t=this[i];
    this[i]=this[this.length-1-i];
    this[this.length-1-i]=t;
  };
  return this;
};
String.prototype.has=function(s){
  if(this.includes==undefined){
    return (this.indexOf(s)!=-1);
  }else{
    return this.includes(s);
  }
};
String.prototype.timesOf=function(s){
  return this.split(s).length-1;
};
String.prototype.replaceAll=function(a,b){
  var s = this.split(a);
  var str="";
  s.each(function(ss,i){
    if(i>0){
      str+=(b+ss);
    }
  });
  return str;
};
String.prototype.indexsOf=function(a,i){
  var sa=this.split(a);
  if(sa.length<=2){
    if(this.indexOf(a)==-1){
      return [];
    }else{
      return [this.indexOf(a)];
    }
  }else{
    var ia=[];
    var al=a.length;
    var index=0;
    sa.each(function(s,n){
      if(n>0){
        ia[ia.length]=index;
        index+=a.length;
      }
      index+=s.length;
    });
    if(i==undefined){
      return ia;
    }else{
      if(i>ia.length-1)
        return ia[ia.length-1];
      return ia[i];
    }
  }
};




















