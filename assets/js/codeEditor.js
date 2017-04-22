//tabIndent.js
var tabIndent={version:'0.1.8',config:{tab:'\t'},events:{keydown:function(e){var a=tabIndent.config.tab;var b=a.length;if(e.keyCode===9){e.preventDefault();var c=this.selectionStart,currentEnd=this.selectionEnd;if(e.shiftKey===false){if(!tabIndent.isMultiLine(this)){this.value=this.value.slice(0,c)+a+this.value.slice(c);this.selectionStart=c+b;this.selectionEnd=currentEnd+b}else{var d=tabIndent.findStartIndices(this),l=d.length,newStart=undefined,newEnd=undefined,affectedRows=0;while(l--){var f=d[l];if(d[l+1]&&c!=d[l+1])f=d[l+1];if(f>=c&&d[l]<currentEnd){this.value=this.value.slice(0,d[l])+a+this.value.slice(d[l]);newStart=d[l];if(!newEnd)newEnd=(d[l+1]?d[l+1]-1:'end');affectedRows++}}this.selectionStart=newStart;this.selectionEnd=(newEnd!=='end'?newEnd+(b*affectedRows):this.value.length)}}else{if(!tabIndent.isMultiLine(this)){if(this.value.substr(c-b,b)==a){this.value=this.value.substr(0,c-b)+this.value.substr(c);this.selectionStart=c-b;this.selectionEnd=currentEnd-b}else if(this.value.substr(c-1,1)=="\n"&&this.value.substr(c,b)==a){this.value=this.value.substring(0,c)+this.value.substr(c+b);this.selectionStart=c;this.selectionEnd=currentEnd-b}}else{var d=tabIndent.findStartIndices(this),l=d.length,newStart=undefined,newEnd=undefined,affectedRows=0;while(l--){var f=d[l];if(d[l+1]&&c!=d[l+1])f=d[l+1];if(f>=c&&d[l]<currentEnd){if(this.value.substr(d[l],b)==a){this.value=this.value.slice(0,d[l])+this.value.slice(d[l]+b);affectedRows++}else{}newStart=d[l];if(!newEnd)newEnd=(d[l+1]?d[l+1]-1:'end')}}this.selectionStart=newStart;this.selectionEnd=(newEnd!=='end'?newEnd-(affectedRows*b):this.value.length)}}}else if(e.keyCode===27){tabIndent.events.disable(e)}else if(e.keyCode===13&&e.shiftKey===false){var g=tabIndent,cursorPos=this.selectionStart,d=g.findStartIndices(this),numStartIndices=d.length,startIndex=0,endIndex=0,tabMatch=new RegExp("^"+a.replace('\t','\\t').replace(/ /g,'\\s')+"+",'g'),lineText='';tabs=null;for(var x=0;x<numStartIndices;x++){if(d[x+1]&&(cursorPos>=d[x])&&(cursorPos<d[x+1])){startIndex=d[x];endIndex=d[x+1]-1;break}else{startIndex=d[numStartIndices-1];endIndex=this.value.length}}lineText=this.value.slice(startIndex,endIndex);tabs=lineText.match(tabMatch);if(tabs!==null){e.preventDefault();var h=tabs[0];var i=h.length;var j=cursorPos-startIndex;if(i>j){i=j;h=h.slice(0,j)}this.value=this.value.slice(0,cursorPos)+"\n"+h+this.value.slice(cursorPos);this.selectionStart=cursorPos+i+1;this.selectionEnd=this.selectionStart}}},disable:function(e){var a=this;tabIndent.remove(e.target)},focus:function(){var c=tabIndent,el=this,delayedRefocus=setTimeout(function(){var a=(el.getAttribute('class')||'').split(' '),contains=a.indexOf('tabIndent');el.addEventListener('keydown',c.events.keydown);el.style.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAKZSURBVEjH7ZRfSFNRHMe/9+/+3G26tUn+ycywgURgUBAUJlIhWlEQEjN8yQcfolKJxJAefOjRCnT0IPYQ9iRa9FAYJiaUVP4twf7gzJzpnDbdzHt3z+3Fua3dO4Ne/f5ezjmc8+F7zvmeA2zrv0VFGlexAssFw1mG1pqqUL8npGY60Bw3ykYaOVjlrFXmEyw0AQj6g53UONQBO8DBzuiT2tUx+gR/mwACBQpIUoACBZoAZaOSiWwFIFs4oMMS9/boZVF8T8vtkbEofatiRKF9mXK6M7tTyyxRaPwWtJezIu9+9cNzxHk/n9938rz6IWpvgRdZd5/HcsvC9jadqk6Z0qkBiCaAF3UtX8cy6h1mwlnLhsuZuRvqABlyNJqb0q0ZWsb7uUVHlXAahWl1y3M2tVuQVR1Q0Pl0dwZ67KbZtGnX/ma++/FsCCY1ANlAxIuT2NZP3XB/GRKc9qKhKTYnd4auJbIqINEBDa5zoWWByoS1jocR+loKpKGJKqBLybN/OQN2Tmodv4jCtYIMYurnP5sLf+V5XK4DbFv4haaDCEABA/J88GdegD1I2+heY0Xj7M1itiMjP8srzutjXMbkIDZKCrAcfGOt8LwODimYnzzjLcHIx5VFwPekZrhVPYmxyVNAvZP8KV28SykClo6XF4/t9LpC2TTIteulJepJjD5nCjL8E56sMHt40NYYqE51ZnZIfmGXYBC68p/6v6UkApSI8Y2ejPVKhyE0PdLDPcg+Z003G0W7YUmmvo/WtjXgbiKAAQNGpjYRDOwWILx3dV16ZBsx3QsdYi4JNUw6uCvMbrUcWFAvPWznfH9/GQHR5xAbPuTumRFWvS+ZwDGyJFfidkxWk2oaIfTRk8RI0YqMAQBAL7YVrz/iUDx4QII4/QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMi0xMi0wMVQwMDowNjo0My0wNTowMLKpTWYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTItMTItMDFUMDA6MDY6NDMtMDU6MDDD9PXaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==)";el.style.backgroundPosition='top right';el.style.backgroundRepeat='no-repeat';if(contains!==-1)a.splice(contains,1);a.push('tabIndent-rendered');el.setAttribute('class',a.join(' '));el.removeEventListener('focus',c.events.keydown)},500);el.addEventListener('blur',function b(){clearTimeout(delayedRefocus);el.removeEventListener('blur',b)})}},render:function(a){var c=this;if(a.nodeName==='TEXTAREA'){a.addEventListener('focus',c.events.focus);a.addEventListener('blur',function b(e){c.events.disable(e)})}},renderAll:function(){var a=document.getElementsByTagName('textarea'),t=a.length,contains=-1,classes=[],el=undefined;while(t--){classes=(a[t].getAttribute('class')||'').split(' ');contains=classes.indexOf('tabIndent');if(contains!==-1){el=a[t];this.render(el)}contains=-1;classes=[];el=undefined}},remove:function(a){if(a.nodeName==='TEXTAREA'){var b=(a.getAttribute('class')||'').split(' '),contains=b.indexOf('tabIndent-rendered');if(contains!==-1){a.removeEventListener('keydown',this.events.keydown);a.style.backgroundImage='';b.splice(contains,1);b.push('tabIndent');a.setAttribute('class',(b.length>1?b.join(' '):b[0]))}}},removeAll:function(){var a=document.getElementsByTagName('textarea'),t=a.length,contains=-1,classes=[],el=undefined;while(t--){classes=(a[t].getAttribute('class')||'').split(' ');contains=classes.indexOf('tabIndent-rendered');if(contains!==-1){el=a[t];this.remove(el)}contains=-1;classes=[];el=undefined}},isMultiLine:function(a){var b=a.value.slice(a.selectionStart,a.selectionEnd),nlRegex=new RegExp(/\n/);if(nlRegex.test(b))return true;else return false},findStartIndices:function(a){var b=a.value,startIndices=[],offset=0;while(b.match(/\n/)&&b.match(/\n/).length>0){offset=(startIndices.length>0?startIndices[startIndices.length-1]:0);var c=b.search("\n");startIndices.push(c+offset+1);b=b.substring(c+1)}startIndices.unshift(0);return startIndices}};

var _code={
  _str:1,
  _key:["function","if","else","var","return","for","true","false","switch","new","break","case","this","null","undefined"],
  _tag:3,
  _attr:4,
  _sign:["=","{","}","\\(","\\)","\\[","\\]",",","&&","\\.","\\?","\\|","\\+","-",";\n",":","!","%","\\^"],//转义
}
J.ready(function(){
  initFunBtn();
  initCodeMain();
});
function initFunBtn(){
  
  J.id("apiCodeBtn").clk(showResult).tip("Submit");
  J.id("apiCodeResetBtn").clk(function(){
    J.confirm("Are you sure to reset code,you will lose all code you are editting!",resetCode);
  }).tip("Reset code");
  J.id("apiCodeClearBtn").clk(function(){
    J.confirm("Are you sure to clear code,you will lose all code you are editting!",function(){
      J.id("apiCode").val("");
      J.id("apiCodeView").empty()
    });
  }).tip("Clear code");
  J.id("apiCodeCopyBtn").clk(function(){
    if(J.isMobile()){
      J.show('Sorry,this function is just for PC',"warn","slow");
    }else{
      if(J.id('apiCode').copy()){
        J.id('apiCode').select();
        J.show('Code copy success');
      }
    }
  }).tip("Copy code");
  J.id("apiClearColor").data("flag",true).clk(function(){
    if(this.data("flag")){
      this.data("flag",false);
      J.id("apiCode").toggleClass("bg");
      J.id("apiCodeView").fadeToggle(function(){
        J.id("apiClearColor").data("flag",true);
      });
    }
  }).tip("Clear code color");
  J.id("apiFixColor").data("flag",true).clk(function(){
    if(this.data("flag")){
      this.data("flag",false)
      J.id("apiCodeView").css("left","3px");
    }else{
      this.data("flag",true)
      J.id("apiCodeView").css("left","0px");
    }
  }).tip("Fix problem");
}
function initCodeMain(){
  J.id("apiCode").on({
    mouseleave:function(){
      showResult(false);
    },
    keydown:codeChange,
    keyup:function(e){
      if(e.keyCode==13||e.keyCode==9){
        geneViewCode();
      }
    },
    input:function(){
      showResultHtml();
      geneViewCode();
    },
    //mousewheel:redefineMouseWhell,
    scroll:function(event){
      J.id("apiCodeView").scrollTo(J.id("apiCode").scroll(),null,10).scrollXTo(J.id("apiCode").scrollX(),null,10);
    },
    //onclick:moveCursor
  });
}

function codeChange(e){
  if(this.attr("jet-change")=="0"){
    this.attr("jet-change","1");
  }
  if(e.keyCode==13||e.keyCode==9){
    geneViewCode();
  }
  //geneViewCode();
}
function resetCode(){
  var a=J.id("apiCode").attr("jet-api-index").split(" ");
  if(a.length<2){
    J.id("apiSearchResultList").child(a[0]).click();
  }else{
    showDetailBase(apiData[a[0]][a[1]]);
  }
}
function geneViewCode(){
  //moveCursor();.replaceAll("<","&lt;").replaceAll(">","&gt;")
  var html=J.id("apiCode").val().replaceAll("<","&lt;").replaceAll(">","&gt;")+" ";//为了不然最后一个字符是换行
  
  html=geneSign(html);
  html=geneKey(html);
  html=geneHtmlElement(html);
  
  
  html=geneString(html);
  html=geneNote(html);
  J.id("apiCodeView").html(html);
  if(J.id("apiCode").attr("show-all")=="true"){
    resetAllCode();
  }
}
  function geneHtmlElement(html){
    var arr=html.match(/(&lt;)(.*?)(&gt;)/g);
    if(arr!=null){
      arr.each(function(a,i){
        arr[i]="<j class='_tag'>"+a+"</j>";
      });
      return html.replaceAll(/(&lt;)(.*?)(&gt;)/g,arr);
    }
    return html;
  }
  function geneSign(html){
    if(html.has("script")){
      
      
      var s1= html.match(/(&lt;script)(.*?)(&gt;)/g)[0];
      var script=html.substring(html.indexOf(s1)+s1.length,html.indexOf("&lt;\/script&gt;"));
      
      
      var elems=html.replace(script,"$R$");
      elems=geneHtmlNote(elems);
      _code._sign.each(function(a){
        script=script.replaceAll(a,"<j class='_sign'>"+(a.has("\\")?a.substring(1):a)+"</j>");
      });
      script=geneFun(script);
      script=geneDefineFun(script);
      script=geneNumber(script);
      html=elems.replace("$R$",script);
      return html;
    }
    return html;
  }function geneNumber(html){
    var arr=html.match(/(\d+)/g);
    if(arr!=null){
      arr.each(function(a,i){
        arr[i]="<j class='_num'>"+a+"</j>";
      });
      return html.replaceAll(/(\d+)/g,arr);
    }
    return html;
  }
  
  function geneDefineFun(html){
    var dFun=html.match(/(function)(.*?)(<)/g);
    if(dFun!=null){
      dFun.each(function(a,i){
        dFun[i]=a.substring(a.lastIndexOf(" ")+1,a.length-1);
      });
      dFun.sortByAttr("length",false);
      dFun.each(function(a,i){
        if(a!=""&&a!="function"){//匿名函数排除掉
          html=html.replaceAll(a,"<j class='_d-fun'>"+a+"</j>");
        }
      });
    }
    return html;
  }
  function geneFun(html){
    var arr=html.match(/(\.)(.*?)(\()/g);
    if(arr!=null){
      arr.each(function(a,i){
        var atemp=a.match(/(>)(.*?)(<)/g);
        var fun=atemp[atemp.length-1];
        if(fun.has(".")){
          fun=fun.substring(fun.lastIndexOf("."),fun.length-1);
        }else{
          fun=fun.substring(1,fun.length-1);
        }
        arr[i]=arr[i].replace(fun,"<j class='_fun'>"+fun+"</j>");
      });
      return html.replaceAll(/(\.)(.*?)(\()/g,arr);
    }
    return html;
  }
  function geneKey(html){
    _code._key.each(function(a){
      html=html.replaceAll(a,"<j class='_key'>"+a+"</j>");
    });
    return html;
  }
  function geneString(html){
    var arr=html.match(/(")(.*?)(")/g);
    if(arr!=null){
      arr.each(function(a,i){
        arr[i]="<j class='_str'>"+a+"</j>";
      });
      return html.replaceAll(/(")(.*?)(")/g,arr);
    }
    return html;
  }
  function geneNote(html){
    var arr=html.match(/(\/\/)(.*?)(\n)/g);
    if(arr!=null){
      arr.each(function(a,i){
        arr[i]="<j class='_note'>"+a+"</j>";
      });
      html=html.replaceAll(/(\/\/)(.*?)(\n)/g,arr);
    }
    arr=html.match(/(\/\*)(.*?)(\*\/)/g);
    if(arr!=null){
      arr.each(function(a,i){
        arr[i]="<j class='_note'>"+a+"</j>";
      });
      html=html.replaceAll(/(\/\*)(.*?)(\*\/)/g,arr);
    }
    return html;
  }
  function geneHtmlNote(html){
    var arr=html.match(/(&lt;!--)(.*?)(--&gt;)/g);
    if(arr!=null){
      arr.each(function(a,i){
        arr[i]="<j class='_note'>"+a+"</j>";
      });
      html=html.replaceAll(/(&lt;!--)(.*?)(--&gt;)/g,arr);
    }
    return html;
  }
function resetAllCode(){
  var h=J.id("apiCodeView").css("height");
  J.id("apiCode").css("height",h);
  J.id("showCode").parent().css("height",(parseInt(h.replace("px",""))+73)+"px");
}