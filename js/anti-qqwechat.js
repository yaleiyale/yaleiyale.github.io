(function () {
    if (isQW()) {
        window.location.href = "https://c.pc.qq.com/middle.html?pfurl=" + window.location.href;
    }
    function isQW() {
        var ua = navigator.userAgent;
        var isWechat = !!/MicroMessenger/i.test(ua);
        var isQQ = !!/QQ\//i.test(ua);
        if (isWechat || isQQ) {
            return true;
        }
        return false;
    }
})()