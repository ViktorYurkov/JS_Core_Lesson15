function showData(data) {
    alert(data);
}

//1
function onOffText() {
    if (text.style.display == "") {
        text.style.display = "none";
    } else {
        text.style.display = "";
    }

}

OnOffSelf.onclick = function () {
    OnOffSelf.style.opacity = 0;
    setTimeout(function () {
        for (var i = 1; i < 100; i++) {
            setTimeout(function () {
                OnOffSelf.style.opacity = i / 100;
            }, 1000);
        }

    }, 2000);
}
