$(function(){
	mui(".header").on("tap",".back",function(e){
		var demo=plus.webview.getWebviewById("cc");
		demo.canBack(function(e){
			if(e.canBack){
				demo.back();
			}else{
				plus.webview.getWebviewById("c1").close();
			}
		})
	})
	mui(".header").on("tap",".more",function(){
		
	})
})