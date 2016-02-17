$(function(){
	document.addEventListener("plusready",function(){
		var current=plus.webview.currentWebview();
		var body=plus.webview.create("_www/local/wode_cont.html","",{top:"44px",bottom:"0px"});
		current.append(body);
	})
})
