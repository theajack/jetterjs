function JetElement(obj){
  this.obj=obj;
  if(obj.constructor.name=="HTMLElement"){
    this.isOne=true;
  }else{
    this.isOne=false;
  }
};
JetElement.prototype.each = function(f) {
  if(this.isOne){
    f(this.obj,0);
  }else{
    for (var a = 0; a < this.obj.length; a++) {
      f(this.obj[a],a);
    }
  }
};
JetElement.prototype.css = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"){
    if(this.isOne){
      return this.obj.css(d,value);
    }else{
      var arr=[];
      this.each(function(a){
        arr[arr.length]=a.css(d,value);
      });return arr;
    }
  }else{
    this.each(function(a){
      a.css(d,value);
    });return this;
  }
};
JetElement.prototype.attr = function(d, value) {
  if(value==undefined&&d.constructor.name != "Object"){
    if(this.isOne){
      return this.obj.attr(d,value);
    }else{
      var arr=[];
      this.each(function(a){
        arr[arr.length]=a.attr(d,value);
      });return arr;
    }
  }else{
    this.each(function(a){
      a.attr(d,value);
    });return this;
  }
};
function exeFun(name,args){
  var funs=name+"("
  eval(name)
}