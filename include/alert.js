/**
 * @AppName Remove restriction on NIT Language Learning Platform
 * @Creator dgsrz (dgsrz@vip.qq.com)
 * @Version 1.3
 */

function queryString(str) {
    var urlParams = {};
    var queryStr = window.location.href;
    var e, d = (function(s) {
            return decodeURIComponent(s.replace(/\+/g, " "));
        }),
        q = queryStr.substring(queryStr.indexOf('?') + 1),
        r = /([^&=]+)=?([^&]*)/g;
    while(e = r.exec(q)) urlParams[d(e[1])] = d(e[2]);
    return urlParams[str];
}

function removeBlanks(str) {
	return str.replace(/[ ’]/g, "");
}

function autoFill(str) {
	$("input[value='" + str + "']").attr("checked", "checked");
}

function regularMatch() {
	var obj2 = new XMLHttpRequest();
	var str = queryString('id');
	var pattern = "<font color=\"green\">([^<]*)<br>";
	
	obj2.open(
		"GET",
		"/jasinda/zycommons/workHistory.do?id=" + str,
		true
	);
	obj2.onload = function() {
		var full = obj2.responseText;
		var pattern = /<font color="green">([^<]*)<br>/g;
		var text;
		while ((text = pattern.exec(full)) != null) {
			// alert(removeBlanks(text[1]));
			// alert(text[1]);
			autoFill(text[1]);
		}
	}
	obj2.onerror = function() {
		alert("Unexpcted ERROR");
	}
	obj2.send(null);
}

window.onload = regularMatch;

/*$("[color='green']").each(function(){
  	alert($(this).text())
  });*/
/*alert("NIT听力平台助手\n检测到您已经进入答题页面，开始匹配。");*/