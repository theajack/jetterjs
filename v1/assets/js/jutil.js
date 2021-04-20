(function(window){
  window.JUtil={
    toString:_toString,
    even:_even,
    each:_each,
    clone:_clone,
    func:_checkFunction
  };
  Array.prototype.each = function(b,d) {
    for (var a = 0; a < this.length; a++) {
      b(this[a], a,d)
    }
    return this
  };
  Array.prototype.empty = function(b) {
    this.length = 0;
    return this;
  };
  Array.prototype.remove = function(b,order) {
    for (var a = 0; a < this.length; a++) {
      if (this[a] === b) {
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
  Array.prototype.removeByIndex = function(b,order) {
    if(b==undefined||b.constructor==Boolean){
      b=0;
    }
    var res=JUtil.clone(this[b]);
    if(order==false){
      this[b]=this[this.length-1];
    }else{
      if (b < this.length - 1) {
        for (var i = a + 1; i < this.length; i++) {
          this[i - 1] = this[i]
        }
      }
    }
    this.length--;
    return res
  };
  Array.prototype.insert = function(b, i) {
    var index=i;
    var n=1;
    if(arguments.length>2){
      n=arguments.length-1;
      index=arguments[n];
    }
    for (var a = this.length - 1; a >= index; a--) {
      this[a + n] = this[a]
    }
    if(n==1){
      this[index] = b;
    }else{
      for(var j=0;j<n;j++){
        this[index+j] = arguments[j];
      }
    }
    return this
  };
  Array.prototype.insertArray = function(arr,i) {
    var index=i;
    var n=arr.length;
    for (var a = this.length - 1; a >= index; a--) {
      this[a + n] = this[a]
    }
    for(var j=0;j<n;j++){
      this[index+j] = arr[j];
    }
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
    if(arguments.length==1){
      return this.insert(b, 0)
    }else{
      return this.insertArray(arguments, 0)
    }
  };
  Array.prototype.prependArray = function(b) {
    return this.insertArray(b, 0)
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
  Array.prototype.last = function(b) {
    return this[this.length-1];
  };
  Array.prototype.first = function(b) {
    return this[0];
  };
  function _compareValue(a,b,type){
    if(_getSortValue(a,type)>_getSortValue(b,type)){
      return true;
    }
    return false;
  };
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
    if(obj==undefined){
      return null;
    }
    if(obj.constructor==Object){
      var a=new Object();
      for(var attr in obj){
        if(obj[attr]==null||obj[attr]==undefined){
          a[attr]=obj[attr];
        }else if(obj[attr].constructor==Array){
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
      return obj;
    }
  };
  function _even(a,b){
    if(a==undefined||b==undefined){
      return (a==b);
    }else{
      if(a.constructor!=b.constructor){
        return false;
      }else{
        if(a.constructor==Object){
          return (JSON.stringify(a)==JSON.stringify(b));
        }else if(a.constructor==Array||a.constructor==Function){
          return (a.toString()==b.toString());
        }else{
          return (a==b);
        }
      }
    }
  };
  function _toString(a){
    if(a==undefined){
      return "undefined";
    }else{
      if(a.constructor==Object){
        return JSON.stringify(a);
      }else if(a.constructor==String){
        return '"'+a+'"';
      }else if(a.constructor==Array){
        var s="[";
        for(var i=0;i<a.length;i++){
          s+=_toString(a[i])+',';
          if(i==a.length-1){
            s=s.substring(0,s.length-1);
          }
        }
        return s+"]";
      }else{
        return a.toString();
      }
    }
  };
  Array.prototype.even = function(a) {
    return _even(this,a);
  };
  Array.prototype.clone = function() {
    var a=new Array();
    this.each(function(item){
      a.push(_clone(item));
    });
    return a;
  };
  function _checkEmptyArray(arr,thr){
    if(arr.length==0){
      if(thr!=false){
        throw new Error("空数组不支持该方法");
      }
      return false;
    }else{
      return true;
    }
  };
  Array.prototype.sum = function() {
    if(_checkEmptyArray(this)){
      var con=this[0].constructor;
      if(con==Number||con==String||con==Array){
        var sum;
        if(con==Number||(con==Array&&this[0][0].constructor==Number)){
          sum=0;
        }else if(con==String||(con==Array&&this[0][0].constructor==String)){
          sum="";
        }else{
          throw new Error("sum方法不支持除Number,String,Array以外的类型");
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
      }else{
        throw new Error("sum方法不支持除Number,String,Array以外的类型");
      }
    }
  };
  Array.prototype.avg = function() {
    if(_checkEmptyArray(this)){
      var con=this[0].constructor;
      if(con==Number||con==String){
        return this.sum()/this.length;
      }else{
        throw new Error("ave方法不支持除Number,String以外的类型");
      }
    }
  };
  Array.prototype.max = function(attr,type) {
    if(_checkEmptyArray(this)){
      if(this[0].constructor==Number){
        return Math.max.apply(null,this);
      }else if(this[0].constructor==String||this[0].constructor==Array){
        return JUtil.clone(this).sortByAttr("length").last();
      }else if(this[0].constructor==Date){
        return JUtil.clone(this).sort().last();
      }else if(this[0].constructor==Object){
        if(attr==undefined){
          throw new Error("Object类型数组参数不可为空");
        }else{
          return JUtil.clone(this).sortByAttr(attr,type).last();
        }
      }
      throw new Error("不支持的类型");
    }
  };
  Array.prototype.min = function() {
    if(_checkEmptyArray(this)){
      if(this[0].constructor==Number){
        return Math.min.apply(null,this);
      }else if(this[0].constructor==String||this[0].constructor==Array){
        return JUtil.clone(this).sortByAttr("length").first();
      }else if(this[0].constructor==Date){
        return JUtil.clone(this).sort().first();
      }else if(this[0].constructor==Object){
        if(attr==undefined){
          throw new Error("Object类型数组参数不可为空");
        }else{
          return JUtil.clone(this).sortByAttr(attr,type).first();
        }
      }
      throw new Error("不支持的类型");
    }
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
  Array.prototype.has = function(a) {
    if(_checkEmptyArray(this,false)){
      if(this[0].constructor==Number||this[0].constructor==String){
        return (this.indexOf(a)>-1);
      }else{
        for(var i=0;i<this.length;i++){
          if(a==this[i]){
            return true;
          }
          return false;
        }
      }
    }else{
      return false;
    }
  };
  Array.prototype.index =function(a){
    if(_checkEmptyArray(this,false)){
      if(this[0].constructor==Number||this[0].constructor==String){
        return this.indexOf(a);
      }else{
        for(var i=0;i<this.length;i++){
          if(a==this[i]){
            return i;
          }
          return -1;
        }
      }
    }else{
      return -1;
    }
  };
  Array.prototype.indexsOf =function(a){
    var indexs=[];
    if(_checkEmptyArray(this,false)){
      for(var i=0;i<this.length;i++){
        if(a==this[i]){
          indexs.push(i);
        }
      }
    }
    return indexs;
  };
  Array.prototype.timeOf =function(a){
    var sum=0;
    this.each(function(item){
      if(item==a){
        sum++;
      }
    });
    return sum;
  };
  Array.prototype.group=function(n){
    var a=[];
    var x=Math.ceil(this.length/n);
    for(var i=0;i<x;i++){
      var b=[];
      for(var j=0;j<n;j++){
        if(i*n+j==this.length){
          break;
        }else{
          b.push(this[i*n+j]);
        }
      }
      a.push(b);
    }
    return a;
  };
  String.prototype.reverse = function() {
    var s="";
    for(var i=this.length-1;i>=0;i--){
      s+=this[i];
    }
    return s;
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
  String.prototype.timeOf = function(s) {
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
})(window)
  