$(function(){
	$(".toutiao").click(function(){
		var newwin=plus.webview.create("_www/index.html","",{});
		newwin.show();
	})
	$(".huati").click(function(){
		var newwin=plus.webview.create("_www/local/_huati.html","",{});
		newwin.show();
	})
})