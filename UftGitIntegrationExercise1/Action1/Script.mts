'This is a coment for Execrise 1
'SystemUtil.Run "chrome.exe", "http://nimbusserver.aos.com:8000/#/"
'msgbox "Hello WORLD!!!"

Browser("Advantage Shopping").Page("Advantage Shopping").Link("TabletsCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping 2").Link("TabletsCategoryTxt")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait 5
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping 2").WebButton("buy now")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("Quantity", dtGlobalSheet) @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping 2").WebEdit("quantity")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping 2").WebButton("save to cart")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("ValidaNumItems").Highlight
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Check CheckPoint("check_out_btn") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check out btn")_1_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("VaciarCarrito").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuCart")_;_script infofile_;_ZIP::ssf27.xml_;_
 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check out btn")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").WaitProperty "innerhtml", "OUR PRODUCTS", 9900 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuCart").Output CheckPoint("menuCart_2")

FOO = 1
