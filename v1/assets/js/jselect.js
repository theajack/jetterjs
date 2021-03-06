/*JSelect.js
  by theajack
  2017/3/18
  http://www.theajack.com/jetterjs/
*/
(function(){
  (function(){var meta=document.createElement("meta");
  meta.setAttribute("http-equiv","X-UA-Compatible");
  meta.setAttribute("content","chrome=1");
  var head=document.getElementsByTagName("head")[0];
  head.insertBefore(meta,head.children[0]);})();
  window.J = {
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
    height: function() {
      return document.documentElement.clientHeight
      //return document.body.offsetHeight
    },
    width: function() {
      return document.documentElement.clientWidth
      //return document.body.offsetWidth
    },
    class: function(a) {
      return _checkSelect(document.getElementsByClassName(a))
    },
    id: function(a) {
      return document.getElementById(a)
    },
    tag: function(a) {
      return _checkSelect(document.getElementsByTagName(a))
    },
    attr: function(a) {
      return _checkSelect(document.querySelectorAll("[" + a + "]"))
    },
    name: function(a) {
      return _checkSelect(document.getElementsByName(a))
    },
    select: function(a) {
      return _checkSelect(document.querySelectorAll(a))
    },
    body: function() {
      return document.body
    },
    copy: _copy,
    clone:_clone,
    each:_each,
    new: function(a) {
      if (a.has("#") || a.has(".") || a.has("[")) {
        var b = a.split('#');
        if(b.length>1){
          b=[b[0],a.substring(b[0].length+1)];
        }
        var c;
        if (a.has("[")) {
          var l = b[b.length - 1];
          c = l.substring(0, l.indexOf("[")).split('.');
          c[c.length - 1] += l.substring(l.indexOf("["))
        } else {
          c = b[b.length - 1].split('.')
        }
        var d = c.length - 1;
        var f = c[d].split('[');
        for (var i = 0; i < f.length; i++) {
          c[d + i] = f[i]
        }
        anum = f.length - 1;
        cnum = c.length - anum - 1;
        var e;
        if (b.length == 1) {
          e = document.createElement(c[0])
        } else {
          e = document.createElement(b[0]);
          e.attr("id", c[0])
        }
        for (var i = 1; i < c.length; i++) {
          if (cnum > 0) {
            cnum--;
            e.addClass(c[i])
          } else {
            var g = c[i].substring(0, c[i].length - 1);
            var index=g.indexOf("=");
            e.attr(g.substring(0,index), g.substring(index+1));
          }
        }
        return e
      } else {
        return document.createElement(a)
      }
    },
    scroll: function(a, b, c) {
      if (arguments.length != 0) {
        if (a != 0) {
          document.body.scroll(a, null, c);
          document.documentElement.scroll(a, null, c);
          if (b != undefined) {
            c = _checkArg(c, 400);
            if (c.constructor!= Number) {
              c = _checkAnimateSpeed(c)
            }
            setTimeout(_checkFunction(b), c);
          }
        }
      } else {
        if (document.body.scrollTop == 0) {
          return document.documentElement.scrollTop
        } else {
          return document.body.scrollTop
        }
      }
    },
    scrollTo: function(y, a, b) {
      document.body.scrollTo(y, null, b);
      document.documentElement.scrollTo(y, null, b);
      if (a != undefined) {
        b = _checkArg(b, 400);
        if (b.constructor != Number) {
          b = _checkAnimateSpeed(b)
        }
        setTimeout(_checkFunction(a), b);
      }
    },
    ajax: function(a) {
      var b = {
        type: a.type || "GET",
        url: a.url || "",
        async: a.async || "true",
        data: a.data || null,
        dataType: a.dataType || "text",
        contentType: a.contentType || "application/x-www-form-urlencoded",
        beforeSend: a.beforeSend ||function() {},
        success: a.success ||function() {},
        error: a.error ||function() {}
      };
      b.beforeSend();
      var c;
      if (window.ActiveXObject) {
        c = ActiveXObject("Microsoft.XMLHTTP")
      } else if (window.XMLHttpRequest) {
        c =new XMLHttpRequest()
      }
      c.responseType = b.dataType;
      c.open(b.type, b.url, b.async);
      c.setRequestHeader("Content-Type", b.contentType);
      //header
      c.send(_convertData(b.data));
      c.onreadystatechange = function() {
        if (c.readyState == 4) {
          if (c.status == 200) {
            b.success(c.response)
          } else {
            b.error()//errInfo
          }
        }
      }
    },
    jsonp: function(options) {
      if (!options.url) {
        throw new Error("Parameter error");
      }else{
        var callbackName = ('_jsonp' + Math.random()).replace(".", "").substring(0, 15);
        var head = J.tag("head");
        options.data[_checkArg(options.callback, "callback")] = callbackName;
        var script = J.new('script');
        head.append(script);
        window[callbackName] = function(a) {
          head.removeChild(script);
          clearTimeout(script.timer);
          window[callbackName] = null;
          if(a.constructor==String){
            a=JSON.parse(a);
          }
          options.success && options.success(a);
        };
        if (options.dataType != undefined && options.dataType.toUpperCase() == "JSON") {
          script.attr("src", options.url + '?json=' + encodeURIComponent(JSON.stringify(options.data)))
        } else {
          script.attr("src", options.url + '?' + _formatParams(options.data))
        }
        options.time = _checkArg(options.time, 5000);
        script.timer = setTimeout(function() {
          window[callbackName] = null;
          head.removeChild(script);
          options.timeout && options.timeout({
            message:( (!options.message)?"timeout":options.message)
          })
        }, options.time)
      }
    },
    cookie: function(a, b, d, e) {
      if (arguments.length == 1) {
        if (document.cookie.length > 0) {
          var f = document.cookie.indexOf(a + "=");
          if (f != -1) {
            f = f + a.length + 1;
            var g = document.cookie.indexOf(";", f);
            if (g == -1) g = document.cookie.length;
            return unescape(document.cookie.substring(f, g))
          }
        }
        return ""
      } else {
        if (b == null) {
          J.cookie(a, "", -1)
        } else {
          var c = a + "=" + escape(b);
          if (d != undefined) {
            var h = new Date();
            h.setDate(h.getDate() + d);
            c += ";expires=" + h.toGMTString()
          }
          if (e != undefined) {
            if (e.constructor == Boolean) {
              if (e) {
                c += (";path=/")
              }
            } else {
              c += (";path=" + e)
            }
          }
          document.cookie = c;
          return a + "=" + b
        }
      }
    },
    html5:function(){
      if (window.applicationCache) {
        return true;
      }
      return false;
    }
  };

  function _convertData(a) {
    if (a.constructor == Object) {
      var b = "";
      for (var c in a) {
        b += c + "=" + a[c] + "&"
      }
      b = b.substring(0, b.length - 1);
      return b
    } else {
      return a;
    }
  }
  function _checkFunction(a){
    if(a==undefined){
      return null;
    }else{
      if(a.constructor==Function){
        return a;
      }else{
        return new Function(a);
      }
    }
  }
  function _formatParams(a) {
    var b = [];
    for (var c in a) {
      b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]))
    }
    return b.join("&")
  }
  J.ready(function() {
    J.tag("head").append(J.new("style").txt(".j-none{visibility:hidden!important;position:absolute!important;display:block!important;}.j-animation{transition:all .5s linear!important;-moz-transition:all .5s linear!important;-webkit-transition:all .5s linear!important;-o-transition:all .5s linear!important}.j-slide{overflow:hidden!important;height:0!important;padding-top:0!important;padding-bottom:0!important}.j-fade{opacity:0!important}.j-display-none{display:none!important}@keyframes j-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@-moz-keyframes j-spin{from{-moz-transform:rotate(0)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes j-spin{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@-o-keyframes j-spin{from{-o-transform:rotate(0)}to{-o-transform:rotate(360deg)}}.j-over-hidden{overflow:hidden!important;}#jetTip{box-shadow: 2px 2px 5px 0px #666;top:-100px;position:absolute;border:1px solid#222;background-color:rgba(255,255,255,.8);color:#222;font-size:10px;padding:3px;transition:opacity .2s;-moz-transition:opacity .2s linear;-webkit-transition:opacity .2s linear;-o-transition:opacity .2s linear;opacity:0;z-index:10000}#jetTip.j_active{opacity:1}"));
  });

  window.S=function(s) {
    if (s == undefined) {
      return J.body()
    } else {
      return J.select(s)
    }
  };

  function _checkSelect(b) {
    if (b.length == 1) {
      return b[0]
    }
    return b
  };
  HTMLElement.prototype.css = function(d, a) {
    if (a == undefined) {
      if (d.constructor == Object) {
        for (var b in d) {
          if (d[b].has("!important")) {
            this.style.setProperty(b, _checkCssValue(this, b, d[b].substring(0, d[b].indexOf("!important"))), "important")
          } else {
            this.style.setProperty(b, _checkCssValue(this, b, d[b]))
          }
        }
        return this
      } else {
        return getComputedStyle(this)[d]
      }
    } else {
      if (a.has("!important")) {
        this.style.setProperty(d, _checkCssValue(this, d, a.substring(0, a.indexOf("!important"))), "important")
      } else {
        this.style.setProperty(d, _checkCssValue(this, d, a))
      }
      return this
    }
  };
  HTMLCollection.prototype.css = NodeList.prototype.css = function(d, c) {
    if (c == undefined && d.constructor != Object) {
      var a = [];
      this.each(function(b) {
        a.append(b.css(d))
      });
      return a
    } else {
      this.each(function(a) {
        a.css(d, c)
      });
      return this
    }
  };
  HTMLElement.prototype.data = function(d, b) {
    if (arguments.length == 0) {
      if (this.j_data!=undefined) {
        return this.j_data
      } else {
        return null
      }
    } else if (arguments.length == 1) {
      if (d == undefined) {
        this.j_data=undefined;
        return this
      } else {
        if (d.constructor == Object) {
          if (this.j_data!=undefined) {
            for (var e in d) {
              if (d[e] != undefined) {
                this.j_data[e] = d[e]
              } else {
                delete this.j_data[e]
              }
            }
          } else {
            this.j_data=d
          }
          return this
        } else {
          if (this.j_data!=undefined) {
            return this.j_data[d]
          } else {
            return ""
          }
        }
      }
    } else {
      if (b == undefined) {
        if (this.j_data!=undefined) {
          if (d.constructor == Array) {
            d.each(function(a) {
              delete this.j_data[a]
            })
          } else {
            delete this.j_data[d]
          }
        }
        return this
      } else {
        if (this.j_data!=undefined) {
          this.j_data[d] = b;
        } else {
          var c = {};
          c[d] = b;
          this.j_data=c
        }
        return this
      }
    }
  };
  HTMLCollection.prototype.data = NodeList.prototype.data = function(d, c) {
    if (c == undefined && d.constructor != Object && d != undefined) {
      var a = [];
      this.each(function(b) {
        a.append(b.data(J.clone(d)))
      });
      return a
    } else {
      if (c == undefined) {
        this.each(function(a) {
          a.data(J.clone(d))
        })
      } else {
        this.each(function(a) {
          a.data(J.clone(d), c)
        })
      };
      return this
    }
  };

  function _checkCssValue(a, c, d) {
    if (d.has("-=")||d.has("+=")) {
      var e = _getCssNumberValue(d.substring(d.indexOf("=") + 1));
      if (d.has("-=")) {
        e[0] = -e[0]
      }
      var b;
      if (d.has("%")) {
        b = _getCssNumberValue(a.style[c])
      } else {
        b = _getCssNumberValue(getComputedStyle(a)[c])
      }
      return (e[0] + b[0]) + e[1]
    }
    return d
  };

  function _getCssNumberValue(a, b) {
    if (a == "" || a == undefined) {
      a = "0%"
    }
    if (b == undefined) {
      if (a.has("px")) {
        b = "px"
      } else if (a.has("%")) {
        b = "%"
      } else if (a.has("em")) {
        b = "em"
      } else {
        return [parseFloat(a), "px"]
      }
    }
    return [parseFloat(a.substring(0, a.indexOf(b))), b]
  };

  function _checkStyleName(b) {
    var a = b.split("-");
    if (a.length <= 1) {
      return b
    } else {
      var c = a[0];
      for (var i = 1; i < a.length; i++) {
        c += (a[i].charAt(0).toUpperCase() + a[i].substring(1))
      }
      return c
    }
  };
  HTMLElement.prototype.attr = function(c, b) {
    if (b == undefined) {
      if (c.constructor == Object) {
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
  HTMLCollection.prototype.attr = NodeList.prototype.attr = function(d, c) {
    if (c == undefined && d.constructor != Object) {
      var a = [];
      this.each(function(b) {
        a.append(b.attr(d))
      });
      return a
    } else {
      this.each(function(a) {
        a.attr(d, c)
      });
      return this
    }
  };
  HTMLElement.prototype.hasAttr = function(a) {
    return this.hasAttribute(a)
  };
  HTMLElement.prototype.removeAttr = function(b) {
    var c = b.split(" ");
    if (c.length > 1) {
      var d = this;
      c.each(function(a) {
        d.removeAttribute(a)
      })
    } else {
      this.removeAttribute(b)
    }
    return this
  };
  HTMLCollection.prototype.removeAttr = NodeList.prototype.removeAttr = function(b) {
    this.each(function(a) {
      a.removeAttr(b)
    });
    return this
  };
  HTMLElement.prototype.findClass = function(a) {
    return _checkSelect(this.getElementsByClassName(a))
  };
  HTMLElement.prototype.findId = function(a) {
    return this.getElementById(a)
  };
  HTMLElement.prototype.findTag = function(a) {
    return _checkSelect(this.getElementsByTagName(a))
  };
  HTMLElement.prototype.findAttr = function(a) {
    return _checkSelect(this.querySelectorAll("[" + a + "]"))
  };
  HTMLElement.prototype.findName = function(a) {
    return _checkSelect(this.querySelectorAll("[name=" + a + "]"))
  };
  HTMLElement.prototype.select = function(a) {
    return _checkSelect(this.querySelectorAll(a))
  };
  HTMLElement.prototype.addClass = function(a) {
    if(a.has(" ")){
      var b = a.split(" ");
      var c = this;
      b.each(function(i) {
        c.addClass(i)
      });
    }else {
      if(J.html5()){
        this.classList.add(a)
      }else{
        if (!this.hasClass(a)) {
          this.className += " " + a
        }
      }
    }
    return this
  };
  HTMLCollection.prototype.addClass = NodeList.prototype.addClass = function(a) {
    this.each(function(b) {
      b.addClass(a)
    });
    return this
  };
  HTMLElement.prototype.replaceClass = function(a, b) {
    if (this.hasClass(a)) {
      this.addClass(b).removeClass(a)
    }
    return this
  };
  HTMLCollection.prototype.replaceClass = NodeList.prototype.replaceClass = function(a, b) {
    this.each(function(c) {
      c.replaceClass(a, b)
    });
    return this
  };
  HTMLElement.prototype.removeClass = function(a) {
    if (a == undefined) {
      this.className = ""
    } else {
      if(a.has(" ")){
        var c = a.split(" ");
        var d = this;
        c.each(function(i) {
          d.removeClass(i)
        })
      }else {
        if(J.html5()){
          this.classList.remove(a)
        }else{
          if (this.hasClass(a)) {
            var b = new RegExp("(\\s|^)" + a + "(\\s|$)");
            this.className = this.className.replace(b, " ").trim()
          }
        }
      }
    }
    return this
  };
  HTMLCollection.prototype.removeClass = NodeList.prototype.removeClass = function(a) {
    this.each(function(b) {
      b.removeClass(a)
    });
    return this
  };
  HTMLElement.prototype.toggleClass = function(a) {
    if(a.has(" ")){
      var b = a.split(" ");
      var c = this;
      b.each(function(i) {
        c.toggleClass(i)
      });
    }else{
      if(J.html5()){
        this.classList.toggle(a)
      }else{
        if (c.hasClass(a)) {
          c.removeClass(a)
        } else {
          c.addClass(a)
        }
      }
    }
    return this
  };
  HTMLCollection.prototype.toggleClass = NodeList.prototype.toggleClass = function(v) {
    this.each(function(b) {
      b.toggleClass(v)
    });
    return this
  };
  HTMLElement.prototype.val = function(a) {
    if (a == undefined && arguments.length == 0) {
      return this.value
    } else {
      if (this.tagName == "INPUT" || this.tagName == "TEXTAREA"||this.tagName == "SELECT") {
        this.value = _checkArg(a, "")
      }
      return this
    }
  };
  HTMLCollection.prototype.val = NodeList.prototype.val = function(v) {
    if (v == undefined) {
      var a = [];
      this.each(function(b) {
        a.append(b.val())
      });
      return a
    } else {
      this.each(function(b) {
        b.val(v)
      });
      return this
    }
  };
  HTMLElement.prototype.txt = function(a) {
    if (a == undefined && arguments.length == 0) {
      return this.innerText
    } else {
      this.innerText = _checkArg(a, "");
      return this
    }
  };
  HTMLCollection.prototype.txt = NodeList.prototype.txt = function(v) {
    if (v == undefined && arguments.length == 0) {
      var a = [];
      this.each(function(b) {
        a.append(b.txt())
      });
      return a
    } else {
      this.each(function(b) {
        b.txt(v)
      });
      return this
    }
  };
  HTMLElement.prototype.content = function(a) {
    if (this.tagName == "INPUT" || this.tagName == "TEXTAREA"|| this.tagName == "SELECT") {
      if (a == undefined && arguments.length == 0) {
        return this.value
      } else {
        this.value = _checkArg(a, "")
      }
    } else {
      if (a == undefined && arguments.length == 0) {
        return this.innerText
      } else {
        this.innerText = _checkArg(a, "")
      }
    }
    return this
  };
  HTMLCollection.prototype.content = NodeList.prototype.content = function(v) {
    if (v == undefined) {
      var a = [];
      this.each(function(b) {
        a.append(b.content())
      });
      return a
    } else {
      this.each(function(b) {
        b.content(v)
      });
      return this
    }
  };
  HTMLElement.prototype.copy = function() {
    return _copy(this.content())
  };

  function _copy(b) {
    var a = J.id("jCopyInput");
    if (a == undefined) {
      a = J.new("input").attr({
        "type": "text",
        "id": "jCopyInput"
      }).css({
        "height": "0",
        "position": "fixed"
      });
      J.body().append(a)
    }
    a.val(b).select();
    if (document.execCommand("Copy")) {
      return true
    } else {
      alert("Copy is not supported in your browser");
      return false
    }
  };
  HTMLElement.prototype.copyHtml = function() {
    return _copy(this.html())
  };
  HTMLElement.prototype.html = function(a) {
    if (a == undefined) {
      return this.innerHTML
    } else {
      this.innerHTML = a;
      return this
    }
  };
  HTMLCollection.prototype.html = NodeList.prototype.html = function(v) {
    if (v == undefined) {
      var a = [];
      this.each(function(b) {
        a.append(b.html())
      });
      return a
    } else {
      this.each(function(b) {
        b.html(v)
      });
      return this
    }
  };
  HTMLElement.prototype.allHtml = function(a) {
    if (a == undefined) {
      return J.new("div").append(this.clone()).html();
    } else {
      var index=this.index();
      var par=this.parent().append(a,index);
      this.remove();
      return par.child(index);
    }
  };
  HTMLCollection.prototype.allHtml = NodeList.prototype.allHtml = function(v) {
    var a = [];
    this.each(function(b) {
      a.append(b.allHtml(v))
    });
    return a
  };
  HTMLElement.prototype.hasClass = function(a) {
    if(J.html5()){
      return this.classList.contains(a);
    }
    return new RegExp("(\\s|^)" + a + "(\\s|$)").test(this.className)
  };
  HTMLElement.prototype.next = function(i) {
    if (i != undefined) {
      return this.parent().child(this.index() + i)
    } else {
      return this.parent().child(this.index() + 1)
    }
  };
  HTMLElement.prototype.prev = function(i) {
    if (i != undefined) {
      return this.parent().child(this.index() - i)
    } else {
      return this.parent().child(this.index() - 1)
    }
  };
  HTMLElement.prototype.offset = function() {
    return {
      left: this.offsetLeft,
      top: this.offsetTop,
      height: this.offsetHeight,
      width: this.offsetWidth
    }
  };
  HTMLElement.prototype.left = function() {
    return this.offsetLeft
  };
  HTMLElement.prototype.top = function() {
    return this.offsetTop
  };
  HTMLElement.prototype.scrollTo = function(a, b, c) {
    var n = 0;
    var e = this;
    c = _checkArg(c, 400);
    var f = _checkAnimateSpeed(c) / 10;
    var g = (a - e.scrollTop) / f;
    var d = e.scrollTop;
    var h = setInterval(function() {
      d += g;
      e.scrollTop = Math.round(d);
      n++;
      if (n == f) {
        e.scrollTop = a;
        _checkCallBack(b, e);
        clearTimeout(h)
      }
    }, 10);
    return this
  };
  HTMLCollection.prototype.scrollTo = NodeList.prototype.scrollTo = function(i, b, c) {
    this.each(function(a) {
      a.scrollTo(i, b, c)
    });
    return this
  };
  HTMLElement.prototype.scroll = function(i, a, b) {
    if (arguments.length == 0) {
      return this.scrollTop
    } else {
      return this.scrollTo(this.scrollTop + i, a, b)
    }
  };
  HTMLCollection.prototype.scroll = NodeList.prototype.scroll = function(i, b, c) {
    this.each(function(a) {
      a.scroll(i, b, c)
    });
    return this
  };
  HTMLElement.prototype.animate = function(a, b, c, d) {
    var e = JSON.stringify(a);
    if (e.has("left") || e.has("top")) {
      if (this.css("position") == "static") {
        this.css({
          "position": "relative",
          "left": "0",
          "top": "0"
        })
      } else {
        if (this.style.top == "") {
          this.style.top = this.css("top")
        }
        if (this.style.left == "") {
          this.style.left = this.css("left")
        }
      }
    }
    if (e.has("height") && this.style.height == "") {
      this.style.height = this.css("height")
    }
    if (e.has("width") && this.style.width == "") {
      this.style.width = this.css("width")
    }
    this.addClass("j-animation");
    c = _checkAnimatePara(this, c, d);
    var f = this;
    setTimeout(function() {
      f.css(a);
      setTimeout(function() {
        _checkCallBack(b, f);
        f.removeClass("j-animation")
      }, c)
    }, 50);
    return this
  };
  HTMLCollection.prototype.animate = NodeList.prototype.animate = function(b, c, d, e) {
    this.each(function(a) {
      a.animate(b, c, d, e)
    });
    return this
  };
  HTMLElement.prototype.rotate = function(a, b, c, d, e) {
    var f = this;
    f.addClass("j-animation");
    setTimeout(function() {
      c = _checkAnimatePara(f, c, e);
      _checkOrigin(f, d);
      f.css({
        "transform": "rotate(" + a + "deg)",
        "-ms-transform": "rotate(" + a + "deg)",
        "-webkit-transform": "rotate(" + a + "deg)",
        "-o-transform": "rotate(" + a + "deg)",
        "-moz-transform": "rotate(" + a + "deg)"
      });
      setTimeout(function() {
        _checkCallBack(b, f);
        _removeAnimation(f)
      }, c)
    }, 50);
    return this
  };
  HTMLElement.prototype.scale = function(a, b, c, d) {
    return _scaleBase(this, a, a, b, c, d)
  };
  HTMLElement.prototype.scaleX = function(a, b, c, d) {
    return _scaleBase(this, a, 1, b, c, d)
  };
  HTMLElement.prototype.scaleY = function(a, b, c, d) {
    return _scaleBase(this, 1, a, b, c, d)
  };

  function _checkCallBack(a, b) {
    if (a != undefined) {
      _checkFunction(a)(b)
    }
  };
  HTMLCollection.prototype.scale = NodeList.prototype.scale = function(b, c, d, e) {
    this.each(function(a) {
      a.scale(b, c, d, e)
    });
    return this
  };
  HTMLCollection.prototype.scaleX = NodeList.prototype.scaleX = function(b, c, d, e) {
    this.each(function(a) {
      a.scaleX(b, c, d, e)
    });
    return this
  };
  HTMLCollection.prototype.scaleY = NodeList.prototype.scaleY = function(b, c, d, e) {
    this.each(function(a) {
      a.scaleY(b, c, d, e)
    });
    return this
  };

  function _scaleBase(a, x, y, b, c, d) {
    a.addClass("j-animation");
    setTimeout(function() {
      c = _checkAnimatePara(a, c, d);
      a.css({
        "transform": "scale(" + x + "," + y + ")",
        "-ms-transform": "scale(" + x + "," + y + ")",
        "-webkit-transform": "scale(" + x + "," + y + ")",
        "-o-transform": "scale(" + x + "," + y + ")",
        "-moz-transform": "scale(" + x + "," + y + ")"
      });
      setTimeout(function() {
        _checkCallBack(b, a);
        _removeAnimation(a)
      }, c)
    }, 50);
    return a
  };

  function _checkOrigin(a, o) {
    if (o == undefined) {
      o = "center"
    }
    a.css({
      "transform-origin": o,
      "-ms-transform-origin": o,
      "webkit-transform-origin": o,
      "-o-transform-origin": o,
      "-moz-transform-origin": o
    })
  };
  HTMLCollection.prototype.rotate = NodeList.prototype.rotate = function(b, c, d, e, f) {
    this.each(function(a) {
      a.rotate(b, c, d, e, f)
    });
    return this
  };
  HTMLElement.prototype.spin = function(a, b, c, d, e) {
    e = _checkArg(e, "linear");
    b = _checkArg(b, "infinite");
    if (a != undefined) {
      a = _checkSpinSpeed(a)
    } else {
      a = 2
    }
    _checkOrigin(this, c);
    if (b.constructor == Number) {
      this.stopSpin();
      var f = this;
      setTimeout(function() {
        _helpSpin(a, b, c, d, e, f)
      }, 20)
    } else {
      _helpSpin(a, b, c, d, e, this)
    }
    return this
  };

  function _helpSpin(a, b, c, d, e, f) {
    f.css({
      "animation": "j-spin " + a + "s " + e + " 0s " + b,
      "-moz-animation": "j-spin " + a + "s " + e + " 0s " + b,
      "-webkit-animation": "j-spin " + a + "s " + e + " 0s " + b,
      "-o-animation": "j-spin " + a + "s " + e + " 0s " + b
    });
    if (b.constructor == Number) {
      if (d != undefined) {
        setTimeout(function() {
          _checkCallBack(d, f)
        }, a * b * 1000)
      }
    }
  };
  HTMLCollection.prototype.spin = NodeList.prototype.spin = function(b, c, d, e, f) {
    this.each(function(a) {
      a.spin(b, c, d, e, f)
    });
    return this
  };

  function _checkSpinSpeed(a) {
    if (a.constructor == String) {
      switch (a) {
      case "slower":
        a = 3;
        break;
      case "slow":
        a = 2.5;
        break;
      case "normal":
        a = 2;
        break;
      case "fast":
        a = 1.5;
        break;
      case "faster":
        a = 1;
        break;
      default:
        a = 2
      }
      return a
    } else {
      return a / 1000
    }
  };
  HTMLElement.prototype.stopSpin = function() {
    var a = this.css("transform");
    this.css({
      "animation": "none",
      "-moz-animation": "none",
      "-webkit-animation": "none",
      "-o-animation": "none",
      "transform": a
    });
    return this
  };
  HTMLCollection.prototype.stopSpin = NodeList.prototype.stopSpin = function() {
    this.each(function(a) {
      a.stopSpin()
    });
    return this
  };

  HTMLElement.prototype.tip = function(text) {
    if(J.id("jetTip")==undefined){
      J.body().append(J.new("span#jetTip"));
    }
    if(text.constructor==Array){
      text=text[0];
    }
    this.jetTip=text;
    this.on({
      mousemove: function(e){
        J.id("jetTip").txt(this.jetTip).addClass("j_active").css({
          top:e.pageY+5+"px",
          left:e.pageX+8+"px"
        })
      },
      mouseleave:function(){
        J.id("jetTip").removeClass("j_active").css("top","-100px");
      }
    },true);
    return this
  };
  HTMLCollection.prototype.tip = NodeList.prototype.tip = function(text) {
    if(text.constructor==Array){
      this.each(function(a,i) {
        a.tip(text[i])
      });
    }else{
      this.each(function(a,i) {
        a.tip(text)
      });
    }
    return this
  };
  function _removeAnimation(a) {
    a.removeClass("j-animation").css({
      "transition-duration": "0s!important",
      "-ms-transition-duration": "0s!important",
      "-webkit-transition-duration": "0s!important",
      "-o-transition-duration": "0s!important",
      "-moz-transition-duration": "0s!important"
    })
  };
  function _checkDisplay(obj){
    if(obj.css("display")=="none"){
      return false;
    }
    return true;
  }
  HTMLElement.prototype.slideUp = function(a, b, c) {
    if(_checkDisplay(this)){
      return _checkSlideHeight(this, a, b, c,false)
    }
    return this;
  };
  HTMLElement.prototype.slideDown = function(a, b, c) {
    if(!_checkDisplay(this)){
      if (this.hasClass("j-fade")) {
        this.removeClass("j-fade").addClass("j-slide")
      };
      return _checkSlideHeight(this, a, b, c,true)
    }
    return this;
  };
  HTMLElement.prototype.slideToggle = function(a, b, c) {
    if(this.css("display")=="none"&&!this.hasClass("j-slide")){
      this.css("display","initial").addClass("j-slide").hide();
    }
    if (this.hasClass("j-fade")) {
      this.removeClass("j-fade").addClass("j-slide")
    }
    return _checkSlideHeight(this, a, b, c)
  };
  function _checkSlideHeight(obj,a, b, c,d){
    if(obj.style.height==""||obj.style.height=="auto"){
      if(d&&obj.css("display")=="none"){
        obj.addClass("j-none");
      }
      obj.css("height",obj.css("height"));
      obj.removeClass("j-none");
      obj.attr("j-h-auto","true");
      setTimeout(function(){
        _animateBase(obj, "j-slide", a, b, c,d)
      },50);
    }else{
      _animateBase(obj, "j-slide", a, b, c,d)
    }
    return obj;
  }
  HTMLElement.prototype.fadeOut = function(a, b, c) {
    if(_checkDisplay(this)){
      return _animateBase(this, "j-fade", a, b, c, false)
    }
    return this;
  };
  HTMLElement.prototype.fadeIn = function(a, b, c) {
    if(!_checkDisplay(this)){
      if (this.hasClass("j-slide")) {
        this.removeClass("j-slide").addClass("j-fade")
      }
      return _animateBase(this, "j-fade", a, b, c, true)
    }else{
      return this;
    }
  };
  HTMLElement.prototype.fadeToggle = function(a, b, c) {
    if(this.css("display")=="none"&&!this.hasClass("j-fade")){
      this.css("display","initial").addClass("j-fade").hide();
    }
    if (this.hasClass("j-slide")) {
      this.removeClass("j-slide").addClass("j-fade")
    }
    return _animateBase(this, "j-fade", a, b, c)
  };
  HTMLElement.prototype.hide = function() {
    if (!this.hasAttr("j-display")) {
      this.attr("j-display", this.css("display"));
      return this.css("display", "none!important")
    };
    return this
  };
  HTMLElement.prototype.show = function(a) {
    if (this.css("display") == "none") {
      this.css("display", "block!important");/*for initial is not supported*/
      //this.css("display", "initial!important");
    }
    if (this.hasAttr("j-display")) {
      if (a == undefined) {
        this.removeClass("j-fade j-slide")
      }
      return this.css("display", this.attr("j-display") + "!important").removeAttr("j-display")
    };
    return this
  };
  HTMLElement.prototype.showToggle = function() {
    if (this.hasAttr("j-display")) {
      this.show()
    } else {
      this.hide()
    }
  };

  function _animateBase(a, b, c, d, e, f) {
    if (f == undefined) {
      if (a.hasAttr("j-display")) {
        f = true
      } else {
        f = false
      }
    }
    a.addClass("j-animation");
    if (f) {
      if (a.css("display") == "none") {
        a.addClass(b)
      }
      a.show(false)
    }
    if (f != false) {
      setTimeout(function() {
        _animateBasePart(a, b, c, d, e, f)
      }, 50)
    } else {
      _animateBasePart(a, b, c, d, e, f)
    }
    return a
  };

  function _animateBasePart(a, b, c, d, e, f) {
    d = _checkAnimatePara(a, d, e);
    if (f) {
      if (b == "j-slide") {
        a.addClass("j-over-hidden")
      }
      a.removeClass(b)
    } else {
      a.addClass(b)
    }
    setTimeout(function() {
      _checkCallBack(c, a);
      _removeAnimation(a);
      if (!f) {
        a.hide()
      } else {
        if (b == "j-slide") {
          a.removeClass("j-over-hidden");
          if(a.attr("j-h-auto")=="true"){
            a.css("height","auto");
          }
        }
      }
    }, d)
  };

  function _checkAnimatePara(a, b, c) {
    if (b != undefined) {
      b = _checkAnimateSpeed(b) / 1000
    } else {
      b = 0.5
    }
    a.css({
      "transition-duration": b + "s!important",
      "-ms-transition-duration": b + "s!important",
      "-webkit-transition-duration": b + "s!important",
      "-o-transition-duration": b + "s!important",
      "-moz-transition-duration": b + "s!important"
    });
    c = _checkArg(c, "linear");
    a.css({
      "transition-timing-function": c + "!important",
      "-ms-transition-timing-function": c + "!important",
      "-webkit-transition-timing-function": c + "!important",
      "-o-transition-timing-function": c + "!important",
      "-moz-transition-timing-function": c + "!important"
    });
    return b * 1000
  };
  HTMLCollection.prototype.slideUp = NodeList.prototype.slideUp = function(b, c, d) {
    this.each(function(a) {
      a.slideUp(b, c, d)
    });
    return this
  };
  HTMLCollection.prototype.slideDown = NodeList.prototype.slideDown = function(b, c, d) {
    this.each(function(a) {
      a.slideDown(b, c, d)
    });
    return this
  };
  HTMLCollection.prototype.slideToggle = NodeList.prototype.slideToggle = function(b, c, d) {
    this.each(function(a) {
      a.slideToggle(b, c, d)
    });
    return this
  };
  HTMLCollection.prototype.fadeIn = NodeList.prototype.fadeIn = function(b, c, d) {
    this.each(function(a) {
      a.fadeIn(b, c, d)
    });
    return this
  };
  HTMLCollection.prototype.fadeOut = NodeList.prototype.fadeOut = function(b, c, d) {
    this.each(function(a) {
      a.fadeOut(b, c, d)
    });
    return this
  };
  HTMLCollection.prototype.fadeToggle = NodeList.prototype.fadeToggle = function(b, c, d) {
    this.each(function(a) {
      a.fadeToggle(b, c, d)
    });
    return this
  };
  HTMLCollection.prototype.hide = NodeList.prototype.hide = function() {
    this.each(function(a) {
      a.hide()
    });
    return this
  };
  HTMLCollection.prototype.show = NodeList.prototype.show = function() {
    this.each(function(a) {
      a.show()
    });
    return this
  };
  HTMLCollection.prototype.showToggle = NodeList.prototype.showToggle = function() {
    this.each(function(a) {
      a.showToggle()
    });
    return this
  };

  function _checkAnimateSpeed(a) {
    if (a.constructor == String) {
      switch (a) {
      case "slower":
        a = 1500;
        break;
      case "slow":
        a = 1000;
        break;
      case "normal":
        a = 400;
        break;
      case "fast":
        a = 250;
        break;
      case "faster":
        a = 100;
        break;
      default:
        a = 400
      }
    }
    return a
  };

  function _checkArg(a, b) {
    return (a == undefined) ? b : a
  };
  HTMLElement.prototype.scrollXTo = function(a, b, c) {
    var n = 0;
    var e = this;
    c = _checkArg(c, 400);
    var f = _checkAnimateSpeed(c) / 10;
    var g = (a - e.scrollLeft) / f;
    var d = e.scrollLeft;
    var h = setInterval(function() {
      d += g;
      e.scrollLeft = Math.round(d);
      n++;
      if (n == f) {
        e.scrollLeft = a;
        _checkCallBack(b, e);
        clearTimeout(h)
      }
    }, 10);
    return this
  };
  HTMLCollection.prototype.scrollXTo = NodeList.prototype.scrollXTo = function(i, b, c) {
    this.each(function(a) {
      a.scrollXTo(i, b, c)
    });
    return this
  };
  HTMLElement.prototype.scrollX = function(i, a, b) {
    if (arguments.length == 0) {
      return this.scrollLeft
    } else {
      return this.scrollXTo(this.scrollLeft + i, a, b)
    }
  };
  HTMLCollection.prototype.scrollX = NodeList.prototype.scrollX = function(i, b, c) {
    this.each(function(a) {
      a.scrollX(i, b, c)
    });
    return this
  };
  HTMLElement.prototype.hei = function() {
    return this.offsetHeight
  };
  HTMLElement.prototype.wid = function() {
    return this.offsetWidth
  };
  HTMLElement.prototype.child = function(i) {
    if (i == undefined) {
      return this.children
    } else {
      return this.children[i]
    }
  };
  HTMLElement.prototype.hasChild = function(a) {
    if(a==undefined){
      return (this.children.length>0)?true:false; 
    }else{
      return (this.select(a).length==0)?false:true; 
    }
  };
  HTMLElement.prototype.clone = function() {
    return this.cloneNode().html(this.html());
  };
  HTMLElement.prototype.parent = function(i) {
    if (i == undefined) {
      return this.parentElement
    } else {
      var p = this;
      for (var j = 0; j < i; j++) {
        p = p.parentElement
      }
      return p
    }
  };
  HTMLElement.prototype.bro = function(i) {
    if (i == undefined) {
      return this.parent().child()
    } else {
      return this.parent().child(i)
    }
  };
  HTMLElement.prototype.prepend = function(a) {
    if (a.constructor == Array) {
      var b = this;
      a.each(function(a) {
        b.insertBefore(a, this.children[0])
      })
    } else {
      this.insertBefore(a, this.children[0])
    }
    return this
  };
  HTMLCollection.prototype.prepend = NodeList.prototype.prepend = function(a) {
    this.each(function(c) {
      c.prepend(a)
    });
    return this
  };
  HTMLElement.prototype.append = function(b, a) {
    if (a == undefined) {
      if (b.constructor == Array||b.constructor==HTMLCollection||b.constructor==NodeList) {
        var c = this;
        b.each(function(a) {
          c.appendChild(_checkHtmle(a))
        })
      } else {
        this.appendChild(_checkHtmle(b))
      }
    } else {
      this.insertBefore(_checkHtmle(b), this.children[a])
    }
    return this
  };
  
  function _checkHtmle(a){
    if(a.constructor==String){
      a=J.new("div").html(a).child(0);
    }
    return a;
  };
  HTMLElement.prototype.after = function(b) {
    if (b.constructor == Array) {
      var c = this;
      var d = c.next();
      b.each(function(a) {
        c.parent().insertBefore(_checkHtmle(a), d)
      })
    } else {
      this.parent().insertBefore(_checkHtmle(b), this.next())
    }
    return this
  };
  HTMLCollection.prototype.after = NodeList.prototype.after = function(b) {
    this.each(function(c) {
      c.after(b)
    });
    return this
  };
  HTMLElement.prototype.before = function(b) {
    if (b.constructor == Array) {
      var c = this;
      b.each(function(a) {
        c.parent().insertBefore(_checkHtmle(a), c)
      })
    } else {
      this.parent().insertBefore(_checkHtmle(b), this)
    }
    return this
  };
  HTMLCollection.prototype.before = NodeList.prototype.before = function(b) {
    this.each(function(c) {
      c.before(b)
    });
    return this
  };
  HTMLCollection.prototype.append = NodeList.prototype.append = function(b, a) {
    this.each(function(c) {
      c.append(b, a)
    });
    return this
  };
  HTMLElement.prototype.index = function() {
    var a = this.parent().child();
    for (var i = 0; i < a.length; i++) {
      if (a[i] == this) {
        return i
      }
    }
    return -1
  };
  HTMLElement.prototype.on = function(a, b,d) {
    if(a.constructor==String){
      return this.event("on"+a,b,d);
    }else{
      for (var c in a) {
        a["on"+c]=a[c];
        delete a[c];
      }
      return this.event(a,b);
    }
  };
  HTMLCollection.prototype.on = NodeList.prototype.on = function(a, c,d) {
    this.each(function(b) {
      b.on(J.clone(a), c,d)
    });
    return this
  };
  HTMLElement.prototype.clk = function(b,d) {
    return this.event("onclick",b,d);
  };
  HTMLCollection.prototype.clk = NodeList.prototype.clk = function(a, c) {
    this.each(function(b) {
      b.clk(a, c)
    });
    return this
  };
  
  HTMLElement.prototype.event = function(a, b,d) {
    if(a.constructor==String){
      if(d==true){
        _attachEvent(this,a,b);
      }else{
        this[a]=_checkFunction(b);
      }
    }else{
      for (var c in a) {
        if (a[c] != undefined) {
          if(b==true){
            _attachEvent(this,c,a[c]);
          }else{
            this[c]=_checkFunction(a[c]);
          }
        }
      }
    }
    return this
  };
  function _attachEvent(obj,event,fun){
    if (document.addEventListener) {
      obj.addEventListener(event.substring(2), _checkFunction(fun), false);
    } else if (document.attachEvent) {
      obj.attachEvent(event,  _checkFunction(fun));
    }
  }
  HTMLCollection.prototype.event = NodeList.prototype.event = function(a, c,d) {
    this.each(function(b) {
      b.event(a, c,d)
    });
    return this
  };
  HTMLElement.prototype.empty = function() {
    return this.html("")
  };
  HTMLCollection.prototype.empty = NodeList.prototype.empty = function() {
    this.each(function(a) {
      a.empty()
    });
    return this
  };
  HTMLElement.prototype.remove = function() {
    this.parentNode.removeChild(this)
  };
  HTMLCollection.prototype.remove = NodeList.prototype.remove = function(a) {
    if (a == undefined) {
      for (var i = 0; i < this.length;) {
        this[i].remove()
      }
    } else {
      if (a.constructor == Number) {
        for (var i = 0; i < this.length; i++) {
          if (i == a) {
            this[i].remove();
            return this
          }
        }
      } else {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == a) {
            this[i].remove();
            return this
          }
        }
      }
    }
  };
  HTMLElement.prototype.each = function(b,d) {
    b(this, 0,d);
    return this
  };
  HTMLCollection.prototype.each = NodeList.prototype.each = Array.prototype.each = function(b,d) {
    for (var a = 0; a < this.length; a++) {
      b(this[a], a,d)
    }
    return this
  };
  Array.prototype.removeByIndex = function(b,order) {
    for (var a = 0; a < this.length; a++) {
      if (a == b) {
        if(order==false){
          this[a]=this[this.length-1];
        }else{
          if (a < this.length - 1) {
            for (var i = a + 1; i < this.length; i++) {
              this[i - 1] = this[i]
            }
          }
        }
        this.length--;
        return this
      }
    }
    return this
  };
  Array.prototype.empty = function(b) {
    this.length = 0;
    return this;
  };
  HTMLElement.prototype.last =function(){
    return this.child().last();
  };
  HTMLElement.prototype.first =function(){
    return this.child().first();
  };
  HTMLCollection.prototype.last = NodeList.prototype.last =Array.prototype.last = function(b) {
    return this[this.length-1];
  };
  HTMLCollection.prototype.first = NodeList.prototype.first =Array.prototype.first = function(b) {
    return this[0];
  };
  Array.prototype.remove = function(b,order) {
    for (var a = 0; a < this.length; a++) {
      if (this[a] == b) {
        if(order==false){
          this[a]=this[this.length-1];
        }else{
          if (a < this.length - 1) {
            for (var i = a + 1; i < this.length; i++) {
              this[i - 1] = this[i]
            }
          }
        }
        this.length--;
        break;
      }
    }
    return this
  };
  Array.prototype.insert = function(b, i) {
    for (var a = this.length - 1; a >= i; a--) {
      this[a + 1] = this[a]
    }
    this[i] = b;
    return this
  };
  Array.prototype.append = function(b) {
    if(arguments.length==1){
      this[this.length] = b;
    }else if(arguments.length>1){
      for(var i=0;i<arguments.length;i++){
        this[this.length] = arguments[i];
      }
    }
    return this
  };
  Array.prototype.appendArray = function(arr) {
    for(var i=0;i<arr.length;i++){
      this[this.length] = arr[i];
    }
    return this
  };
  Array.prototype.prepend = function(b) {
    return this.insert(b, 0)
  };
  Array.prototype.sort = function(a) {
    var b = this.length;
    var c, current;
    for (var i = 1; i < b; i++) {
      c = i - 1;
      current = this[i];
      while (c >= 0 && this[c] > current) {
        this[c + 1] = this[c];
        c--
      }
      this[c + 1] = current
    }
    if (a == false) {
      this.reverse()
    }
    return this
  };
  Array.prototype.sortByAttr = function(a,type, b) {
    var c = this.length;
    var d, current;
    for (var i = 1; i < c; i++) {
      d = i - 1;
      current = this[i];
      while (d >= 0 && _compareValue(this[d][a],current[a],type) ) {
        this[d + 1] = this[d];
        d--
      }
      this[d + 1] = current
    }
    if (type == false||b==false) {
      this.reverse()
    }
    return this
  };
  function _compareValue(a,b,type){
    if(_getSortValue(a,type)>_getSortValue(b,type)){
      return true;
    }
    return false;
  }
  function _getSortValue(value,type){
    if(type==undefined||type.constructor==Boolean){
      return value;
    }else{
      var res=null;
      switch(type){
        case "date":
          if(value.constructor==Date){
            res=value;
          }else{
            var arr;
            if(value.has("-")){
              arr=value.split("-");
            }else{
              arr=value.split("/");
            }
            res=new Date(arr[0],arr[1],arr[2]);
          }break;
        case "length":res=value.length;break;
        case "headLetter":res=value.toLowerCase().charCodeAt(0);break;
        case "number":res=value;break;
        default:res=value;break;
      }
      return res;
    }
  };
  function _each(obj,fun,arg){
    if(obj.constructor==Object){
      var k=0;
      for (var a in obj) {
        if(obj[a].constructor!=Function){
          fun(obj[a], a,k,obj)
        }
        k++;
      }
    }else if(obj.constructor==Number||obj.constructor==Boolean||obj.constructor==String||obj.constructor==Function){
      fun(obj, 0,arg);
    }else{
      obj.each(fun,arg);
    }
    return obj;
  };
  function _clone(obj){
    if(obj.constructor==Object){
      var a=new Object();
      for(var attr in obj){
        if(obj[attr].constructor==Array){
          a[attr]=obj[attr].clone();
        }else if(obj[attr].constructor==Object){
          a[attr]=_clone(obj[attr]);
        }else{
          a[attr]=obj[attr];
        }
      }
      return a;
    }else if(obj.constructor==Number||obj.constructor==Boolean||obj.constructor==String||obj.constructor==Function){
      return obj;
    }else{
      return obj.clone();
    }
  };
  Array.prototype.clone = function() {
    var a=new Array();
    this.each(function(item){
      a.append(_clone(item));
    });
    return a;
  };
  Array.prototype.sum = function() {
    var sum;
    if(this[0].constructor==Number||(this[0].constructor==Array&&this[0][0].constructor==Number)){
      sum=0;
    }else{
      sum="";
    }
    this.each(function(a){
      if(a.constructor==Array){
        a.each(function(b){
          sum+=b;
        });
      }else{
        sum+=a;
      }
    });
    return sum;
  };
  Array.prototype.ave = function() {
    return this.sum()/this.length;
  };
  Array.prototype.reverse = function() {
    var t;
    var n = Math.floor(this.length / 2);
    for (var i = 0; i < n; i++) {
      t = this[i];
      this[i] = this[this.length - 1 - i];
      this[this.length - 1 - i] = t
    };
    return this
  };
  String.prototype.has = function(s) {
    if (s.constructor == String) {
      if (this.includes == undefined) {
        return (this.indexOf(s) != -1)
      } else {
        return this.includes(s)
      }
    } else {
      if (this.match(s) == null) {
        return false
      } else {
        return true
      }
    }
  };
  String.prototype.timesOf = function(s) {
    if (s.constructor == String) {
      return this.split(s).length - 1
    } else {
      var a = this.match(s);
      if (a == null) {
        return 0
      } else {
        return a.length
      }
    }
  };
  String.prototype.replaceAll = function(a, b) {
    if (b.constructor == Array) {
      if (a.constructor == String) {
        var s = this.split(a);
        var d = s[0];
        s.each(function(a, i) {
          if (i > 0) {
            d += (b[i - 1] + a)
          }
        });
        return d
      } else {
        var e = "";
        var f = this;
        var g = this.match(a);
        if (g != null) {
          g.each(function(a, i) {
            var c = f.split(a);
            e += (f.substring(0, f.indexOf(a)) + b[i]);
            f = f.substring(f.indexOf(a) + a.length)
          });
          e += f;
          return e
        }
        return this
      }
    } else {
      if (a.constructor == String) {
        return this.replace(new RegExp(a, "g"), b)
      } else {
        return this.replace(a, b)
      }
    }
  };
  String.prototype.indexsOf = function(a, i) {
    var b = this.split(a);
    var c = null;
    if (a.constructor != String) {
      c = this.match(a)
    }
    if (b.length <= 2) {
      if (this.indexOf(a) == -1) {
        return []
      } else {
        return [this.indexOf(a)]
      }
    } else {
      var d = [];
      var e = a.length;
      var f = 0;
      b.each(function(s, n) {
        if (n > 0) {
          d[d.length] = f;
          if (c != null) {
            f += c[n - 1].length
          } else {
            f += a.length
          }
        }
        f += s.length
      });
      if (i == undefined) {
        return d
      } else {
        if (i > d.length - 1) return d[d.length - 1];
        return d[i]
      }
    }
  };
  String.prototype.insert = function(a, i) {
    return this.substring(0, i) + a + this.substring(i)
  };
})();