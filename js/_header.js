$(function(){
	$(".search").click(function(e){
		var newwin=plus.webview.create("_www/local/_search.html","",{});
		newwin.show("slide-in-right");
		e.preventDefault();
	})
})
