$(function(){
	document.addEventListener("plusready",function(){
		var current=plus.webview.currentWebview();
		var arr=[{url:"_www/local/_toutiao.html",title:"铁血▪军事头条"},{url:"_www/local/_huati.html",title:"铁血▪军事话题"},{url:"_www/local/_wode.html",title:"个人中心"}];
		var body=plus.webview.create(arr[0].url,"",{top:"74px",bottom:"44px"});
		current.append(body);
		mui(".footer").on("tap","li",function(){
			var index=$('.footer li').index($(this));
			if(index==2){
				var body=plus.webview.create(arr[index].url,"",{top:"0px",bottom:"44px"});
//				$(".title").html(arr[index].title);
				
				current.append(body);
			}else if(index==1){
				var body=plus.webview.create(arr[index].url,"",{top:"0px",bottom:"44px"});
//				$(".title").html(arr[index].title);
				$(".header ul").css("display","block");
				$(".header ul").html("<li>军事热点</li><li>精品推荐</li>");
				current.append(body);
			}else{
				var body=plus.webview.create(arr[index].url,"",{top:"0px",bottom:"44px"});
//				$(".title").html(arr[index].title);
				$(".header ul").html("<li>推荐</li><li>热点</li><li>军事</li><li>国际</li><li>历史</li><li>视频</li>");
				current.append(body);
			}
			
	})
	})
	
})
