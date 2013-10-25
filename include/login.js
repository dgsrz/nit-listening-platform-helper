/**
 * @AppName Remove restrictions on NIT Language Learning Platform
 * @Creator dgsrz (dgsrz@vip.qq.com)
 * @Version 1.3.6
 */


$("body").removeAttr("onload");

$(document).ready(function() {
    $("form").attr("action", "/jasinda/login/loginByEx.do");
    $("div.logn_a").append("<input name=\"j_param\" id=\"j_param\" " + 
        "type=\"text\" value=\"OB3FC20130702OBCD\" style=\"display: none\">");
});