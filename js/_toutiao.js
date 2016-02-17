$(function(){
	document.addEventListener("plusready",function(){
		var current=plus.webview.currentWebview();
		var body=plus.webview.create("_www/local/cont.html","",{top:"74px"});
		current.append(body);
	})
})
