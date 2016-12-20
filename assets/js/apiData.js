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
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".prev()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".index()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".append()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".prepend()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".remove()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".empty()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".removeChild()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".css()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".attr()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".hasAttr()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".removeAttr()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".hasClass()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".addClass()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".removeClass()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".removeAllClass()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".replaceClass()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".toggleClass()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".text()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".val()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".content()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".html()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".event()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".offset()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".left()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".top()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".height()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".width()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".scroll()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".scrollTo()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".copy()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".copyHtml()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".animate()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".slideUp()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".slideDown()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".slideToggle()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".fadeOut()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".fadeIn()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".fadeToggle()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".rotate()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".span()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".stopSpan()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".hide()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".show()",
      intro:"intro",
      test:true,
      function:"function",
      howUse:"howUse",
      code:'code'
    },{
      title:".showToggle()",
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
    }]
}
