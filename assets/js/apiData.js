var apiData={
  jetSelect:[
    {
      title:"J.ready()",
      intro:"Start html",
      test:false,
      function:"Do something after that the document structure has been loaded(not including images and other non-text media )",
      howUse:"Parameter:function",
      code:'<script>\n\tJ.ready(function(){\n\t\t//do something after that the document structure has been loaded (not including images and other non-text media )\n\t});\n\tJ.ready(function(){\n\t\t//You can use this function more then one time like this\n\t});\n</script>'
    },{
      title:"J.load()",
      intro:"Start html",
      test:false,
      function:"Do something after that the document structure has been loaded(including images and other non-text media )",
      howUse:"Parameter:function",
      code:'<script>\n\tJ.load(function(){\n\t\t//do something after that the document structure has been loaded (including images and other non-text media )\n\t\t//this function will be executed after J.ready()\n\t});\n\tJ.load(function(){\n\t\t//You can use this function more then one time like this\n\t});\n</script>'
    },{
      title:"J.id()",
      intro:"Select an element",
      test:true,
      function:"Select an element by id",
      howUse:"Parameter:String; Return:HTMLElement",
      code:'<input type="text" id="test"/>\n<input type="button" onclick="test()" value="click me"/>\n<script>\n\tfunction test(){\n\t\tJ.id("test").val("I am focused").focus();\n\t}\n</script>'
    },{
      title:"J.class()",
      intro:"Select element",
      test:true,
      function:"Select an element or elements by class name",
      howUse:"Parameter:String; Return:HTMLElement|HTMLCollection",
      code:'<input type="text" class="test-one"/>\n<input type="button" onclick="testOne()" value="one"/>\n<input type="text" class="test-many"/>\n<input type="text" class="test-many"/>\n<input type="text" class="test-many"/>\n<input type="button" onclick="testMany()" value="many"/>\n<script>\n\tfunction testOne(){\n\t\tJ.class("test-one").val("I am selected");\n\t}\n\tfunction testMany(){\n\t\tJ.class("test-many").val("I am selected");\n\t}\n</script>'
    },{
      title:"J.attr()",
      intro:"Select element",
      test:true,
      function:"Select an element or elements by attribute name or attribute name=value",
      howUse:"Parameter:String(name|name=value); Return:HTMLElement|NodeList",
      code:'<input type="text" jet-test="test1"/>\n<input type="button" onclick="testAttr()" value="attr"/>\n<input type="text" jet-test="test2"/>\n<input type="button" onclick="testAttrValue()" value="attr=value"/>\n<br></br>\n<input type="text" jet-test2="test-one"/>\n<input type="button" onclick="testOne()" value="one"/>\n<input type="text" jet-test3="test-maney"/>\n<input type="text" jet-test3="test-maney"/>\n<input type="text" jet-test3="test-maney"/>\n<input type="button" onclick="testMany()" value="many"/>\n<script>\n\tfunction testAttr(){\n\t\tJ.attr("jet-test").val("I have jet-test attribute");\n\t}\n\tfunction testAttrValue(){\n\t\tJ.attr("jet-test=test2").val("My jet-test value equals test2");\n\t}\n\tfunction testOne(){\n\t\tJ.attr("jet-test2").val("I have jet-test2 attribute");\n\t}\n\tfunction testMany(){\n\t\tJ.attr("jet-test3").val("I have jet-test3 attribute");\n\t}\n</script>'
    },{
      title:"J.tag()",
      intro:"Select element",
      test:true,
      function:"Select an element or elements by tag name",
      howUse:"Parameter:String; Return:HTMLElement|HTMLCollection",
      code:'<h5>h5</h5>\n<input type="button" onclick="selectH5()" value="one"/>\n<p>p</p>\n<p>p</p>\n<p/>p</p>\n<input type="button" onclick="selectP()" value="many"/>\n<script>\n\tfunction selectH5(){\n\t\tJ.tag("h5").text("I am selected");\n\t}\n\tfunction selectP(){\n\t\tJ.tag("p").text("I am selected");\n\t}\n</script>'
    },{
      title:"J.name()",
      intro:"Select element",
      test:true,
      function:"Select an element or elements by name",
      howUse:"Parameter:String; Return:HTMLElement|HTMLCollection",
      code:'<input type="text" name="test-one"/>\n<input type="button" onclick="testOne()" value="one"/>\n<input type="text" name="test-many"/>\n<input type="text" name="test-many"/>\n<input type="text" name="test-many"/>\n<input type="button" onclick="testMany()" value="many"/>\n<script>\n\tfunction testOne(){\n\t\tJ.name("test-one").val("I am selected");\n\t}\n\tfunction testMany(){\n\t\tJ.name("test-many").val("I am selected");\n\t}\n</script>'
    },{
      title:"J.select()",
      intro:"Select element",
      test:true,
      function:"Select an element or elements by a css selector",
      howUse:"Parameter:String(css selector); Return:HTMLElement|NodeList",
      code:'<input type="text" id="testSelect"/>\n<input type="button" onclick="testid()" value="id"/>\n<input type="text" class="test-select"/>\n<input type="button" onclick="testClass()" value="class"/>\n<input type="text" jet-test="test"/>\n<input type="button" onclick="testAttr()" value="attr"/>\n<input type="button" onclick="testAttrValue()" value="attr=value"/>\n<input type="text" id="testSelect2" class="test-select"/>\n<input type="button" onclick="testCombination()" value="Combination"/>\n<br></br>\n<p>You can use any legal css selector</p>\n<script>\n\tfunction testid(){\n\t\tJ.select("#testSelect").val("I am selected");\n\t}\n\tfunction testClass(){\n\t\tJ.select(".test-select").val("I am selected");\n\t}\n\tfunction testAttr(){\n\t\tJ.select("[jet-test]").val("I am selected by attr");\n\t}\n\tfunction testAttrValue(){\n\t\tJ.select("[jet-test=test]").val("Selected by attr=value");\n\t}\n\tfunction testCombination(){\n\t\tJ.select("#testSelect2.test-select").val("Selected by combination");\n\t}\n</script>'
    },{
      title:"S()",
      intro:"equal J.select()",
      test:true,
      function:"Select an element or elements by a css selector",
      howUse:"Parameter:String(css selector); Return:HTMLElement|NodeList",
      code:'<input type="text" id="testSelect"/>\n<input type="button" onclick="testid()" value="id"/>\n<p>You can use any legal css selector</p>\n<script>\n\tfunction testid(){\n\t\tS("#testSelect").val("I am selected");\n\t\t//S() = J.select()\n\t\t//S() will return body\n\t}\n</script>'
    },{
      title:"s=S",
      intro:"equal S() and J.select()",
      test:true,
      function:"Select an element or elements by a css selector",
      howUse:"Parameter:String(css selector); Return:HTMLElement|NodeList",
      code:'<input type="text" id="testSelect"/>\n<input type="button" onclick="testid()" value="id"/>\n<p>You can use any legal css selector</p>\n<script>\n\tfunction testid(){\n\t\ts("#testSelect").val("I am selected");\n\t\t//s() = S() =J.select()\n\t}\n</script>'
    },{
      title:"J.new()",
      intro:"Creat HTMLElement",
      test:true,
      function:"Creat HTMLElement with a tag name or tag name+css selector",
      howUse:"Parameter:String(tag name|tag name+css selector); Return:HTMLElement",
      code:'<div id="testNew">result</div>\n<input type="button" onclick="testTag()" value="by tag"/>\n<input type="button" onclick="testSelector1()" value="by tag+selector1"/>\n<input type="button" onclick="testSelector2()" value="by tag+selector2"/>\n<input type="button" onclick="testSelector3()" value="by tag+selector3"/>\n<p>You can use any legal css selector</p>\n<script>\n\tfunction testTag(){\n\t\tvar span=J.new("span");\n\t\tJ.id("testNew").empty().append(span);\n\t\tJ.id("testNew").text(J.id("testNew").html());\n\t}\n\tfunction testSelector1(){\n\t\tvar span=J.new("span#test");\n\t\tJ.id("testNew").empty().append(span);\n\t\tJ.id("testNew").text(J.id("testNew").html());\n\t}\n\tfunction testSelector2(){\n\t\tvar span=J.new("span#test.test");\n\t\tJ.id("testNew").empty().append(span);\n\t\tJ.id("testNew").text(J.id("testNew").html());\n\t}\n\tfunction testSelector3(){\n\t\tvar span=J.new("span#test.test[jet-test=test]");\n\t\tJ.id("testNew").empty().append(span);\n\t\tJ.id("testNew").text(J.id("testNew").html());\n\t}\n</script>'
    },{
      title:"J.body()",
      intro:"Get body",
      test:false,
      function:"Return document.body",
      howUse:"Parameter:null; Return HTMLElement(document.body)",
      code:'<script>\n\tJ.body();\n\t//return document body\n\t//equal S() or J.tag("body")\n</script>'
    },{
      title:"J.width()",
      intro:"Get window width",
      test:true,
      function:"Return width of broswer window visible area",
      howUse:"Parameter:null; Return int(window width)",
      code:'<input type="text" id="testWidth"/>\n<input type="button" onclick="testWidth()" value="width"/>\n<script>\n\tfunction testWidth(){\n\tvar width=J.width();\n\t\tS("#testWidth").val("Window width : "+width+" px");\n\t}\n</script>'
    },{
      title:"J.height()",
      intro:"Get window height",
      test:true,
      function:"Return height of broswer window visible area",
      howUse:"Parameter:null; Return int(window height)",
      code:'<input type="text" id="testHeight"/>\n<input type="button" onclick="testHeight()" value="height"/>\n<script>\n\tfunction testHeight(){\n\tvar height=J.height();\n\t\tS("#testHeight").val("Window height : "+height+" px");\n\t}\n</script>'
    },{
      title:"j=J",
      intro:"use j OR J",
      test:false,
      function:"j=J",
      howUse:"You can use j to replace J",
      code:'<script>\n\tj.body();\n\tj.select("#id")\n\t//...\n</script>'
    },{
      title:".findClass()",
      intro:"Select HTMLElement in the children of this",
      test:true,
      function:"Select HTMLElement by class name in the children of this",
      howUse:"Obj:HTMLElement; Parameter:String; Return HTMLElement|HTMLCollection",
      code:'<div id="testDiv">\n\t<input type="text" class="test"/>\n\t<input type="text" class="test"/>\n</div>\n<input type="text" class="test"/>\n<input type="button" onclick="test()" value="click me"/>\n<script>\n\tfunction test(){\n\t\tJ.id("testDiv").findClass("test").val("I am selected");\n\t}\n</script>'
    },{
      title:".findAttr()",
      intro:"Select HTMLElement in the children of this",
      test:true,
      function:"Select HTMLElement by attribute name in the children of this",
      howUse:"Obj:HTMLElement; Parameter:String; Return HTMLElement|NodeList",
      code:'<div id="testDiv">\n\t<input type="text" jet-test="test"/>\n\t<input type="text" jet-test="test2"/>\n</div>\n<input type="text" class="test"/>\n<input type="button" onclick="testAttr()" value="click me"/>\n<input type="button" onclick="testAttrValue()" value="click me"/>\n<script>\n\tfunction testAttr(){\n\t\tJ.id("testDiv").findAttr("jet-test").val("I am selected by attribute");\n\t}\n\tfunction testAttrValue(){\n\t\tJ.id("testDiv").findAttr("jet-test=test").val("I am selected by value is test");\n\t}\n</script>'
    },{
      title:".findTag()",
      intro:"Select HTMLElement in the children of this",
      test:true,
      function:"Select HTMLElement by tag name in the children of this",
      howUse:"Obj:HTMLElement; Parameter:String; Return HTMLElement|HTMLCollection",
      code:'<div id="test">\n\t<h5>h5</h5>\n\t<input type="button" onclick="selectH5()" value="one"/>\n\t<p>p</p>\n\t<p>p</p>\n\t<p/>p</p>\n\t<input type="button" onclick="selectP()" value="many"/>\n</div>\n<script>\n\tfunction selectH5(){\n\t\tJ.id("test").findTag("h5").text("I am selected");\n\t}\n\tfunction selectP(){\n\t\tJ.id("test").findTag("p").text("I am selected");\n\t}\n</script>'
    },{
      title:".findName()",
      intro:"Select HTMLElement in the children of this",
      test:true,
      function:"Select HTMLElement by name in the children of this",
      howUse:"Obj:HTMLElement; Parameter:String; Return HTMLElement|HTMLCollection",
      code:'<div id="testDiv">\n\t<input type="text" name="test"/>\n\t<input type="button" onclick="testAttr()" value="click me"/>\n\t<input type="text" name="test2"/>\n\t<input type="text" name="test2"/>\n\t<input type="button" onclick="testAttrValue()" value="click me"/>\n</div>\n<script>\n\tfunction testAttr(){\n\t\tJ.id("testDiv").findName("test").val("I am selected");\n\t}\n\tfunction testAttrValue(){\n\t\tJ.id("testDiv").findName("test2").val("I am selected");\n\t}\n</script>'
    },{
      title:".select()",
      intro:"Select HTMLElement in the children of this",
      test:true,
      function:"Select HTMLElement by css selector in the children of this",
      howUse:"Obj:HTMLElement; Parameter:String; Return HTMLElement|NodeList",
      code:'<div id="test">\n\t<input type="text" id="testSelect"/>\n\t<input type="button" onclick="testid()" value="single"/>\n\t<input type="text" id="testSelect2" class="test-select"/>\n\t<input type="button" onclick="testCombination()" value="Combination"/>\n</div>\n<br></br>\n<p>You can use any legal css selector</p>\n<script>\n\tfunction testid(){\n\t\tJ.id("test").select("#testSelect").val("I am selected");\n\t}\n\tfunction testCombination(){\n\t\tJ.id("test").select("#testSelect2.test-select").val("Selected by combination");\n\t}\n</script>'
    },{
      title:".each()",
      intro:"Ergodic a list",
      test:true,
      function:"Ergodic HTMLCollection NodeList or Array",
      howUse:"Obj:HTMLCollection|NodeList|Array; Parameter:function(item,[index]){}; Return HTMLElement|NodeList|Array(Self)",
      code:'<input type="text" class="test"/>\n<input type="text" class="test"/>\n<input type="text" class="test"/>\n<input type="button" onclick="testEach1()" value="with index"/>\n<input type="button" onclick="testEach2()" value="without index"/>\n<script>\n\tfunction testEach1(){\n\t\tJ.class("test").each(function(item,i){\n\t\t\titem.val("I am No."+i);\n\t\t});\n\t}\n\tfunction testEach2(){\n\t\tJ.class("test").each(function(item){\n\t\t\titem.val("I am an item");\n\t\t});\n\t}\n</script>'
    },{
      title:".child()",
      intro:"Get children or a child",
      test:true,
      function:"Get children list or a child by index (start with 0)",
      howUse:"Obj:HTMLElement; Parameter:null|int; Return HTMLElement|HTMLCollection",
      code:'<div id="test">\n\t<input type="text"/>\n\t<input type="text"/>\n\t<input type="text"/>\n</div>\n<input type="button" onclick="single(0)" value="1"/>\n<input type="button" onclick="single(1)" value="2"/>\n<input type="button" onclick="single(2)" value="3"/>\n<input type="button" onclick="allChild()" value="all"/>\n<script>\n\tfunction single(i){\n\t\tJ.id("test").child(i).val("I am children "+i);\n\t}\n\tfunction allChild(){\n\t\tJ.id("test").child().val("All selected");\n\t}\n</script>'
    },{
      title:".parent()",
      intro:"Get parent",
      test:true,
      function:"Get parent or parent of parent...(parent(0) is self)",
      howUse:"Obj:HTMLElement; Parameter:null|int; Return HTMLElement",
      code:'<div name="p2">p2\n\t<div name="p1">p1\n\t\t<div id="test" name="p0">p0</div>\n\t</div>\n</div>\n<input type="button" onclick="parentDefault()" value="parent"/>\n<input type="button" onclick="parentByI(0)" value="parent(0)"/>\n<input type="button" onclick="parentByI(1)" value="parent(1)"/>\n<input type="button" onclick="parentByI(2)" value="parent(2)"/>\n<div id="show"></div>\n<script>\n\tfunction parentByI(i){\n\t\tvar text=J.id("test").parent(i).attr("name");\n\t\tJ.id("show").text(text);\n\t}\n\tfunction parentDefault(){\n\t\tvar text=J.id("test").parent().attr("name");\n\t\tJ.id("show").text(text);\n\t}\n</script>'
    },{
      title:".next()",
      intro:"Get single element",
      test:true,
      function:"Get next element",
      howUse:"Obj:HTMLElement; Parameter:null; Return HTMLElement",
      code:'<input type="text" id="test" value="Me"/>\n<input type="text"/>\n<input type="button" onclick="testNext()" value="click me"/>\n<script>\n\tfunction testNext(){\n\t\tvar text=J.id("test").next().val("I am his next element");\n\t}\n</script>'
    },{
      title:".prev()",
      intro:"Get single element",
      test:true,
      function:"Get previous element",
      howUse:"Obj:HTMLElement; Parameter:null; Return HTMLElement",
      code:'<input type="text"/>\n<input type="text" id="test" value="Me"/>\n<input type="button" onclick="testPrev()" value="click me"/>\n<script>\n\tfunction testPrev(){\n\t\tvar text=J.id("test").prev().val("I am his previous element");\n\t}\n</script>'
    },{
      title:".index()",
      intro:"Get element's index",
      test:true,
      function:"Get element's index in their parent's children list",
      howUse:"Obj:HTMLElement; Parameter:null; Return int",
      code:'<div>\n\t<input type="button" onclick="testIndex(this)" value="click me to see my index"/>\n\t<input type="button" onclick="testIndex(this)" value="click me to see my index"/>\n\t<input type="button" onclick="testIndex(this)" value="click me to see my index"/>\n</div>\n<script>\n\tfunction testIndex(obj){\n\t\tobj.val("My index is "obj.index());\n\t}\n</script>'
    },{
      title:".append()",
      intro:"Add element",
      test:true,
      function:"Add an element or many elements in the last or certain position of their children list",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:HTMLElement|Array of HTMLElement,[index]; Return self",
      code:'<div id="parentEle">\n\t<input type="text" value="old"/>\n\t<input type="text" value="old"/>\n\t<input type="text" value="old"/>\n</div>\n<input type="button" onclick="testAppend()" value="append a new textbox"/>\n<input type="button" onclick="testAppendByIndex()" value="append a new textbox with index=1"/>\n<script>\n\tvar j_i=1;\n\tfunction testAppend(){\n\t\tJ.id("parentEle").append(J.new("input[type=text][value=I am new "+j_i+"]"));\n\t\tj_i++;\n\t}\n\tfunction testAppendByIndex(){\n\t\tJ.id("parentEle").append(J.new("input[type=text][value=I am new "+j_i+"]"),1);\n\t\tj_i++;\n\t}\n</script>'
    },{
      title:".prepend()",
      intro:"Add element",
      test:true,
      function:"Add an element or many elements in the first position of their children list",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:HTMLElement|Array of HTMLElement; Return self",
      code:'<div id="parentEle">\n\t<input type="text" value="old"/>\n\t<input type="text" value="old"/>\n\t<input type="text" value="old"/>\n</div>\n<input type="button" onclick="testPrepend()" value="prepend a new textbox"/>\n<script>\n\tvar j_i=1;\n\tfunction testPrepend(){\n\t\tJ.id("parentEle").prepend(J.new("input[type=text][value=I am new"+j_i+"]"));\n\t\tj_i++;\n\t}\n</script>'
    },{
      title:".after()",
      intro:"Add element",
      test:true,
      function:"Add an element or many elements after self",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:HTMLElement|Array of HTMLElement; Return self",
      code:'<input type="text" id="test" value="after me"/>\n<input type="text" value="old"/>\n<input type="button" onclick="testAfter()" value="add a new textbox after an element"/>\n<script>\n\tvar j_i=1;\n\tfunction testAfter(){\n\t\tJ.id("test").after(J.new("input[type=text][value=I am new"+j_i+"]"));\n\t\tj_i++;\n\t}\n</script>'
    },{
      title:".before()",
      intro:"Add element",
      test:true,
      function:"Add an element or many elements before self",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:HTMLElement|Array of HTMLElement; Return self",
      code:'<input type="text" value="old2"/>\n<input type="text" id="test" value="before me"/>\n<input type="button" onclick="testBefore()" value="add a new textbox before an element"/>\n<script>\n\tvar j_i=1;\n\tfunction testBefore(){\n\t\tJ.id("test").before(J.new("input[type=text][value=I am new"+j_i+"]"));\n\t\tj_i++;\n\t}\n</script>'
    },{
      title:".remove()",
      intro:"Remove element",
      test:true,
      function:"Remove this of a element in this",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:null|int|HTMLElement; Return null|this",
      code:'<input type="text" class="test" value="text1"/>\n<input type="text" class="test" id="testR" value="text2 will be remove"/>\n<input type="text" class="test" value="text3"/>\n<input type="text" class="test" value="text4"/>\n<input type="text" class="test" value="text5"/>\n<input type="button" onclick="testRemove()" value="remove a textbox"/>\n<input type="button" onclick="testRemoveC()" value="remove a textbox with HTMLCollection index=0"/>\n<input type="button" onclick="testRemoveE()" value="remove a textbox with HTMLElement"/>\n<input type="button" onclick="testRemoveAll()" value="remove All  textbox"/>\n<script>\n\tfunction testRemove(){\n\t\tJ.id("testR").remove();\n\t}\n\tfunction testRemoveC(){\n\t\tJ.class("test").remove(0);\n\t}\n\tfunction testRemoveE(){\n\t\tJ.class("test").remove(J.class("test")[0]);\n\t}\n\tfunction testRemoveAll(){\n\t\tJ.class("test").remove();\n\t}\n</script>'
    },{
      title:".empty()",
      intro:"Remove all Children and text",
      test:true,
      function:"Remove all Children and text of this",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:null; Return this",
      code:'<div id="parentEle">\n\t<input type="text" value="child0"/>\n\t<input type="text" value="child1"/>\n\t<input type="text" value="child2"/>\n</div>\n<input type="button" onclick="testEmpty()" value="clear all children"/>\n<script>\n\tfunction testEmpty(){\n\t\tJ.id("parentEle").empty();\n\t}\n</script>'
    },{
      title:".removeChild()",
      intro:"Remove one Children",
      test:true,
      function:"Remove one Children of this",
      howUse:"Obj:HTMLElement; Parameter:HTMLElement; Return this",
      code:'<div id="parentEle">\n\t<input type="text" value="child0"/>\n\t<input type="text" id="testR" value="child1 will be remove"/>\n\t<input type="text" value="child2"/>\n</div>\n<input type="button" onclick="testRemoveChild()" value="remove a child"/>\n<script>\n\tfunction testRemoveChild(){\n\t\tJ.id("parentEle").removeChild(J.id("testR"));\n\t\t//if you want to remove a child by index\n\t\t//use "J.id("parentEle").child(i).remove()"\n\t}\n</script>'
    },{
      title:".css()",
      intro:"Get Or Set CSS",
      test:true,
      function:"Get Or Set CSS of an element of elements",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String,String String,Json; Return this",
      code:'<input type="text" id="test" value="Me"/>\n<input type="button" onclick="testGet()" value="get background color"/>\n<input type="button" onclick="testSetSingle()" value="set single style"/>\n<input type="button" onclick="testSetMany()" value="set many styles"/>\n<input type="button" onclick="testSetByPlus()" value="set style by +="/>\n<script>\n\tfunction testGet(){\n\t\tJ.id("test").val(J.id("test").css("background-color"));\n\t}\n\tfunction testSetSingle(){\n\t\tJ.id("test").css("background-color","#999");\n\t}\n\tfunction testSetMany(){\n\t\tJ.id("test").css({"border-color":"#f00","color":"#f00"});\n\t}\n\tfunction testSetByPlus(){\n\t\tJ.id("test").css("height","+=50px");\n\t}\n</script>'
    },{
      title:".attr()",
      intro:"Get Or Set attribute",
      test:true,
      function:"Get Or Set attribute of an element of elements",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String,String String,Json; Return this",
      code:'<div><input type="text" id="test" value="Me"/></div>\n<input type="button" onclick="testGet()" value="get attribute value"/>\n<input type="button" onclick="testSetSingle()" value="set single attribute value"/>\n<input type="button" onclick="testSetMany()" value="set many attribute values"/>\n<div id="show"></div>\n<script>\n\tfunction testGet(){\n\t\tJ.id("test").val(J.id("test").attr("id"));\n\t}\n\tfunction testSetSingle(){\n\t\tJ.id("test").attr("newAttr","new attr");\n\t\tJ.id("show").text(J.id("test").parent().html());\n\t}\n\tfunction testSetMany(){\n\t\tJ.id("test").attr({newAttr2:"new attr2",newAttr3:3});\n\t\tJ.id("show").text(J.id("test").parent().html());\n\t}\n</script>'
    },{
      title:".data()",
      intro:"Save or delete data",
      test:true,
      function:"Save or delete or clear data in a HTMLElement",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String,String String,Json,String null,null; Return String|Number|Json|null|this",
      code:'<input type="text" id="test" value="I save the data"/>\n<input type="button" onclick="testSetSingle()" value="set single data:data1=1"/>\n<input type="button" onclick="testSetMany()" value="set many data:data2=2;data3=3"/>\n<input type="button" onclick="testGet()" value="get single data:data3"/>\n<input type="button" onclick="testGetAll()" value="get all data"/>\n<input type="button" onclick="clearSingleData()" value="clear single data:data1"/>\n<input type="button" onclick="clearData()" value="clear all data"/>\n<div id="show"></div>\n<script>\n\tfunction testSetSingle(){\n\t\tJ.id("test").data("data1",1);\n\t\tJ.id("show").text("Set data1="+J.id("test").data("data1"));\n\t}\n\tfunction testSetMany(){\n\t\tJ.id("test").data({data2:"2",data3:3});\n\t\tJ.id("show").text("Set data2="+J.id("test").data("data2")+" and data3 ="+J.id("test").data("data3"));\n\t}\n\tfunction testGet(){\n\t\tvar data3=J.id("test").data("data3");\n\t\tJ.id("show").text("data3="+data3);\n\t}\n\tfunction testGetAll(){\n\t\tvar dataJson=J.id("test").data();\n\t\tJ.id("show").text("All data as json string="+JSON.stringify(dataJson));\n\t}\n\tfunction clearSingleData(){\n\t\tJ.id("test").data("data1",null);\n\t\tJ.id("show").text("Clear data1,now data1="+J.id("test").data("data1"));\n\t}\n\tfunction clearData(){\n\t\tJ.id("test").data(null);\n\t\tJ.id("show").text("All clear,now all data as json is "+JSON.stringify(J.id("test").data()));\n\t}\n</script>'
    },{
      title:".hasAttr()",
      intro:"Judge attribute",
      test:true,
      function:"To check whether a certain attribute is in this",
      howUse:"Obj:HTMLElement; Parameter:String; Return Boolean",
      code:'<input type="button" test="test" onclick="testHasAttr(this)" value="Do I have attribute named test"/>\n<script>\n\tfunction testHasAttr(obj){\n\t\tobj.val("The answer is "+obj.hasAttr("test"));\n\t}\n</script>'
    },{
      title:".removeAttr()",
      intro:"Remove attribute",
      test:true,
      function:"Remove one attribute or many attributes by name",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String('a'|'a b'); Return this",
      code:'<div>\n\t<input type="button" test="test" onclick="testRemoveAttr(this)" value="Click to remove attr named test"/>\n</div>\n<div id="show"></div>\n<br/>\n<input\ttype="text" test="test" class="test" value="I have attr named test"/>\n<input\ttype="text" test="test" class="test" value="I have attr named test"/>\n<input\ttype="text" test="test" class="test" value="I have attr named test"/>\n<input type="button" onclick="testList()" value="use it to an element list"/>\n<script>\n\tfunction testRemoveAttr(obj){\n\t\tobj.removeAttr("test");//use "a1 a2 a3..."to remove many attributes\n\t\tJ.id("show").text(obj.parent().html());\n\t}\n\tfunction testList(){\n\t\tJ.class("test").removeAttr("test").val("I lost it");\n\t}\n</script>'
    },{
      title:".hasClass()",
      intro:"Judge class",
      test:true,
      function:"To check whether a certain class is in this",
      howUse:"Obj:HTMLElement; Parameter:String; Return Boolean",
      code:'<input type="button" class="test" onclick="testHasClass(this)" value="Do I have class named test"/>\n<script>\n\tfunction testHasClass(obj){\n\t\tobj.val("The answer is "+obj.hasClass("test"));\n\t}\n</script>'
    },{
      title:".addClass()",
      intro:"Add class",
      test:true,
      function:"Add one class or many classes a element or a element list",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String('a'|'a b'); Return this",
      code:'<div>\n\t<input type="button" onclick="testAddClass(this)" value="Click to add class named test"/>\n</div>\n<div id="show"></div>\n<br/>\n<div id="test">\n\t<input type="text"/>\n\t<input type="text"/>\n</div>\n<input type="button" onclick="testList()" value="use it to an element list"/>\n<script>\n\tfunction testAddClass(obj){\n\t\tobj.addClass("test");\n\t\tJ.id("show").text(obj.parent().html());\n\t}\n\tfunction testList(){\n\t\tJ.id("test").child().addClass("test").val("I get it");\n\t\tJ.id("show").text(J.id("test").html());\n\t}\n</script>'
    },{
      title:".removeClass()",
      intro:"Remove class",
      test:true,
      function:"Remove one class or many classes in a element or a element list",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String('a'|'a b'); Return this",
      code:'<div>\n\t<input type="text" id="test" class="nottest1 nottest2 test1 test2 test3"/>\n</div>\n<input type="button" onclick="testRemoveClass()" value="Click to remove class named test1"/>\n<input type="button" onclick="testRemoveManyClass()" value="Click to remove two classes named test2 and test3"/>\n<input type="button" onclick="testRemoveAllClass()" value="Click to remove all class"/>\n<div id="show"></div>\n<script>\n\t//those can be used to an element list also\n\tfunction testRemoveClass(){\n\t\tJ.id("test").removeClass("test1");\n\t\tJ.id("show").text(J.id("test").parent().html());\n\t}\n\tfunction testRemoveManyClass(){\n\t\tJ.id("test").removeClass("test2 test3");\n\t\tJ.id("show").text(J.id("test").parent().html());\n\t}\n\tfunction testRemoveAllClass(){\n\t\tJ.id("test").removeClass();//or .removeClass(null)\n\t\tJ.id("show").text(J.id("test").parent().html());\n\t}\n</script>'
    },{
      title:".replaceClass()",
      intro:"Replace class",
      test:true,
      function:"Replace class with another if class is exists",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String String; Return this",
      code:'<div>\n\t<input type="button" class="test1 test2" onclick="testReplaceClass(this)" value="Click to replace class"/>\n</div>\n<div id="show">class="test1 test2"</div>\n<script>\n\tfunction testReplaceClass(obj){\n\t\tobj.replaceClass("test1","replace");\n\t\tJ.id("show").text(obj.parent().html());\n\t\t//this can be used to an element list also\n\t}\n</script>'
    },{
      title:".toggleClass()",
      intro:"Toggle class",
      test:true,
      function:"Add or remove one or many class in a element or a element list",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String('a'|'a b'); Return this",
      code:'<div>\n\t<input type="button" class="" onclick="testToggleClass(this)" value="Click to toggle class"/>\n</div>\n<div id="show"> class=""</div>\n<script>\n\tfunction testToggleClass(obj){\n\t\tobj.toggleClass("test");\n\t\tJ.id("show").text(obj.parent().html());\n\t\t//this can be used to an element list also\n\t}\n</script>'
    },{
      title:".text()",
      intro:"Set or Get text",
      test:true,
      function:"Set or Get text in HTMLElement except input and textArea",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String|null; Return this|String|Array",
      code:'<div id="show">show</div>\n<input type="button" onclick="testText(this)" value="Change text"/>\n<br/>\n<div class="test">show1</div>\n<div class="test">show2</div>\n<div class="test">show3</div>\n<input type="button" onclick="testGetList()" value="Get test of list"/>\n<input type="button" onclick="testList()" value="set test of list"/>\n<script>\n\tfunction testText(obj){\n\t\tvar text=J.id("show").text();//get\n\t\tJ.id("show").text(text+" change");//set\n\t\t//this can be used to an element list also\n\t}\n\tfunction testGetList(){\n\t\tJ.id("show").text(J.class("test").text());\n\t}\n\tfunction testList(){\n\t\tJ.class("test").text("change");\n\t}\n</script>'
    },{
      title:".val()",
      intro:"Set or Get value",
      test:true,
      function:"Set or Get text in input or textArea",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String|null; Return this|String|Array",
      code:'<input type="text" id="show" value="show"/>\n<input type="button" onclick="testVal(this)" value="Change value"/>\n<br/>\n<input type="text" class="test" value="show1"/>\n<input type="text" class="test" value="show2"/>\n<input type="text" class="test" value="show3"/>\n<input type="button" onclick="testGetList()" value="Get value of list"/>\n<input type="button" onclick="testList()" value="set value of list"/>\n<script>\n\tfunction testVal(obj){\n\t\tvar text=J.id("show").val();//get\n\t\tJ.id("show").val(text+" change");//set\n\t\t//this can be used to an element list also\n\t}\n\tfunction testGetList(){\n\t\tJ.id("show").val(J.class("test").val());\n\t}\n\tfunction testList(){\n\t\tJ.class("test").val("change");\n\t}\n</script>'
    },{
      title:".content()",
      intro:"Set or get value or text",
      test:true,
      function:"Set or get value or text based on the type of HTMLElement",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String|null; Return this|String|Array",
      code:'<input type="text" class="test-show" value="show"/>\n<input type="button" onclick="testContent(this)" value="Change content"/>\n<br/>\n<input type="text" class="test" value="show1"/>\n<div class="test">show2</div>\n<input type="button" onclick="testGetList()" value="Get content of list"/>\n<input type="button" onclick="testList()" value="set content of list"/>\n<script>\n\tfunction testContent(obj){\n\t\tvar content=J.class("test-show").content();//get\n\t\tJ.class("test-show").content(content+" change");//set\n\t\t//this can be used to an element list also\n\t}\n\tfunction testGetList(){\n\t\tJ.class("test-show").content(J.class("test").content());\n\t}\n\tfunction testList(){\n\t\tJ.class("test").content("change");\n\t}\n</script>'
    },{
      title:".html()",
      intro:"Set or get html",
      test:true,
      function:"Set or get html of HTMLElement",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String|null; Return this|String|Array",
      code:'<div id="test">\n\t<input type="text" value="show1"/>\n</div>\n<input type="button" onclick="testGet()" value="Get html"/>\n<input type="button" onclick="testSet()" value="Set html"/>\n<div id="show"/>\n<script>\n\tfunction testGet(){\n\t\tvar text=J.id("test").html();//get\n\t\tJ.id("show").text(text);\n\t\t//this can be used to an element list also ,return an array\n\t}\n\tfunction testSet(){\n\t\tJ.id("test").html("<span>new one</span>");\n\t\t//this can be used to an element list also, set every element\n\t}\n</script>'
    },{
      title:".event()",
      intro:"Set event",
      test:true,
      function:"Set event of one or many elements",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:String String|String Function|JSON; Return this",
      code:'<input type="text" id="test1" value="not have event"/>\n<input type="text" id="test2" value="not have event"/>\n<input type="button" onclick="addSingleByStr()" value="set single event by String"/>\n<input type="button" onclick="addSingleByFun()" value="set single event by function"/>\n<input type="button" onclick="addMany()" value="Set many events"/>\n<div id="show"/>\n<script>\n\t//those can be used to an element list also\n\tfunction addSingleByStr(){\n\t\tJ.id("test1").event("onclick","alert(1)").val("have click event");\n\t}\n\tfunction addSingleByFun(){\n\t\tJ.id("test1").event("onmousemove",function(){\n\t\t\tJ.id("test1").val("I said I have");\n\t\t}).val("have click mouse move");\n\t}\n\tfunction addMany(){\n\t\tJ.id("test2").event({\n\t\t\tonclick:function(){J.id("test2").val("You clicked me")},\n\t\t\tonmouseleave:function(){J.id("test2").val("Mouse leave")}\n\t\t}).val("Have onclick and onmouseleave");\n\t}\n</script>'
    },{
      title:".offset()",
      intro:"Get offset",
      test:true,
      function:"Return a json includes top,left,height,width of an HTMLElement,top and left is the relative position of this nearest parent which position=absolute or relative or fixed",
      howUse:"Obj:HTMLElement; Parameter:null; Return JSON(int)",
      code:'<div style="position:relative">\n\t<input type="button" onclick="viewOffset(this)" value="View my offset"/>\n\t<br/>\n\t<input type="button" onclick="viewOffset(this)" style="margin-left:20px" value="View my offset"/>\n</div>\n<div id="show"/>\n<script>\n\tfunction viewOffset(obj){\n\t\tJ.id("show").text(JSON.stringify(obj.offset()));\n\t}\n</script>'
    },{
      title:".left()",
      intro:"Get left",
      test:true,
      function:"Return left of this relative position,the same as offset().left",
      howUse:"Obj:HTMLElement; Parameter:null; Return int",
      code:'<div style="position:relative">\n\t<input type="button" onclick="viewOffset(this)" value="View my offset"/>\n\t<br/>\n\t<input type="button" onclick="viewOffset(this)" style="margin-left:20px" value="View my left"/>\n</div>\n<div id="show"/>\n<script>\n\tfunction viewOffset(obj){\n\t\tJ.id("show").text(obj.left());\n\t}\n</script>'
    },{
      title:".top()",
      intro:"Get top",
      test:true,
      function:"Return top of this relative position,the same as offset().top",
      howUse:"Obj:HTMLElement; Parameter:null; Return int",
      code:'<div style="position:relative">\n\t<input type="button" onclick="viewOffset(this)" value="View my offset"/>\n\t<br/>\n\t<input type="button" onclick="viewOffset(this)" style="margin-left:20px" value="View my top"/>\n</div>\n<div id="show"/>\n<script>\n\tfunction viewOffset(obj){\n\t\tJ.id("show").text(obj.top());\n\t}\n</script>'
    },{
      title:".height()",
      intro:"Get height",
      test:true,
      function:"Return height of this relative position,the same as offset().height",
      howUse:"Obj:HTMLElement; Parameter:null; Return int",
      code:'<div style="position:relative">\n\t<input type="button" onclick="viewOffset(this)" value="View my offset"/>\n\t<br/>\n\t<input type="button" onclick="viewOffset(this)" style="margin-left:20px" value="View my height"/>\n</div>\n<div id="show"/>\n<script>\n\tfunction viewOffset(obj){\n\t\tJ.id("show").text(obj.height());\n\t}\n</script>'
    },{
      title:".width()",
      intro:"Get width",
      test:true,
      function:"Return width of this relative position,the same as offset().width",
      howUse:"Obj:HTMLElement; Parameter:null; Return int",
      code:'<div style="position:relative">\n\t<input type="button" onclick="viewOffset(this)" value="View my offset"/>\n\t<br/>\n\t<input type="button" onclick="viewOffset(this)" style="margin-left:20px" value="View my width"/>\n</div>\n<div id="show"/>\n<script>\n\tfunction viewOffset(obj){\n\t\tJ.id("show").text(obj.width());\n\t}\n</script>'
    },{
      title:".scroll()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="button" onclick="textScroll(50)" value="body scroll 50px"/>\n<input type="button" onclick="textScroll(-50)" value="body scroll -50px"/>\n<input type="button" onclick="textScrollCallback()" value="add callback"/>\n<input type="button" onclick="textScrollSpeed()" value="add speed"/>\n<input type="button" onclick="textScrollCS()" value="add callback and speed fast"/>\n<input type="button" onclick="textScrollCSInt()" value="add callback and speed 300"/>\n<script>\n\tfunction textScroll(d){\n\t\tJ.tag("body").scroll(d);\n\t}\n\tfunction textScrollCallback(){\n\t\tJ.tag("body").scroll(100,function(obj){\n\t\t\talert("scroll");////obj is this\n\t\t});\n\t\t//or use string "alert("scroll")" replace function\n\t}\n\tfunction textScrollSpeed(){\n\t\tJ.tag("body").scroll(-100,null,100);\n\t\t//or use string "alert("scroll")" replace function\n\t}\n\tfunction textScrollCS(){\n\t\tJ.tag("body").scroll(100,function(obj){\n\t\t\talert("scroll");//obj is this\n\t\t},"fast");\n\t}\n\tfunction textScrollCSInt(){\n\t\tJ.tag("body").scroll(-100,function(obj){\n\t\t\talert("scroll");////obj is this\n\t\t}},300);\n\t}\n</script>'
    },{
      title:".scrollTo()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="button" onclick="textScrollTo()" value="body scroll to top 300px"/>\n<script>\n\tfunction textScrollTo(){\n\t\tJ.tag("body").scrollTo(300,"alert(300)","fast");\n\t\t//Opitional parameters is the same as scroll\n\t}\n</script>'
    },{
      title:".scrollX()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="button" onclick="textScroll(this)" style="width:1000px;text-align:left" value="this parent scrollX 100px"/>\n<script>\n\tfunction textScroll(obj){\n\t\tobj.parent().scrollX(100);\n\t\t//Opitional parameters is the same as scroll\n\t}\n</script>'
    },{
      title:".scrollXTo()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="button" onclick="textScrollXTo(this)" style="width:1000px;text-align:left" value="this parent scrollX to top 200px"/>\n<script>\n\tfunction textScrollXTo(obj){\n\t\tobj.parent().scrollXTo(200,"alert(200)","fast");\n\t\t//Opitional parameters is the same as scroll\n\t}\n</script>'
    },{
      title:".copy()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" value="test1 content"/>\n<input type="button" onclick="testCopy(this)" value="copy"/>\n<div>test2 content</div>\n<input type="button" onclick="testCopy(this)" value="copy"/>\n<input type="text" placeholder="Ctrl+v on me"/>\n<div id="show"></div>\n<script>\n\tfunction testCopy(obj){\n\t\tif(obj.prev().copy()){\n\t\t\tJ.id("show").text("copy success:"+obj.prev().content());\n\t\t}else{\n\t\t\tJ.id("show").text("Broswer not support");\n\t\t}\n\t}\n</script>'
    },{
      title:".copyHtml()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div>\n\t<input type="button" onclick="testCopyHtml(this)" value="copy html"/>\n</div>\n<input type="text" placeholder="Ctrl+v on me"/>\n<div id="show"/>\n<script>\n\tfunction testCopyHtml(obj){\n\t\tif(obj.parent().copyHtml()){\n\t\t\tJ.id("show").text("copy success:"+obj.parent().html());\n\t\t}else{\n\t\t\tJ.id("show").text("Broswer not support");\n\t\t}\n\t}\n</script>'
    },{
      title:".animate()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" id="test" value="test"/>\n<input type="button" onclick="testAnimate()" value="test animate default"/>\n<input type="button" onclick="testAnimateByPlus()" value="test animate by += default"/>\n<input type="button" onclick="testAnimateCallback()" value="test animate with callback"/>\n<input type="button" onclick="testAnimateSpeed()" value="test animate with speed"/>\n<input type="button" onclick="testAnimateTiming()" value="test animate with timing"/>\n<input type="button" onclick="testAnimateAll()" value="test animate with all"/>\n<script>\n\t//You can use those to a element list\n\tfunction testAnimate(){\n\t\tJ.id("test").animate({"background-color":"#f00"});\n\t}\n\tfunction testAnimateByPlus(){\n\t\tJ.id("test").animate({"height":"+=100px"});\n\t}\n\tfunction testAnimateCallback(){\n\t\tJ.id("test").animate({"width":"+=100px"},function(obj){\n\t\t\tobj.val("callback");//obj is this\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testAnimateSpeed(){\n\t\tJ.id("test").animate({"background-color":"#0f0"},null,"fast");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testAnimateTiming(){\n\t\tJ.id("test").animate({"background-color":"#00f"},null,null,"ease");\n\t}\n\tfunction testAnimateAll(){\n\t\tJ.id("test").animate({"height":"650px"},"alert(0)",3000,"linear");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n</script>'
    },{
      title:".rotate()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" style="height:100px;width:100px;margin:60px;display:blcok" id="test" value="test"/>\n<input type="button" onclick="testRotate()" value="test rotate default"/>\n<input type="button" onclick="testRotateCallback()" value="test rotate with callback"/>\n<input type="button" onclick="testRotateSpeed()" value="test rotate with speed"/>\n<input type="button" onclick="testRotateOrigin()" value="test rotate with origin"/>\n<input type="button" onclick="testRotateTiming()" value="test rotate with timing"/>\n<input type="button" onclick="testRotateAll()" value="test rotate with all"/>\n<script>\n\t//You can use those to a element list\n\tfunction testRotate(){\n\t\t//J.id("test").rotate(30);\n\t\tJ.id("test").stopSpin();\n\t}\n\tfunction testRotateCallback(){\n\t\tJ.id("test").rotate(60,function(obj){\n\t\t\tobj.val("callback");//obj is this\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testRotateSpeed(){\n\t\tJ.id("test").rotate(90,null,"fast");\n\t}\n\tfunction testRotateOrigin(){\n\t\tJ.id("test").rotate(120,null,null,"buttom left");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testRotateTiming(){\n\t\tJ.id("test").rotate(150,null,null,null,"ease");\n\t}\n\tfunction testRotateAll(){\n\t\tJ.id("test").rotate(190,"alert(0)",3000,"buttom right","linear");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n</script>'
    },{
      title:".spin()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" style="height:100px;width:100px;margin:60px;display:blcok" id="test" value="test"/>\n<input type="button" onclick="testSpin()" value="test Spin default"/>\n<input type="button" onclick="testSpinSpeed()" value="test Spin speed"/>\n<input type="button" onclick="testSpinTimes()" value="test Spin with times"/>\n<input type="button" onclick="testSpinOrigin()" value="test Spin with origin"/>\n<input type="button" onclick="testSpinCallback()" value="test Spin with callback"/>\n<input type="button" onclick="testSpinTiming()" value="test Spin with timing"/>\n<input type="button" onclick="testSpinAll()" value="test Spin with all"/>\n<input type="button" onclick="testStopSpin()" value="stop"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSpin(){\n\t\tJ.id("test").spin();\n\t}\n\tfunction testSpinSpeed(){\n\t\tJ.id("test").spin("fast");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testSpinTimes(){\n\t\tJ.id("test").spin(null,2);\n\t}\n\tfunction testSpinOrigin(){\n\t\tJ.id("test").spin(null,null,"top right");\n\t}\n\tfunction testSpinCallback(){\n\t\tJ.id("test").spin(null,1,null,function(obj){\n\t\t\tobj.val("callback");//obj is this\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testSpinTiming(){\n\t\tJ.id("test").spin(null,null,null,null,"ease");\n\t}\n\tfunction testSpinAll(){\n\t\tJ.id("test").spin(1000,2,"alert(0)","buttom right","linear");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testStopSpin(){\n\t\tJ.id("test").stopSpin();\n\t}\n</script>'
    },{
      title:".stopSpin()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" style="height:100px;width:100px;margin:60px;display:blcok" id="test" value="test"/>\n<input type="button" onclick="testSpin()" value="test Spin"/>\n<input type="button" onclick="testStopSpin()" value="test stop Spin"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSpin(){\n\t\tJ.id("test").spin();\n\t}\n\tfunction testStopSpin(){\n\t\tJ.id("test").stopSpin();\n\t}\n</script>'
    },{
      title:".scale()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" style="height:50px;width:50px;margin:50px;display:blcok" id="test" value="test"/>\n<br/>\n<input type="button" onclick="testScale()" value="test scale default"/>\n<input type="button" onclick="testScalecallback()" value="test scale with callback"/>\n<input type="button" onclick="testScalespeed()" value="test scale with speed"/>\n<input type="button" onclick="testScaletiming()" value="test scale with timing"/>\n<input type="button" onclick="testScaleAll()" value="test scale all"/>\n<script>\n\t//You can use those to a element list\n\tfunction testScale(){\n\t\tJ.id("test").scale(2);\n\t}\n\tfunction testScalecallback(){\n\t\tJ.id("test").scale(3,function(obj){\n\t\t\tobj.val("callback");\n\t\t});\n\t}\n\tfunction testScalespeed(){\n\t\tJ.id("test").scale(2.5,null,"fast");\n\t}\n\tfunction testScaletiming(){\n\t\tJ.id("test").scale(3.5,null,null,"ease");\n\t}\n\tfunction testScaleAll(){\n\t\tJ.id("test").scale(1.5,"alert(0)",500,"linear");\n\t}\n</script>'
    },{
      title:".scaleX()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" style="height:50px;width:50px;margin:50px;display:blcok" id="test" value="test"/>\n<br/>\n<input type="button" onclick="testScaleX()" value="test scaleX default"/>\n<script>\n\t//You can use those to a element list\n\tfunction testScaleX(){\n\t\tJ.id("test").scaleX(2);\n\t\t//optional parameters is the same as scale\n\t}\n</script>'
    },{
      title:".scaleY()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<input type="text" style="height:50px;width:50px;margin:50px;display:blcok" id="test" value="test"/>\n<br/>\n<input type="button" onclick="testScaleY()" value="test scaleY default"/>\n<script>\n\t//You can use those to a element list\n\tfunction testScaleY(){\n\t\tJ.id("test").scaleY(2);\n\t\t//optional parameters is the same as scale\n\t}\n</script>'
    },{
      title:".slideUp()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testSlideUp()" value="test slideUp default"/>\n<input type="button" onclick="testSlideUpcallback()" value="test slideUp with callback"/>\n<input type="button" onclick="testSlideUpspeed()" value="test slideUp with speed"/>\n<input type="button" onclick="testSlideUptiming()" value="test slideUp with timing"/>\n<input type="button" onclick="testSlideUpall()" value="test slideUp with all"/>\n<br/>\n<input type="button" onclick="resetSlide()" value="reset"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSlideUp(){\n\t\tJ.id("test").slideUp();\n\t}\n\tfunction testSlideUpcallback(){\n\t\tJ.id("test").slideUp(function(obj){\n\t\t\tobj.text("callback");\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testSlideUpspeed(){\n\t\tJ.id("test").slideUp(null,100);\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testSlideUptiming(){\n\t\tJ.id("test").slideUp(null,null,"ease");\n\t}\n\tfunction testSlideUpall(){\n\t\tJ.id("test").slideUp("alert(0)",100,"linear");\n\t}\n\tfunction resetSlide(){\n\t\tJ.id("test").slideDown();\n\t}\n</script>'
    },{
      title:".slideDown()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testSlideUp()" value="slideUp"/>\n<input type="button" onclick="testSlideDown()" value="slideDown"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSlideUp(){\n\t\tJ.id("test").slideUp();\n\t}\n\tfunction testSlideDown(){\n\t\tJ.id("test").slideDown();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".slideToggle()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testSlideToggle()" value="slideToggle"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSlideToggle(){\n\t\tJ.id("test").slideToggle();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".fadeOut()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testfadeOut()" value="fadeOut"/>\n<input type="button" onclick="testfadeIn()" value="fadeIn"/>\n<script>\n\t//You can use those to a element list\n\tfunction testfadeOut(){\n\t\tJ.id("test").fadeOut();\n\t\t//optional parameters is the same as slideUp()\n\t}\n\tfunction testfadeIn(){\n\t\tJ.id("test").fadeIn();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".fadeIn()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testfadeOut()" value="fadeOut"/>\n<input type="button" onclick="testfadeIn()" value="fadeIn"/>\n<script>\n\t//You can use those to a element list\n\tfunction testfadeOut(){\n\t\tJ.id("test").fadeOut();\n\t\t//optional parameters is the same as slideUp()\n\t}\n\tfunction testfadeIn(){\n\t\tJ.id("test").fadeIn();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".fadeToggle()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testFadeToggle()" value="fadeToggle"/>\n<script>\n\t//You can use those to a element list\n\tfunction testFadeToggle(){\n\t\tJ.id("test").fadeToggle();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".hide()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testhide()" value="hide"/>\n<input type="button" onclick="testshow()" value="show"/>\n<script>\n\t//You can use those to a element list\n\tfunction testhide(){\n\t\tJ.id("test").hide();\n\t}\n\tfunction testshow(){\n\t\tJ.id("test").show();\n\t}\n</script>'
    },{
      title:".show()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testhide()" value="hide"/>\n<input type="button" onclick="testshow()" value="show"/>\n<script>\n\t//You can use those to a element list\n\tfunction testhide(){\n\t\tJ.id("test").hide();\n\t}\n\tfunction testshow(){\n\t\tJ.id("test").show();\n\t}\n</script>'
    },{
      title:".showToggle()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testshowToggle()" value="showToggle"/>\n<script>\n\t//You can use those to a element list\n\tfunction testshowToggle(){\n\t\tJ.id("test").showToggle();\n\t}\n</script>'
    },{
      title:".ajax()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".jsonp()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".cookie()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    }
    ],
  Serialize:[
    {
      title:"Jet.get(HTMLElement)",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'<input type="text" id="test1" jet-valid="length[3,6]" value="test"\/>\n<input type="button" id="test2" value="submit" onclick="showTest()"\/>\n<script>function showTest(){\n\tJet.show(J.id("test1").content());\n}\n<\/script>'
    },{
      title:"Jet.get(jet-form)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.get(json)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.get(FormData)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.get(name)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.get(jet-name)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.set(HTMLElement)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.set(jet-form)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.set(callback)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.set(name)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.set(jet-name)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"HTMLElement.get()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"HTMLElement.set()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    }],
  Validation:[
    {
      title:"Jet.validate(onPass)",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"Jet.validate(onFail)",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"HTMLElement.validate()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"Jet.banDefault()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"Jet.useDefault()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"Jet.banValidShow()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"Jet.useValidShow()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"Jet.onOnePass()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:"Jet.onOneFail()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    },{
      title:".getContent()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'code'
    }],
  Tools:[
    {
      title:"Jet.show()",
      intro:"intro intro intro intro",
      test:true,
      function:"function test",
      howUse:"howUse test",
      code:'<input type="text" id="test1" jet-valid="length[3,6]" value="test"\/>\n<input type="button" id="test2" value="submit" onclick="showTest()"\/>\n<script>function showTest(){\n\tJet.show(J.id("test1").content());\n}\n<\/script>'
    },{
      title:"Jet.showWait()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.close()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.setNoteStyle()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.confirm(onOk)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.confirm(onCancel)",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.checkArg()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.lang()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.turnPage()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.getUrlPara()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.fit()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.getRandom()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.copy()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Jet.isMobile()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.each();",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.removeByIndex();",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.remove()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.insert()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.append()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.prepend()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.sort()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.sortByAttr()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"Array.reverse()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:"String.has()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    }]
}
