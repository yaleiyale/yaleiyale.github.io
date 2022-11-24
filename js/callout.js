(function () {
    var tags = {
        '[!note]': '<i class="fa-solid fa-pencil"></i>',
        '[!abstract]': '<i class="fa-solid fa-clipboard-list"></i>',
        '[!summary]': '<i class="fa-solid fa-clipboard-list"></i>',
        '[!tldr]': '<i class="fa-solid fa-clipboard-list"></i>',
        '[!info]': '<i class="fa-solid fa-circle-info"></i>',
        '[!todo]': '<i class="fa-solid fa-circle-info"></i>',
        '[!tip]': '<i class="fa-solid fa-fire-flame-curved"></i>',
        '[!hint]': '<i class="fa-solid fa-fire-flame-curved"></i>',
        '[!important]': '<i class="fa-solid fa-fire-flame-curved"></i>',
        '[!success]': '<i class="fa-solid fa-check"></i>',
        '[!check]': '<i class="fa-solid fa-check"></i>',
        '[!done]': '<i class="fa-solid fa-check"></i>',
        '[!question]': '<i class="fa-regular fa-circle-question"></i>',
        '[!help]': '<i class="fa-regular fa-circle-question"></i>',
        '[!faq]': '<i class="fa-regular fa-circle-question"></i>',
        '[!warning]': '<i class="fa-solid fa-triangle-exclamation"></i>',
        '[!caution]': '<i class="fa-solid fa-triangle-exclamation"></i>',
        '[!attention]': '<i class="fa-solid fa-triangle-exclamation"></i>',
        '[!failure]': '<i class="fa-solid fa-xmark"></i>',
        '[!fail]': '<i class="fa-solid fa-xmark"></i>',
        '[!missing]': '<i class="fa-solid fa-xmark"></i>',
        '[!danger]': '<i class="fa-solid fa-bolt"></i>',
        '[!error]': '<i class="fa-solid fa-bolt"></i>',
        '[!bug]': '<i class="fa-solid fa-bug"></i>',
        '[!example]': '<i class="fa-solid fa-list-ul"></i>',
        '[!quote]': '<i class="fa-solid fa-quote-right"></i>',
        '[!cite]': '<i class="fa-solid fa-quote-right"></i>'
    };
    var blocklist = document.querySelectorAll("blockquote");
    var blockCount = blocklist.length;
    var blockNow;
    for (var i = 0; i < blockCount; i++) {
        blockNow = blocklist[i];
        var find = false;
        for (var key in tags) {
            if (blockNow.innerHTML.indexOf(key) != -1) {
                blockNow.innerHTML = blockNow.innerHTML.replace(key, tags[key]);
                blocklist[i].innerHTML = blockNow.innerHTML;
                find = true;
                break;
            }
        }
        if (!find) {
            blocklist[i].innerHTML = '<i class="fa-solid fa-quote-left"></i><br>' + blockNow.innerHTML;
        }
    }
})()