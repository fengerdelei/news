$(function(){
	$(".toutiao").click(function(){
		var newwin=plus.webview.create("_www/index.html","",{});
		newwin.show();
	})
	$(".huati").click(function(){
		var newwin=plus.webview.create("_www/local/_huati.html","",{});
		newwin.show();
	})
	$(".wode").click(function(){
		var newwin=plus.webview.create("_www/local/_wode.html","",{});
		newwin.show();
	})
})
