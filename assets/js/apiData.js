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
      howUse:"Parameter:null; Return:HTMLElement(document.body)",
      code:'<script>\n\tJ.body();\n\t//return document body\n\t//equal S() or J.tag("body")\n</script>'
    },{
      title:"J.width()",
      intro:"Get window width",
      test:true,
      function:"Return width of broswer window visible area",
      howUse:"Parameter:null; Return:int(window width)",
      code:'<input type="text" id="testWidth"/>\n<input type="button" onclick="testWidth()" value="width"/>\n<script>\n\tfunction testWidth(){\n\tvar width=J.width();\n\t\tS("#testWidth").val("Window width : "+width+" px");\n\t}\n</script>'
    },{
      title:"J.height()",
      intro:"Get window height",
      test:true,
      function:"Return height of broswer window visible area",
      howUse:"Parameter:null; Return int(window height)",
      code:'<input type="text" id="testHeight"/>\n<input type="button" onclick="testHeight()" value="height"/>\n<script>\n\tfunction testHeight(){\n\tvar height=J.height();\n\t\tS("#testHeight").val("Window height : "+height+" px");\n\t}\n</script>'
    },{
      title:"J.scroll()",
      intro:"Scroll page",
      test:true,
      function:"Scroll page in vertical with a distance or get page scroll top",
      howUse:"int[Function|String][int|String](distance,callback,speed)|null; Return:int|null",
      code:'<input type="button" onclick="textScroll(50)" value="body scroll 50px"/>\n<input type="button" onclick="textScroll(-50)" value="body scroll -50px"/>\n<input type="button" onclick="textScrollCallback()" value="add callback"/>\n<input type="button" onclick="textScrollSpeed()" value="add speed"/>\n<input type="button" onclick="textScrollCS()" value="add callback and speed fast"/>\n<input type="button" onclick="textScrollCSInt()" value="add callback and speed 300"/>\n<script>\n\tfunction textScroll(d){\n\t\tJ.scroll(d);\n\t}\n\tfunction textScrollCallback(){\n\t\tJ.scroll(100,function(){\n\t\t\talert("scroll");\n\t\t});\n\t\t//or use string "alert("scroll")" replace function\n\t}\n\tfunction textScrollSpeed(){\n\t\tJ.scroll(-100,null,100);\n\t\t//or use string "alert("scroll")" replace function\n\t}\n\tfunction textScrollCS(){\n\t\tJ.scroll(100,function(){\n\t\t\talert("scroll");\n\t\t},"fast");\n\t}\n\tfunction textScrollCSInt(){\n\t\tJ.scroll(-100,function(){\n\t\t\talert("scroll");\n\t\t},300);\n\t}\n</script>'
    },{
      title:"J.scrollTo()",
      intro:"Scroll page",
      test:true,
      function:"Scroll page in vertical to a position by a value",
      howUse:"int[Function|String][int|String](posY,callback,speed); Return:null",
      code:'<input type="button" onclick="textScrollTo()" value="body scroll to top 300px"/>\n<script>\n\tfunction textScrollTo(){\n\t\tJ.tag("body").scrollTo(300,"alert(300)","fast");\n\t\t//Opitional parameters is the same as scroll\n\t}\n</script>'
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
      code:'<div>\n\t<input type="button" onclick="testIndex(this)" value="click me to see my index"/>\n\t<input type="button" onclick="testIndex(this)" value="click me to see my index"/>\n\t<input type="button" onclick="testIndex(this)" value="click me to see my index"/>\n</div>\n<script>\n\tfunction testIndex(obj){\n\t\tobj.val("My index is "+obj.index());\n\t}\n</script>'
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
      intro:"Scroll an element",
      test:true,
      function:"Scroll a HTMLElement or body in vertical with a distance,or get scroll top of a HTMLElement or body",
      howUse:"Obj:HTMLElement; Parameter:int[Function|String][int|String](distance,callback,speed)|null; Return:this|int",
      code:'<input type="button" onclick="textScroll(50)" value="body scroll 50px"/>\n<input type="button" onclick="textScroll(-50)" value="body scroll -50px"/>\n<input type="button" onclick="textScrollCallback()" value="add callback"/>\n<input type="button" onclick="textScrollSpeed()" value="add speed"/>\n<input type="button" onclick="textScrollCS()" value="add callback and speed fast"/>\n<input type="button" onclick="textScrollCSInt()" value="add callback and speed 300"/>\n<script>\n\tfunction textScroll(d){\n\t\tJ.tag("body").scroll(d);\n\t}\n\tfunction textScrollCallback(){\n\t\tJ.tag("body").scroll(100,function(obj){\n\t\t\talert("scroll");////obj is this\n\t\t});\n\t\t//or use string "alert("scroll")" replace function\n\t}\n\tfunction textScrollSpeed(){\n\t\tJ.tag("body").scroll(-100,null,100);\n\t\t//or use string "alert("scroll")" replace function\n\t}\n\tfunction textScrollCS(){\n\t\tJ.tag("body").scroll(100,function(obj){\n\t\t\talert("scroll");//obj is this\n\t\t},"fast");\n\t}\n\tfunction textScrollCSInt(){\n\t\tJ.tag("body").scroll(-100,function(obj){\n\t\t\talert("scroll");////obj is this\n\t\t}},300);\n\t}\n</script>'
    },{
      title:".scrollTo()",
      intro:"Scroll an element",
      test:true,
      function:"Scroll an HTMLElement or body in vertical to a position by a value",
      howUse:"Obj:HTMLElement; Parameter:int[Function|String][int|String](posY,callback,speed); Return:this",
      code:'<input type="button" onclick="textScrollTo()" value="body scroll to top 300px"/>\n<script>\n\tfunction textScrollTo(){\n\t\tJ.tag("body").scrollTo(300,"alert(300)","fast");\n\t\t//Opitional parameters is the same as scroll\n\t}\n</script>'
    },{
      title:".scrollX()",
      intro:"Scroll an element",
      test:true,
      function:"Scroll a HTMLElement or body in horizontal with a distance,or get scroll left of a HTMLElement or body",
      howUse:"Obj:HTMLElement; Parameter:int[Function|String][int|String](distance,callback,speed)|null; Return:this|int",
      code:'<input type="button" onclick="textScroll(this)" style="width:1000px;text-align:left" value="this parent scrollX 100px"/>\n<script>\n\tfunction textScroll(obj){\n\t\tobj.parent().scrollX(100);\n\t\t//Opitional parameters is the same as scroll\n\t}\n</script>'
    },{
      title:".scrollXTo()",
      intro:"Scroll an element",
      test:true,
      function:"Scroll an HTMLElement or body in horizontal to a position by a value",
      howUse:"Obj:HTMLElement; Parameter:int[Function|String][int|String](posX,callback,speed); Return:this",
      code:'<input type="button" onclick="textScrollXTo(this)" style="width:1000px;text-align:left" value="this parent scrollX to top 200px"/>\n<script>\n\tfunction textScrollXTo(obj){\n\t\tobj.parent().scrollXTo(200,"alert(200)","fast");\n\t\t//Opitional parameters is the same as scroll\n\t}\n</script>'
    },{
      title:".copy()",
      intro:"Copy content",
      test:true,
      function:"Copy value of text of a HTMLElement(May not supported in some browser)",
      howUse:"Obj:HTMLElement; Parameter:null; Return:Boolean(success or not)",
      code:'<input type="text" value="test1 content"/>\n<input type="button" onclick="testCopy(this)" value="copy"/>\n<div>test2 content</div>\n<input type="button" onclick="testCopy(this)" value="copy"/>\n<input type="text" placeholder="Ctrl+v on me"/>\n<div id="show"></div>\n<script>\n\tfunction testCopy(obj){\n\t\tif(obj.prev().copy()){\n\t\t\tJ.id("show").text("copy success:"+obj.prev().content());\n\t\t}else{\n\t\t\tJ.id("show").text("Broswer not support");\n\t\t}\n\t}\n</script>'
    },{
      title:".copyHtml()",
      intro:"Copy html",
      test:true,
      function:"Copy inner html of a HTMLElement(May not supported in some browser)",
      howUse:"Obj:HTMLElement; Parameter:null; Return:Boolean(success or not)",
      code:'<div>\n\t<input type="button" onclick="testCopyHtml(this)" value="copy html"/>\n</div>\n<input type="text" placeholder="Ctrl+v on me"/>\n<div id="show"/>\n<script>\n\tfunction testCopyHtml(obj){\n\t\tif(obj.parent().copyHtml()){\n\t\t\tJ.id("show").text("copy success:"+obj.parent().html());\n\t\t}else{\n\t\t\tJ.id("show").text("Broswer not support");\n\t\t}\n\t}\n</script>'
    },{
      title:".animate()",
      intro:"Animate HTMLElement",
      test:true,
      function:"Animate HTMLElement by css",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:JSON[Function|String][int|String][String](css,callback,speed,timing); Return:this",
      code:'<input type="text" id="test" value="test"/>\n<input type="button" onclick="testAnimate()" value="test animate default"/>\n<input type="button" onclick="testAnimateByPlus()" value="test animate by += default"/>\n<input type="button" onclick="testAnimateCallback()" value="test animate with callback"/>\n<input type="button" onclick="testAnimateSpeed()" value="test animate with speed"/>\n<input type="button" onclick="testAnimateTiming()" value="test animate with timing"/>\n<input type="button" onclick="testAnimateAll()" value="test animate with all"/>\n<script>\n\t//You can use those to a element list\n\tfunction testAnimate(){\n\t\tJ.id("test").animate({"background-color":"#f00"});\n\t}\n\tfunction testAnimateByPlus(){\n\t\tJ.id("test").animate({"height":"+=100px"});\n\t}\n\tfunction testAnimateCallback(){\n\t\tJ.id("test").animate({"width":"+=100px"},function(obj){\n\t\t\tobj.val("callback");//obj is this\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testAnimateSpeed(){\n\t\tJ.id("test").animate({"background-color":"#0f0"},null,"fast");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testAnimateTiming(){\n\t\tJ.id("test").animate({"background-color":"#00f"},null,null,"ease");\n\t}\n\tfunction testAnimateAll(){\n\t\tJ.id("test").animate({"height":"650px"},"alert(0)",3000,"linear");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n</script>'
    },{
      title:".rotate()",
      intro:"Rotate HTMLElement",
      test:true,
      function:"Rotate HTMLElement by deg",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:int[Function|String][int|String][String](deg,callback,speed,origin,timing); Return:this",
      code:'<input type="text" style="height:100px;width:100px;margin:60px;display:blcok" id="test" value="test"/>\n<input type="button" onclick="testRotate()" value="test rotate default"/>\n<input type="button" onclick="testRotateCallback()" value="test rotate with callback"/>\n<input type="button" onclick="testRotateSpeed()" value="test rotate with speed"/>\n<input type="button" onclick="testRotateOrigin()" value="test rotate with origin"/>\n<input type="button" onclick="testRotateTiming()" value="test rotate with timing"/>\n<input type="button" onclick="testRotateAll()" value="test rotate with all"/>\n<script>\n\t//You can use those to a element list\n\tfunction testRotate(){\n\t\tJ.id("test").rotate(30);\n\t}\n\tfunction testRotateCallback(){\n\t\tJ.id("test").rotate(60,function(obj){\n\t\t\tobj.val("callback");//obj is this\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testRotateSpeed(){\n\t\tJ.id("test").rotate(90,null,"fast");\n\t}\n\tfunction testRotateOrigin(){\n\t\tJ.id("test").rotate(120,null,null,"bottom left");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testRotateTiming(){\n\t\tJ.id("test").rotate(150,null,null,null,"ease");\n\t}\n\tfunction testRotateAll(){\n\t\tJ.id("test").rotate(190,"alert(0)",3000,"bottom right","linear");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n</script>'
    },{
      title:".spin()",
      intro:"Spin HTMLElement",
      test:true,
      function:"Spin HTMLElement infinitely or by times",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:(int|String)[int][String][Function|String][String](speed,times,origin,callback,timing); Return:this",
      code:'<input type="text" style="height:100px;width:100px;margin:60px;display:blcok" id="test" value="test"/>\n<input type="button" onclick="testSpin()" value="test Spin default"/>\n<input type="button" onclick="testSpinSpeed()" value="test Spin speed"/>\n<input type="button" onclick="testSpinTimes()" value="test Spin with times"/>\n<input type="button" onclick="testSpinOrigin()" value="test Spin with origin"/>\n<input type="button" onclick="testSpinCallback()" value="test Spin with callback"/>\n<input type="button" onclick="testSpinTiming()" value="test Spin with timing"/>\n<input type="button" onclick="testSpinAll()" value="test Spin with all"/>\n<input type="button" onclick="testStopSpin()" value="stop"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSpin(){\n\t\tJ.id("test").spin();\n\t}\n\tfunction testSpinSpeed(){\n\t\tJ.id("test").spin("fast");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testSpinTimes(){\n\t\tJ.id("test").spin(null,2);\n\t}\n\tfunction testSpinOrigin(){\n\t\tJ.id("test").spin(null,null,"top right");\n\t}\n\tfunction testSpinCallback(){\n\t\tJ.id("test").spin(null,1,null,function(obj){\n\t\t\tobj.val("callback");//obj is this\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testSpinTiming(){\n\t\tJ.id("test").spin(null,null,null,null,"ease");\n\t}\n\tfunction testSpinAll(){\n\t\tJ.id("test").spin(1000,2,"alert(0)","bottom right","linear");\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testStopSpin(){\n\t\tJ.id("test").stopSpin();\n\t}\n</script>'
    },{
      title:".stopSpin()",
      intro:"Stop spin",
      test:true,
      function:"Stop spin HTMLElement",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:null; Return:this",
      code:'<input type="text" style="height:100px;width:100px;margin:60px;display:blcok" id="test" value="test"/>\n<input type="button" onclick="testSpin()" value="test Spin"/>\n<input type="button" onclick="testStopSpin()" value="test stop Spin"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSpin(){\n\t\tJ.id("test").spin();\n\t}\n\tfunction testStopSpin(){\n\t\tJ.id("test").stopSpin();\n\t}\n</script>'
    },{
      title:".scale()",
      intro:"Scale HTMLElement both",
      test:true,
      function:"Scale HTMLElement both width and height by a rate",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:Float[Function|String][int|String][String](rate,callback,speed,timing); Return:this",
      code:'<input type="text" style="height:50px;width:50px;margin:50px;display:blcok" id="test" value="test"/>\n<br/>\n<input type="button" onclick="testScale()" value="test scale default"/>\n<input type="button" onclick="testScalecallback()" value="test scale with callback"/>\n<input type="button" onclick="testScalespeed()" value="test scale with speed"/>\n<input type="button" onclick="testScaletiming()" value="test scale with timing"/>\n<input type="button" onclick="testScaleAll()" value="test scale all"/>\n<script>\n\t//You can use those to a element list\n\tfunction testScale(){\n\t\tJ.id("test").scale(2);\n\t}\n\tfunction testScalecallback(){\n\t\tJ.id("test").scale(3,function(obj){\n\t\t\tobj.val("callback");\n\t\t});\n\t}\n\tfunction testScalespeed(){\n\t\tJ.id("test").scale(2.5,null,"fast");\n\t}\n\tfunction testScaletiming(){\n\t\tJ.id("test").scale(3.5,null,null,"ease");\n\t}\n\tfunction testScaleAll(){\n\t\tJ.id("test").scale(1.5,"alert(0)",500,"linear");\n\t}\n</script>'
    },{
      title:".scaleX()",
      intro:"Scale HTMLElement width",
      test:true,
      function:"Scale HTMLElement width by a rate",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:Float[Function|String][int|String][String](rate,callback,speed,timing); Return:this",
      code:'<input type="text" style="height:50px;width:50px;margin:50px;display:blcok" id="test" value="test"/>\n<br/>\n<input type="button" onclick="testScaleX()" value="test scaleX default"/>\n<script>\n\t//You can use those to a element list\n\tfunction testScaleX(){\n\t\tJ.id("test").scaleX(2);\n\t\t//optional parameters is the same as scale\n\t}\n</script>'
    },{
      title:".scaleY()",
      intro:"Scale HTMLElement height",
      test:true,
      function:"Scale HTMLElement height by a rate",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:Float[Function|String][int|String][String](rate,callback,speed,timing); Return:this",
      code:'<input type="text" style="height:50px;width:50px;margin:50px;display:blcok" id="test" value="test"/>\n<br/>\n<input type="button" onclick="testScaleY()" value="test scaleY default"/>\n<script>\n\t//You can use those to a element list\n\tfunction testScaleY(){\n\t\tJ.id("test").scaleY(2);\n\t\t//optional parameters is the same as scale\n\t}\n</script>'
    },{
      title:".slideUp()",
      intro:"Show HTMLElement",
      test:true,
      function:"Show HTMLElement in a form of slide",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:[Function|String][int|String][String](callback,speed,timing); Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testSlideUp()" value="test slideUp default"/>\n<input type="button" onclick="testSlideUpcallback()" value="test slideUp with callback"/>\n<input type="button" onclick="testSlideUpspeed()" value="test slideUp with speed"/>\n<input type="button" onclick="testSlideUptiming()" value="test slideUp with timing"/>\n<input type="button" onclick="testSlideUpall()" value="test slideUp with all"/>\n<br/>\n<input type="button" onclick="resetSlide()" value="reset"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSlideUp(){\n\t\tJ.id("test").slideUp();\n\t}\n\tfunction testSlideUpcallback(){\n\t\tJ.id("test").slideUp(function(obj){\n\t\t\tobj.text("callback");\n\t\t});\n\t\t//You can use String to replace Function ,such as "alert(0)"\n\t}\n\tfunction testSlideUpspeed(){\n\t\tJ.id("test").slideUp(null,100);\n\t\t//speed can be a certain String or int(microsecond)\n\t}\n\tfunction testSlideUptiming(){\n\t\tJ.id("test").slideUp(null,null,"ease");\n\t}\n\tfunction testSlideUpall(){\n\t\tJ.id("test").slideUp("alert(0)",100,"linear");\n\t}\n\tfunction resetSlide(){\n\t\tJ.id("test").slideDown();\n\t}\n</script>'
    },{
      title:".slideDown()",
      intro:"Hide HTMLElement",
      test:true,
      function:"Hide HTMLElement in a form of slide",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:[Function|String][int|String][String](callback,speed,timing); Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testSlideUp()" value="slideUp"/>\n<input type="button" onclick="testSlideDown()" value="slideDown"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSlideUp(){\n\t\tJ.id("test").slideUp();\n\t}\n\tfunction testSlideDown(){\n\t\tJ.id("test").slideDown();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".slideToggle()",
      intro:"Show or hide HTMLElement",
      test:true,
      function:"Show or hide HTMLElement in a form of slide",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:[Function|String][int|String][String](callback,speed,timing); Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testSlideToggle()" value="slideToggle"/>\n<script>\n\t//You can use those to a element list\n\tfunction testSlideToggle(){\n\t\tJ.id("test").slideToggle();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".fadeOut()",
      intro:"Show HTMLElement",
      test:true,
      function:"Show HTMLElement in a form of fade",
      howUse:"howUse",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testfadeOut()" value="fadeOut"/>\n<input type="button" onclick="testfadeIn()" value="fadeIn"/>\n<script>\n\t//You can use those to a element list\n\tfunction testfadeOut(){\n\t\tJ.id("test").fadeOut();\n\t\t//optional parameters is the same as slideUp()\n\t}\n\tfunction testfadeIn(){\n\t\tJ.id("test").fadeIn();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".fadeIn()",
      intro:"Hide HTMLElement",
      test:true,
      function:"Hide HTMLElement in a form of fade",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:[Function|String][int|String][String](callback,speed,timing); Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testfadeOut()" value="fadeOut"/>\n<input type="button" onclick="testfadeIn()" value="fadeIn"/>\n<script>\n\t//You can use those to a element list\n\tfunction testfadeOut(){\n\t\tJ.id("test").fadeOut();\n\t\t//optional parameters is the same as slideUp()\n\t}\n\tfunction testfadeIn(){\n\t\tJ.id("test").fadeIn();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".fadeToggle()",
      intro:"Show or hide HTMLElement",
      test:true,
      function:"Show or hide HTMLElement in a form of fade",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:[Function|String][int|String][String](callback,speed,timing); Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testFadeToggle()" value="fadeToggle"/>\n<script>\n\t//You can use those to a element list\n\tfunction testFadeToggle(){\n\t\tJ.id("test").fadeToggle();\n\t\t//optional parameters is the same as slideUp()\n\t}\n</script>'
    },{
      title:".hide()",
      intro:"Hide HTMLElement",
      test:true,
      function:"Hide HTMLElement",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:null; Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testhide()" value="hide"/>\n<input type="button" onclick="testshow()" value="show"/>\n<script>\n\t//You can use those to a element list\n\tfunction testhide(){\n\t\tJ.id("test").hide();\n\t}\n\tfunction testshow(){\n\t\tJ.id("test").show();\n\t}\n</script>'
    },{
      title:".show()",
      intro:"Show HTMLElement",
      test:true,
      function:"Show HTMLElement",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:null; Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testhide()" value="hide"/>\n<input type="button" onclick="testshow()" value="show"/>\n<script>\n\t//You can use those to a element list\n\tfunction testhide(){\n\t\tJ.id("test").hide();\n\t}\n\tfunction testshow(){\n\t\tJ.id("test").show();\n\t}\n</script>'
    },{
      title:".showToggle()",
      intro:"Show or hide HTMLElement",
      test:true,
      function:"Show or hide HTMLElement",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList; Parameter:null; Return:this",
      code:'<div style="height:50px;width:100%;background-color:#333;color:#fff" id="test">test</div>\n<br/>\n<input type="button" onclick="testshowToggle()" value="showToggle"/>\n<script>\n\t//You can use those to a element list\n\tfunction testshowToggle(){\n\t\tJ.id("test").showToggle();\n\t}\n</script>'
    },{
      title:"J.ajax()",
      intro:"Send ajax request",
      test:true,
      function:"Send ajax request",
      howUse:"parameter:Json",
      code:'<script>\n\tJ.ajax({\n\t\ttype: "", \n\t\turl: "",\n\t\tdata: "",\n\t\tcontentType: "",\n\t\tdataType: "",\n\t\tasync: Boolean,\n\t\tsuccess: function(data){\n\t\t\t\n\t\t},\n\t\terror: function (err) {\n\t\t\t\n\t\t}\n\t});\n</script>'
    },{
      title:"J.jsonp()",
      intro:"Cross-domain request",
      test:true,
      function:"Cross-domain request by jsonp",
      howUse:"parameter:Json",
      code:'<script>\n\tJ.jsonp({\n\t\turl:"",\n\t\tdata:{},\n\t\tdataType:"",\n\t\ttime:int,\n\t\tsuccess:function(data){\n\t\t\t\n\t\t},\n\t\ttimeout:function(err){\n\t\t\t\n\t\t}\n\t});\n</script>'
    },{
      title:"J.cookie()",
      intro:"Set or get cookie",
      test:true,
      function:"Set or get cookie",
      howUse:"Parameter:String[String][int][String](name,value,expires,path);",
      code:'<input type="button" value="set cookie" onclick="setCookie()"/>\n<input type="button" value="get cookie" onclick="getCookie()"/>\n<input type="button" value="set cookie with expires" onclick="setCookieExp()"/>\n<input type="button" value="get cookie with path" onclick="getCookiePath()"/>\n<input type="button" value="clear cookie" onclick="clearCookie()"/>\n<div id="show"></div>\n<script>\n\tfunction setCookie(){\n\t\tJ.cookie("myCookie","cookie");\n\t\tJ.id("show").text("myCookie=cookie")\n\t}\n\tfunction getCookie(){\n\t\tvar value=J.cookie("myCookie");\n\t\tJ.id("show").text(value);\n\t}\n\tfunction setCookieExp(){\n\t\tJ.cookie("myCookie","cookie",3);\n\t\t//3 days,default is after this conversation\n\t}\n\tfunction setCookiePath(){\n\t\tJ.cookie("myCookie","cookie",null,);\n\t\t//set cookie worked in a path,default is "/"\n\t}\n\tfunction clearCookie(){\n\t\tJ.cookie("myCookie",null);\n\t\t//set cookie worked in a path,default is "/"\n\t}\n</script>'
    }],
  Serialize:[
    {
      title:"Jet.get(HTMLElement)",
      intro:"Get values",
      test:true,
      function:"Get values of a HTMLElement's children which has jet-name attribute",
      howUse:"Parameter:HTMLElement; Return:Json;(jetForm,type,name)",
      code:'<div id="test">\n\t<input type="text" jet-name="name" placeholder="Input name please"/>\n\t<input type="password" jet-name="password" placeholder="Input password please" />\n\t<input type="text" jet-name="birthday" placeholder="Input birthday please" />\n\t<div jet-name="species">human</div>\n</div>\n<input type="button" value="get values" onclick="getTest()"/>\n<div id="show"></div>\n<script>function getTest(){\n\tvar json=Jet.get(J.id("test"));\n\tJ.id("show").text("The values of [form] is:"+JSON.stringify(json));\n}\n</script>'
    },{
      title:"Jet.get(jet-form)",
      intro:"Get values",
      test:true,
      function:"Get values of a jet-form's children which has jet-name attribute",
      howUse:"Parameter:String(jet-form); Return:Json",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name" placeholder="Input name please"/>\n\t<input type="password" jet-name="password" placeholder="Input password please" />\n\t<input type="text" jet-name="birthday" placeholder="Input birthday please" />\n</div>\n<input type="button" value="get values" onclick="getTest()"/>\n<div id="show"></div>\n<script>function getTest(){\n\tvar json=Jet.get("test");\n\tJ.id("show").text("The values of [form] is:"+JSON.stringify(json));\n}\n</script>'
    },{
      title:"Jet.get(json)",
      intro:"Get values",
      test:true,
      function:"Get values as Json",
      howUse:"Parameter:String(jet-form)|HTMLElement; Return:Json",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name" placeholder="Input name please"/>\n\t<input type="password" jet-name="password" placeholder="Input password please" />\n\t<input type="text" jet-name="birthday" placeholder="Input birthday please" />\n</div>\n<input type="button" value="get values" onclick="getTest()"/>\n<div id="show"></div>\n<script>function getTest(){\n\tvar json=Jet.get("test","json");//json is the default type\n\tJ.id("show").text("The values of [form] is:"+JSON.stringify(json));\n}\n</script>'
    },{
      title:"Jet.get(FormData)",
      intro:"Get values",
      test:true,
      function:"Get values as FormData",
      howUse:"Parameter:String(jet-form)|HTMLElement; Return:Json|FormData",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name" placeholder="Input name please"/>\n\t<input type="password" jet-name="password" placeholder="Input password please" />\n\t<input type="text" jet-name="birthday" placeholder="Input birthday please" />\n</div>\n<input type="button" value="get values" onclick="getTest()"/>\n<div id="show"></div>\n<script>function getTest(){\n\tvar formData=Jet.get("test","FormData");\n\tJ.id("show").text("The values of [form] is:name="+formData.get("name")+";password="+formData.get("password")+";birthday="+formData.get("birthday"));\n}\n</script>'
    },{
      title:"Jet.get(jet-name)",
      intro:"Get values",
      test:true,
      intro:"Get values children which has jet-name attribute",
      howUse:"Parameter:(String|HTMLElement)[jet-name]; Return:Json|FormData",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name" placeholder="Input name please"/>\n\t<input type="password" jet-name="password" placeholder="Input password please" />\n\t<input type="text" jet-name="birthday" placeholder="Input birthday please" />\n</div>\n<input type="button" value="get values" onclick="getTest()"/>\n<div id="show"></div>\n<script>function getTest(){\n\tvar json=Jet.get("test");//jet-name is default attr\n\tJ.id("show").text("The values of [form] is:"+JSON.stringify(json));\n}\n</script>'
    },{
      title:"Jet.get(attr)",
      intro:"Get values",
      test:true,
      intro:"Get values children which has certain attribute",
      howUse:"Parameter:(String|HTMLElement)[attr]; Return:Json|FormData",
      code:'<div jet-form="test">\n\t<input type="text" name="name" placeholder="Input name please"/>\n\t<input type="password" name="password" placeholder="Input password please" />\n\t<input type="text" name="birthday" placeholder="Input birthday please" />\n</div>\n<input type="button" value="get values" onclick="getTest()"/>\n<div id="show"></div>\n<script>function getTest(){\n\tvar json=Jet.get("test",null,"name");//any attribute\n\tJ.id("show").text("The values of [form] is:"+JSON.stringify(json));\n}\n</script>'
    },{
      title:"Jet.set(HTMLElement)",
      intro:"Set values",
      test:true,
      function:"Set values of HTMLElement which children has jet-name",
      howUse:"Parameter:HTMLElement,[jet-name];(jetForm,data,callback,name)",
      code:'<div id="test">\n\t<input type="text" jet-name="name"/>\n\t<input type="text" jet-name="password"/>\n\t<input type="text" jet-name="birthday"/>\n\t<div jet-name="species">*</div>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info={\n\t\tname:"name test",\n\t\tpassword:"password test",\n\t\tbirthday:"birthday test",\n\t\tspecies:"human"\n\t};\n\tJet.set(J.id("test"),info);\n}\n</script>'
    },{
      title:"Jet.set(jet-form)",
      intro:"Set values",
      test:true,
      function:"Set values of jet-form which children has certain attribute",
      howUse:"Parameter:HTMLElement|String,[attr];",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name"/>\n\t<input type="text" jet-name="password"/>\n\t<input type="text" jet-name="birthday"/>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info={\n\t\tname:"name test",\n\t\tpassword:"password test",\n\t\tbirthday:"birthday test"\n\t};\n\tJet.set("test",info);\n}\n</script>'
    },{
      title:"Jet.set(json)",
      intro:"Set values",
      test:true,
      function:"Set values with json",
      howUse:"Parameter:HTMLElement|String,[Json];",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name"/>\n\t<input type="text" jet-name="password"/>\n\t<input type="text" jet-name="birthday"/>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info={\n\t\tname:"name test",\n\t\tpassword:"password test",\n\t\tbirthday:"birthday test"\n\t};\n\tJet.set("test",info);\n}\n</script>'
    },{
      title:"Jet.set(FormData)",
      intro:"Set values",
      test:true,
      function:"Set values with FormData",
      howUse:"Parameter:HTMLElement|String,[Json|FormData];",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name"/>\n\t<input type="text" jet-name="password"/>\n\t<input type="text" jet-name="birthday"/>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info= new FormData();\n\tinfo.append("name","name test");\n\tinfo.append("password","password test");\n\tinfo.append("birthday","birthday test");\n\tJet.set("test",info);\n}\n</script>'
    },{
      title:"Jet.set(callback)",
      intro:"Set values",
      test:true,
      function:"Set values with callback,you can change style according to different content",
      howUse:"Parameter:HTMLElement|String,[Json|FormData][Function|String];",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name"/>\n\t<input type="text" jet-name="password"/>\n\t<input type="text" jet-name="birthday"/>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info={\n\t\tname:"red",\n\t\tpassword:"password test",\n\t\tbirthday:"birthday test"\n\t};\n\tJet.set("test",info,function(element,value,key){//every element will execute this function\n\t\tif(key=="name"&&value=="red"){\n\t\t\telement.css("color","#f00");\n\t\t}\n\t});\n}\n</script>'
    },{
      title:"Jet.set(jet-name)",
      intro:"Set values",
      test:true,
      function:"Set values of jet-form which children has jet-name",
      howUse:"Parameter:HTMLElement|String,[Json|FormData][Function|String]",
      code:'<div jet-form="test">\n\t<input type="text" jet-name="name"/>\n\t<input type="text" jet-name="password"/>\n\t<input type="text" jet-name="birthday"/>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info={\n\t\tname:"name test",\n\t\tpassword:"password test",\n\t\tbirthday:"birthday test"\n\t};\n\tJet.set("test",info,null,"jet-name");//jet-name is default\n}\n</script>'
    },{
      title:"Jet.set(attr)",
      intro:"Set values",
      test:true,
      function:"Set values of jet-form which children has certain attribute",
      howUse:"Parameter:HTMLElement|String,[Json|FormData][Function|String][String]",
      code:'<div jet-form="test">\n\t<input type="text" any-attr="name"/>\n\t<input type="text" any-attr="password"/>\n\t<input type="text" any-attr="birthday"/>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info={\n\t\tname:"name test",\n\t\tpassword:"password test",\n\t\tbirthday:"birthday test"\n\t};\n\tJet.set("test",info,null,"any-attr");\n}\n</script>'
    },{
      title:"Jet.clear()",
      intro:"Clear values",
      test:true,
      function:"Clear jet-name values of a HTMLElement of jet-form",
      howUse:"Parameter:HTMLElement|String,[String]",
      code:'<div jet-form="test" id="test">\n\t<input type="text" jet-name="name" any-attr="name" value="name test"/>\n\t<input type="text" jet-name="password" any-attr="password" value="password test"/>\n\t<input type="text" jet-name="birthday" any-attr="birthday" value="birthday test"/>\n</div>\n<input type="button" value="clear by default" onclick="clearDefault()"/>\n<input type="button" value="clear by HTMLElement and attr" onclick="clearElementAndAttr()"/>\n<script>\nfunction clearDefault(){\n\tJet.clear("test");\n}\nfunction clearElementAndAttr(){\n\tJet.clear(J.id("test"),"any-attr");\n}\n</script>'
    },{
      title:"HTMLElement.get()",
      intro:"Get values",
      test:true,
      function:"Get jet-name values of a HTMLElement",
      howUse:"Parameter:[String],[String](dataType,attrName);Return:Json|FormData",
      code:'<div id="test">\n\t<input type="text" jet-name="name" placeholder="Input name please"/>\n\t<input type="password" jet-name="password" placeholder="Input password please" />\n\t<input type="text" jet-name="birthday" placeholder="Input birthday please" />\n</div>\n<input type="button" value="get values" onclick="getTest()"/>\n<div id="show"></div>\n<script>\nfunction getTest(){\n\tvar json=J.id("test").get();//you can use the same parameters as Jet.get() except for the first parameter\n\tJ.id("show").text("The values of [form] is:"+JSON.stringify(json));\n}\n</script>'
    },{
      title:"HTMLElement.set()",
      intro:"Set values",
      test:true,
      function:"Set jet-name values into a HTMLElement",
      howUse:"Parameter:Json,[Function|String],[String](data,callback,name)",
      code:'<div id="test">\n\t<input type="text" jet-name="name"/>\n\t<input type="text" jet-name="password"/>\n\t<input type="text" jet-name="birthday"/>\n</div>\n<input type="button" value="set values" onclick="setTest()"/>\n<script>\nfunction setTest(){\n\tvar info={\n\t\tname:"name test",\n\t\tpassword:"password test",\n\t\tbirthday:"birthday test"\n\t};\n\tJ.id("test").set(info);//you can use the same parameters as Jet.set() except for the first parameter\n}\n</script>'
    },{
      title:"HTMLElement.clear()",
      intro:"Clear values",
      test:true,
      function:"Clear jet-name values of a HTMLElement",
      howUse:"Parameter:[String]",
      code:'<div id="test">\n\t<input type="text" jet-name="name" any-attr="name" value="name test"/>\n\t<input type="text" jet-name="password" any-attr="password" value="password test"/>\n\t<input type="text" jet-name="birthday" any-attr="birthday" value="birthday test"/>\n</div>\n<input type="button" value="clear by default" onclick="clearDefault()"/>\n<input type="button" value="clear by HTMLElement and attr" onclick="clearByAttr()"/>\n<script>\nfunction clearDefault(){\n\tJ.id("test").clear();\n}\nfunction clearByAttr(){\n\tJ.id("test").clear("any-attr");\n}\n</script>'
    },{
      title:"J.jetForm()",
      intro:"Select jet-form",
      test:true,
      function:"Select HTMLElement by jet-form attribute",
      howUse:"Parameter:String;return:HTMLElement;",
      code:'<div jet-form="test">What am I?</div>\n<input type="button" onclick="testJetForm()" value="click"/>\n<script>\n\tfunction testJetForm(){\n\t\tJ.jetForm("test").text("I am a jet form");\n\t}\n</script>'
    },{
      title:"J.jetName()",
      intro:"Select jet-name",
      test:true,
      function:"Select HTMLElement by jet-name attribute",
      howUse:"Parameter:String,[String];return:HTMLElement|HTMLCollection|NodeList",
      code:'<div jet-form="form">\n\t<input type="text" jet-name="test"/>\n</div>\n<input type="text" jet-name="test"/>\n<input type="button" onclick="testJetName()" value="test JetName"/>\n<input type="button" onclick="testJetNameUnderJetForm()" value="test JetName under JetForm"/>\n<script>\n\tfunction testJetName(){\n\t\tJ.jetName("test").val("I have jet form");\n\t}\n\tfunction testJetNameUnderJetForm(){\n\t\tJ.jetName("form","test").val("My parent is jet form named test");\n\t}\n</script>'
    }],
  Validation:[
    {
      title:"Jet.validate(HTMLElement)",
      intro:"Validate values",
      test:true,
      function:"Validate jet-valid values of a HTMLElement's children",
      howUse:"Parameter:HTMLElement|String,[Function|String],[Function|String];return:null",
      code:'<div id="test">\n\t<input type="text" jet-valid="notnull" placeholder="Input name please"/>\n\t<input type="password" jet-valid="length[4,8]" placeholder="Input password please" />\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="validate" onclick="validateTest()"/>\n<script>\n\tfunction validateTest(){\n\t\tJet.validate(J.id("test"));\n\t}\n</script>'
    },{
      title:"Jet.validate(jet-form)",
      intro:"Validate values",
      test:true,
      function:"Validate jet-valid values of a jet-form's children",
      howUse:"Parameter:HTMLElement|String,[Function|String],[Function|String];return:null",
      code:'<div jet-form="test">\n\t<input type="text" jet-valid="notnull" placeholder="Input name please"/>\n\t<input type="password" jet-valid="length[4,8]" placeholder="Input password please" />\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="validate" onclick="validateTest()"/>\n<script>\n\tfunction validateTest(){\n\t\tJet.validate("test");\n\t}\n</script>'
    },{
      title:"Jet.validate(onPass)",
      intro:"Validate callback",
      test:true,
      function:"Validate values with onPass callback",
      howUse:"Parameter:HTMLElement|String,[Function|String],[Function|String];return:null",
      code:'<div jet-form="test">\n\t<input type="text" jet-valid="notnull" placeholder="Input name please"/>\n\t<input type="password" jet-valid="length[4,8]" placeholder="Input password please" />\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="validate" onclick="validateTest()"/>\n<div id="show"></div>\n<script>\n\tfunction validateTest(){\n\t\tJet.validate("test",function(data){\n\t\t\tJ.id("show").text("Pass!");\n\t\t});\n\t}\n</script>'
    },{
      title:"Jet.validate(onFail)",
      intro:"Validate callback",
      test:true,
      function:"Validate values with onFail callback",
      howUse:"Parameter:HTMLElement|String,[Function|String],[Function|String];return:null",
      code:'<div jet-form="test">\n\t<input type="text" jet-valid="notnull" placeholder="Input name please"/>\n\t<input type="password" jet-valid="length[4,8]" placeholder="Input password please" />\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="validate" onclick="validateTest()"/>\n<div id="show"></div>\n<script>\n\tfunction validateTest(){\n\t\tJet.validate("test",null,function(data){\n\t\t\tJ.id("show").text(JSON.stringify(data));\n\t\t\tdata.each(function(dataItem){\n\t\t\t\tdataItem.obj.val("from callback:"+dataItem.error);\n\t\t\t});\n\t\t\t//data[i].obj is the i-th unpass element\n\t\t\t//data[i].error is the i-th unpass element error info\n\t\t\t//data.length is unpass element number\n\t\t});\n\t}\n</script>'
    },{
      title:"Jet.addValid()",
      intro:"Add Validation",
      test:true,
      function:"Add Validation into a single HTMLElement or somes jet-name in jet-form dynamically",
      howUse:"Parameter:HTMLElement|String(jet-form),Json|Array|String",
      code:'<input type="text" id="test" placeholder="Input name please"/>\n<input type="button" value="add valid single" onclick="addValidTest()"/>\n</br>\n</br>\n<div jet-form="test">\n\t<input type="text" class="test" jet-name="name" placeholder="Input name please"/>\n\t<input type="text" class="test" jet-name="password" placeholder="Input password please"/>\n\t<input type="text" class="test" jet-name="birthday" placeholder="Input name please"/>\n</div>\n<input type="button" value="add valid many the same" onclick="addValidTestManySame()"/>\n<input type="button" value="add valid many" onclick="addValidTestMany()"/>\n<input type="button" value="add valid many by jet-form and jet-name" onclick="addValidTestManyJson()"/>\n<input type="button" value="reset" onclick="resetValid()"/>\n<div id="show"></div>\n<script>\n\tfunction addValidTest(){\n\t\tJet.addValid(J.id("test"),"notnull");\n\t\tJ.id("show").text("Has added single");\n\t}\n\tfunction addValidTestManySame(){\n\t\tJet.addValid(J.class("test"),"notnull");\n\t\tJ.id("show").text("Has added many with the same type");\n\t}\n\tfunction addValidTestMany(){\n\t\tJet.addValid(J.class("test"),["notnull","length[4,8]","date"]);\n\t\tJ.id("show").text("Has added many with different type");\n\t}\n\tfunction addValidTestManyJson(){\n\t\tJet.addValid("test",{\n\t\t\t"name":"notnull",\n\t\t\t"password":"length[4,8]",\n\t\t\t"birthday":"date"\n\t\t});\n\t\tJ.id("show").text("Has added many with json");\n\t}\n\tfunction resetValid(){\n\t\tJ.jetForm("test").clearValid();\n\t}\n</script>'
    },{
      title:"Jet.initValid()",
      intro:"Init Validation",
      test:true,
      function:"Init Validationin case of add validation dynamically",
      howUse:"Parameter:HTMLElement|String;return:null",
      code:'<div jet-form="test" id="form">\n\t<input type="text" id="test" placeholder="Input name please"/>\n</div>\n<input type="button" value="add valid" onclick="addValidTest()"/>\n<input type="button" value="init valid" onclick="initValidTest()"/>\n<div id="show"></div>\n<script>\n\tfunction addValidTest(){\n\t\tJ.id("test").attr("jet-valid","notnull");\n\t\tJ.id("show").text("Has added,but not effective");\n\t}\n\tfunction initValidTest(){\n\t\tJet.initValid("test");//or Jet.initValid(J.id("form"));\n\t\t//Jet.initValid() is for all HTMLElement with jet-valid\n\t\tJ.id("show").text("Has inited,now effective");\n\t}\n</script>'
    },{
      title:"Jet.clearValid()",
      intro:"Clear Validation",
      test:true,
      function:"Clear Validationin of a single HTMLElement or somes jet-name in jet-form",
      howUse:"Parameter:HTMLElement|String;return:null",
      code:'<div jet-form="form">\n\t<input type="text" jet-name="test" jet-valid="notnull" placeholder="Input name please"/>\n</div>\n<input type="button" value="clearValidTest" onclick="clearValidTest()"/>\n<input type="button" value="clearValidTestByForm" onclick="clearValidTestByForm()"/>\n<input type="button" value="reset" onclick="resetValid()"/>\n<div id="show"></div>\n<script>\n\tfunction clearValidTest(){\n\t\tJet.clearValid(J.jetName("test"));\n\t\tJ.id("show").text("Has cleared");\n\t}\n\tfunction clearValidTestByForm(){//clear all jet-name elements valid under jet-form\n\t\tJet.clearValid("form");\n\t\tJ.id("show").text("Has cleared by form");\n\t}\n\t//You can also use a HTMLCollection or NodeList as parameter\n\tfunction resetValid(){\n\t\tJ.jetName("test").addValid("notnull");\n\t\tJ.id("show").text("Has reset");\n\t}\n</script>'
    },{
      title:"HTMLElement.validate()",
      intro:"Validation",
      test:true,
      function:"Validate a HTMLElement",
      howUse:"Obj:HTMLElement;Parameter:[Function|String],[Function|String];return:this",
      code:'<div id="test">\n\t<input type="text" jet-valid="notnull" placeholder="Input name please"/>\n\t<input type="password" jet-valid="length[4,8]" placeholder="Input password please" />\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="validate" onclick="validateTest()"/>\n<script>\n\tfunction validateTest(){\n\t\tJ.id("test").validate();\n\t\t//onpass and onfail is the same as Jet.validate()\n\t}\n</script>'
    },{
      title:".addValid()",
      intro:"Add Validation",
      test:true,
      function:"Add Validation into a single HTMLElement or somes jet-name in jet-form dynamically",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList;Parameter:Json|Array|String;return:this",
      code:'<input type="text" id="test" placeholder="Input name please"/>\n<input type="button" value="add valid single" onclick="addValidTest()"/>\n</br></br>\n<div jet-form="test">\n\t<input type="text" class="test" jet-name="name" placeholder="Input name please"/>\n\t<input type="text" class="test" jet-name="password" placeholder="Input password please"/>\n\t<input type="text" class="test" jet-name="birthday" placeholder="Input name please"/>\n</div>\n<input type="button" value="add valid many the same" onclick="addValidTestManySame()"/>\n<input type="button" value="add valid many" onclick="addValidTestMany()"/>\n<input type="button" value="add valid many by jet-form and jet-name" onclick="addValidTestManyJson()"/>\n<input type="button" value="reset" onclick="resetValid()"/>\n<div id="show"></div>\n<script>\n\tfunction addValidTest(){\n\t\tJ.id("test").addValid("notnull");\n\t\tJ.id("show").text("Has added single");\n\t}\n\tfunction addValidTestManySame(){\n\t\tJ.class("test").addValid("notnull");\n\t\tJ.id("show").text("Has added many with the same type");\n\t}\n\tfunction addValidTestMany(){\n\t\tJ.class("test").addValid(["notnull","length[4,8]","date"]);\n\t\tJ.id("show").text("Has added many with different type");\n\t}\n\tfunction addValidTestManyJson(){\n\t\tJ.jetForm("test").addValid({\n\t\t\t"name":"notnull",\n\t\t\t"password":"length[4,8]",\n\t\t\t"birthday":"date"\n\t\t});\n\t\tJ.id("show").text("Has added many with json");\n\t}\n\tfunction resetValid(){\n\t\tJ.jetForm("test").clearValid();\n\t}\n</script>'
    },{
      title:".initValid()",
      intro:"Init Validation",
      test:true,
      function:"Init Validationin case of add validation dynamically",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList;Parameter:null;return:this",
      code:'<div id="form">\n\t<input type="text" id="test" placeholder="Input name please"/>\n</div>\n<input type="button" value="add valid" onclick="addValidTest()"/>\n<input type="button" value="init valid" onclick="initValidTest()"/>\n<div id="show"></div>\n<script>\n\tfunction addValidTest(){\n\t\tJ.id("test").attr("jet-valid","notnull");\n\t\tJ.id("show").text("Has added,but not effective");\n\t}\n\tfunction initValidTest(){\n\t\tJ.id("form").initValid();\n\t\tJ.id("show").text("Has inited,now effective");\n\t}\n</script>'
    },{
      title:".clearValid()",
      intro:"Clear Validation",
      test:true,
      function:"Clear Validationin of a single HTMLElement or somes jet-name in jet-form",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList;Parameter:null;return:this",
      code:'<div jet-form="form">\n\t<input type="text" jet-name="test" jet-valid="notnull" placeholder="Input name please"/>\n</div>\n<input type="button" value="clearValidTest" onclick="clearValidTest()"/>\n<input type="button" value="clearValidTestByForm" onclick="clearValidTestByForm()"/>\n<input type="button" value="reset" onclick="resetValid()"/>\n<div id="show"></div>\n<script>\n\tfunction clearValidTest(){\n\t\tJ.jetName("test").clearValid();\n\t\tJ.id("show").text("Has cleared");\n\t}\n\tfunction clearValidTestByForm(){//clear all jet-name elements valid under jet-form\n\t\tJ.jetForm("form").clearValid()\n\t\tJ.id("show").text("Has cleared by form");\n\t}\n\tfunction resetValid(){\n\t\tJ.jetName("test").addValid("notnull");\n\t\tJ.id("show").text("Has reset");\n\t}\n</script>'
    },{
      title:"Jet.banDefault()",
      intro:"Disabled default",
      test:true,
      function:"Disabled default style of validation error show",
      howUse:"Parameter:null;",
      code:'<div id="test">\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="ban default" onclick="banDefault()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\n\tfunction banDefault(){\n\t\tJet.banDefault();\n\t\tJ.id("show").text("Has banned,now default style is not effective");\n\t}\n\tfunction reset(){\n\t\tJet.useDefault();\n\t\tJ.id("show").text("Has reseted");\n\t}\n</script>'
    },{
      title:"Jet.useDefault()",
      intro:"Use default",
      test:true,
      function:"Use default style of validation error show",
      howUse:"Parameter:null;",
      code:'<div id="test">\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="ban default" onclick="banDefault()"/>\n<input type="button" value="use default" onclick="useDefault()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\n\tfunction banDefault(){\n\t\tJet.banDefault();\n\t\tJ.id("show").text("Has banned,now default style is not effective");\n\t}\n\tfunction useDefault(){\n\t\tJet.useDefault();\n\t\tJ.id("show").text("Has reused,now default style is effective");\n\t}\n\tfunction reset(){\n\t\tJet.useDefault();\n\t\tJ.id("show").text("Has reseted");\n\t}\n</script>'
    },{
      title:"Jet.banValidShow()",
      intro:"Disabled error show",
      test:true,
      function:"Disabled default style of validation error show",
      howUse:"Parameter:null;",
      code:'<div id="test">\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="ban valid Show" onclick="banValidShow()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\n\tfunction banValidShow(){\n\t\tJet.banValidShow();\n\t\tJ.id("show").text("Has banned,now the error info not show");\n\t}\n\tfunction reset(){\n\t\tJet.useValidShow();\n\t\tJ.id("show").text("Has reseted");\n\t}\n</script>'
    },{
      title:"Jet.usePlaceHolder()",
      intro:"Set placeholder",
      test:true,
      function:"Set valid error text placeholder",
      howUse:"Parameter:null;",
      code:'<div id="test">\n\t<input type="text" jet-valid="notnull"/>\n\t<input type="password" jet-valid="length[4,8]"/>\n\t<input type="text" jet-valid="date"/>\n</div>\n<input type="button" value="use placeholder" onclick="usePlaceholder()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<script>\n\tfunction usePlaceholder(){\n\t\tJet.usePlaceHolder();\n\t}\n\tfunction reset(){\n\t\tJet.banPlaceHolder();\n\t}\n</script>'
    },{
      title:"Jet.banPlaceHolder()",
      intro:"Disabled placeholder for valid input",
      test:true,
      function:"Not use valid error text placeholder",
      howUse:"Parameter:null;",
      code:'<div id="test">\n\t<input type="text" jet-valid="notnull"/>\n\t<input type="password" jet-valid="length[4,8]"/>\n\t<input type="text" jet-valid="date"/>\n</div>\n<input type="button" value="use placeholder" onclick="usePlaceholder()"/>\n<input type="button" value="ban placeholder" onclick="banPlaceholder()"/>\n<script>\n\tfunction usePlaceholder(){\n\t\tJet.usePlaceHolder();\n\t}\n\tfunction banPlaceholder(){\n\t\tJet.banPlaceHolder();\n\t}\n</script>'
    },{
      title:"Jet.useValidShow()",
      intro:"Use error show",
      test:true,
      function:"Use default style of validation error show",
      howUse:"Parameter:null;",
      code:'<div id="test">\n\t<input type="text" jet-valid="date" placeholder="Input birthday please" />\n</div>\n<input type="button" value="ban valid Show" onclick="banValidShow()"/>\n<input type="button" value="use valid Show" onclick="useValidShow()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\n\tfunction banValidShow(){\n\t\tJet.banValidShow();\n\t\tJ.id("show").text("Has banned,now the error info not show");\n\t}\n\tfunction useValidShow(){\n\t\tJet.useValidShow();\n\t\tJ.id("show").text("Has reused,now the error info show");\n\t}\n\tfunction reset(){\n\t\tJet.useValidShow();\n\t\tJ.id("show").text("Has reseted");\n\t}\n</script>'
    },{
      title:"Jet.onOnePass()",
      intro:"Set validate single callback",
      test:true,
      function:"Set validate single pass callback ",
      howUse:"Parameter:Function|String;",
      code:'<div jet-form="test">\n\t<input type="text" jet-valid="notnull" placeholder="Input please"/>\n\t<input type="text" jet-valid="notnull" placeholder="Input please"/>\n\t<input type="text" jet-valid="notnull" placeholder="Input please"/>\n</div>\n<input type="button" value="validate" onclick="validateTest()"/>\n<input type="button" value="onOnePass test" onclick="onOnePass()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\n\tfunction validateTest(){\n\t\tJet.validate("test");\n\t}\n\tfunction onOnePass(){\n\t\tJet.onOnePass(function(input,info){\n\t\t\tinput.val("from onOnePass:"+info);\n\t\t});\n\t\t//or use String to replace function\n\t\tJ.id("show").text("Has used your function");\n\t}\n\tfunction reset(){\n\t\tJet.onOnePass(null);\n\t\tJ.id("show").text("Has reseted");\n\t}\n</script>'
    },{
      title:"Jet.onOneFail()",
      intro:"Set validate single callback",
      test:true,
      function:"Set validate single fail callback ",
      howUse:"Parameter:Function|String;",
      code:'<div jet-form="test">\n\t<input type="text" jet-valid="notnull" placeholder="Input please"/>\n\t<input type="text" jet-valid="notnull" placeholder="Input please"/>\n\t<input type="text" jet-valid="notnull" placeholder="Input please"/>\n</div>\n<input type="button" value="validate" onclick="validateTest()"/>\n<input type="button" value="onOneFail test" onclick="onOneFail()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\n\tfunction validateTest(){\n\t\tJet.validate("test");\n\t}\n\tfunction onOneFail(){\n\t\tJet.onOneFail(function(input,error){\n\t\t\tinput.val("from onOneFail:"+error);\n\t\t});\n\t\t//or use String to replace function\n\t\tJ.id("show").text("Has used your function");\n\t}\n\tfunction reset(){\n\t\tJet.onOneFail(null);\n\t\tJ.id("show").text("Has reseted");\n\t}\n</script>'
    },{
      title:".getContent()",
      intro:"Get value or text",
      test:true,
      function:"Get value or text of element when it is in validation",
      howUse:"Obj:HTMLElement|HTMLCollection|NodeList;Parameter:null;return:this",
      code:'<input type="text" id="test" jet-valid="date" placeholder="Input please"/>\n<input type="button" value=".val() when in valid" onclick="getVal()"/>\n<input type="button" value=".getContent() when in valid" onclick="getContentTest()"/>\n<div id="show"></div>\n<script>\n\tfunction getVal(){\n\t\tvar value=J.id("test").val();\n\t\tJ.id("show").text("value="+value);\n\t}\n\tfunction getContentTest(){\n\t\tvar value=J.id("test").getContent();\n\t\tJ.id("show").text("content="+value);\n\t}\n</script>'
    }],
  Tools:[
    {
      title:"Jet.show()",
      intro:"Show information note",
      test:true,
      function:"Show information note with different statu,time and callback",
      howUse:"Parameter:String[String][String|int][Function|String];(content,statu,time,callback)",
      code:'<input type="text" id="test" value="test"/>\n<input type="button" value="width content" onclick="showTest()"/>\n<input type="button" value="with statu" onclick="showTestWithStatu()"/>\n<input type="button" value="with time" onclick="showTestWithTime()"/>\n<input type="button" value="with callback" onclick="showTestWithCallback()"/>\n<input type="button" value="with all" onclick="showTestWithAll()"/>\n<script>\nfunction showTest(){\n\tJet.show(J.id("test").val());\n}\nfunction showTestWithStatu(){\n\tJet.show(J.id("test").val(),"info");\n\t//success info warn error\n}\nfunction showTestWithTime(){\n\tJet.show(J.id("test").val(),null,"fast");\n}\nfunction showTestWithCallback(){\n\tJet.show(J.id("test").val(),null,null,function(){\n\t\tJ.id("test").val("from callback");\n\t});\n}\nfunction showTestWithAll(){\n\tJet.show(J.id("test").val(),"warn",1000,function(){\n\t\tJ.id("test").val("from all");\n\t});\n}\n</script>'
    },{
      title:"Jet.showWait()",
      intro:"Show information note",
      test:true,
      function:"Show information note not close automatically",
      howUse:"Parameter:String[String];(content,statu)",
      code:'<input type="text" id="test" value="test"/>\n<input type="button" value="width content" onclick="showTest()"/>\n<input type="button" value="with statu" onclick="showTestWithStatu()"/>\n<div id="show"></div>\n<script>\nfunction showTest(){\n\tJet.showWait(J.id("test").val());\n\tJ.id("show").text("This will not close automatically,click it to close");\n}\nfunction showTestWithStatu(){\n\tJet.showWait(J.id("test").val(),"error");\n\t//success info warn error\n}\n</script>'
    },{
      title:"Jet.close()",
      intro:"Close information note box",
      test:true,
      function:"Close information note box with code",
      howUse:"Parameter:null",
      code:'<input type="text" id="test" value="test"/>\n<input type="button" value="show" onclick="showTest()"/>\n<input type="button" value="close note" onclick="closeNote()"/>\n<div id="show"></div>\n<script>\nfunction showTest(){\n\tJet.showWait(J.id("test").val());\n\tJ.id("show").text("This will not close automatically,click close note button to close");\n}\nfunction closeNote(){\n\tJet.close();\n}\n</script>'
    },{
      title:"Jet.setNoteStyle()",
      intro:"Change note style",
      test:true,
      function:"Change note style,'gray' or 'color',color is default style",
      howUse:"Parameter:String",
      code:'<input type="text" id="test" value="test"/>\n<input type="button" value="show" onclick="showTest()"/>\n<input type="button" value="set note style as gray" onclick="setGray()"/>\n<input type="button" value="reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\nfunction showTest(){\n\tJet.show(J.id("test").val());\n}\nfunction setGray(){\n\tJet.setNoteStyle("gray");\n}\nfunction reset(){\n\tJet.setNoteStyle("color");\n}\n</script> '
    },{
      title:"Jet.confirm(onOk)",
      intro:"Show a confirm box",
      test:true,
      function:"Show a confirm box with ok callback",
      howUse:"Parameter:String[Function|String][Function|String];(title,onOk,onCancel)",
      code:'<input type="button" value="With onOk callback" onclick="showConfirm()"/>\n<div id="show"></div>\n<script>\nfunction showConfirm(){\n\tJet.confirm("Are you sure?",function(){\n\t\tJ.id("show").text("You choose ok");\n\t});\n}\n</script> '
    },{
      title:"Jet.confirm(onCancel)",
      intro:"Show a confirm box",
      test:true,
      function:"Show a confirm box with cancel callback",
      howUse:"Parameter:String[Function|String][Function|String];(title,onOk,onCancel)",
      code:'<input type="button" value="With onCancel callback" onclick="showConfirm()"/>\n<input type="button" value="With both" onclick="showBoth()"/>\n<div id="show"></div>\n<script>\nfunction showConfirm(){\n\tJet.confirm("Are you sure?",null,function(){\n\t\tJ.id("show").text("You choose cancel");\n\t});\n}\nfunction showBoth(){\n\tJet.confirm("Are you sure?",function(){\n\t\tJ.id("show").text("You choose ok");\n\t},function(){\n\t\tJ.id("show").text("You choose cancel");\n\t});\n}\n</script>'
    },{
      title:"Jet.input(single)",
      intro:"Show a input box",
      test:true,
      function:"Show a input box with single input",
      howUse:"Parameter:(String|Array|Json)[Function|String][Function|String];(data,onOk,onCancel)",
      code:'<input type="button" value="Single input with default" onclick="showSingle()"/>\n<input type="button" value="Single input with values" onclick="showSingleWithValue()"/>\n<script>\nfunction showSingle(){\n\tJet.input("My Information");//null equals "Input Information"\n}\nfunction showSingleWithValue(){\n\tJet.input(["My Information","Information text","default value","date"]);\n\t//[box title,input title,default value,valid type]\n\t//if you donot want to use any of them,use null to replace it\n\t//and you can use less than four parameters \n}\n</script>'
    },{
      title:"Jet.input(many)",
      intro:"Show a input box",
      test:true,
      function:"Show a input box with many inputs",
      howUse:"Parameter:(String|Array|Json)[Function|String][Function|String];(data,onOk,onCancel)",
      code:'<input type="button" value="Many inputs with json" onclick="showManyWithJson()"/>\n<script>\nfunction showManyWithJson(){\n\tJet.input({\n\t\ttitle:"My Information",\n\t\ttext:[null,"Information text2","Information text3"],\n\t\tdefault:["default value1",null,"default value3"],\n\t\tvalid:["number","date",null]\n\t});\n\t//you can remove attribute if you donot use it\n}\n</script>'
    },{
      title:"Jet.input(onOk)",
      intro:"Show a input box",
      test:true,
      function:"Show a input box with onOk callback",
      howUse:"Parameter:(String|Array|Json)[Function|String][Function|String];(data,onOk,onCancel)",
      code:'<input type="button" value="Single input with ok callback" onclick="testOkCallback()"/>\n<input type="button" value="Many inputs with ok callback" onclick="testOkCallbackWithMany()"/>\n<div id="show"></div>\n<script>\nfunction testOkCallback(){\n\tJet.input("My Information",function(data){//Is String\n\t\tJ.id("show").text("Data is:"+data);\n\t});\n}\nfunction testOkCallbackWithMany(){\n\tJet.input({\n\t\ttitle:"My Information",\n\t\ttext:[null,"Information text2","Information text3"],\n\t\tdefault:["default value1",null,"default value3"],\n\t\tvalid:["number","date",null]\n\t},function(data){//Is Array\n\t\tJ.id("show").text("Data is:["+data+"]");\n\t});\n}\n</script>'
    },{
      title:"Jet.input(onCancel)",
      intro:"Show a input box",
      test:true,
      function:"Show a input box with onCancel callback",
      howUse:"Parameter:(String|Array|Json)[Function|String][Function|String];(data,onOk,onCancel)",
      code:'<input type="button" value="With cancel callback" onclick="testCancelCallback()"/>\n<div id="show"></div>\n<script>\nfunction testCancelCallback(){\n\tJet.input("My Information",null,function(){//Is String\n\t\tJ.id("show").text("Canceled");\n\t});\n}\n</script>'
    },{
      title:"Jet.checkArg()",
      intro:"Check argument",
      test:true,
      function:"Check argument,if is null or undefined,return a default value",
      howUse:"Parameter:Object,Object(default);return:Object;",
      code:'<input type="button" value="Check undefined" onclick="checkUndefined()"/>\n<input type="button" value="Check null" onclick="checkNull()"/>\n<input type="button" value="Check normal" onclick="checkNormal()"/>\n<div id="show"></div>\n<script>\nvar a,b=null,c="normal";\nfunction checkUndefined(){\n\tJ.id("show").text(Jet.checkArg(a,"undefined default"));\n}function checkNull(){\n\tJ.id("show").text(Jet.checkArg(b,"null default"));\n}function checkNormal(){\n\tJ.id("show").text(Jet.checkArg(c,"default"));\n}\n</script>'
    },{
      title:"Jet.lang()",
      intro:"Set language",
      test:true,
      function:"Set all text language in JetterJs,you can set 'Chinese' or 'English'",
      howUse:"Parameter:String;",
      code:'<input type="text" id="test" jet-valid="date" onclick="showConfirm()"/>\n<input type="button" value="Selected Chinese" onclick="sChinese()"/>\n<input type="button" value="Reset" onclick="reset()"/>\n<div id="show"></div>\n<script>\nfunction sChinese(){\n\tJet.lang("Chinese");\n\t//change all the text in this library\n\tJ.id("test").focus();\n\tJ.id("test").blur();\n\tJ.id("show").text("Select Chinese");\n}function reset(){\n\tJet.lang("English");\n\tJ.id("test").focus();\n\tJ.id("test").blur();\n\tJ.id("show").text("Has reseted");\n}\n</script>'
    },{
      title:"Jet.jump()",
      intro:"Jump a page",
      test:true,
      function:"Jump a page with a link",
      howUse:"Parameter:String;",
      code:'<input type="button" value="Test jump" onclick="testjump()"/>\n<script>\nfunction testjump(){\n\tJet.jump("http://theajack.github.io");\n}\n</script>'
    },{
      title:"Jet.open()",
      intro:"Open a page",
      test:true,
      function:"Open a page in a new window",
      howUse:"Parameter:String;",
      code:'<input type="button" value="Test open" onclick="testOpen()"/>\n<script>\nfunction testOpen(){\n\tJet.open("http://theajack.github.io");\n}\n</script>'
    },{
      title:"Jet.getUrlPara()",
      intro:"Get parameters in url",
      test:false,
      function:"Get parameters in url",
      howUse:"Parameter:null;Return:String|Json",
      code:'<script>\n\t//get parameters of this page link\n\n\t//Many parameters\n\tvar json=Jet.getUrlPara();\n\t//One parameters\n\tvar string=Jet.getUrlPara();\n\t//if 0 parameter ,will return ""\n</script>'
    },{
      title:"Jet.sign()",
      intro:"Get sign of a number",
      test:true,
      function:"Get sign of a number",
      howUse:"Parameter:Number;Return:1|-1",
      code:'<input type="button" value="Test sign" onclick="testsign()"/>\n<div id="show"></div>\n<script>\nvar a=-10;\nfunction testsign(){\n\tvar b=Jet.sign(a)*100;\n\tJ.id("show").text("Result="+b);\n}\n</script>'
    },{
      title:"Jet.getRandom()",
      intro:"Get a random number",
      test:true,
      function:"Get a random number between a max number and a min number",
      howUse:"Parameter:Number,Number;Return:Number",
      code:'<input type="text" id="min" jet-valid="number" placeholder="input min"/>\n<input type="text" id="max" jet-valid="number" placeholder="input max"/>\n<input type="button" value="Get a random num" onclick="testGetRandom()"/>\n<div id="show"></div>\n<script>\nfunction testGetRandom(){\n\tvar min=parseInt(J.id("min").val());\n\tvar max=parseInt(J.id("max").val());\n\tvar num=Jet.getRandom(min,max);\n\tJ.id("show").text(num);\n}\n</script>'
    },{
      title:"Jet.copy()",
      intro:"Copy string",
      test:true,
      function:"Copy string to clipboard",
      howUse:"Parameter:String",
      code:'<input type="button" value="copy some text" onclick="testCopy()"/>\n<input type="text" placeholder="Ctrl+v on me"/><script>\nfunction testCopy(){\n\tJet.copy("This is for copy");\n\tJet.show("Copyed");\n\t//may not supported in some browser\n}\n</script>'
    },{
      title:"Jet.isMobile()",
      intro:"Check is moblie",
      test:true,
      function:"Check program is run in moblie",
      howUse:"Parameter:null;return:Boolean",
      code:'<input type="button" value="check is mobile" onclick="testmobile()"/>\n<div id="show"></div>\n<script>\nfunction testmobile(){\n\tJ.id("show").text(Jet.isMobile());\n}\n</script>'
    },{
      title:"jet=Jet",
      intro:"jet equals Jet",
      test:false,
      function:"jet equals Jet",
      howUse:"null",
      code:'<script>\n\tjet.show("aa");\n\t//Jet=jet\n\t//...\n</script>'
    },{
      title:"Array.each()",
      intro:"Traversal an Array",
      test:true,
      function:"Traversal an Array with callback",
      howUse:"Parameter:Function(item,index);return:this",
      code:'<input type="button" value="test each" onclick="testArrayEach()"/>\n<input type="button" value="test each width index" onclick="testArrayEachIndex()"/>\n<div id="show"></div>\n<script>\nvar arr=[1,2,3,4,5]\nfunction testArrayEach(){\n\tvar s="";\n\tarr.each(function(item){\n\t\ts+=(" item: "+item);\n\t});\n\tJ.id("show").text(s);\n}\nfunction testArrayEachIndex(){\n\tvar s="";\n\tarr.each(function(item,i){\n\t\ts+=(" item"+i+": "+item);\n\t});\n\tJ.id("show").text(s);\n}\n</script>'
    },{
      title:"Array.removeByIndex()",
      intro:"Remove item of Array",
      test:true,
      function:"Remove item of Array by index",
      howUse:"Parameter:int;return:this",
      code:'<input type="button" value="test remove by index" onclick="removeByIndexTest()"/>\n<div id="show">a,b,c,d,e</div>\n<script>\nvar arr=["a","b","c","d","e"];\nfunction removeByIndexTest(){\n\tarr.removeByIndex(3);\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"Array.remove()",
      intro:"Remove item of Array",
      test:true,
      function:"Remove item of Array",
      howUse:"Parameter:Object;return:this",
      code:'<input type="button" value="test remove" onclick="removeTest()"/>\n<div id="show">a,b,c,d,e</div>\n<script>\nvar arr=["a","b","c","d","e"];\nfunction removeTest(){\n\tarr.remove("d");\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"Array.insert()",
      intro:"Insert item into array",
      test:true,
      function:"Insert item into array after a index",
      howUse:"Parameter:Object,index;return:this",
      code:'<input type="button" value="test insert" onclick="insertTest()"/>\n<div id="show">a,b,c,d,e</div>\n<script>\nvar arr=["a","b","c","d","e"];\nfunction insertTest(){\n\tarr.insert("x",3);\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"Array.append()",
      intro:"Append item into array",
      test:true,
      function:"Append item into array,it will be the last one",
      howUse:"Parameter:Object;return:this",
      code:'<input type="button" value="test append" onclick="appendTest()"/>\n<div id="show">a,b,c,d,e</div>\n<script>\nvar arr=["a","b","c","d","e"];\nfunction appendTest(){\n\tarr.append("x");\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"Array.prepend()",
      intro:"Prepend item into array",
      test:true,
      function:"Prepend item into array,it will be the first one",
      howUse:"Parameter:Object;return:this",
      code:'<input type="button" value="test prepend" onclick="prependTest()"/>\n<div id="show">a,b,c,d,e</div>\n<script>\nvar arr=["a","b","c","d","e"];\nfunction prependTest(){\n\tarr.prepend("x");\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"Array.sort()",
      intro:"Sort Array",
      test:true,
      function:"Sort a number Array asc or desc",
      howUse:"Parameter:[Boolean];return:this",
      code:'<input type="button" value="test sort" onclick="sortTest()"/>\n<input type="button" value="test sort desc" onclick="sortDescTest()"/>\n<div id="show">4,2,5,1,3</div>\n<script>\nvar arr=[4,2,5,1,3];\nfunction sortTest(){\n\tarr.sort();\n\tJ.id("show").text(arr);\n}\nfunction sortDescTest(){\n\tarr.sort(false);\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"Array.sortByAttr()",
      intro:"Sort Array",
      test:true,
      function:"Sort an Array according to an attribute asc or desc",
      howUse:"Parameter:String[Boolean];return:this",
      code:'<input type="button" value="test sort by attr" onclick="sortTest()"/>\n<input type="button" value="test sort by attr desc" onclick="sortDescTest()"/>\n<div id="show">Bob:18; Jack:16; Allen:22; Thea:20; </div>\n</br>\n<input type="button" value="test sort string by length" onclick="sortString()"/>\n<div id="show1">aa3,aaaa5,aaa4,a2,aaaaaaa8</div>\n<script>\nvar arr=[{\n\t\tname:"Bob",age:18\n\t},{\n\t\tname:"Jack",age:16\n\t},{\n\t\tname:"Allen",age:22\n\t},{\n\t\tname:"Thea",age:20\n\t}];\nvar sArr=["aa3","aaaa5","aaa4","a2","aaaaaaa8"];\nfunction sortTest(){\n\tarr.sortByAttr("age");\n\tprintInfo();\n}\nfunction sortDescTest(){\n\tarr.sortByAttr("age",false);\n\tprintInfo();\n}\nfunction sortString(){\n\tsArr.sortByAttr("length");\n\tJ.id("show1").text(sArr);\n}\nfunction printInfo(){\n\tvar s="";\n\tarr.each(function(item){\n\t\ts+=(item.name+":"+item.age+"; ")\n\t});\n\tJ.id("show").text(s);\n}\n</script>'
    },{
      title:"Array.reverse()",
      intro:"Reverse Array",
      test:true,
      function:"Reverse an Array",
      howUse:"return:this",
      code:'<input type="button" value="test reverse" onclick="reverseTest()"/>\n<div id="show">a,b,c,d,e</div>\n<script>\nvar arr=["a","b","c","d","e"];\nfunction reverseTest(){\n\tarr.reverse();\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"Array.empty()",
      intro:"Empty Array",
      test:true,
      function:"Remove all elements in an Array",
      howUse:"return:this",
      code:'<input type="button" value="test empty" onclick="emptyTest()"/>\n<div id="show">a,b,c,d,e</div>\n<script>\nvar arr=["a","b","c","d","e"];\nfunction emptyTest(){\n\tarr.empty();\n\tJ.id("show").text(arr);\n}\n</script>'
    },{
      title:"String.has()",
      intro:"Check includes String",
      test:true,
      function:"Check whether a String or RegExp is in another String",
      howUse:"Parameter:String|RegExp;return:Boolean",
      code:'<input type="text" id="test1" placeholder="input one string" value="string"/>\n<input type="text" id="test2" placeholder="input another string" value="str"/>\n<input type="button" value="test has string" onclick="hasTest()"/>\n<div id="show"></div>\n<script>\nfunction hasTest(){\n\tvar a=J.id("test1").val();\n\tvar b=J.id("test2").val();\n\tvar has=a.has(b);\n\tJ.id("show").text(has);\n}\n</script>'
    },{
      title:"String.timesOf()",
      intro:"Count times",
      test:true,
      function:"Count times that a String or RegExp show in this",
      howUse:"Parameter:String|RegExp(/./g);return:int",
      code:'<input type="text" id="test1" placeholder="input one string" value="I love programming"/>\n<input type="text" id="test2" placeholder="input another string" value="o"/>\n<input type="button" value="count the times" onclick="countTest()"/>\n<div id="show"></div>\n<script>\nfunction countTest(){\n\tvar a=J.id("test1").val();\n\tvar b=J.id("test2").val();\n\tvar times=a.timesOf(b);\n\tJ.id("show").text("["+b+"] show ["+times+"] times in ["+a+"]");\n}\n</script>'
    },{
      title:"String.replaceAll()",
      intro:"Replace all a certain String",
      test:true,
      function:"Replace all a certain String or a RegExp with another one or Array",
      howUse:"Parameter:String(be replaced)|RegExp(/./g),String(replace)|Array;return:String",
      code:'<input type="text" id="test1" placeholder="input one string" value="I love programming"/>\n<input type="text" id="test2" placeholder="input another string" value="o"/>\n<input type="button" value="replace all" onclick="replaceAllTest()"/>\n<input type="button" value="replace by Array" onclick="replaceAllTestByArr()"/>\n<input type="button" value="replace by RegExp" onclick="replaceAllTestByRegExp()"/>\n<div id="show"></div>\n<script>\nfunction replaceAllTest(){\n\tvar a=J.id("test1").val();\n\tvar b=J.id("test2").val();\n\tvar str=a.replaceAll(b,"x");\n\tJ.id("show").text(str);\n}\nfunction replaceAllTestByArr(){\n\tvar a=J.id("test1").val();\n\tvar b=J.id("test2").val();\n\tvar str=a.replaceAll(b,["x","y"]);\n\tJ.id("show").text(str);\n}\nfunction replaceAllTestByRegExp(){\n\tvar a=J.id("test1").val();\n\tvar str=a.replaceAll(/o/g,["Reg","Exp"]);\n\tJ.id("show").text(str);\n}\n</script>'
    },{
      title:"String.indexsOf()",
      intro:"Get indexs",
      test:true,
      function:"Get indexs of all a certain String or RegExp,or get ith index by parameter 2",
      howUse:"Parameter:String|RegExp(/./g),[index];return:Array",
      code:'<input type="text" id="test1" placeholder="input one string" value="I love programming"/>\n<input type="text" id="test2" placeholder="input another string" value="o"/>\n<input type="button" value="get indexs" onclick="indexsTest()"/>\n<div id="show"></div>\n<script>\nfunction indexsTest(){\n\tvar a=J.id("test1").val();\n\tvar b=J.id("test2").val();\n\tvar arr=a.indexsOf(b);\n\tJ.id("show").text("["+arr+"]");\n}\n</script>'
    },{
      title:"String.insert()",
      intro:"Insert String",
      test:true,
      function:"Insert String into this in a index",
      howUse:"Parameter:String,int;return:String",
      code:'<input type="text" id="test1" placeholder="input one string" value="I love programming"/>\n<input type="text" id="test2" placeholder="input another string" value=" do"/>\n<input type="button" value="insert" onclick="insertTest()"/>\n<div id="show"></div>\n<script>\nfunction insertTest(){\n\tvar a=J.id("test1").val();\n\tvar b=J.id("test2").val();\n\tvar arr=a.insert(b,1);\n\tJ.id("show").text("["+arr+"]");\n}\n</script>'
    }]
}
