!function (e) {
    let flag = /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (flag) {
        var c = e.querySelector(".sidebar-toggle"),
            r = e.querySelector(".sidebar"),
            t = e.querySelector("#sidebar-checkbox");
        e.addEventListener("click", function (e) {
            var n = e.target;
            t.checked && !r.contains(n) && n !== t && n !== c && (t.checked = !1)
        }, !1)
    }
}(document);