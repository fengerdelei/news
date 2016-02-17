$(function(){
	mui('li').on("tap","a",function(e){
		var url=$(this).attr("href");
		var newwin=plus.webview.create("_www/local/cont_cont.html","c1",{},{url:url});
		newwin.setJsFile("../js/load.js");
		e.preventDefault();
	})
})
