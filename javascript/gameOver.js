var a = true;
var b = false;
var c = false;
var d = false;
var e = false;

function gagner() {
    document.location.href="gagner.html"
}

function perdu() {
    document.location.href="gameover.html"
}

function test() {
    if (a == true) {
        document.getElementById("bouton1").style.display = "none";
        document.getElementById("bouton2").removeAttribute("style")
        a = false;
        b = true;
        setTimeout('perdu()', 5000);
    } else if (b == true) {
        document.getElementById("bouton2").style.display = "none";
        document.getElementById("bouton3").removeAttribute("style")
        b = false;
        c = true;
        setTimeout('perdu()', 5000);
    } else if (c == true) {
        document.getElementById("bouton3").style.display = "none";
        document.getElementById("bouton4").removeAttribute("style");
        c = false;
        d = true;
        setTimeout('perdu()', 5000);
    } else if (d == true) {
        document.getElementById("bouton4").style.display = "none";
        document.getElementById("bouton5").removeAttribute("style");
        d = false;
        e = true;
        setTimeout('perdu()', 5000);
    } else if (e == true) {
        gagner();
    }
}