var current=plus.webview.currentWebview();
var url=current.url;
var header=plus.webview.create("_www/local/_cont_header.html","",{height:"44px"});
current.append(header);
var cont=plus.webview.create(url,"cc",{top:"44px",bottom:"44px",bounce:"all"});
current.append(cont);
var footer=plus.webview.create("_www/local/_cont_footer.html","",{height:"44px",bottom:"0"});
current.append(footer);
current.show("slide-in-right");