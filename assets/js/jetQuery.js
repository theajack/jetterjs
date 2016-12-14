var J = {
	class: function(a) {
		return document.getElementsByClassName(a)
	},
	id: function(a) {
		return document.getElementById(a)
	},
	tag: function(a) {
		return document.getElementsByTagName(a)
	},
	attr: function(a) {
		return document.querySelectorAll("[" + a + "]")
	},
	name: function(a) {
		return document.getElementsByName(a)
	},
	select: function(a) {
		var b = document.querySelectorAll(a);
		if (b.length == 1) {
			return b[0]
		} else {
			return b
		}
	},
  body:function(){return this.tag("body")[0]},
	new: function(a) {
		return document.createElement(a)
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
	}
};
HTMLElement.prototype.css = function(d, value) {
	if (value==undefined) {
		if (d.constructor.name == "Object") {
			for (var key in d) {
				eval("this.style." + j_checkStyleName(key) + "='" + d[key] + "'")
			}
			return this
		} else {
			return getComputedStyle(this)[d];
		}
	} else {
		eval("this.style." + j_checkStyleName(d) + "='" + value + "'");
		return this
	}
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
}
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
			return this
		} else {
			return this.getAttribute(c)
		}
	} else {
		this.setAttribute(c, b);
		return this
	}
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
	return this.getElementsByClassName(a)
};
HTMLElement.prototype.findId = function(a) {
	return this.getElementById(a)
};
HTMLElement.prototype.findTag = function(a) {
	return this.getElementsByTagName(a)
};
HTMLElement.prototype.findAttr = function(a) {
	return this.querySelectorAll("[" + a + "]")
};
HTMLElement.prototype.findName = function(a) {
	return this.getElementsByName(a)
};
HTMLElement.prototype.select = function(a) {
	return this.querySelectorAll(a)
};
HTMLElement.prototype.addClass = function(a) {
	if (!this.hasClass(a)) {
		this.className += " " + a
	}
	return this
};
HTMLElement.prototype.removeClass = function(a) {
	if (this.hasClass(a)) {
		var b = new RegExp("(\\s|^)" + a + "(\\s|$)");
		this.className = this.className.replace(b, " ")
	}
	return this
};
HTMLElement.prototype.removeAllClass=function(){
  this.className="";
  return this;
}
HTMLElement.prototype.toggleClass = function(a) {
	if (this.hasClass(a)) {
		this.removeClass(a)
	} else {
		this.addClass(a)
	}
	return this
};
HTMLElement.prototype.val = function(a) {
	if (a==undefined) {
		return this.value
	} else {
		this.value = a;
		return this
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
HTMLElement.prototype.copy = function(){
  j_copy(this.content());
  return this;
}
function j_copy(str){
  var a=J.id("jCopyInput");
  if(a==undefined){
    a=J.new("input").attr({"type":"text","id":"jCopyInput"}).css({"height":"0","position":"fixed"});
    J.body().append(a);
  }
  a.val(str).select();
  document.execCommand("Copy");
}
HTMLElement.prototype.copyHtml = function(){
  j_copy(this.html());
  return this;
}
HTMLElement.prototype.html = function(a) {
	if (a==undefined) {
		return this.innerHTML
	} else {
		this.innerHTML = a;
		return this
	}
};
HTMLElement.prototype.hasClass = function(a) {
	return new RegExp("(\\s|^)" + a + "(\\s|$)").test(this.className)
};
HTMLElement.prototype.child = function() {
	return this.children
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
HTMLElement.prototype.scrollTo=function(i){
  this.scrollTop=i;
}
HTMLElement.prototype.scroll=function(i){
  this.scrollTop+=i;
}
HTMLElement.prototype.height = function() {
	return this.offsetHeight;
};

HTMLElement.prototype.width = function() {
	return this.offsetWidth;
};

HTMLElement.prototype.child = function(i) {
  if(i==undefined){
    return this.children
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
HTMLElement.prototype.prepend = function(a) {
	this.insertBefore(a, this.children[0]);
  return this;
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
		this.insertBefore(b, this.children[a])
	}
  return this;
};
HTMLElement.prototype.index=function(){
  var list=this.parent().child();
  for(var i=0;i<list.length;i++){
    if(list[i]==this){
      return i;
    }
  }
  return -1;
}
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
}
HTMLElement.prototype.remove=function(){
  this.parentNode.removeChild(this);
  return this;
} 
HTMLCollection.prototype.remove = function() {
  for(var i=0;i<this.length;){
    this[i].remove();
  }
	return this
};
NodeList.prototype.remove = function() {
  for(var i=0;i<this.length;){
    this[i].remove();
  }
	return this
};
HTMLCollection.prototype.removeChild = function(obj) {
  for(var i=0;i<this.length;i++){
    if(this[i]==obj){
      obj.remove();
      break;
    }
  }
	return this
};
NodeList.prototype.removeChild = function(obj) {
	for(var i=0;i<this.length;i++){
    if(this[i]==obj){
      obj.remove();
      break;
    }
  }
	return this;
};
function list_remove(){
  
}
HTMLCollection.prototype.each = function(b) {
	for (var a = 0; a < this.length; a++) {
		b(this[a],a)
	}
};
HTMLCollection.prototype.select = function(c) {
	var b = [];
	this.each(function(a) {
		b[b.length] = a.select(c)
	});
	return b
};
NodeList.prototype.select = function() {
	var b = [];
	this.each(function(a) {
		b[b.length] = a.select(name)
	});
	return b
};
HTMLCollection.prototype.attr=function(name,fun){
	this.each(function(b) {
		b.attr(name,fun);
	});
	return this;
}
NodeList.prototype.attr=function(name,fun){
	this.each(function(b) {
		b.attr(name,fun);
	});
	return this;
}
HTMLCollection.prototype.event=function(name,fun){
	this.each(function(b) {
		b.event(name,fun);
	});
	return this;
}
NodeList.prototype.event=function(name,fun){
	this.each(function(b) {
		b.event(name,fun);
	});
	return this;
}
HTMLCollection.prototype.removeClass = function(a) {
	this.each(function(b) {
		b.removeClass(a)
	});
	return this;
};
HTMLCollection.prototype.removeAllClass = function() {
	this.each(function(b) {
		b.removeAllClass()
	});
	return this;
};
NodeList.prototype.removeAllClass = function() {
	this.each(function(b) {
		b.removeAllClass()
	});
	return this;
};
HTMLCollection.prototype.addClass = function(a) {
	this.each(function(b) {
		b.addClass(a)
	})
	return this;
};
NodeList.prototype.removeClass = function(a) {
	this.each(function(b) {
		b.removeClass(a)
	})
	return this;
};
NodeList.prototype.addClass = function(a) {
	this.each(function(b) {
		b.addClass(a)
	})
	return this;
};
NodeList.prototype.each = function(b) {
	for (var a = 0; a < this.length; a++) {
		b(this[a],a);
	}
};
Array.prototype.each = function(b) {
	for (var a = 0; a < this.length; a++) {
		b(this[a],a);
	}
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
}
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
}
Array.prototype.reverse=function(){
  var t;
  var n=Math.floor(this.length/2);
  for(var i=0;i<n;i++){
    t=this[i];
    this[i]=this[this.length-1-i];
    this[this.length-1-i]=t;
  }
  return this;
}