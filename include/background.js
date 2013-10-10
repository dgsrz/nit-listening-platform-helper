/**
 * @AppName Remove restrictions on NIT Language Learning Platform
 * @Creator dgsrz (dgsrz@vip.qq.com)
 * @Version 1.3.6
 */

chrome.extension.onConnect.addListener(function(port) {

    port.onMessage.addListener(function(obj) {
        var allowCopy = (localStorage["allowCopy"]) ? "false" : "true";
        var enableSubmitButton = (localStorage["enableSubmitButton"]) ? "false" : "true";
        var preferPlayerStyle = (localStorage["preferPlayerStyle"]) ? "false" : "true";
        var blockRetreiveRes = (localStorage["blockRetreiveRes"]) ? "true" : "false";
        if (obj.request) {
            port.postMessage({allowCopy: allowCopy, enableSubmitButton: enableSubmitButton,
             preferPlayerStyle: preferPlayerStyle, blockRetreiveRes: blockRetreiveRes});
        }
    });
    
});