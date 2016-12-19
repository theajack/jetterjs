
var detailText=[
  "Select and set HTML element expediently.",
  "Read and write value or text of a set of HTML element expediently.",
  "Convient validation of a set of HTML element.",
  "Some other frequently-used functions."
];
J.ready(function(){
  tabIndent.render(J.id("apiCode"));
  addApiDetails();
  J.class("intro-item").event("onclick","showIntroDetail(this)");
  J.id("copyBtn").event("onclick",copySourceCode);
  J.class("api-title").event("onclick",function(e){
    showRipple(e,this);
    moveApiBar(this);
  })
  J.id("viewApi").event("onclick",function(){
    showApi(this.parent().attr("jet-index"));
  })
  J.select("#apiDetail .close-btn").event("onclick",hideApiDetail);
  J.select(".api-item span").event("onclick",function(){
    showApiDetail(this);
  });
  J.id("apiCodeBtn").event("onclick",showResult);
  J.id("apiCodeResetBtn").event("onclick",function(){
    Jet.confirm("Are you sure to reset code,you will lose all code you are editting!",resetCode);
  });
  J.id("apiCodeClearBtn").event("onclick",function(){
    Jet.confirm("Are you sure to clear code,you will lose all code you are editting!",function(){
      J.id("apiCode").val("");
    });
  });
  J.id("apiCodeCopyBtn").event("onclick",function(){
    if(Jet.isMobile()){
      Jet.show('Sorry,this function is just for PC',"warn","slow");
    }else{
      if(J.id('apiCode').copy()){
        Jet.show('Code copy success');
      }
    }
  });
  J.id("apiCode").event({
    "onmouseleave":"showResult(false)",
    "onkeydown":codeChange,
    "oninput":showResultHtml
  });
  checkWidth();
});
function addApiDetails(){
  var list=J.id("apiBar").child();
  list.each(function(api){
    apiData[api.attr("jet-api")].each(function(data){
      var span=J.new("span").text(data.title);
      if(data.title.length>13){
        if(data.title.length<19){
          span.css({"font-size":"22px","padding-top":"25px"});
        }else{
          span.css({"font-size":"18px","padding-top":"29px"});
        }
      }
      api.append(span);
    })
  })
}
function codeChange(e){
  if(this.attr("jet-change")=="0"){
    this.attr("jet-change","1");
  }
}
window.onresize=function(){
  checkWidth();
}
function checkWidth(){
  var w=J.width();
  if(w>=1800){
    J.class("part").css("padding","100px 20%");
  }else if(w<=1200){
    J.class("part").css("padding","100px 5%");
  }else{
    J.class("part").css("padding","100px 15%");
  }
}
function showResult(needShow){
  if(needShow!=false){
    if(showResultBase()){
      Jet.show("submit success");
    }
  }else{
    if(J.id("apiCode").attr("jet-change")=="1"){
      showResultBase();
    }
  }
}
function showResultBase(){
  var obj=J.id("resultArea");
  if(obj!=null){
    var a=J.id("apiCode").val();
    if(a.includes("<\/script>")){
      var script=a.substring(a.indexOf("<script"),a.indexOf("<\/script>")+9);
      var elems=a.replace(script,"");
      var newScript = J.new('script[type=text/javascript]').html(script.substring(script.indexOf(">")+1,(script.indexOf("<\/script>"))));
      obj.append(newScript).html(elems);
    }else{
      obj.html(a);
    }
    if(a.includes("jet-valid")){
      Jet.initValid();
    }
    J.id("apiCode").attr("jet-change","0");
    Jet.initValid(obj);
    return true;
  }
  return false;
}
function showResultHtml(){
  var obj=J.id("resultArea");
    if(obj!=null){
    var a=J.id("apiCode").val();
    if(a.indexOf("<\/script>")!=-1){
      var script=a.substring(a.indexOf("<script"),a.indexOf("<\/script>")+9);
      var elems=a.replace(script,"");
      obj.html(elems);
    }else{
      obj.html(a);
    }
  }
}
function showIntroDetail(obj){
  var detail= J.id("introDetail");
  if(detail.attr("jet-index")=="-1"){
    var i=obj.index();
    detail.css("height","150px");
    detail.attr("jet-index",i).child(1).text(detailText[i]);
    detail.findClass("trangle").css("margin-left",(10+i*25)+"%");
  }else{
    if(obj.index()==detail.attr("jet-index")){
      detail.css("height","0px");
      detail.attr("jet-index","-1");
    }else{
      var i=obj.index();
      detail.findClass("trangle").css("margin-left",(10+i*25)+"%");
      detail.attr("jet-index",i).child(1).text(detailText[i]);
    }
  }
}
function copySourceCode(){
  J.id("downloadArea").copy();
  Jet.show("copy success");
}
function showApi(i){
  
  J.body().scrollTo(J.id("apiPart").top(),function(){
    J.id("apiBarTitle").child(i).click();
    hideApiDetail();
  });
  /*var n=0;
  var top=J.id("apiPart").top();
  var per=(top-J.body().scrollTop)/30;
  var t=setInterval(function(){
    J.body().scroll(per);
    n++;
    if(n==30){
      J.id("apiBarTitle").child(i).click();
      hideApiDetail();
      J.body().scrollTo(top);
      clearTimeout(t);
    }
  },10);*/
}
function showApiDetail(obj){
  var api=obj.parent().attr("jet-api");
  var i=obj.index();
  J.id("apiCode").attr("jet-data",api+" "+i);
  showDetailBase(api,i);
}
function resetCode(){
  var a=J.id("apiCode").attr("jet-data").split(" ");
  showDetailBase(a[0],a[1]);
}
function showDetailBase(api,i){
  var d=apiData[api][i];
  Jet.set("apiDetail",d,function(elem,text,name){
    if(text.length>13&&name=="title"){
      if(text.length<19){
        elem.css({"font-size":"35px","padding-top":"25px!important"});
      }else{
        elem.css({"font-size":"27px","padding-top":"29px!important"});
      }
    }
  });
  if(!d.test){
    J.id("resultArea").addClass("hide");
    J.class("result-cover").removeClass("hide");
  }else{
    J.id("resultArea").removeClass("hide");
    J.class("result-cover").addClass("hide");
  }
  J.id('apiDetail').addClass('show');
  showResultBase();
}
function hideApiDetail(){
  J.id('apiDetail').removeClass('show');
}
function showRipple(e,obj){
  J.class("ripple").remove();
  var offset = obj.offset();
  var len=(offset.width>offset.height)?offset.width:offset.height;
  if(obj.hasClass("bg-dark")){
    obj.prepend(J.new("span").addClass("ripple r-white"));
  }else{
    obj.prepend(J.new("span").addClass("ripple r-black"));
  }
  var x = e.pageX - offset.left - len / 2;
  var y = e.pageY - offset.top - len / 2;
  J.class("ripple").css({
    "width": len+ 'px',
    "height": len+ 'px',
    "top": y + 'px',
    "left": x + 'px'
  }).addClass("rippleEffect");
}
function moveApiBar(obj){
  var i=obj.index();
  J.id("apiBar").css("left",(-100*i)+"%");
  J.select(".trangle.api").css({"margin-left":(10+i*25)+"%","border-top-color":obj.css("background-color")});
}


/*function insertText(obj,str) {
    if (document.selection) {
        var sel = document.selection.createRange();
        sel.text = str;
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        var startPos = obj.selectionStart,
            endPos = obj.selectionEnd,
            cursorPos = startPos,
            tmpStr = obj.value;
        obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
        cursorPos += str.length;
        obj.selectionStart = obj.selectionEnd = cursorPos;
    } else {
        obj.value += str;
    }
}
function moveEnd(obj){
    obj.focus();
    var len = obj.value.length;
    if (document.selection) {
        var sel = obj.createTextRange();
        sel.moveStart('character',len);
        sel.collapse();
        sel.select();
    } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = len;
    }
}*/ 
      
      